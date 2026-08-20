// Passo 2 dell'accesso: arriva il codice, e se e' giusto si apre la sessione.

import { verificaCodice, configurazioneCompleta } from '../../src/server/sessione.js';

export async function onRequestPost({ request, env, next }) {
  if (!configurazioneCompleta(env)) return next();

  let corpo;
  try {
    corpo = await request.json();
  } catch {
    return new Response(JSON.stringify({ errore: 'Richiesta non leggibile' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const esito = await verificaCodice(request, corpo.codice, env);
  const intestazioni = new Headers({
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  if (esito.cookie) intestazioni.append('set-cookie', esito.cookie);
  if (esito.cookieDaCancellare) intestazioni.append('set-cookie', esito.cookieDaCancellare);

  return new Response(
    JSON.stringify(esito.ok ? { ok: true } : { errore: esito.motivo }),
    { status: esito.ok ? 200 : 401, headers: intestazioni },
  );
}
