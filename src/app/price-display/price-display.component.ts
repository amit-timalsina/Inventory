import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template:`
  <div class="price-display">\${{ price }}</div>
  `,
})
export class PriceDisplayComponent implements OnInit {

  constructor() { }
@Input() price:number;
  ngOnInit(): void {
  }

}
