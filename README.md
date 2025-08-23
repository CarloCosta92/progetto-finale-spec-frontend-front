🥉 Requisiti Minimi

Per considerare il progetto completo, devono essere implementate almeno queste funzionalità:

Gestione di una risorsa definita in types.ts  V

Lista dei record, che mostra solo le proprietà principali title e category, e include: V

Barra di ricerca per cercare nei titoli (title) V
Filtro per categoria (category) V
Ordinamento alfabetico per title o category (A-Z e Z-A) V
Pagina di dettaglio per ogni record, con visualizzazione estesa delle sue proprietà (es. price, description, brand, ecc.) V

Comparatore di 2 record, visualizzati affiancati per confrontarne le caratteristiche.   V

È libera la modalità di selezione: puoi permettere all’utente di aggiungere record al comparatore direttamente dalla lista, dalla pagina di dettaglio, oppure usare un menu a tendina, checkbox o qualsiasi altro sistema.
L’importante è che l’utente possa scegliere 2 record qualsiasi e confrontarli in modo chiaro.
Sistema di preferiti, sempre accessibile e aggiornabile: V

L’utente può aggiungere o rimuovere record dai preferiti in qualsiasi momento
I preferiti devono essere consultabili in ogni sezione dell’app (es. tramite una sezione dedicata, un’icona fissa, o una sidebar) V

🥈 Requisiti Consigliati (Facoltativi)

Da affrontare solo dopo aver completato i Requisiti Minimi:

Comparatore di 2 o più record: il layout si adatta per confrontare più elementi affiancati V
Debounce sulla ricerca, per migliorare la UX ed evitare chiamate API inutili
Persistenza dei preferiti (es. salvataggio in localStorage), così che rimangano anche dopo il refresh della pagina
Gestione degli stati vuoti, come:
Nessun risultato trovato
Lista preferiti vuota
Nessun elemento selezionato nel comparatore

🥇 Requisiti Aggiuntivi (Facoltativi)

Da affrontare solo dopo i Requisiti Consigliati:

Gestione di più risorse nella stessa SPA (es. products e courses), con interfacce distinte o integrate
CRUD completo dal frontend:
Creazione di nuovi record
Modifica di record esistenti
Eliminazione di record
Validazione dei campi in input

