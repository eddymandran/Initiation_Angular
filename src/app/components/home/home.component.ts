import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {Card} from '../../model/Card';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products:Product[] = [];

  data:Card[] = [];

  constructor(private productService:ProductService){



  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture}
      })
    });

  }

  onLikeClick(){
    console.log("Like clicked")
  }
}
