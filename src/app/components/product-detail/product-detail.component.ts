import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = {id: 0,name: '', price: 0, stock: 0, picture: ''};
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.get(this.route.snapshot.params['id'])
      .subscribe((product: Product)=> {
        this.product= product;
      })


  }


}
