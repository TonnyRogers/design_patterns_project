import { ProductDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 45;
  }

  getName(): string {
    return `${this.product.getName()} (Customized)`;
  }
}
