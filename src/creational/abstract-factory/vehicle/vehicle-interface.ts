export interface VehicleAttributes {
  model: string;
  brand: string;
}

export interface Vehicle extends VehicleAttributes {
  pickUp(): void;
}
