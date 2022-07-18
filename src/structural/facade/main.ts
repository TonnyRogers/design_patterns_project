/* aqui é o que o código que esta em .../builder/index.ts deveria
 * utilizar caso fosse implentado utilizando o Facade
 */

import { BuilderFacade } from './builder-facade';

const builderFacade = new BuilderFacade();

builderFacade.mealWithoutBuilder();
builderFacade.defaultMeal();
builderFacade.veganMeal();
