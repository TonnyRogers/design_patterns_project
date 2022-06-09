import { CustomerAttributes } from '../customer/customer-interface';
import { IndividualCustomer } from '../customer/individual';
import { IndividualVehicle } from '../vehicle/individual';
import { Vehicle, VehicleAttributes } from '../vehicle/vehicle-interface';
import { CustomerVehicleFactory } from './customer-vechicle-factory';

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer({ age, name }: CustomerAttributes): CustomerAttributes {
    const customer = new IndividualCustomer({ name, age });
    return customer;
  }
  createVehicle(
    { brand, model }: VehicleAttributes,
    { age, name }: CustomerAttributes,
  ): Vehicle {
    const customer = new IndividualCustomer({ name, age });
    const vehicle = new IndividualVehicle({ brand, model }, customer);
    return vehicle;
  }
}
