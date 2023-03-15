import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:Product;
  productId!:number;
  roles!:string[];

  constructor(private _productService:ProductService, private _router:Router, private _activatedRoute:ActivatedRoute, private _authService:AuthService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=> this.productId = data['id']
      
    });
    console.log("PID:-----"+this.productId);
    this._productService.getById(this.productId).subscribe({
      next:(data)=>this.product = data,     
      error:()=>console.log('Error while getting product based on id'),
      complete:()=>{console.log('Complete get product by id')
    console.log(this.product)}
    });

    this.roles = this._authService.getUser();

  }

  delete(){
    this._productService.delete(this.productId).subscribe({
      error:()=>console.log('error while deleting'),
      complete:()=>console.log('deleted')
    });
  }

  edit(){
    this._router.navigate(['edit',this.productId]);
  }
}
