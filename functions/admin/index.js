// Serve la pagina dell'area riservata su /admin.
//
// ⛔ La pagina NON e' un file statico del sito: e' generata qui, e solo dopo
// aver verificato il token di Cloudflare Access. A chi non e' autorizzato
// /admin risponde 404, cioe' "questa pagina non esiste": non si mostra
// nemmeno che ci sia un'area riservata.

import { verificaAccesso } from '../../src/server/access.js';
import { paginaAdmin } from '../../src/server/admin-html.js';

export async function onRequestGet({ request, env }) {
  const accesso = await verificaAccesso(request, env);
  if (!accesso.ok) {
    return new Response('Not found', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }
  return new Response(paginaAdmin, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}
