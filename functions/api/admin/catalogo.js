// API dell'area riservata: legge e riscrive il catalogo corsi.
//
// COME FUNZIONA, in breve. Il sito e' statico: le pagine dei corsi vengono
// generate quando il sito si pubblica, non quando qualcuno le apre. Quindi il
// pannello non "modifica il sito dal vivo": salva il file `catalogo.json`
// nel repository, e Cloudflare Pages, che sta in ascolto sul repository,
// ricostruisce e rimette online tutto da solo. Un minuto circa.
//
// ⛔ Il vantaggio, ed e' il motivo per cui e' stata scelta questa strada:
// ogni salvataggio e' un commit. Si vede chi ha cambiato cosa e quando, e
// qualunque errore si annulla tornando alla versione precedente. Niente e'
// mai perso davvero.
//
// Variabili d'ambiente (Cloudflare Pages > Settings > Variables and secrets,
// ambiente Production). Senza queste, la funzione rifiuta tutto:
//
//   ADMIN_EMAILS        chi puo' entrare (vedi src/server/sessione.js)
//   SESSION_SECRET      Secret, firma codici e sessioni
//   GITHUB_TOKEN        token GitHub "fine-grained", SOLO su ProjWS/Website,
//                       permesso "Contents: Read and write". Da salvare come
//                       Secret, mai come variabile in chiaro.

import { verificaSessione, configurazioneCompleta } from '../../../src/server/sessione.js';

const REPO = 'ProjWS/Website';
const PERCORSO = 'src/data/catalogo.json';
const RAMO = 'main';

