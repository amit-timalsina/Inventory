import { Product } from './../product.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'product-image',
  template:`
  <img class="product-image" src="{{product.img_url}}">
  `
  ,
})
export class ProductImageComponent implements OnInit {
@HostBinding('attr.class') cssClass='ui small image';
@Input() product:Product;

  ngOnInit(): void {
  }

}
