// Pagina di accesso all'area riservata: si scrive l'email, arriva un codice.
// Niente librerie esterne, niente CDN: regola del sito, e qui varrebbe doppio.

export const paginaAccesso = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Accesso riservato · Mens Sana Formazione</title>
<style>
  :root { --rosso:#c8202f; --nero:#17181c; --grigio-700:#4a4d57; --grigio-500:#767a85;
          --grigio-300:#c9ccd3; --grigio-100:#e9ebef; --carta:#fafaf8; --bianco:#fff; --verde:#1f7a44; }
  * { box-sizing:border-box; }
  body { margin:0; min-height:100vh; display:grid; place-items:center; background:var(--carta);
         color:var(--nero); font:16px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding:1.5rem; }
  .scatola { width:min(26rem,100%); background:var(--bianco); border:1px solid var(--grigio-100);
             border-radius:16px; padding:2rem 1.8rem; box-shadow:0 16px 48px rgba(23,24,28,.08); }
  h1 { font-size:1.25rem; margin:0 0 .3rem; }
  p.sotto { margin:0 0 1.4rem; color:var(--grigio-500); font-size:.9rem; }
  label { display:block; font-weight:600; font-size:.85rem; margin-bottom:.3rem; }
  input { width:100%; padding:.7rem .8rem; border:1px solid var(--grigio-300); border-radius:9px; font:inherit; }
  input:focus { outline:2px solid var(--rosso); outline-offset:1px; border-color:var(--rosso); }
  input.codice { font-size:1.5rem; letter-spacing:.35em; text-align:center; font-variant-numeric:tabular-nums; }
  button { width:100%; margin-top:1rem; padding:.75rem 1rem; border:0; border-radius:999px;
           background:var(--rosso); color:#fff; font:inherit; font-weight:700; cursor:pointer; }
  button[disabled] { opacity:.55; cursor:default; }
  .messaggio { margin-top:1rem; font-size:.88rem; font-weight:600; }
  .messaggio--ok { color:var(--verde); }
  .messaggio--errore { color:var(--rosso); }
  .nota { margin-top:1.3rem; font-size:.8rem; color:var(--grigio-500); line-height:1.5; }
  .torna { background:none; border:0; color:var(--grigio-700); font:inherit; font-size:.85rem;
           text-decoration:underline; cursor:pointer; padding:0; margin-top:.9rem; width:auto; }
  .nascondi { display:none; }
</style>
</head>
<body>
<div class="scatola">
  <h1>Area riservata</h1>
  <p class="sotto" id="sotto">Scrivi il tuo indirizzo email: ti mandiamo un codice per entrare.</p>

  <form id="modulo-email">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required autocomplete="email" autofocus />
    <button type="submit" id="invia">Mandami il codice</button>
  </form>

  <form id="modulo-codice" class="nascondi">
    <label for="codice">Codice ricevuto per email</label>
    <input type="text" id="codice" class="codice" inputmode="numeric" autocomplete="one-time-code"
           maxlength="9" placeholder="1234 5678" />
    <button type="submit" id="entra">Entra</button>
    <button type="button" class="torna" id="torna">Usa un altro indirizzo</button>
  </form>

  <p class="messaggio" id="messaggio"></p>
  <p class="nota">Il codice vale dieci minuti e una volta sola. Se non arriva, controlla la posta indesiderata.</p>
</div>

<script>
(function () {
  var moduloEmail = document.getElementById('modulo-email');
  var moduloCodice = document.getElementById('modulo-codice');
  var messaggio = document.getElementById('messaggio');
  var sotto = document.getElementById('sotto');

  function dici(testo, tipo) {
    messaggio.textContent = testo;
    messaggio.className = 'messaggio' + (tipo ? ' messaggio--' + tipo : '');
  }

  moduloEmail.addEventListener('submit', function (e) {
    e.preventDefault();
    var bottone = document.getElementById('invia');
    bottone.disabled = true;
    dici('Mando il codice…');
    fetch('/admin/codice', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: document.getElementById('email').value }),
    }).then(function (r) { return r.json(); }).then(function (j) {
      bottone.disabled = false;
      if (j.errore) { dici(j.errore, 'errore'); return; }
      moduloEmail.classList.add('nascondi');
      moduloCodice.classList.remove('nascondi');
      sotto.textContent = 'Se quell\\'indirizzo e\\' autorizzato, il codice e\\' partito.';
      dici('');
      document.getElementById('codice').focus();
    }).catch(function () {
      bottone.disabled = false;
      dici('Non sono riuscito a contattare il server. Riprova.', 'errore');
    });
  });

  moduloCodice.addEventListener('submit', function (e) {
    e.preventDefault();
    var bottone = document.getElementById('entra');
    bottone.disabled = true;
    dici('Controllo…');
    fetch('/admin/entra', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ codice: document.getElementById('codice').value }),
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (j.ok) { dici('Entrato. Un attimo…', 'ok'); window.location.reload(); return; }
      bottone.disabled = false;
      dici(j.errore || 'Codice sbagliato', 'errore');
    }).catch(function () {
      bottone.disabled = false;
      dici('Non sono riuscito a contattare il server. Riprova.', 'errore');
    });
  });

  document.getElementById('torna').addEventListener('click', function () {
    moduloCodice.classList.add('nascondi');
    moduloEmail.classList.remove('nascondi');
    sotto.textContent = 'Scrivi il tuo indirizzo email: ti mandiamo un codice per entrare.';
    dici('');
  });
})();
</script>
</body>
</html>`;
