import { saluta } from "./funzioni";
import { Persona } from "./classe";
import { Colore } from "./tipo";
import { leone, fumetto } from "./elementi";

//Esercizio 1
saluta("Linda");
//Esercizio 3
const p = new Persona("Linda", 25);
p.benvenuto();
//Esercizio 4
let mioColore: Colore = "Viola";
console.log(mioColore);
//Esercizio 5
leone("Leone");
fumetto("Fumetto");
