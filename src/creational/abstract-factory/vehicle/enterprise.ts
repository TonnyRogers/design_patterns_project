import { Customer } from '../customer/customer-interface';
import { Vehicle } from './vehicle-interface';

export class EnterpriseVehicle implements Vehicle {
  model: string;
  brand: string;

  constructor(
    {
      brand,
      model,
    }: {
      model: string;
      brand: string;
    },
    private readonly customer: Customer,
  ) {
    this.brand = brand;
    this.model = model;
  }

  pickUp(): void {
    console.log(
      `${this.brand}/${this.model} esta buscando ${this.customer.name}`,
    );
  }

  public get presentation() {
    return `Brand: ${this.brand} \n Model: ${this.model}`;
  }
}
