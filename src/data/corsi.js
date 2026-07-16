// Catalogo corsi Mens Sana Formazione. Prezzi +IVA, formato videolezione + studio individuale.
// Contenuti e programmi ripresi dal sito storico mensanaformazione.com (lug 2026),
// riscritti e integrati con i riferimenti normativi piu recenti.
// Unica fonte dati: le pagine si generano da qui.

export const corsi = [
  // ========== AREA A · DIRITTO SOCIETARIO ==========
  {
    cod: 'A1',
    slug: 'a1-organi-societari-e-modelli-organizzativi',
    area: 'A',
    areaNome: 'Diritto Societario',
    titolo: 'Organi Societari e Modelli Organizzativi',
    sottotitolo:
      'Dalla governance societaria ai Modelli 231: come sono fatte le società, chi le governa e come si costruisce un presidio organizzativo che regge.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      'Il corso attraversa la materia societaria dalla base (impresa, azienda, ditta) fino ai gruppi, alle operazioni straordinarie e alle procedure concorsuali, con un confronto costante con la giurisprudenza più aggiornata e la prassi legislativa.',
      'La seconda parte entra nel cuore della responsabilità amministrativa degli enti: Modelli Organizzativi ex D.Lgs. 231/2001, Codice Etico, deleghe di funzioni, Organismo di Vigilanza e policy aziendali. Durante il corso vengono simulate negoziazioni su clausole e patti, con possibilità di lavorare sulla redazione di documenti societari reali.',
    ],
    perche: [
      {
        titolo: 'Gli assetti adeguati non sono più facoltativi',
        testo:
          "L'art. 2086 c.c., riscritto dal Codice della crisi d'impresa, impone a ogni società assetti organizzativi, amministrativi e contabili adeguati. Gli amministratori che non li predispongono rispondono personalmente: conoscere la materia è una forma di autodifesa.",
      },
      {
        titolo: 'Il Modello 231 è la principale esimente per l\'ente',
        testo:
          'Un Modello Organizzativo costruito bene può escludere la responsabilità della società per i reati commessi da apicali e dipendenti. La giurisprudenza però è severa: i modelli fotocopia non superano il vaglio del giudice.',
      },
      {
        titolo: 'Il quadro si aggiorna di continuo',
        testo:
          'Whistleblowing (D.Lgs. 24/2023), nuovi reati presupposto, indicazioni ANAC: chi si occupa di governance deve mantenere il Modello vivo, non archiviato in un cassetto.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali',
      'Imprenditori e liberi professionisti',
      'Quadri e dirigenti, membri di OdV',
    ],
    programma: [
      {
        sezione: "L'impresa e l'imprenditore",
        voci: [
          "L'impresa, l'azienda e la ditta",
          "Lo statuto dell'imprenditore in generale",
          "Lo statuto dell'imprenditore commerciale",
          "Il fenomeno dell'impresa collettiva",
        ],
      },
      {
        sezione: 'Le società, dal contratto ai gruppi',
        voci: [
          'Le società di persone',
          'Le società di capitali',
          'La società cooperativa',
          'Il bilancio, i libri, i registri sociali e le altre scritture contabili',
          'I gruppi di società, R.T.I. e A.T.I.',
          'Trasformazioni, fusioni e scissioni societarie',
          'Le procedure concorsuali',
        ],
      },
      {
        sezione: 'Modelli Organizzativi e presidio 231',
        voci: [
          'I Modelli Organizzativi ex D.Lgs. 231/2001',
          'Il Codice Etico',
          'Le deleghe di funzioni',
          "L'Organismo di Vigilanza",
          'Le policy aziendali',
        ],
      },
    ],
    plus: 'Simulazioni di negoziazione su clausole e patti societari, con discussione della redazione di documenti societari e Modelli Organizzativi.',
  },

  // ========== AREA B · ORGANISMI DI CONTROLLO ==========
  {
    cod: 'B1',
    slug: 'b1-internal-auditing',
    area: 'B',
    areaNome: 'Organismi di Controllo',
    titolo: 'La Funzione di Internal Auditing',
    sottotitolo:
      'Il terzo livello di controllo visto da dentro: dal quadro normativo al piano di audit, dal risk assessment al follow-up dei findings.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      "Il corso esamina la funzione di internal auditing partendo dalla governance aziendale e dal Sistema di Controllo Interno, per poi scendere nel concreto: quadro normativo nazionale e internazionale, ruolo dell'audit negli intermediari finanziari bancari e non, i tre livelli di presidio dei rischi.",
      "La parte operativa segue l'intero ciclo di un intervento di audit: pianificazione pluriennale e annuale, svolgimento dell'incarico, testing e campionamento, comunicazione dei risultati, monitoraggio delle criticità e attività di follow-up, fino alle diverse tipologie di audit (conformità, financial, operating, fraud, ICT).",
    ],
    perche: [
      {
        titolo: 'È la funzione che i regolatori pretendono',
        testo:
          'Per banche e intermediari finanziari la funzione di internal audit è un requisito di vigilanza, non una scelta. Ma anche le imprese non vigilate la stanno adottando: è il presidio che tiene insieme controlli, rischi e strategia.',
      },
      {
        titolo: 'Un profilo professionale molto richiesto',
        testo:
          "Auditor interni ed esperti di controlli sono tra le figure più cercate nelle funzioni corporate. Padroneggiare CoSO, ERM e il processo di audit apre percorsi in aziende, gruppi bancari e società di consulenza.",
      },
      {
        titolo: 'Dal riciclaggio al SOX, una sola cassetta degli attrezzi',
        testo:
          'Il corso collega le fonti che un auditor incontra davvero: D.Lgs. 231/2001 e 231/2007, L. 262/2005, disciplina della revisione legale, Sarbanes-Oxley Act e FCPA per chi lavora con gruppi internazionali.',
      },
    ],
    destinatari: [
      'Aspiranti internal auditor e addetti alle funzioni di controllo',
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali',
      'Quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'Governance e Sistema di Controllo Interno',
        voci: [
          'Governance aziendale, Sistema di Controllo Interno e Internal Auditing',
          'Definizione di Internal Audit',
          "Quadro normativo nazionale (Circolare Banca d'Italia 288/2015) e internazionale",
          "L'attuazione della Direttiva 2006/43/CE sulla revisione legale dei conti",
          'La regolamentazione del settore finanziario in Italia',
          'Disposizioni civilistiche in tema di controllo interno',
          'D.Lgs. 231/2001: Codice Etico e responsabilità delle persone giuridiche',
          'L. 262/2005 sulla tutela del risparmio',
          'Codice di autodisciplina di Borsa Italiana',
          'D.Lgs. 231/2007: antiriciclaggio e contrasto al finanziamento del terrorismo',
          'Normativa internazionale: Sarbanes-Oxley Act (SOX) e FCPA',
        ],
      },
      {
        sezione: 'Risk assessment e mappatura dei processi',
        voci: [
          'Il CoSO Report e il risk assessment sull\'intera azienda',
          'La matrice dei rischi e l\'Enterprise Risk Management (ERM)',
          'La valutazione dei rischi: probabilità e impatto',
          'Identificazione dei rischi e risposta al rischio',
          "L'analisi, la classificazione e la mappatura dei processi",
          'I punti di controllo',
          "L'assessment del sistema di controllo e le priorità di intervento",
        ],
      },
      {
        sezione: 'Il processo di audit, dalla pianificazione al follow-up',
        voci: [
          'I tre livelli di presidio del sistema di controllo interno',
          'Processo di audit, pianificazione pluriennale e annuale',
          'Obiettivi e principali elementi del piano di internal audit',
          'Piano degli incarichi e KPI',
          "Le fasi di un intervento: pianificazione, svolgimento, comunicazione dei risultati",
          'Testing e campionamento',
          'Monitoraggio e reporting dei findings di audit',
          'Le attività di follow-up',
        ],
      },
      {
        sezione: 'Le tipologie di audit',
        voci: ['Audit di conformità', 'Financial audit', 'Operating audit', 'Fraud audit', 'Audit ICT'],
      },
    ],
    plus: "Focus specifico sul ruolo dell'audit nella corporate governance degli intermediari finanziari non bancari.",
  },
  {
    cod: 'B2',
    slug: 'b2-risk-management',
    area: 'B',
    areaNome: 'Organismi di Controllo',
    titolo: 'La Funzione di Risk Management',
    sottotitolo:
      'Chi fa cosa nel governo dei rischi: ruoli, poteri e responsabilità dentro il Sistema di Controllo Interno e Gestione dei Rischi.',
    prezzo: 1050,
    durataVideo: '16 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      'Il corso analizza la struttura del Sistema di Controllo Interno e Gestione dei Rischi (SCI-GR) mettendo a fuoco gli attori che lo governano: il Consiglio di Amministrazione e i suoi poteri, l\'amministratore incaricato del controllo, il Comitato controllo e rischi, il responsabile della funzione di internal audit e il Collegio sindacale.',
      'Un percorso pensato per chi deve capire come le responsabilità si distribuiscono davvero dentro la governance del rischio, ed evitare le zone grigie in cui i presidi falliscono.',
    ],
    perche: [
      {
        titolo: 'Il rischio è diventato materia da consiglio',
        testo:
          'Rischi cyber, di catena di fornitura, normativi e reputazionali sono oggi discussi nei CdA, e il Codice di Corporate Governance chiede agli amministratori un presidio consapevole. Sapere chi risponde di cosa è il primo controllo che funziona.',
      },
      {
        titolo: 'Un linguaggio comune tra organi e funzioni',
        testo:
          'Il corso allinea amministratori, sindaci e funzioni di controllo su ruoli e flussi informativi: la maggior parte degli incidenti di governance nasce da sovrapposizioni e vuoti di competenza, non da regole mancanti.',
      },
      {
        titolo: 'La base per i ruoli di secondo livello',
        testo:
          'Per chi punta a ruoli di risk manager o vuole entrare nelle funzioni di controllo, la mappa istituzionale del SCI-GR è il prerequisito su cui poggia tutta la parte quantitativa del mestiere.',
      },
    ],
    destinatari: [
      'Aspiranti risk manager e addetti alle funzioni di controllo',
      'Amministratori e sindaci',
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali, quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'La struttura del Sistema di Controllo Interno e Gestione dei Rischi',
        voci: [
          'Architettura del SCI-GR e principi di riferimento',
          'I tre livelli di controllo e il posizionamento del risk management',
        ],
      },
      {
        sezione: 'Gli attori della governance del rischio',
        voci: [
          'Il Consiglio di Amministrazione: ruolo e poteri',
          "L'amministratore incaricato del controllo SCI-GR",
          'Il Comitato controllo e rischi',
          'Il responsabile della funzione di internal audit',
          'Il Collegio sindacale',
        ],
      },
    ],
    plus: 'Il taglio è istituzionale e pratico insieme: per ogni organo, cosa deve fare, cosa può delegare e dove iniziano le responsabilità.',
  },
  {
    cod: 'B3',
    slug: 'b3-compliance-e-anticorruption',
    area: 'B',
    areaNome: 'Organismi di Controllo',
    titolo: 'La Funzione di Compliance e Anticorruption',
    sottotitolo:
      'Da Basilea al whistleblowing: come nasce, dove si colloca e come lavora la funzione che tiene l\'azienda dentro le regole.',
    prezzo: 1050,
    durataVideo: '16 ore di videolezione',
    durataStudio: 'Studio individuale guidato',
    descrizione: [
      "Il corso ricostruisce origine ed evoluzione della funzione di Compliance, dai comitati di Basilea a Solvency II, per poi analizzarne compiti, obbligatorietà e collocamento nell'organigramma, insieme ai rapporti con risk management e internal audit.",
      "La seconda parte incrocia la Compliance con le normative che la attivano ogni giorno: D.Lgs. 231/2001, GDPR, sicurezza sul lavoro (D.Lgs. 81/2008), antiriciclaggio (D.Lgs. 231/2007), fino alla disciplina anticorruzione della L. 190/2012 e agli obblighi di trasparenza.",
    ],
    perche: [
      {
        titolo: 'Il perimetro degli obblighi continua ad allargarsi',
        testo:
          'Con il D.Lgs. 24/2023 sul whistleblowing i canali di segnalazione interna sono diventati obbligatori per una platea vastissima di imprese, con impatti diretti sui Modelli 231. Chi presidia la compliance deve saperli integrare, non subirli.',
      },
      {
        titolo: 'La corruzione costa più della compliance',
        testo:
          'Sanzioni 231, esclusione dalle gare pubbliche, danni reputazionali: il costo di un episodio corruttivo è sempre superiore a quello di un presidio ben costruito. La L. 190/2012 e la disciplina della trasparenza sono ormai un requisito di mercato, anche per i privati che lavorano con la PA.',
      },
      {
        titolo: 'Un ruolo in ascesa nelle organizzazioni',
        testo:
          'Il compliance officer è passato da figura di nicchia a interlocutore diretto di vertici e board. Il corso fornisce la mappa completa di fonti e responsabilità per esercitare il ruolo con autorevolezza.',
      },
    ],
    destinatari: [
      'Aspiranti compliance officer e addetti alle funzioni di controllo',
      'Membri di Organismi di Vigilanza',
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali, quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'La funzione di Compliance',
        voci: [
          "Che cos'è la Compliance",
          'Le origini: da Basilea 2005 a Solvency II',
          'I compiti della funzione di Compliance',
          'La Compliance "eterodeterminata": le principali fonti normative europee e nazionali',
          'La Compliance "autodeterminata": fonti secondarie, regolamenti, direttive aziendali',
          "L'obbligatorietà della funzione e il collocamento nell'organigramma",
          'Il rapporto tra Compliance, Risk Management e funzione di Audit',
        ],
      },
      {
        sezione: 'Compliance e normative chiave',
        voci: [
          'Compliance e D.Lgs. 231/2001: aspetti rilevanti',
          'Compliance e GDPR (Regolamento UE 2016/679)',
          'Il D.Lgs. 81/2008 sulla salute e sicurezza nei luoghi di lavoro',
          'Compliance e D.Lgs. 231/2007: antiriciclaggio',
          'Il rispetto dei codici etici e delle direttive aziendali',
        ],
      },
      {
        sezione: "La disciplina dell'anticorruzione",
        voci: [
          'La L. 190/2012, cosiddetta Legge Anticorruzione',
          'Gli obblighi di trasparenza',
        ],
      },
    ],
    plus: 'Il corso collega la teoria della funzione ai casi operativi: dove collocarla in organigramma, come farla dialogare con OdV e audit, come reggere un controllo esterno.',
  },

  // ========== AREA C · CONTRATTUALISTICA ==========
  {
    cod: 'C1',
    slug: 'c1-contratti-nazionali-impresa',
    area: 'C',
    areaNome: 'Contrattualistica',
    titolo: "Contratti Nazionali d'Impresa",
    sottotitolo:
      'Il contratto come strumento di lavoro: trattative, clausole, patologie e rimedi per chi compra, vende e firma ogni giorno.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '80 ore di studio individuale',
    descrizione: [
      "Il corso copre l'intero ciclo di vita del contratto d'impresa: dalle trattative precontrattuali agli elementi essenziali e accidentali, dall'interpretazione all'esecuzione, fino ai rimedi in caso di inadempimento, alle clausole vessatorie e alla responsabilità del produttore.",
      "Ampio spazio è dedicato al rapporto con i fornitori: valutazione precontrattuale, accordi quadro, clausole di variazione prezzi, garanzie e tutele. Durante il corso vengono simulate negoziazioni su clausole specifiche, con possibilità di discutere la predisposizione di draft contrattuali.",
    ],
    perche: [
      {
        titolo: 'I contenziosi nascono quasi sempre a monte',
        testo:
          'La maggior parte delle liti commerciali deriva da contratti incompleti, clausole ambigue o penali scritte male. Investire nella qualità contrattuale costa una frazione di quanto costa un giudizio civile.',
      },
      {
        titolo: 'Le clausole giuste spostano il rischio',
        testo:
          'Penali, garanzie, clausole risolutive espresse, variazione prezzi: sono leve negoziali concrete. Chi le padroneggia firma contratti che proteggono margini e forniture, specie in mercati con costi volatili.',
      },
      {
        titolo: 'Privacy, sicurezza e 231 entrano nei contratti',
        testo:
          'GDPR, D.Lgs. 81/2008 e D.Lgs. 231/2001 impongono clausole e verifiche che oggi nessun contratto B2B può ignorare: il corso mostra dove e come inserirle.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Uffici acquisti e uffici legali interni',
      'Imprenditori e liberi professionisti',
      'Quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'Il contratto in generale',
        voci: [
          'Nozioni giuridiche di contratto e normativa di riferimento',
          'Gli elementi essenziali e gli elementi accidentali',
          "La tutela dell'affidamento e la conduzione delle trattative precontrattuali",
          'Gli effetti del contratto, la rappresentanza e la procura',
          "L'invalidità e l'inefficacia; conversione e rinnovazione del contratto nullo",
          "L'interpretazione e l'integrazione contrattuale",
        ],
      },
      {
        sezione: 'Esecuzione, inadempimento e tutele',
        voci: [
          "L'esecuzione del contratto e l'adempimento",
          'I rimedi legali in caso di inadempimento contrattuale',
          'La responsabilità contrattuale ed extracontrattuale',
          'La responsabilità solidale in tema di appalti',
          'Le principali forme di inadempimento e le relative tutele',
          'Come regolarsi di fronte alle clausole vessatorie',
          'Le formule di autotutela del compratore e la risoluzione di diritto',
          'Le modalità di applicazione delle clausole di variazione prezzi',
          'Garanzie e responsabilità civile del produttore-fornitore per prodotto difettoso',
        ],
      },
      {
        sezione: 'Il rapporto con i fornitori',
        voci: [
          'La valutazione precontrattuale del fornitore in un rapporto di partnership',
          'Lo sviluppo di un accordo quadro con i fornitori',
          'Le tipologie di acquisto mediante accordi quadro: applicazioni e limiti',
          'Come assicurarsi il miglior rapporto prezzo/prestazioni',
          'Le clausole a tutela della sicurezza e della flessibilità del servizio',
        ],
      },
      {
        sezione: 'Normative trasversali',
        voci: [
          'Il Regolamento UE 2016/679 (GDPR) e il D.Lgs. 101/2018',
          'Il D.Lgs. 81/2008 sulla salute e sicurezza nei luoghi di lavoro',
          'Il D.Lgs. 231/2001 sulla responsabilità amministrativa degli enti',
        ],
      },
      {
        sezione: 'Le fattispecie contrattuali più frequenti',
        voci: [
          'Contratti tipici e atipici: le differenze',
          'La compravendita e la somministrazione',
          "L'appalto e il contratto d'opera",
          'La subfornitura e i contratti accessori alla vendita',
          'Trasporto e spedizione',
          'I contratti ad obbligazione di risultato',
        ],
      },
    ],
    plus: 'Simulazioni di negoziazione su clausole specifiche e discussione di draft contrattuali reali.',
  },
  {
    cod: 'C2',
    slug: 'c2-contratti-internazionali',
    area: 'C',
    areaNome: 'Contrattualistica',
    titolo: 'Contratti Internazionali',
    sottotitolo:
      'Redigere e negoziare oltre confine: struttura, clausole tipiche, legge applicabile e risoluzione delle controversie transnazionali.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      "Il corso affronta la contrattualistica internazionale dal punto di vista di chi la pratica: struttura del contratto, uso dei modelli e scelta della lingua, tecniche di redazione, condizioni generali e la cosiddetta battle of the forms, fino alle clausole tipiche come force majeure, hardship, penale e confidenzialità.",
      "La parte finale è dedicata a ciò che accade quando qualcosa va storto: individuazione della legge applicabile, scelta del foro o dell'arbitrato, strumenti alternativi di risoluzione delle controversie, con la normativa di riferimento europea e italiana. Sono previste simulazioni di negoziazione e la discussione di draft contrattuali.",
    ],
    perche: [
      {
        titolo: "L'export non perdona l'improvvisazione",
        testo:
          "Un contratto internazionale scritto sul modello di quello italiano è una polizza a favore della controparte. Lingua, legge applicabile e foro deciso in anticipo valgono più di qualunque causa vinta dopo anni all'estero.",
      },
      {
        titolo: 'NDA, LOI e MOU sono contratti veri',
        testo:
          'I documenti della fase precontrattuale vincolano più di quanto si creda. Il corso insegna a usarli in modo strategico, sapendo cosa concedono e cosa impegnano.',
      },
      {
        titolo: "L'arbitrato si sceglie prima, non dopo",
        testo:
          'Quando la controversia è aperta è tardi per scegliere il terreno di gioco. Conoscere Regolamento Bruxelles I-bis, convenzioni e clausole arbitrali significa decidere oggi dove e come si litigherà domani.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Export manager e uffici commerciali estero',
      'Dottori commercialisti ed esperti contabili',
      'Imprenditori e liberi professionisti',
      'Quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'Struttura e redazione del contratto internazionale',
        voci: [
          'Nozione e caratteristiche generali del contratto internazionale',
          'I problemi relativi alla negoziazione e alla stipulazione',
          "L'uso dei modelli di contratto e la lingua del contratto",
          "Contratto scritto e orale: i rischi legati all'assenza di un contratto scritto",
          'Le tecniche di redazione di un contratto internazionale',
          "L'uso di condizioni generali e la battle of the forms",
          'La formazione del consenso: le fasi della negoziazione internazionale',
        ],
      },
      {
        sezione: 'Le clausole tipiche',
        voci: [
          'La struttura dei contratti internazionali',
          'Interpretazione, force majeure, hardship, clausola penale, confidenzialità',
          'La cessazione del contratto e la legge applicabile',
        ],
      },
      {
        sezione: 'I documenti della fase precontrattuale',
        voci: [
          'Non-Disclosure Agreement (NDA) e Confidentiality Agreement',
          'Feasibility Studies',
          'Letters of Intent (LOI) e Memorandum of Understanding (MOU)',
          'Lock-out Agreement',
          'Lettere di patronage e documenti simili',
        ],
      },
      {
        sezione: 'Controversie transnazionali',
        voci: [
          'La risoluzione delle controversie davanti al giudice interno',
          'Il Regolamento (UE) 1215/2012 e il Regolamento (CE) 44/2001',
          'Le Convenzioni di Bruxelles e di Lugano',
          'La L. 218/1995 di diritto internazionale privato',
          "La scelta o l'individuazione della legge applicabile",
          "Scelta del foro e/o dell'arbitrato",
          'Conciliazione, mediazione e arbitrato come metodi alternativi',
        ],
      },
      {
        sezione: 'I contratti della prassi internazionale',
        voci: [
          'Contratti tipici italiani e atipicità della prassi internazionale',
          'Sale of Goods Agreements: obbligazioni del venditore e del compratore',
          'Le Joint Venture',
          'I contratti di licenza e di trasferimento di tecnologia',
          'La tutela della proprietà intellettuale',
          'Come si progetta e si redige il contratto internazionale',
        ],
      },
    ],
    plus: 'Simulazioni di negoziazione su clausole internazionali e discussione di draft in lingua.',
  },
  {
    cod: 'C3',
    slug: 'c3-contratti-pubblici',
    area: 'C',
    areaNome: 'Contrattualistica',
    titolo: 'Contratti Pubblici',
    sottotitolo:
      'Il Codice dei contratti pubblici applicato: dalla qualificazione in gara all\'esecuzione, con il D.Lgs. 36/2023 e i suoi aggiornamenti.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '80 ore di studio individuale',
    descrizione: [
      "Il corso segue l'intero ciclo dell'appalto pubblico sotto il Codice dei contratti (D.Lgs. 36/2023): principi e ambito di applicazione, operatori economici e forme di aggregazione, ruolo di RUP e Direttore dei Lavori, pubblicità e trasparenza, requisiti di partecipazione, avvalimento, subappalto e soccorso istruttorio.",
      'La seconda parte copre criteri di aggiudicazione, procedure di affidamento, digitalizzazione delle gare e strumenti di e-procurement, fino al contratto, all\'autotutela della PA, ai controlli e al contenzioso.',
    ],
    perche: [
      {
        titolo: 'La disciplina è nuova e già corretta',
        testo:
          'Al D.Lgs. 36/2023 si è aggiunto il correttivo D.Lgs. 209/2024, con interventi su revisione prezzi, tutele per le PMI, fase esecutiva e digitalizzazione. Chi partecipa alle gare deve lavorare sul testo vigente, non su quello studiato due anni fa.',
      },
      {
        titolo: 'La gara è ormai interamente digitale',
        testo:
          'Piattaforme certificate, Banca dati nazionale ANAC, fascicolo virtuale dell\'operatore economico: la digitalizzazione ha cambiato il modo stesso di partecipare. Un errore procedurale su una piattaforma vale un\'esclusione.',
      },
      {
        titolo: 'Gli errori formali costano appalti',
        testo:
          'Requisiti, avvalimento, subappalto e soccorso istruttorio sono il terreno dove si vincono e si perdono i ricorsi. Il corso li tratta con il supporto della giurisprudenza più recente.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Uffici gare e ufficio appalti di imprese e PA',
      'RUP e funzionari di stazioni appaltanti',
      'Consulenti aziendali',
      'Imprenditori, quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'Il quadro di riferimento',
        voci: [
          'Inquadramento e principi del Codice dei contratti pubblici (D.Lgs. 36/2023)',
          'Profili oggettivi e soggettivi di applicazione',
          "L'evoluzione normativa e gli aggiornamenti al Codice",
        ],
      },
      {
        sezione: 'Gli operatori economici e le figure chiave',
        voci: [
          'Gli operatori economici in generale; enti pubblici anche non economici',
          'Consorzi stabili e consorzi ordinari di concorrenti',
          'Raggruppamenti temporanei di imprese, contratti di rete, GEIE',
          'Il RUP nel procedimento amministrativo e nei contratti pubblici',
          'Il Direttore dei Lavori e il DM 49/2018',
          "Rapporti tra direttore dell'esecuzione e RUP; la coincidenza delle figure",
        ],
      },
      {
        sezione: 'La gara: pubblicità, requisiti e istituti',
        voci: [
          'Pubblicità di bandi e avvisi; comunicazioni e informazioni in fase di gara',
          'Accesso agli atti, trasparenza e pubblicità',
          'La qualificazione in gara',
          'I requisiti di ordine generale: affidabilità morale e professionale',
          'I requisiti speciali: idoneità professionale, capacità economico-finanziaria e tecnico-organizzativa',
          "L'avvalimento: evoluzione dell'istituto e giurisprudenza",
          'Il subappalto in fase di gara',
          'Il soccorso istruttorio',
        ],
      },
      {
        sezione: 'Aggiudicazione, procedure e digitalizzazione',
        voci: [
          'I criteri di aggiudicazione e il ciclo di vita',
          'Le procedure di affidamento e le soglie di rilevanza comunitaria',
          'Suddivisione in lotti e inversione delle fasi di gara',
          'Procedure telematiche e digitalizzazione delle gare',
          'Gli strumenti di e-procurement e gli accordi quadro',
        ],
      },
      {
        sezione: 'Contratto, controlli e contenzioso',
        voci: [
          'Il procedimento di evidenza pubblica',
          "Il contratto e l'autotutela della PA",
          'I controlli e il contenzioso',
        ],
      },
    ],
    plus: 'Il programma viene mantenuto allineato agli aggiornamenti del Codice e alla giurisprudenza amministrativa più recente.',
  },

  // ========== AREA D · CREDIT MANAGEMENT ==========
  {
    cod: 'D1',
    slug: 'd1-recupero-crediti-legale',
    area: 'D',
    areaNome: 'Credit Management',
    titolo: 'Recupero dei Crediti I: Normativa e Aspetti Legali',
    sottotitolo:
      'La fase stragiudiziale fatta bene: strategia, autotutela e strumenti per incassare senza (o prima di) andare in tribunale.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      "Il corso affronta il recupero del credito nella sua fase più delicata e meno costosa: quella che precede il giudizio. Si parte dal presidio del credito (raccolta delle informazioni, responsabilità patrimoniale del debitore, differenze tra crediti chirografari e garantiti) per arrivare alla preparazione delle trattative e alla scelta della strategia.",
      "Ampio spazio agli strumenti concreti: condizioni generali di contratto, rimedi di autotutela, interessi di mora ex D.Lgs. 231/2002, messa in mora, piani di rientro e transazioni. Su richiesta, parte del corso può essere dedicata all'analisi di documenti e atti reali della fase stragiudiziale.",
    ],
    perche: [
      {
        titolo: 'Lo stragiudiziale è la via più redditizia',
        testo:
          'Un credito recuperato prima del giudizio costa una frazione e arriva in tempi incomparabilmente più rapidi. La differenza la fanno metodo, informazioni e la qualità degli atti inviati al debitore.',
      },
      {
        titolo: 'Il credito si difende quando nasce',
        testo:
          'Condizioni generali ben scritte, riconoscimento del debito, cautele contro l\'inadempimento: gli strumenti migliori si attivano alla firma del contratto, non alla prima fattura insoluta.',
      },
      {
        titolo: 'Gli interessi di mora sono un diritto, non una cortesia',
        testo:
          'Il D.Lgs. 231/2002 sui ritardi di pagamento nelle transazioni commerciali prevede interessi e recupero dei costi che moltissime imprese non esercitano. Conoscerlo cambia i numeri del credito.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali',
      'Imprenditori e liberi professionisti',
      'Quadri e dirigenti',
    ],
    programma: [
      {
        sezione: 'Presidiare il credito',
        voci: [
          "L'importanza di presidiare il credito",
          'Raccolta e analisi delle informazioni',
          'La responsabilità patrimoniale del debitore: la garanzia generica del patrimonio',
          "I pericoli per il creditore e i rimedi dell'ordinamento",
          'La gestione dei microcrediti e dei macrocrediti',
          'Differenze tra crediti dei privati e delle imprese',
          'Differenze tra crediti chirografari e crediti garantiti',
        ],
      },
      {
        sezione: 'Strategia e prevenzione',
        voci: [
          'La fase di preparazione alle trattative e la scelta della strategia',
          'Le condizioni generali di contratto',
          "I rimedi di autotutela offerti dall'ordinamento",
          "La previsione dell'inadempimento e le cautele",
          'Gli interessi sul tardivo pagamento',
          'Il riconoscimento del debito',
          'Il procedimento di formazione del contratto e il regime della prestazione',
        ],
      },
      {
        sezione: 'La procedura stragiudiziale',
        voci: [
          'Principi generali: giudizio di convenienza, recupero dei costi ex art. 1196 c.c., scarico fiscale, interessi moratori ex D.Lgs. 231/2002',
          'I beni aggredibili: quali sono e come ricercarli',
          'La messa in mora e la definizione di piani di rientro',
          "L'efficacia novativa e non novativa delle transazioni commerciali",
          'La rinuncia alle azioni legali per sopravvenuta definizione stragiudiziale',
        ],
      },
    ],
    plus: "Possibilità di dedicare parte del corso all'analisi di documenti e atti reali della fase stragiudiziale.",
  },
  {
    cod: 'D2',
    slug: 'd2-recupero-crediti-giudiziale',
    area: 'D',
    areaNome: 'Credit Management',
    titolo: 'Recupero dei Crediti II: la Fase Giudiziale ed Esecutiva',
    sottotitolo:
      'Dal decreto ingiuntivo al pignoramento: come si porta un credito in tribunale e come lo si trasforma in denaro.',
    prezzo: 1050,
    durataVideo: '14 ore di videolezione',
    durataStudio: '60 ore di studio individuale',
    descrizione: [
      'Il corso copre il recupero del credito davanti agli organi giudiziari: natura e tipologie del titolo esecutivo, ricorso per decreto ingiuntivo ordinario e provvisoriamente esecutivo, atto di precetto e fase esecutiva, con tutte le forme di pignoramento (mobiliare, presso terzi, dello stipendio, immobiliare).',
      "Completano il quadro le garanzie del credito (pegno, ipoteca, fideiussione, riservato dominio), i titoli di credito come assegno e cambiale, le procedure concorsuali con l'insinuazione al passivo e la disciplina delle obbligazioni pecuniarie: interessi, anatocismo, prescrizione.",
    ],
    perche: [
      {
        titolo: 'La scelta del rito decide tempi e costi',
        testo:
          'Decreto ingiuntivo o giudizio ordinario, provvisoria esecutorietà, qualità dei documenti: le scelte iniziali determinano se il credito si incassa in mesi o si trascina per anni. Il corso dà i criteri per decidere.',
      },
      {
        titolo: 'Il pignoramento giusto sul bene giusto',
        testo:
          'Le indagini preliminari e la scelta tra pignoramento mobiliare, presso terzi o immobiliare fanno la differenza tra un titolo eseguito e un titolo incorniciato. Metodo operativo, non solo teoria.',
      },
      {
        titolo: 'Quando il debitore entra in crisi',
        testo:
          "Concordati e liquidazioni giudiziali richiedono mosse precise e tempi stretti per l'insinuazione. Chi gestisce crediti deve saper reagire alla crisi del debitore senza perdere la fila.",
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Uffici legali e uffici crediti',
      'Imprenditori e liberi professionisti',
      'Quadri direttivi e dirigenti',
    ],
    programma: [
      {
        sezione: 'Il titolo esecutivo e la scelta della via giudiziale',
        voci: [
          'Cosa si intende per titolo esecutivo',
          'Il processo di esecuzione: perché, come e quando',
          'La gestione dei rapporti con il legale esterno',
          'Le informazioni finalizzate al recupero giudiziale',
          'Tempistiche e costi del recupero giudiziale',
        ],
      },
      {
        sezione: 'Decreto ingiuntivo e precetto',
        voci: [
          'La procedura giudiziale di recupero crediti',
          'Il decreto ingiuntivo ordinario e quello provvisoriamente esecutivo',
          'I presupposti per la provvisoria esecutorietà',
          'La scelta tra giudizio ordinario e ricorso per decreto ingiuntivo',
          "I documenti indispensabili per avviare un'azione legale",
          "L'atto di precetto e la sua natura giuridica",
        ],
      },
      {
        sezione: 'La fase esecutiva',
        voci: [
          'Le indagini da compiere prima del pignoramento',
          'Il pignoramento mobiliare e presso terzi',
          'Il pignoramento dello stipendio',
          'Il pignoramento immobiliare',
          'Le procedure concorsuali: precisazione del credito e insinuazione al passivo',
        ],
      },
      {
        sezione: 'Garanzie e titoli di credito',
        voci: [
          'I diritti reali di garanzia: pegno e ipoteca',
          "La garanzia, l'avallo e la fideiussione",
          'La lettera di patronage e il diritto di ritenzione',
          'Clausola penale, caparra confirmatoria e caparra penitenziale',
          'Il patto di riservato dominio',
          "L'assegno: elementi, tipologie, protesto",
          'La cambiale e il pagherò cambiario come titolo esecutivo',
          'RID e bonifico bancario',
        ],
      },
      {
        sezione: 'Le obbligazioni pecuniarie',
        voci: [
          'Debiti di valore e debiti di valuta',
          'Interessi legali e moratori; anatocismo',
          'I danni nelle obbligazioni pecuniarie',
          'Il D.Lgs. 231/2002 sui ritardi di pagamento',
          'Prescrizione, sospensione e interruzione',
        ],
      },
    ],
    plus: "Possibilità di dedicare parte del corso all'analisi di atti reali della fase giudiziale.",
  },
  {
    cod: 'D3',
    slug: 'd3-credito-commerciale',
    area: 'D',
    areaNome: 'Credit Management',
    titolo: 'La Gestione del Credito Commerciale',
    sottotitolo:
      'Il credito come leva finanziaria: credit policy, rischio cliente, fidi e KPI per trasformare i crediti in cassa.',
    prezzo: 1200,
    durataVideo: '16 ore di videolezione',
    durataStudio: '80 ore di studio individuale',
    descrizione: [
      "Il corso guarda al credito commerciale con gli occhi del management: quanto costa il ritardo negli incassi, come si definisce una Credit Policy aziendale, come si valuta il rischio cliente con scoring, rating e analisi di bilancio, come si collega il credito a EBITDA, working capital e cash flow operativo.",
      'La parte finale è dedicata al governo quotidiano: definizione e gestione del fido cliente, accantonamenti a protezione del rischio, controllo dell\'attività di recupero, KPI della funzione crediti e tableau de bord.',
    ],
    perche: [
      {
        titolo: 'Il fatturato non pagato non è fatturato',
        testo:
          'Ogni giorno di ritardo negli incassi è capitale circolante immobilizzato e oneri finanziari in più. Gestire il credito commerciale significa difendere la liquidità, che è ciò che tiene in vita le imprese.',
      },
      {
        titolo: 'Prevenire il rischio cliente è possibile',
        testo:
          'Scoring, rating e lettura del bilancio permettono di capire chi affidare e per quanto, prima di consegnare merce o servizi. Il fido cliente è uno strumento di vendita consapevole, non un freno commerciale.',
      },
      {
        titolo: 'Ciò che non si misura non si governa',
        testo:
          'DSO, aging, indici di recupero: i KPI del credito trasformano una gestione a sensazione in una funzione misurabile, difendibile davanti a CFO e banche.',
      },
    ],
    destinatari: [
      'Credit manager',
      'Responsabili commerciali',
      'Responsabili di unità operativa o centro di profitto',
      'Responsabili amministrativi e finanziari',
      'Responsabili del controllo di gestione e di budget',
    ],
    programma: [
      {
        sezione: 'Il credito nei numeri aziendali',
        voci: [
          'I crediti commerciali nel sistema produttivo italiano',
          "Il ritardo negli incassi: l'incidenza del credito sui risultati aziendali",
          'Il costo della gestione del credito',
          'Le disposizioni contro i ritardi di pagamento nelle transazioni commerciali',
        ],
      },
      {
        sezione: 'Credit Policy e processi',
        voci: [
          'Definire la Credit Policy aziendale',
          'Definire i processi amministrativi per accelerare gli incassi e prevenire i rischi',
        ],
      },
      {
        sezione: 'Valutare il rischio cliente',
        voci: [
          'Lo scoring e il rating',
          "L'analisi di bilancio come base di valutazione quantitativa",
          'Focus sul capitale circolante netto commerciale e sulla liquidità',
          'Il legame tra EBITDA, working capital e operational cash flow',
          'Le fonti di informazione per valutare il rischio cliente',
        ],
      },
      {
        sezione: 'Fido, accantonamenti e controllo',
        voci: [
          'Definire e gestire il fido cliente',
          'Gli accantonamenti a protezione del rischio',
          "Gestire e controllare l'attività di recupero crediti",
          'I KPI della gestione del credito commerciale',
          'Il tableau de bord della funzione crediti',
        ],
      },
    ],
    plus: 'Taglio manageriale e quantitativo: il credito letto attraverso bilancio, cassa e indicatori.',
  },

  // ========== AREA E · FINANCE & FISCALE ==========
  {
    cod: 'E1',
    slug: 'e1-diritto-tributario',
    area: 'E',
    areaNome: 'Finance & Fiscale',
    titolo: 'Diritto Tributario e Contenzioso Tributario',
    sottotitolo:
      'Il sistema fiscale e la sua giustizia: dalle fonti ai singoli tributi, fino al processo tributario telematico e alle impugnazioni.',
    prezzo: 1250,
    durataVideo: '16 ore di videolezione',
    durataStudio: '80 ore di studio individuale',
    descrizione: [
      "La prima parte del corso costruisce le fondamenta del diritto tributario: fonti, entrate pubbliche, soggetti, attività dell'amministrazione finanziaria, singoli tributi, finanza derivata e federalismo fiscale, sistema sanzionatorio.",
      'La seconda parte entra nel contenzioso: gli organi della giustizia tributaria, il Processo Tributario Telematico, sospensione, interruzione ed estinzione del processo, impugnazioni, giudicato e giudizio di ottemperanza.',
    ],
    perche: [
      {
        titolo: 'La giustizia tributaria è stata riformata da cima a fondo',
        testo:
          'Con la L. 130/2022 e il D.Lgs. 220/2023 le Commissioni sono diventate Corti di giustizia tributaria con magistrati professionali, e le nuove regole processuali si applicano ai ricorsi più recenti. Chi difende contribuenti o imprese deve conoscere il processo nella sua versione attuale.',
      },
      {
        titolo: 'Il processo è telematico, senza eccezioni di comodo',
        testo:
          'Notifiche e depositi passano dal Processo Tributario Telematico: la padronanza dello strumento è ormai parte della competenza professionale, non un optional informatico.',
      },
      {
        titolo: 'Il contenzioso vale miliardi ogni anno',
        testo:
          'Le controversie fiscali riguardano importi medi elevatissimi e ogni fase (dal reclamo alle impugnazioni) ha regole e termini che non perdonano. Una preparazione sistematica riduce il rischio di errori irreversibili.',
      },
    ],
    destinatari: [
      'Avvocati e praticanti',
      'Dottori commercialisti ed esperti contabili',
      'Consulenti aziendali',
      'Imprenditori e liberi professionisti',
      'Quadri direttivi e dirigenti',
    ],
    programma: [
      {
        sezione: 'Il sistema tributario',
        voci: [
          "Il diritto tributario e lo studio dell'attività finanziaria dello Stato",
          'Le fonti del diritto tributario',
          'Le entrate pubbliche',
          'I soggetti del diritto tributario',
        ],
      },
      {
        sezione: "L'azione dell'amministrazione finanziaria",
        voci: [
          "L'attività dell'amministrazione finanziaria",
          'I singoli tributi',
          'La finanza derivata e il federalismo fiscale',
          'Il sistema sanzionatorio',
        ],
      },
      {
        sezione: 'Il contenzioso tributario',
        voci: [
          'Gli organi della giustizia tributaria',
          'Il Consiglio di Presidenza della Giustizia Tributaria',
          'Il Processo Tributario Telematico (PTT)',
          'La sospensione, interruzione ed estinzione del processo tributario',
          'Le impugnazioni',
          'Le sentenze passate in giudicato',
          'Il giudizio di ottemperanza',
        ],
      },
    ],
    plus: 'Focus operativo sul Processo Tributario Telematico e sulle novità della riforma della giustizia tributaria.',
  },
  {
    cod: 'E2',
    slug: 'e2-controlli-di-gestione',
    area: 'E',
    areaNome: 'Finance & Fiscale',
    titolo: 'I Controlli di Gestione in Impresa',
    sottotitolo:
      'Numeri che guidano le decisioni: costi, ricavi, cash flow, investimenti e reporting per governare l\'impresa con metodo.',
    prezzo: 1250,
    durataVideo: '16 ore di videolezione',
    durataStudio: '90 ore di studio individuale',
    descrizione: [
      'Il corso costruisce un sistema di controllo di gestione completo: dal business model ai centri di costo e di profitto, dal controllo dei costi (full vs direct costing, activity based costing, TCO) al controllo dei ricavi e del prezzo, con IFRS 15, break even, leva operativa ed elasticità della domanda.',
      "Chiudono il percorso il controllo del cash flow e del working capital, l'analisi attraverso il bilancio e gli indici, la valutazione economica e finanziaria degli investimenti e la costruzione di una reportistica che faciliti davvero le scelte operative.",
    ],
    perche: [
      {
        titolo: 'I margini si difendono con i numeri',
        testo:
          'Costi energetici e di acquisto volatili, listini sotto pressione: senza un controllo di gestione affidabile il prezzo si decide a intuito. Con gli strumenti giusti si sa dove si guadagna, dove si perde e perché.',
      },
      {
        titolo: 'Gli assetti adeguati passano anche da qui',
        testo:
          "L'art. 2086 c.c. chiede alle imprese strumenti in grado di rilevare tempestivamente la crisi. Un controllo di gestione strutturato, con flussi di cassa e indicatori monitorati, è esattamente questo.",
      },
      {
        titolo: 'Dal dato al report che fa decidere',
        testo:
          'Il valore del controller non è produrre tabelle ma orientare le scelte. Il corso insegna a costruire un reporting essenziale, leggibile e collegato alle leve operative.',
      },
    ],
    destinatari: [
      'Responsabili del controllo di gestione',
      'Responsabili di unità operativa o di centro di profitto',
      'Responsabili di budget',
      'CFO e responsabili amministrativi e finanziari',
    ],
    programma: [
      {
        sezione: 'Impostare il controllo di gestione',
        voci: [
          'Le attività del controllo di gestione',
          'Dal business model al controllo di gestione',
          'Identificare obiettivi e punti critici di controllo',
          'Progettare i centri di costo e di profitto',
          'Definire le modalità di controllo',
        ],
      },
      {
        sezione: 'Il controllo dei costi',
        voci: [
          'Da cost accounting a cost management',
          'Metodi di rilevazione dei costi; costi variabili e fissi, diretti e indiretti',
          'Allocazione dei costi indiretti a base unica e multipla',
          'Il ribaltamento dei costi dei centri funzionali, ausiliari e produttivi',
          'Logica full vs direct costing',
          'Il controllo del costo del lavoro',
          "Il costo dell'insaturazione e dell'inefficienza nella produzione",
          'Il costo della qualità e della non qualità',
          'I KPI di funzione',
          'Activity Based Costing, costo del ciclo di vita prodotto, TCO',
          'Marginal costing e absorption costing',
        ],
      },
      {
        sezione: 'Il controllo dei ricavi e il prezzo',
        voci: [
          'IFRS 15: Revenue from Contracts with Customers',
          'La costruzione del prezzo: cost plus e target costing',
          'La leva di prezzo e la matrice del volume supplementare',
          'Elasticità della domanda; prezzo e qualità percepita',
          'Punto di pareggio e leva operativa',
          'Il vincolo del fattore scarso',
        ],
      },
      {
        sezione: 'Cassa, bilancio e investimenti',
        voci: [
          'Il controllo del cash flow: working capital e flussi di cassa',
          "Il controllo attraverso il bilancio d'esercizio e gli indici",
          'Il controllo economico, patrimoniale e finanziario',
          'Il controllo degli investimenti: valutazione economica e finanziaria',
        ],
      },
      {
        sezione: 'Reporting',
        voci: ['Produrre una reportistica che faciliti le scelte operative'],
      },
    ],
    plus: 'Approccio quantitativo con casi numerici: ogni strumento viene mostrato in applicazione, non solo definito.',
  },
];

