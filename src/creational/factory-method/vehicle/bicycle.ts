import { Vehicle } from './vehicle.interface';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} esta a caminho de ${customerName}.`);
  }
  stop(): void {
    console.log(`${this.name} deixou o cliente`);
  }
}
