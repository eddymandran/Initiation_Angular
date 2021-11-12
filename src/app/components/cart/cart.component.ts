import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from "../../model/ShoppingCart";
import {Product} from "../../model/Product";
import {getLocaleCurrencyCode} from "@angular/common";

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

  onDeleteItem(newArticle:ShoppingCart){
    let art = this.cart.find(article => article.id === newArticle.id);
    if(art !== undefined && art.quantity>1){
      art.quantity--
    }else{
      console.log("article a supprimer")
      console.log(art)
      console.log(this.cart)
    }
  }

}
