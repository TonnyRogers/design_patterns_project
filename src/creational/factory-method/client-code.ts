import { CarFactory } from './factories/car-factory';
import { randomCars } from './main/randon-vehicle';
import { randomNumber } from './utils/raondomize';

// sem factory

// const fusca = new Car('Fusca');
// fusca.pickUp('Beatriz');
// fusca.stop();

// com factory

// const carFactory = new CarFactory();
// const jipe = carFactory.getVehicle('Jipe');
// jipe.pickUp('Lucas');
// jipe.stop();

// adc complexidade
// desacoplando as classes e usando subclasses
// agora temos só um lugar que depende das classes

const customerNames = ['Tony', 'Carla', 'Lucas', 'Bruna'];

for (let iterator = 0; iterator < 10; iterator++) {
  const vehicle = randomCars();
  const name = customerNames[randomNumber(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('-------');
  // diretamente da factory
  const carFactory = new CarFactory();
  const newCar = carFactory.pickUp(name, 'Lambo');
  newCar.stop();
  console.log('-------');
}
