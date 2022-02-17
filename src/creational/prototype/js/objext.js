const personPrototype = {
  firstName: 'Tonio',
  lastName: 'Miguel',
  age: 33,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const other = Object.create(personPrototype);

console.log(other);
other.firstName = 'Bruna';
console.log(other);
