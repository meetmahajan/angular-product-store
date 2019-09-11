import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  subTotal;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    let total = 0;
    this.items = this.cartService.getItems();
    this.items.forEach(function (element) {
      total = total + (+element.price);
    });
    this.subTotal = total;
  }
  clearCart() {
    // console.log(item);
    this.items = this.cartService.clearCart();
    this.subTotal = null;
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.clearCart();
    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}