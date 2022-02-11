import { Bean } from './classes/bean';
import { DefaultMealBox } from './classes/default-meal-box';
import { DefaultVeganMealBox } from './classes/default-vegan-meal-box';
import { MealBox } from './classes/meal-box';
import { Meat } from './classes/meat';
import { Rice } from './classes/rice';

// sem o builder
const rice = new Rice('Camil', 5);
const beans = new Bean('Camil', 8);
const meat = new Meat('Friboi', 18);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox, mealBox.getPrice());

// com o builder
const defaultMealBox = new DefaultMealBox();
defaultMealBox.makeMeal().makeBeverage().makeDessert();
console.log(defaultMealBox.getMeal(), defaultMealBox.getMealPrice());

const veganMealBox = new DefaultVeganMealBox();
veganMealBox.makeMeal().makeBeverage().makeDessert();
console.log(veganMealBox.getMeal(), veganMealBox.getMealPrice());
