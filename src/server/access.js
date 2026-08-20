// Controllo dell'identita' per l'area riservata (/admin).
//
// Chi entra non ha una password su questo sito: davanti a /admin sta
// **Cloudflare Access**, che chiede l'email, manda un codice a sei cifre e
// solo dopo lascia passare la richiesta. Cloudflare aggiunge allora
// l'intestazione `Cf-Access-Jwt-Assertion`, un token firmato.
//
// ⛔ Qui il token viene RIVERIFICATO, non creduto sulla parola. Serve perche'
// un'intestazione, da sola, chiunque puo' scriversela: se un giorno la regola
// di Access venisse tolta o scritta male, senza questo controllo l'area
// resterebbe aperta al mondo.
//
// ⛔ Se mancano le due variabili d'ambiente qui sotto, TUTTO viene rifiutato.
// E' voluto: meglio un'area che non funziona di un'area senza serratura.
//
//   ACCESS_TEAM_DOMAIN   es. "mensana.cloudflareaccess.com"
//   ACCESS_AUD           il tag "Application Audience (AUD)" dell'applicazione
//                        Access, si copia dal pannello Zero Trust.

function daBase64Url(testo) {
  const base64 = testo.replace(/-/g, '+').replace(/_/g, '/');
  const riempito = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  const binario = atob(riempito);
  const byte = new Uint8Array(binario.length);
  for (let i = 0; i < binario.length; i += 1) byte[i] = binario.charCodeAt(i);
  return byte;
}

function jsonDaBase64Url(testo) {
  return JSON.parse(new TextDecoder().decode(daBase64Url(testo)));
}

function tokenDallaRichiesta(request) {
  const intestazione = request.headers.get('Cf-Access-Jwt-Assertion');
  if (intestazione) return intestazione;
  // Quando la pagina si apre nel browser il token puo' arrivare come cookie.
  const cookie = request.headers.get('Cookie') || '';
  const trovato = cookie.match(/(?:^|;\s*)CF_Authorization=([^;]+)/);
  return trovato ? trovato[1] : null;
}

export async function verificaAccesso(request, env) {
  const team = env.ACCESS_TEAM_DOMAIN;
  const aud = env.ACCESS_AUD;
  if (!team || !aud) {
    return { ok: false, motivo: 'Area riservata non ancora configurata' };
  }

  const token = tokenDallaRichiesta(request);
  if (!token) return { ok: false, motivo: 'Accesso non autenticato' };

  const pezzi = token.split('.');
  if (pezzi.length !== 3) return { ok: false, motivo: 'Token malformato' };

  let intestazione;
  let corpo;
  try {
    intestazione = jsonDaBase64Url(pezzi[0]);
    corpo = jsonDaBase64Url(pezzi[1]);
  } catch {
    return { ok: false, motivo: 'Token illeggibile' };
  }

  const adesso = Math.floor(Date.now() / 1000);
  if (typeof corpo.exp !== 'number' || corpo.exp < adesso) {
    return { ok: false, motivo: 'Sessione scaduta, ricarica la pagina' };
  }
  if (corpo.iss !== `https://${team}`) {
    return { ok: false, motivo: 'Token emesso da un altro dominio' };
  }
  const destinatari = Array.isArray(corpo.aud) ? corpo.aud : [corpo.aud];
  if (!destinatari.includes(aud)) {
    return { ok: false, motivo: 'Token buono per un\'altra applicazione' };
  }

  let chiavi;
  try {
    const risposta = await fetch(`https://${team}/cdn-cgi/access/certs`, {
      cf: { cacheTtl: 900, cacheEverything: true },
    });
    if (!risposta.ok) throw new Error('certs ' + risposta.status);
    chiavi = await risposta.json();
  } catch {
    return { ok: false, motivo: 'Chiavi di firma non raggiungibili' };
  }

  const jwk = (chiavi.keys || []).find((k) => k.kid === intestazione.kid);
  if (!jwk) return { ok: false, motivo: 'Chiave di firma sconosciuta' };

  let chiave;
  try {
    chiave = await crypto.subtle.importKey(
      'jwk',
      { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: 'RS256', ext: true },
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify'],
    );
  } catch {
    return { ok: false, motivo: 'Chiave di firma non utilizzabile' };
  }

  const firmaValida = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    chiave,
    daBase64Url(pezzi[2]),
    new TextEncoder().encode(`${pezzi[0]}.${pezzi[1]}`),
  );
  if (!firmaValida) return { ok: false, motivo: 'Firma non valida' };

  return { ok: true, email: corpo.email || 'sconosciuta' };
}
