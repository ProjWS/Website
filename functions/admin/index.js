// Area riservata su /admin.
//
// Chi ha una sessione valida vede il pannello; tutti gli altri vedono il
// modulo di accesso, che chiede l'email e manda un codice usa e getta.
// ⛔ Se la configurazione non c'e' (variabili d'ambiente mancanti) risponde
// la 404 del sito: meglio non esistere che esistere aperta.

import { verificaSessione, configurazioneCompleta } from '../../src/server/sessione.js';
import { paginaAdmin } from '../../src/server/admin-html.js';
import { paginaAccesso } from '../../src/server/login-html.js';

export async function onRequestGet(contesto) {
  const { request, env, next } = contesto;
  if (!configurazioneCompleta(env)) return next();

  const sessione = await verificaSessione(request, env);
  const pagina = sessione.ok ? paginaAdmin : paginaAccesso;
  return new Response(pagina, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
      'referrer-policy': 'no-referrer',
    },
  });
}
