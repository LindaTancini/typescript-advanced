# 🧠 TypeScript: keyof, typeof, indexed types, infer

## ✅ Obiettivo

Allenarsi con i tipi avanzati di TypeScript:

- `keyof`
- `typeof`
- `indexed types`
- `infer`

---

## 1. 🔑 `keyof`

```ts
// Dato il tipo seguente:
type Libro = {
  titolo: string;
  autore: string;
  pagine: number;
};

// TODO:
// 1. Crea un tipo `ChiaveLibro` che rappresenta tutte le chiavi di `Libro`.
// 2. Usa `ChiaveLibro` per creare una funzione che accetta una chiave valida del libro e ne stampa il nome.

function stampaChiaveLibro(chiave: /* ? */) {
  console.log("Hai scelto la chiave:", chiave);
}
```

---

## 2. 📐 `typeof`

```ts
// Dato un oggetto costante:
const impostazioni = {
  tema: "dark",
  notifiche: true,
  lingua: "it",
};

// TODO:
// 1. Crea un tipo `TipoImpostazioni` usando `typeof`.
// 2. Crea una funzione che accetta un oggetto del tipo `TipoImpostazioni`.

function configura(/* ? */) {
  // ...
}
```

---

## 3. 🧩 `indexed types`

```ts
type Film = {
  titolo: string;
  anno: number;
  rating: number;
};

// TODO:
// 1. Crea un tipo `TipoValoriFilm` che rappresenta il tipo di *tutti i valori* del tipo `Film`.
// 2. Crea una funzione che accetta un valore di tipo `TipoValoriFilm`.

function stampaValore(valore: /* ? */) {
  // ...
}
```

---

## 4. 🧪 `infer`

```ts
// TODO:
// 1. Crea un tipo generico `EstraiTipoPromise<T>` che, se `T` è una `Promise<U>`, ritorna `U`. Altrimenti ritorna `mai`.
// 2. Usa il tipo con una `Promise<string>` e verifica che venga estratto correttamente.

type EstraiTipoPromise<T> = /* ? */

// const risultato: EstraiTipoPromise<Promise<string>> // dovrebbe essere "string"

```
