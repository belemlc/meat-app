import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items() {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

}
