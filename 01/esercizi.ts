// Classi e OOP
// Esercizio 1

class Animale {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  verso(): void {
    console.log(`Sono un ${this.nome} e faccio un verso`);
  }
}

const animale = new Animale("Animale");
animale.verso();

// Esercizio 2
class Cane extends Animale {
  constructor(nome: string) {
    super(nome);
  }

  override verso(): void {
    console.log(`Sono ${this.nome} e faccio bau bau`);
  }
}

const cane = new Cane("Luna");
cane.verso();

// Esercizio 3 (ricerca)

{
  class ContoBancario {
    private pin: number = 1234;
    protected tipo: string = "MasterCard";

    mostraConto(): void {
      console.log(`Metodo di pagamento: ${this.tipo}`);
    }
  }

  class Persona extends ContoBancario {
    nome: string;

    constructor(nome: string) {
      super();
      this.nome = nome;
    }

    mostraDettagli(): void {
      // this.pin non accessibile perché è private
      console.log(`${this.nome} paga con ${this.tipo}`);
    }
  }

  const persona = new Persona("Giacomo");
  persona.mostraConto();
  persona.mostraDettagli();
}

// Esercizio 4 (ricerca)

class Contatore {
  private valore: number = 0;

  incrementa() {
    this.valore++;
  }
  decrementa() {
    this.valore--;
  }
  stato(): number {
    return this.valore;
  }
}
const contatore = new Contatore();
contatore.incrementa();
contatore.decrementa();
console.log(contatore.stato());

// Esercizio 5 (ricerca)

class Persona {
  constructor(public nome: string, public età: number) {}

  descrizione(): string {
    return `${this.nome} ha ${this.età} anni`;
  }
}

console.log(new Persona("Linda", 29).descrizione());

// Bonus
class Libro {
  constructor(readonly titolo: string, readonly autore: string) {}
  descrizioneLibro(): string {
    return `${this.titolo} è stato scritto da ${this.autore}`;
  }
}

console.log(new Libro("Twisted Love", "Ana Huang").descrizioneLibro());
