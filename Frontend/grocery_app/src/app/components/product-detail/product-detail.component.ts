import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:Product;
  productId!:number;

  constructor(private _productService:ProductService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=> this.productId = data['id']
    });

    this._productService.getById(this.productId).subscribe({
      next:(data)=>this.product = data,     
      error:()=>console.log('Error while getting product based on id'),
      complete:()=>{console.log('Complete get product by id')
    console.log(this.product)}
    });

  }

}
