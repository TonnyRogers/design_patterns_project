/* aqui vamos implementar uma Facade para
 * o código em src/creational/builder/index.ts
 */

import { Bean } from '../../creational/builder/classes/bean';
import { DefaultMealBox } from '../../creational/builder/classes/default-meal-box';
import { DefaultVeganMealBox } from '../../creational/builder/classes/default-vegan-meal-box';
import { MealBox } from '../../creational/builder/classes/meal-box';
import { Meat } from '../../creational/builder/classes/meat';
import { Rice } from '../../creational/builder/classes/rice';

export class BuilderFacade {
  private defaultMealBox = new DefaultMealBox();
  private veganMealBox = new DefaultVeganMealBox();
  private rice = new Rice('Camil', 5);
  private beans = new Bean('Camil', 8);
  private meat = new Meat('Friboi', 18);
  private mealBox = new MealBox();

  mealWithoutBuilder(): void {
    this.mealBox.add(this.rice, this.beans, this.meat);
    console.log(this.mealBox, this.mealBox.getPrice());
  }

  defaultMeal(): void {
    this.defaultMealBox.makeMeal().makeBeverage().makeDessert();
    console.log(
      this.defaultMealBox.getMeal(),
      this.defaultMealBox.getMealPrice()
    );
  }

  veganMeal(): void {
    this.veganMealBox.makeMeal().makeBeverage().makeDessert();
    console.log(this.veganMealBox.getMeal(), this.veganMealBox.getMealPrice());
  }
}
