import { CarFactory } from '../factories/car-factory';
import { randomNumber } from '../utils/raondomize';
import { Vehicle } from '../vehicle/vehicle.interface';

export function randomCars(): Vehicle {
  const carFactory = new CarFactory();
  const car1 = carFactory.getVehicle('Fuscar');
  const bicycle = carFactory.getVehicle('Bicicleta');
  const car2 = carFactory.getVehicle('Celta');

  const vehicles = [car1, car2, bicycle];
  return vehicles[randomNumber(vehicles.length)];
}
