# Sito web Mens Sana Formazione

Sito statico costruito con [Astro](https://astro.build): moderno, mobile-first,
velocissimo e senza database. Quattro pagine:

| Pagina | URL | Contenuto |
|--------|-----|-----------|
| Home | `/` | Hero, i due rami del business, metodo Before/During/After, valori |
| Formazione | `/formazione/` | Catalogo 12 corsi (aree A–E), aree su richiesta (F/G/H), consulenze |
| Digital | `/digital/` | Mens Sana Digital: servizi PMI + 3 pacchetti (Base 490€ / Pro 890€ / Completo 1.490€, "a partire da") |
| Contatti | `/contatti/` | Form (via formsubmit.co → info@mensanaformazione.com), dati societari |
| Schede corso | `/corsi/<slug>/` | 12 pagine, una per corso: descrizione, perché iscriversi, destinatari, programma ad accordion, corsi correlati |

## Comandi

```bash
npm install        # solo la prima volta
npm run dev        # anteprima locale su http://localhost:4321
npm run build      # genera il sito statico nella cartella dist/
npm run preview    # anteprima della build
```

## Dove si modifica cosa

- **Corsi, prezzi e schede complete** (descrizioni, programmi, destinatari) → `src/data/corsi.js` (unica fonte, le pagine si aggiornano da sole)
- **Link LinkedIn** → costante `LINKEDIN_URL` in fondo a `src/data/corsi.js`
- **Pacchetti PMI** → array `pacchetti` in `src/pages/digital.astro`
- **Contatti/orari** (header, footer, pagina contatti) → `src/layouts/Base.astro` e `src/pages/contatti.astro`
- **Colori e stile** → `src/styles/global.css` (variabili CSS in `:root`)
- **Logo** → `public/logo.png`

## Deploy (gratis)

Come per il sito Mojito: repo GitHub + Netlify.

1. Push della cartella `Website/` su un repo GitHub.
2. Su Netlify: "Import from Git", build command `npm run build`, publish directory `dist`.
3. Collegare il dominio `mensanaformazione.com` dal pannello Netlify (DNS).

## Note

- Il form contatti usa formsubmit.co: al **primo invio reale** arriverà a
  info@mensanaformazione.com una mail di conferma da approvare (una tantum).
- Sezione team volutamente assente: da aggiungere quando ci saranno nomi/foto.
- Verificato senza overflow orizzontale a 390px (iPhone) e menu mobile funzionante.