// Aree con i rispettivi corsi (per pagina Formazione e home)
const nomiAree = {
  A: 'Diritto Societario',
  B: 'Organismi di Controllo',
  C: 'Contrattualistica',
  D: 'Credit Management',
  E: 'Finance & Fiscale',
};

export const aree = Object.entries(nomiAree).map(([sigla, nome]) => ({
  sigla,
  nome,
  corsi: corsi.filter((c) => c.area === sigla),
}));

// Aree a catalogo senza corsi online pubblicati: erogabili su richiesta.
export const areeSuRichiesta = [
  { sigla: 'F', nome: 'Compliance' },
  { sigla: 'G', nome: 'Business Coaching' },
  { sigla: 'H', nome: 'Digitalizzazione PA' },
];

export const consulenze = [
  {
    titolo: 'Privacy & GDPR con DPO',
    testo:
      'Adeguamento al GDPR, registri dei trattamenti, nomina e servizio di Data Protection Officer esterno per imprese ed enti.',
  },
  {
    titolo: 'Contrattualistica nazionale e internazionale',
    testo:
      'Revisione e redazione di contratti d’impresa, condizioni generali, accordi commerciali cross-border.',
  },
  {
    titolo: 'Transfer Pricing',
    testo:
      'Predisposizione dei fascicoli di transfer price e supporto documentale per gruppi con operazioni infragruppo.',
  },
];

export const LINKEDIN_URL = 'https://www.linkedin.com/company/mens-sana-formazione-srl/';
