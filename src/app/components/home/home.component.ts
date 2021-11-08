import {Component} from '@angular/core';
import {PRODUCTS} from "./mock-data";

interface Product
  {
    id: number,
    name: string,
    price: number,
    stock: number,
    picture: string
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products: Product[] = PRODUCTS;
}
