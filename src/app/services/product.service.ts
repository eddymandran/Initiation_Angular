import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../model/Product';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = "http://localhost:3000/product";
  constructor(private http: HttpClient) {

  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URL)
  }

}
