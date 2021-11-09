import {Component} from '@angular/core';
import {PRODUCTS} from "./mock-data";
import {Product} from "../../model/Products";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products: Product[] = PRODUCTS;
}
