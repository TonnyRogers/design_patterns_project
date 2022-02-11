import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

// para não ter que criar a mesma estrutura de classe para cada alimento podemos ter uma classe abstrata implementa nossa interface
export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
