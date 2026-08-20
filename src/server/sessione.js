// Chi puo' entrare nell'area riservata, e come.
//
// Non c'e' nessuna password. Chi vuole entrare scrive la propria email:
// se e' fra quelle autorizzate riceve un **codice usa e getta** valido dieci
// minuti, e con quello entra per otto ore.
//
// ⛔ Perche' cosi' e non con utente e password: `ProjWS/Website` e' un
// repository PUBBLICO. Una password nel codice sarebbe pubblicata, non
// nascosta. Qui nel codice non c'e' nessun segreto: le uniche cose segrete
// stanno nelle variabili d'ambiente di Cloudflare, che non finiscono su
// GitHub.
//
// Variabili d'ambiente (Cloudflare Pages > Settings > Variables and secrets,
// ambiente Production). ⛔ Se ne manca una, l'area rifiuta tutti:
//
//   ADMIN_EMAILS    elenco di email autorizzate, separate da virgola.
//                   Variabile normale, non e' un segreto.
//   SESSION_SECRET  Secret. Una stringa lunga e casuale, serve a firmare i
//                   codici e le sessioni. Si genera da terminale con
//                   `openssl rand -base64 32` e si incolla nel pannello.
//                   ⛔ Cambiarla scollega tutte le sessioni aperte: e' anche
//                   il modo per buttare fuori tutti in un secondo.
//   BREVO_API_KEY   gia' presente: e' la stessa che manda il modulo contatti.

const DURATA_CODICE = 10 * 60; // secondi
const DURATA_SESSIONE = 8 * 60 * 60; // secondi
const TENTATIVI_MAX = 5;

const COOKIE_SFIDA = 'msf_sfida';
const COOKIE_SESSIONE = 'msf_sessione';

const MITTENTE = { name: 'Mens Sana Formazione', email: 'info@mensanaformazione.com' };

const codificatore = new TextEncoder();

function base64url(byte) {
  let binario = '';
  byte.forEach((b) => { binario += String.fromCharCode(b); });
  return btoa(binario).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function daBase64url(testo) {
  const base64 = testo.replace(/-/g, '+').replace(/_/g, '/');
  const binario = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4));
  const byte = new Uint8Array(binario.length);
  for (let i = 0; i < binario.length; i += 1) byte[i] = binario.charCodeAt(i);
  return byte;
}

async function firma(testo, segreto) {
  const chiave = await crypto.subtle.importKey(
    'raw', codificatore.encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  return base64url(new Uint8Array(await crypto.subtle.sign('HMAC', chiave, codificatore.encode(testo))));
}

// ⛔ Confronto a tempo costante: uscire al primo carattere diverso fa trapelare,
// dal tempo di risposta, quanti caratteri erano giusti.
function ugualiATempoCostante(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let differenza = 0;
  for (let i = 0; i < a.length; i += 1) differenza |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return differenza === 0;
}

async function incarta(contenuto, segreto) {
  const payload = base64url(codificatore.encode(JSON.stringify(contenuto)));
  return `${payload}.${await firma(payload, segreto)}`;
}

async function scarta(pacchetto, segreto) {
  if (!pacchetto || typeof pacchetto !== 'string') return null;
  const pezzi = pacchetto.split('.');
  if (pezzi.length !== 2) return null;
  if (!ugualiATempoCostante(pezzi[1], await firma(pezzi[0], segreto))) return null;
  try {
    const contenuto = JSON.parse(new TextDecoder().decode(daBase64url(pezzi[0])));
    if (typeof contenuto.exp !== 'number' || contenuto.exp < Math.floor(Date.now() / 1000)) return null;
    return contenuto;
  } catch {
    return null;
  }
}

export function leggiCookie(request, nome) {
  const cookie = request.headers.get('Cookie') || '';
  const trovato = cookie.match(new RegExp('(?:^|;\\s*)' + nome + '=([^;]+)'));
  return trovato ? decodeURIComponent(trovato[1]) : null;
}

function cookie(nome, valore, durata) {
  const parti = [
    `${nome}=${encodeURIComponent(valore)}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Strict',
    `Max-Age=${durata}`,
  ];
  return parti.join('; ');
}

export function cookieScaduto(nome) {
  return `${nome}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export const NOME_COOKIE_SFIDA = COOKIE_SFIDA;
export const NOME_COOKIE_SESSIONE = COOKIE_SESSIONE;

export function configurazioneCompleta(env) {
  return Boolean(env.SESSION_SECRET && env.ADMIN_EMAILS && env.BREVO_API_KEY);
}

export function emailAutorizzate(env) {
  return (env.ADMIN_EMAILS || '')
    .split(',')
    .map((voce) => voce.trim().toLowerCase())
    .filter(Boolean);
}

// Un codice di otto cifre, tirato a sorte con il generatore crittografico.
// ⛔ Non `Math.random()`: e' prevedibile, e qui aprirebbe la porta.
function generaCodice() {
  const byte = new Uint32Array(2);
  crypto.getRandomValues(byte);
  const numero = (byte[0] % 10000) * 10000 + (byte[1] % 10000);
  return String(numero).padStart(8, '0');
}

function soloCifre(testo) {
  return String(testo || '').replace(/\D/g, '');
}

// Passo 1: qualcuno chiede di entrare. Se l'email e' autorizzata parte il
// codice; se non lo e', non parte niente. ⛔ La risposta al browser e' identica
// nei due casi: dire "questa email non e' autorizzata" servirebbe solo a far
// indovinare a un estraneo chi ha le chiavi.
export async function inviaCodice(email, env) {
  const pulita = String(email || '').trim().toLowerCase();
  if (!emailAutorizzate(env).includes(pulita)) return { inviato: false };

  const codice = generaCodice();
  const exp = Math.floor(Date.now() / 1000) + DURATA_CODICE;
  const impronta = await firma(`${pulita}.${codice}.${exp}`, env.SESSION_SECRET);
  const sfida = await incarta({ email: pulita, exp, impronta, tentativi: 0 }, env.SESSION_SECRET);

  const testo = [
    'Ciao,',
    '',
    'ecco il codice per entrare nell\'area riservata del sito Mens Sana Formazione:',
    '',
    `    ${codice.slice(0, 4)} ${codice.slice(4)}`,
    '',
    'Vale dieci minuti e una volta sola.',
    '',
    'Se non hai chiesto tu di entrare, non devi fare niente: senza questo codice',
    'non entra nessuno. Ma avvisa Nicola, perche\' vuol dire che qualcuno ci ha provato.',
  ].join('\n');

  const risposta = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      sender: MITTENTE,
      to: [{ email: pulita }],
      subject: `Codice di accesso: ${codice.slice(0, 4)} ${codice.slice(4)}`,
      textContent: testo,
    }),
  });
  if (!risposta.ok) return { inviato: false, erroreInvio: true };

  return { inviato: true, cookie: cookie(COOKIE_SFIDA, sfida, DURATA_CODICE) };
}

