import { Customer } from './customer-interface';

export class IndividualCustomer implements Customer {
  name: string;
  age: number;

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }

  public get presentation() {
    return `I'm ${this.name}, ${this.age} old.`;
  }
}
