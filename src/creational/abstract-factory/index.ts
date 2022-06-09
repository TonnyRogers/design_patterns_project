import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const enterpriseVehicle = enterpriseFactory.createVehicle(
  {
    brand: 'WolksWaggen',
    model: 'Polo',
  },
  { age: 23, name: 'Renato Franklin' },
);

const individualVehicle = individualFactory.createVehicle(
  {
    brand: 'Land Rover',
    model: 'Defender 110',
  },
  { age: 21, name: 'Beatriz Marques' },
);

enterpriseVehicle.pickUp();
individualVehicle.pickUp();
