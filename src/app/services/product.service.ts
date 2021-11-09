import { Injectable } from '@angular/core';
import {PRODUCTS} from "../components/home/mock-data";
import {Product} from "../model/Products";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 getProducts():Observable<Product[]> {
   return of(PRODUCTS);
 }
}
