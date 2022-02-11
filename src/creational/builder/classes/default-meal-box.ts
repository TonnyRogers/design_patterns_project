import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Bean } from './bean';
import { Beverage } from './beverage';
import { Dessert } from './dessert';
import { MealBox } from './meal-box';
import { Meat } from './meat';
import { Rice } from './rice';

export class DefaultMealBox implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Camil', 5);
    const beans = new Bean('Camil', 8);
    const meat = new Meat('Friboi', 18);

    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('H2O', 5);

    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Torta de Limão', 15);

    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getMealPrice(): number {
    return this._meal.getPrice();
  }
}
