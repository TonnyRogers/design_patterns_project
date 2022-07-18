// um decorator pode ser uma classe concreta, abstrata ou uma interface

import { ProductProtocol } from './product-protocol';

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
