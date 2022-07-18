import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
// nessa caso não seria necessário utilizar esse primeiro decorator, uma vez
// que ele não modifica nada no objeto...
const decoratedTShirt = new ProductDecorator(tShirt);
const oneStampTShirt = new ProductStampDecorator(decoratedTShirt);
// a fim de repetir o comportamento que o decorator fez podemos reutiliza-lo
// em outro decorator para executar a implementação/modificação.
const twoStampsTShirt = new ProductCustomizationDecorator(oneStampTShirt);

console.log({
  tShirt: { price: tShirt.getPrice(), name: tShirt.getName() },
  oneStampTShirt: {
    price: oneStampTShirt.getPrice(),
    name: oneStampTShirt.getName()
  },
  twoStampsTShirt: {
    price: twoStampsTShirt.getPrice(),
    name: twoStampsTShirt.getName()
  }
});
