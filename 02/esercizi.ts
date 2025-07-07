// Modificatori di Accesso Avanzati e Readonly

// Esercizio 1
class Auto {
  readonly targa: string;
  private velocita: number = 0;

  constructor(targa: string) {
    this.targa = targa;
  }

  // Esercizio 2
  public accelera(incremento: number): void {
    if (incremento > 0) {
      this.velocita += incremento;
    }
  }

  public mostraVelocita(): number {
    return this.velocita;
  }
}
// Esercizio 3 -> Perchè esce l'errore? Una proprietà readonly può essere assegnata solo nel costruttore, Dopo l’assegnazione iniziale, non puoi più modificarla
{
  class Auto {
    readonly targa: string;

    constructor(targa: string) {
      this.targa = targa;
    }
  }

  const auto = new Auto("AB123CD");
  console.log(auto.targa);
  //auto.targa = "XF1234D";
}

// Esercizio 4 (ricerca)

{
  class Contatore {
    private _conteggio: number = 0;

    // Proprietà pubblica e readonly che espone il valore, ma non lo rende modificabile da fuori
    public get conteggio(): number {
      return this._conteggio;
    }

    public incrementa(): void {
      this._conteggio++;
    }
  }
  const c = new Contatore();

  console.log(c.conteggio);
  c.incrementa();
  console.log(c.conteggio);
  c.incrementa();
  console.log(c.conteggio);
}

// Esercizio 5
class ContoBancario {
  private _saldo: number = 100;

  public get saldo(): number {
    return this._saldo;
  }

  public deposita(): void {
    this._saldo++;
  }
  public preleva(): void {
    this._saldo--;
  }
}

const b = new ContoBancario();
console.log(b.saldo);
b.deposita();
console.log(b.saldo);
b.preleva();
console.log(b.saldo);

// Bonus
{
  class Libro {
    readonly titolo: string;
    readonly autore: string;

    constructor(titolo: string, autore: string) {
      this.titolo = titolo;
      this.autore = autore;
    }

    public stampa(): void {
      console.log(`"${this.titolo}" scritto da ${this.autore}`);
    }
  }
  const libro = new Libro(
    "Se i gatti scomparissero dal mondo",
    "Genki Kawamura"
  );
  libro.stampa();
}
