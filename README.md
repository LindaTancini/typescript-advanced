# TypeScript Advanced 🏗️

**TypeScript Advanced** è una repository didattica progettata per esplorare come strutturare progetti TypeScript in modo modulare, scalabile e manutenibile.  
Qui troverai esempi pratici su come organizzare il codice in **cartelle**, **moduli**, **interfacce**, **classi**, con una separazione chiara tra logica, modelli e flusso principale.

## 🗂️ Struttura del progetto

La repo è organizzata in cartelle numerate, ognuna dedicata a un argomento specifico:

```
01
02
03
...
```

Questa struttura segue i principi dell’**architettura modulare**, utile sia per progetti backend (es. con Node.js), sia per frontend complessi in React o simili.

## ✅ Argomenti trattati

- Organizzazione in moduli e cartelle
- Esportazioni e importazioni
- Classi e interfacce organizzate
- Tipi globali e personalizzati
- Separazione tra controller, logica di servizio e modelli
- Astrazione delle utilità e costanti

## 🧑‍💻 Come eseguire gli esercizi

1. Installa le dipendenze:

   ```bash
   npm install
   ```

2. Esegui un esercizio usando `ts-node`. Esempio:
   ```bash
   npx ts-node 01/esercizi.ts
   ```

## 📦 Requisiti

- Node.js
- TypeScript
  ```bash
  npm install typescript --save-dev
  ```
- ts-node
  ```bash
  npm install ts-node --save-dev
  ```

## 🛠️ Comandi utili

- Compilare i file `.ts`:

  ```bash
  npx tsc
  ```

- Eseguire un file:
  ```bash
  npx ts-node percorso/del/file.ts
  ```

## 🎯 Obiettivi

- Capire come strutturare un progetto TypeScript in modo professionale
- Favorire la riusabilità del codice
- Separare le responsabilità in maniera chiara
- Prepararsi a lavorare in team e su progetti reali (backend/API o frontend su larga scala)
