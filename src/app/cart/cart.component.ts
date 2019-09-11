import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  subTotal;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    let total = 0;
    this.items = this.cartService.getItems();
    this.items.forEach(function(element){
      console.log(+element.price);
      total = total+(+element.price);
    });
    this.subTotal = total;
  }
}