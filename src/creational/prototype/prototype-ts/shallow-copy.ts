// utilizado para quando não é necessario falzer alteraçoes nas propriedades do prototype
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  public addresses: Address[] = [];

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

class Address {
  constructor(public street: string, public number: number) {}
}

const address = new Address('Rua Paulo de Avelar', 571);
const person1 = new Person('Lucas', 10);
person1.addAddress(address);

const person2 = person1.clone();

console.log(person1);
console.log(person2);
