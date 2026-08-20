// Serve la pagina dell'area riservata su /admin.
//
// ⛔ La pagina NON e' un file statico del sito: e' generata qui, e solo dopo
// aver verificato il token di Cloudflare Access. A chi non e' autorizzato
// /admin risponde 404, cioe' "questa pagina non esiste": non si mostra
// nemmeno che ci sia un'area riservata.

import { verificaAccesso } from '../../src/server/access.js';
import { paginaAdmin } from '../../src/server/admin-html.js';

export async function onRequestGet(contesto) {
  const { request, env, next } = contesto;
  const accesso = await verificaAccesso(request, env);
  if (!accesso.ok) {
    // ⛔ Non una 404 qualsiasi: si lascia rispondere il sito, che serve la
    // SUA pagina "Pagina non trovata". Una 404 diversa dalle altre sarebbe
    // gia' un indizio che a quell'indirizzo c'e' qualcosa.
    return next();
  }
  return new Response(paginaAdmin, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}
