// podemos utilizar uma lib ex: lodash.cloneDeep
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  public addresses: Address[] = [];

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((item) => item.clone());
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address = new Address('Rua Paulo de Avelar', 571);
const person1 = new Person('Lucas', 10);

person1.addAddress(address);
const person2 = person1.clone();
person2.name = 'Beatriz';
person1.addresses[0].street = 'Av Brasil';

console.log(person1.addresses);
console.log(person2.addresses);
