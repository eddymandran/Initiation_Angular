import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from "./mock-data";
import {Product} from "../../model/Products";
import {Card} from "../../model/Card";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
products: Product[] = PRODUCTS;
data: Card[]=[];


  ngOnInit() {
    this.data = this.products.map((product) =>{
      return {title: product.name, subTitle: product.price + ' €', image: product.picture}
    })
}}
