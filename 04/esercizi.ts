// keyof, typeof, indexed types, infer

// Esercizio 1
{
  type Libro = {
    titolo: string;
    autore: string;
    pagine: number;
  };

  type ChiaveLibro = keyof Libro; // Usiamo "keyof" per ottenere le chiavi dell'oggetto
  function stampaChiaveLibro(chiave: ChiaveLibro): void {
    console.log("Hai scelto la chiave:", chiave);
  }

  stampaChiaveLibro("titolo");
  stampaChiaveLibro("pagine");
}

// Esercizio 2
const impostazioni = {
  tema: "dark",
  notifiche: true,
  lingua: "it",
};

type TipoImpostazioni = typeof impostazioni;
function configura(impostazioni: TipoImpostazioni): void {
  console.log("E' la configuzione:", impostazioni);
}
configura(impostazioni);

// Esercizio 3 (ricerca)
type Film = {
  titolo: string;
  anno: number;
  rating: number;
};

const mioFilm: Film = {
  titolo: "Inception",
  anno: 2010,
  rating: 8.8,
};

type ChiaveFilm = keyof Film;

function stampaFilmValore(chiave: ChiaveFilm): void {
  console.log("Valore:", mioFilm[chiave]);
}

stampaFilmValore("titolo");

// Esercizio 4
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type uno = ElementoArray<string[]>;
type due = ElementoArray<number[]>;
type tre = ElementoArray<boolean>;
