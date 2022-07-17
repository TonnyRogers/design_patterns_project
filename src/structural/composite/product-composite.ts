/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Component {
  abstract getPrice(): number;

  add(product: Component): void {}
  remove(product: Component): void {}
}

export class Leaf extends Component {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class Composite extends Component {
  private children: Component[] = [];

  // utilizamos o rest operator [...] no parametro para permitir multiplas inserções
  add(...products: Component[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: Component): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client Code

const smartphone = new Leaf('Iphone X', 3500);
const tablet = new Leaf('Galaxy Pad', 2300);
const notebook = new Leaf('MacBook Pro M1', 17000);
const personalBox = new Composite();

personalBox.add(smartphone, tablet, notebook);

console.log(personalBox);

const chair = new Leaf('Cadeira Ortopedica', 2000);
const table = new Leaf('Mesa Ajustavel', 2800);
const workBox = new Composite();

workBox.add(chair, table);

personalBox.add(workBox);

console.log(personalBox);
console.log(personalBox.getPrice());
