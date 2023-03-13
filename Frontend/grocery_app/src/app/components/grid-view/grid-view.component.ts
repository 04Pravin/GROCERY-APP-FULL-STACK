import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() products!:Product[];
  constructor(private _productService:ProductService, private _router:Router) { }

  ngOnInit(): void {

    console.log(this.products);
    // this._productService.getAll().subscribe({
    //   next:(data)=>this.products = data,
    //   error:()=>console.log('error while getting all'),
    //   complete:()=>{
    //     console.log('completed get all');
    //     console.log(this.products);
    //   }
    // });
  }
  getDetail(product:Product){
    this._router.navigate(['/detail',product.id]);
  }

}
