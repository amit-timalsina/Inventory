import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { listeners } from 'process';
/*
A component for rendering all ProductRows in the view and
Storing the currently selected Prosduct.
*/
@Component({
  selector: 'product-list',
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit {
@Input() productList:Product[];
@Output() onProductSelected: EventEmitter<Product>;
private currentProduct: Product;//local component state
  constructor() { 
    this.onProductSelected=new EventEmitter();
  }
  clicked(product:Product): void{
    this.currentProduct=product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product): boolean{
    if (!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
  ngOnInit(): void {
  }

} 
