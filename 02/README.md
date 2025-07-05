# 📘 Modificatori di Accesso Avanzati e Readonly

## 🔍 Introduzione
In TypeScript puoi controllare la visibilità delle proprietà e metodi con public, private e protected, e puoi rendere immutabili proprietà con readonly.

```ts
class Persona {
  readonly nome: string;
  private eta: number;
}
```

##🎯 Obiettivi degli esercizi
Usare modificatori di accesso
Capire come proteggere dati interni alle classi
Usare proprietà readonly per dati immutabili

## 🚀 Conclusioni
Modificatori e readonly aumentano la sicurezza e l’incapsulamento del codice, rendendo più facile prevenire modifiche indesiderate.

## Esercizi

**ESERCIZIO 1**
Crea una classe Auto con proprietà readonly targa e private velocita.

---

**ESERCIZIO 2**
Scrivi un metodo pubblico che incrementa velocita ma non permette di modificarla dall’esterno.

---

**ESERCIZIO 3**
Prova ad assegnare un nuovo valore a una proprietà readonly e osserva l’errore.

---

**ESERCIZIO 4**
Crea una classe Contatore con una proprietà readonly conteggio e un metodo per incrementarlo.

---

**ESERCIZIO 5**
Crea una classe ContoBancario con proprietà private saldo e metodi per depositare e prelevare denaro.

---

## 🧩 Extra (facoltativo)
Crea una classe Libro con proprietà readonly titolo e autore, e un metodo per stampare il libro.