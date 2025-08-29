# 🚗 Boolcar – Comparatore di Automobili  

![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)  


Boolcar è una **Single Page Application (SPA)** sviluppata in **React**, progettata per confrontare automobili **nuove e usate** in modo semplice, veloce e intuitivo.  
L’app consente di cercare, filtrare, ordinare e confrontare più modelli di auto, oltre a gestire preferiti e operazioni CRUD complete.  

---

## 📌 Funzionalità  

### 🥉 Requisiti Minimi  
- Gestione di una risorsa (`Car`) definita in `types.ts`.  
- Lista auto con proprietà principali: `title` e `category`.  
- Barra di **ricerca** per filtrare per titolo.  
- **Filtro per categoria**.  
- **Ordinamento** A-Z / Z-A su `title` e `category`.  
- Pagina di **dettaglio auto** con informazioni estese.  
- **Comparatore di 2 auto** affiancate.  
- **Sistema preferiti** sempre accessibile.  

### 🥈 Requisiti Consigliati  
- Comparatore di **più auto** (layout adattivo).  
- **Debounce sulla ricerca** per migliorare UX.  
- Persistenza preferiti con `localStorage`.  
- Gestione stati vuoti:  
  - Nessun risultato trovato.  
  - Lista preferiti vuota.  
  - Nessun elemento selezionato nel comparatore.  

### 🥇 Requisiti Aggiuntivi   
- CRUD completo dal frontend:  
  - Creazione, modifica, eliminazione record.  
  - Validazione campi in input.  

---

## 🛠️ Tecnologie Utilizzate  
- **Frontend**: [React](https://reactjs.org/), [React Router](https://reactrouter.com/)  
- **Styling**: Bootstrap 
- **Gestione stato**: React Hooks + Context API  
- **Persistenza locale**: `localStorage`  
- **Backend**: REST API (Node.js + Express / JSON Server)  





