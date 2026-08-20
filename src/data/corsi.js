// Catalogo corsi Mens Sana Formazione. Prezzi +IVA, formato videolezione + studio individuale.
// Contenuti e programmi ripresi dal sito storico mensanaformazione.com (lug 2026),
// riscritti e integrati con i riferimenti normativi piu recenti.
//
// ⛔ I DATI NON STANNO PIU' QUI: stanno in `catalogo.json`, in questa stessa
// cartella. Questo file resta come unico punto da cui le pagine leggono, cosi'
// gli import esistenti non cambiano.
// ⛔ `catalogo.json` e' scritto anche dall'area riservata (/admin): si modifica
// a mano solo sapendo cosa si fa, e mai mentre qualcuno sta usando il pannello.

import catalogo from './catalogo.json';

export const impostazioni = catalogo.impostazioni;

// Un corso con `pubblicato: false` sparisce dal sito: niente pagina, niente
// card, niente correlati. Non viene cancellato, resta nel file e si ripubblica
// rimettendo l'interruttore.
export const corsi = catalogo.corsi.filter((c) => c.pubblicato !== false);

// Il prezzo si vede solo se sono veri sia l'interruttore generale sia quello
// del singolo corso. Basta uno dei due spento e la pagina non lo mostra.
export function mostraPrezzo(corso) {
  return catalogo.impostazioni.mostraPrezzi !== false && corso.mostraPrezzo !== false;
}

// Aree con i rispettivi corsi (per pagina Formazione e home)
export const aree = Object.entries(catalogo.nomiAree).map(([sigla, nome]) => ({
  sigla,
  nome,
  corsi: corsi.filter((c) => c.area === sigla),
}));

// Aree a catalogo senza corsi online pubblicati: erogabili su richiesta.
export const areeSuRichiesta = catalogo.areeSuRichiesta;

export const consulenze = catalogo.consulenze;

export const LINKEDIN_URL = catalogo.LINKEDIN_URL;

// Profilo Instagram ripreso dal footer del vecchio sito mensanaformazione.com
// (verificato il 06/08/2026: è quello linkato dal sito ancora online).
// ⛔ Se la costante è vuota, l'icona NON compare da nessuna parte nel sito:
// nessun link rotto.
// ⛔ Facebook: il vecchio sito linka anche facebook.com/mensanaformazione,
// ma Nicola ha deciso il 06/08 di NON metterlo. Non riproporlo.
export const INSTAGRAM_URL = catalogo.INSTAGRAM_URL;
