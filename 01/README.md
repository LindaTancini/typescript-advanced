# 📘 Classi E Oop

## 🔍 Introduzione
La programmazione orientata agli oggetti (OOP) è un paradigma che permette di organizzare il codice in classi che rappresentano entità reali o concetti, dotate di proprietà e comportamenti (metodi).
TypeScript estende JavaScript con un supporto completo per l’OOP, aggiungendo tipizzazione forte, modificatori di accesso, ereditarietà e classi astratte.
Imparare a usare classi in TypeScript significa scrivere codice più strutturato, riutilizzabile e facilmente manutenibile.

## 🧠 Differenze chiave
🔹 *Classi*
Definiscono oggetti con proprietà e metodi, permettendo di creare molteplici istanze con lo stesso schema.

```ts
class Persona {
  constructor(public nome: string) {}
  saluta() { console.log(`Ciao ${this.nome}`); }
}
```

🔸 *Ereditarietà*
Una classe può estendere un’altra per ereditare proprietà e metodi, potendo anche sovrascriverli (override).

```ts
class Cane extends Animale {
  verso() { console.log("bau bau"); }
}
```

🔹 *Modificatori di accesso*
Controllano la visibilità di proprietà e metodi:
- `public`: (default) accessibile ovunque
- `private`: accessibile solo dentro la classe
- `protected`: accessibile nella classe e nelle sue sottoclassi

🔸 *Classi astratte*
Non possono essere istanziate direttamente, ma definiscono metodi che le classi derivate devono implementare.

```ts
abstract class Veicolo {
  abstract muovi(): void;
}
```

## 🎯 Obiettivi degli esercizi
Con questi esercizi imparerai a:
- Definire classi e creare istanze
- Usare costruttori e metodi di classe
- Applicare ereditarietà e override di metodi
- Impostare modificatori di accesso per proteggere dati
- Implementare classi con stato modificabile tramite metodi
- Creare e utilizzare classi astratte e i loro derivati

## 🚀 Conclusioni
Le classi sono lo scheletro della programmazione orientata agli oggetti in TypeScript
L’ereditarietà e i modificatori di accesso migliorano l’organizzazione e la sicurezza del codice
Le classi astratte aiutano a definire contratti chiari per le sottoclassi
Conoscere e usare OOP ti permette di scrivere applicazioni più robuste, scalabili e facili da mantenere

👉 Ricorda che un corretto uso delle classi migliora non solo il design del codice, ma anche la sua leggibilità e riusabilità.

## Esercizi

🔎 Qui impari a definire classi, metodi, e proprietà, e a usare l’ereditarietà.

**ESERCIZIO 1**
Crea una classe `Animale` con `nome` e metodo `verso()`.

---
📌 Il metodo override permette a una classe derivata di ridefinire il comportamento ereditato.

**ESERCIZIO 2**
Estendi `Animale` in `Cane`, con override di `verso()`.

---
💡 Modificatori di accesso proteggono dati sensibili:
- private limita l’accesso solo alla classe stessa.
- protected permette accesso anche alle classi derivate.

**ESERCIZIO 3**
Usa `private` e `protected` per mostrare restrizioni di accesso.

---
🔄 Usa metodi per modificare lo stato interno di una classe in modo controllato.

**ESERCIZIO 4**
Crea una classe `Contatore` con metodi `incrementa()`, `decrementa()`, `stato()` che restituisce il valore corrente.

---
📝 I metodi possono restituire stringhe o altri valori per fornire informazioni sugli oggetti.

**ESERCIZIO 5**
Crea una classe `Persona` con proprietà `nome`, `età`. Aggiungi un metodo `descrizione()` che restituisce una stringa con i dati.

---

### 🧩 Extra (Facoltativo)
> ⚠️ Le classi astratte non possono essere istanziate direttamente, ma forniscono un contratto che le classi figlie devono implementare. Questo è utile per definire comportamenti comuni da forzare nelle sottoclassi.

Prova a creare una classe astratta `Veicolo` con metodo astratto `muovi()`, poi implementa due classi concrete `Auto` e `Bicicletta` che lo definiscono.