const risposta = (dati, stato = 200) =>
  new Response(JSON.stringify(dati), {
    status: stato,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

function intestazioniGitHub(env) {
  return {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'mensana-area-riservata',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

// ⛔ Controllo di forma prima di scrivere. Il catalogo alimenta la
// generazione del sito: un dato sbagliato qui non rompe una pagina, blocca
// la pubblicazione di tutto il sito. Meglio rifiutare il salvataggio e dirlo.
export function controlla(dati) {
  const errori = [];
  if (!dati || typeof dati !== 'object') return ['Il contenuto inviato non e\' leggibile'];

  if (!dati.impostazioni || typeof dati.impostazioni.mostraPrezzi !== 'boolean') {
    errori.push('Manca l\'impostazione generale sui prezzi');
  }
  if (!dati.nomiAree || typeof dati.nomiAree !== 'object') errori.push('Mancano le aree');
  if (!Array.isArray(dati.corsi)) errori.push('Manca l\'elenco dei corsi');
  if (!Array.isArray(dati.consulenze)) errori.push('Manca l\'elenco delle consulenze');
  if (!Array.isArray(dati.areeSuRichiesta)) errori.push('Mancano le aree su richiesta');
  if (errori.length) return errori;

  const slugVisti = new Set();
  dati.corsi.forEach((corso, i) => {
    const dove = `Corso ${i + 1}${corso && corso.cod ? ' (' + corso.cod + ')' : ''}`;
    if (!corso || typeof corso !== 'object') {
      errori.push(`${dove}: dati non leggibili`);
      return;
    }
    if (!corso.titolo || !String(corso.titolo).trim()) errori.push(`${dove}: manca il titolo`);
    if (!corso.cod || !String(corso.cod).trim()) errori.push(`${dove}: manca il codice`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(corso.slug || ''))) {
      errori.push(`${dove}: l'indirizzo della pagina puo' contenere solo lettere minuscole, numeri e trattini`);
    }
    if (slugVisti.has(corso.slug)) errori.push(`${dove}: l'indirizzo "${corso.slug}" e' gia' usato da un altro corso`);
    slugVisti.add(corso.slug);
    if (!Object.prototype.hasOwnProperty.call(dati.nomiAree, corso.area)) {
      errori.push(`${dove}: l'area "${corso.area}" non esiste`);
    }
    if (typeof corso.prezzo !== 'number' || !Number.isFinite(corso.prezzo) || corso.prezzo < 0) {
      errori.push(`${dove}: il prezzo deve essere un numero`);
    }
    ['descrizione', 'destinatari', 'perche', 'programma'].forEach((campo) => {
      if (corso[campo] !== undefined && !Array.isArray(corso[campo])) {
        errori.push(`${dove}: il campo "${campo}" e' scritto male`);
      }
    });
  });

  if (dati.corsi.filter((c) => c.pubblicato !== false).length === 0) {
    errori.push('Non puoi nascondere tutti i corsi: il sito resterebbe senza catalogo');
  }
  return errori;
}

async function leggiDaGitHub(env) {
  const url = `https://api.github.com/repos/${REPO}/contents/${PERCORSO}?ref=${RAMO}`;
  const r = await fetch(url, { headers: intestazioniGitHub(env) });
  if (!r.ok) throw new Error(`GitHub ha risposto ${r.status} leggendo il catalogo`);
  const meta = await r.json();
  const testo = new TextDecoder().decode(
    Uint8Array.from(atob(meta.content.replace(/\n/g, '')), (c) => c.charCodeAt(0)),
  );
  return { dati: JSON.parse(testo), sha: meta.sha };
}

export async function onRequestGet({ request, env, next }) {
  // ⛔ Se l'area non e' configurata, questa API deve rispondere come /admin:
  // la 404 del sito. Una risposta diversa direbbe a un estraneo che qui c'e'
  // un'area riservata, solo spenta.
  if (!configurazioneCompleta(env)) return next();
  const accesso = await verificaSessione(request, env);
  if (!accesso.ok) return risposta({ errore: accesso.motivo }, 403);
  if (!env.GITHUB_TOKEN) return risposta({ errore: 'Collegamento a GitHub non configurato' }, 500);

  try {
    const { dati, sha } = await leggiDaGitHub(env);
    return risposta({ dati, sha, email: accesso.email });
  } catch (e) {
    return risposta({ errore: String(e.message || e) }, 502);
  }
}

export async function onRequestPut({ request, env, next }) {
  if (!configurazioneCompleta(env)) return next();
  const accesso = await verificaSessione(request, env);
  if (!accesso.ok) return risposta({ errore: accesso.motivo }, 403);
  if (!env.GITHUB_TOKEN) return risposta({ errore: 'Collegamento a GitHub non configurato' }, 500);

  let corpo;
  try {
    corpo = await request.json();
  } catch {
    return risposta({ errore: 'Richiesta non leggibile' }, 400);
  }

  const errori = controlla(corpo.dati);
  if (errori.length) return risposta({ errore: 'Controlla questi punti', dettagli: errori }, 400);

  // ⛔ `sha` e' la versione da cui e' partita la modifica. Se nel frattempo
  // qualcun altro ha salvato, GitHub rifiuta invece di sovrascrivere il suo
  // lavoro: e' la rete di protezione contro due persone che modificano insieme.
  if (!corpo.sha) return risposta({ errore: 'Ricarica la pagina prima di salvare' }, 409);

  const testo = JSON.stringify(corpo.dati, null, 2) + '\n';
  const contenuto = btoa(String.fromCharCode(...new TextEncoder().encode(testo)));

  const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${PERCORSO}`, {
    method: 'PUT',
    headers: { ...intestazioniGitHub(env), 'content-type': 'application/json' },
    body: JSON.stringify({
      message: `Catalogo aggiornato dall'area riservata (${accesso.email})`,
      content: contenuto,
      sha: corpo.sha,
      branch: RAMO,
    }),
  });

  if (r.status === 409 || r.status === 422) {
    return risposta(
      { errore: 'Il catalogo e\' cambiato nel frattempo. Ricarica la pagina e rifai la modifica.' },
      409,
    );
  }
  if (!r.ok) {
    return risposta({ errore: `GitHub ha risposto ${r.status} salvando il catalogo` }, 502);
  }

  const esito = await r.json();
  return risposta({ ok: true, sha: esito.content.sha });
}
