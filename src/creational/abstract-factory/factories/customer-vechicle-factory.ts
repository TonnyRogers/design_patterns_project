import { Customer, CustomerAttributes } from '../customer/customer-interface';
import { VehicleAttributes } from '../vehicle/vehicle-interface';
import { Vehicle } from '../vehicle/vehicle-interface';

export interface CustomerVehicleFactory {
  createCustomer(props: CustomerAttributes): Customer;
  createVehicle(
    props: VehicleAttributes,
    customer: CustomerAttributes,
  ): Vehicle;
}
