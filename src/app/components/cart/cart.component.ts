import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from "../../model/ShoppingCart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:ShoppingCart[]=[];
  totalOrder:number=0;

  constructor( ) {
  }

  ngOnInit(): void {
    const localCart = localStorage.getItem('cart')
    this.cart = localCart!==null? JSON.parse(localCart):this.cart;
    this.cart.forEach(item => this.totalOrder+= (item.quantity * item.price))
  }

}
