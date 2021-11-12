import {Component, OnInit} from '@angular/core';
import {Card} from '../../model/Card';
import {ProductService} from 'src/app/services/product.service';
import {Router} from "@angular/router";
import {ShoppingCart} from "../../model/ShoppingCart";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   data:Card[] = [];
   cart:ShoppingCart[]=[];

  constructor(private productService:ProductService, private router: Router){
  }


  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture}
      })
    });

    const localCart = localStorage.getItem('cart')
    this.cart = localCart!==null? JSON.parse(localCart):this.cart;
  }


  onLikeClick(id:number){
    console.log("button like clicked with the id N° " + id)
  }
  onCardClick(id:number){
    console.log(id)
    this.router.navigateByUrl("product/" + id)
  }

  inCreaseQuantityOrAdd(newArticle:ShoppingCart){
    let art = this.cart.find(article => article.id === newArticle.id);
    if(art !== undefined){
      art.quantity++
    }else{
      this.cart.push(newArticle);
    }
  }
  onAddClick(product:Card){
    let price = parseInt(product.subTitle);
    this.inCreaseQuantityOrAdd({id: product.id, name: product.title, price: price, quantity: 1})
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }

}
