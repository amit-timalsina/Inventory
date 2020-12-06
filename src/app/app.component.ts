import { Component,EventEmitter} from '@angular/core';
import { Product } from './product.model';
/*
  @InventoryApp: top level component of our application 
*/
@Component({
  selector: "inventory-app-root",
  templateUrl: './app.component.html'
})
export class AppComponent {
  products:Product[];

constructor(){
  this.products=[new Product(
    "NICEHAT",
    "A Nice Black Hat",
    "/assets/images/products/black-hat.jpg",
    ["Men","Accesories","Hats"],
    29.99
  ),
  new Product(
  "NEATO JACKET",
  "Blue Jacket",
  "/assets/images/products/blue-jacket.jpg",
  ['Women','Apparel','Jackets and Vests'],
  238.99),
  new Product(
    "MYSHOES",
    "Black running shoes",
    "/assets/images/products/black-shoes.jpg",
    ['Men','Shoes','Running Shoes'],
    109.99
  )
  ]; //the code will give us some products to work with our app.
}

productWasSelected(product: Product): void {
  console.log(`${product.name} was clicked.`);
}
}

