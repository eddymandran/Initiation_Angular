import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {Card} from '../../model/Card';
import { ProductService } from 'src/app/services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products:Product[] = [];

  data:Card[] = [];

  constructor(private productService:ProductService, private router: Router){



  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture}
      })
    });

  }

  onLikeClick(id:number){
    console.log("button like clicked with the id N° " + id)
  }
  onCardClick(id:number){
    console.log(id)
    this.router.navigateByUrl("product/" + id)
  }
}
