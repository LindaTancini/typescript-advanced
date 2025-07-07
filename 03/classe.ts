export class Persona {
  nome: string;
  eta: number;

  constructor(nome: string, eta: number) {
    this.nome = nome;
    this.eta = eta;
  }

  benvenuto(): void {
    console.log(`Benvenuta ${this.nome} con anni ${this.eta}`);
  }
}
