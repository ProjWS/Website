// Chiude la sessione. Basta cancellare il cookie: non c'e' niente da tenere
// aperto dall'altra parte.

import { cookieScaduto, NOME_COOKIE_SESSIONE, NOME_COOKIE_SFIDA } from '../../src/server/sessione.js';

export async function onRequestPost() {
  const intestazioni = new Headers({
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  intestazioni.append('set-cookie', cookieScaduto(NOME_COOKIE_SESSIONE));
  intestazioni.append('set-cookie', cookieScaduto(NOME_COOKIE_SFIDA));
  return new Response(JSON.stringify({ ok: true }), { headers: intestazioni });
}