// Passo 2: arriva il codice. Se corrisponde, si apre la sessione.
export async function verificaCodice(request, codiceScritto, env) {
  const sfida = await scarta(leggiCookie(request, COOKIE_SFIDA), env.SESSION_SECRET);
  if (!sfida) return { ok: false, motivo: 'Il codice e\' scaduto. Chiedine un altro.' };

  if (sfida.tentativi >= TENTATIVI_MAX) {
    return { ok: false, motivo: 'Troppi tentativi. Chiedi un codice nuovo.', bruciata: true };
  }

  const codice = soloCifre(codiceScritto);
  const impronta = await firma(`${sfida.email}.${codice}.${sfida.exp}`, env.SESSION_SECRET);
  if (!ugualiATempoCostante(impronta, sfida.impronta)) {
    const rimasti = TENTATIVI_MAX - sfida.tentativi - 1;
    const nuova = await incarta({ ...sfida, tentativi: sfida.tentativi + 1 }, env.SESSION_SECRET);
    return {
      ok: false,
      motivo: rimasti > 0 ? `Codice sbagliato. Puoi riprovare ancora ${rimasti} volte.` : 'Codice sbagliato. Chiedi un codice nuovo.',
      cookie: cookie(COOKIE_SFIDA, nuova, DURATA_CODICE),
    };
  }

  const exp = Math.floor(Date.now() / 1000) + DURATA_SESSIONE;
  const sessione = await incarta({ email: sfida.email, exp }, env.SESSION_SECRET);
  return {
    ok: true,
    email: sfida.email,
    cookie: cookie(COOKIE_SESSIONE, sessione, DURATA_SESSIONE),
    cookieDaCancellare: cookieScaduto(COOKIE_SFIDA),
  };
}

// Usata da tutte le pagine e le API dell'area riservata.
export async function verificaSessione(request, env) {
  if (!configurazioneCompleta(env)) {
    return { ok: false, motivo: 'Area riservata non ancora configurata' };
  }
  const sessione = await scarta(leggiCookie(request, COOKIE_SESSIONE), env.SESSION_SECRET);
  if (!sessione) return { ok: false, motivo: 'Sessione assente o scaduta' };
  // ⛔ Ricontrollato ogni volta: se un'email viene tolta da ADMIN_EMAILS, la
  // sua sessione gia' aperta smette di funzionare subito.
  if (!emailAutorizzate(env).includes(sessione.email)) {
    return { ok: false, motivo: 'Indirizzo non piu\' autorizzato' };
  }
  return { ok: true, email: sessione.email };
}
