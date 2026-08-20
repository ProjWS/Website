// Passo 1 dell'accesso: qualcuno chiede il codice per la propria email.
//
// ⛔ La risposta e' sempre la stessa, autorizzato o no. Dire "questo indirizzo
// non e' abilitato" regalerebbe a un estraneo il modo di scoprire chi ha le
// chiavi, un tentativo alla volta.

import { inviaCodice, configurazioneCompleta } from '../../src/server/sessione.js';

const risposta = (dati, stato = 200, cookie) =>
  new Response(JSON.stringify(dati), {
    status: stato,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(cookie ? { 'set-cookie': cookie } : {}),
    },
  });

export async function onRequestPost({ request, env, next }) {
  if (!configurazioneCompleta(env)) return next();

  let corpo;
  try {
    corpo = await request.json();
  } catch {
    return risposta({ errore: 'Richiesta non leggibile' }, 400);
  }

  const esito = await inviaCodice(corpo.email, env);
  if (esito.erroreInvio) {
    return risposta({ errore: 'Non sono riuscito a mandare l\'email. Riprova fra poco.' }, 502);
  }
  // Anche quando non e' stato inviato niente: stessa risposta, stesso tempo.
  return risposta({ ok: true }, 200, esito.cookie);
}
