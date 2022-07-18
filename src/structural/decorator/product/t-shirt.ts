import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private name = 'Camisa';
  private price = 45.55;

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
