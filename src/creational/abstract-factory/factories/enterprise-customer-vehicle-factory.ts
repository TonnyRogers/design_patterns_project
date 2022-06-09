import { CustomerAttributes } from '../customer/customer-interface';
import { EnterpriseCustomer } from '../customer/enterprise';
import { EnterpriseVehicle } from '../vehicle/enterprise';
import { Vehicle, VehicleAttributes } from '../vehicle/vehicle-interface';
import { CustomerVehicleFactory } from './customer-vechicle-factory';

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer({ age, name }: CustomerAttributes): CustomerAttributes {
    const customer = new EnterpriseCustomer({ name, age });
    return customer;
  }
  createVehicle(
    { brand, model }: VehicleAttributes,
    { age, name }: CustomerAttributes,
  ): Vehicle {
    const customer = new EnterpriseCustomer({ name, age });
    const vehicle = new EnterpriseVehicle({ brand, model }, customer);
    return vehicle;
  }
}
