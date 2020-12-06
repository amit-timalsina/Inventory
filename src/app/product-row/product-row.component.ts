import { Product } from './../product.model';
import { Component, OnInit, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
@HostBinding('attr.class') cssClass ="item";
@Input() product:Product; 

  ngOnInit(): void {
  }

}
