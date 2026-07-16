// Funzione Cloudflare Pages: riceve il modulo contatti e lo inoltra via
// email a info@mensanaformazione.com usando Brevo (provider UE).
// Richiede la variabile d'ambiente BREVO_API_KEY impostata nel progetto
// Cloudflare Pages (Settings > Environment variables) e un mittente
// verificato su Brevo (info@mensanaformazione.com).
// Nessun dato viene salvato: il messaggio transita e basta.

const DESTINATARIO = 'info@mensanaformazione.com';
const MITTENTE = { name: 'Sito Mens Sana Formazione', email: 'info@mensanaformazione.com' };

export async function onRequestPost({ request, env }) {
  const tornaAlForm = (esito) =>
    Response.redirect(new URL(`/contatti/?${esito}=1`, request.url).toString(), 303);

  let form;
  try {
    form = await request.formData();
  } catch {
    return tornaAlForm('errore');
  }

  // Honeypot antispam: il campo "azienda" è invisibile agli umani.
  // Se è compilato, è un bot: fingiamo che sia andato tutto bene.
  if ((form.get('azienda') || '').toString().trim() !== '') {
    return tornaAlForm('inviato');
  }

  const campo = (nome, max = 500) =>
    (form.get(nome) || '').toString().trim().slice(0, max);

  const nome = campo('nome', 120);
  const email = campo('email', 200);
  const telefono = campo('telefono', 40);
  const interesse = campo('interesse', 120);
  const messaggio = campo('messaggio', 4000);
  const privacy = campo('privacy', 5);

  const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if (!nome || !emailValida || !messaggio || privacy !== 'si') {
    return tornaAlForm('errore');
  }

  if (!env.BREVO_API_KEY) {
    return tornaAlForm('errore');
  }

  const testo = [
    'Nuova richiesta dal sito mensanaformazione.com',
    '',
    `Nome: ${nome}`,
    `Email: ${email}`,
    `Telefono: ${telefono || 'non indicato'}`,
    `Interesse: ${interesse || 'non indicato'}`,
    '',
    'Messaggio:',
    messaggio,
    '',
    'Consenso privacy: prestato (checkbox informativa art. 13 GDPR).',
  ].join('\n');

  try {
    const risposta = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: MITTENTE,
        to: [{ email: DESTINATARIO }],
        replyTo: { email, name: nome },
        subject: `Nuova richiesta dal sito: ${interesse || 'contatto'}`,
        textContent: testo,
      }),
    });
    if (!risposta.ok) return tornaAlForm('errore');
  } catch {
    return tornaAlForm('errore');
  }

  return tornaAlForm('inviato');
}
