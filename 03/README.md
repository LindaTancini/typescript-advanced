# 📘 Namespace e Moduli (import/export)

## 🔍 Introduzione
Per organizzare il codice in progetti più grandi, TypeScript supporta namespace (blocchi di codice) e moduli (file che esportano/importano). I moduli sono lo standard moderno.

```ts
// modulo.ts
export function saluta() { ... }

// altro.ts
import { saluta } from "./modulo";
```

## 🎯 Obiettivi degli esercizi
Usare export/import tra file
Comprendere i namespace e le differenze con i moduli
Organizzare meglio il codice

## 🚀 Conclusioni
Usare moduli ti permette di suddividere il codice in parti gestibili, riutilizzabili e manutenibili.

## Esercizi

ESERCIZIO 1
Crea due file, uno esporta una funzione, l’altro la importa e la usa.

ESERCIZIO 2
Definisci un namespace con una funzione e usalo in un altro blocco.

ESERCIZIO 3
Crea un modulo che esporta una classe e un altro che la importa e la usa.

ESERCIZIO 4
Crea un modulo che esporta un tipo e un altro che lo importa e lo usa.

ESERCIZIO 5
Crea un modulo che esporta più elementi e un altro che li importa e li usa.

### 🧩 Extra (facoltativo)
Crea un modulo che esporta una funzione e un altro che la importa e la usa con un alias.