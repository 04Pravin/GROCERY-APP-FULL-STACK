import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:Product[]=[];
  dataSource:any;
  expDate!:Date

  displayedColumns:string[]=['id','name','category', 'brand', 'price', 'discount', 'manfDate', 'expDate', 'rating', 'quantity', 'unit', 'availability', 'orginiOfCountry', 'barcodeNum', 'storage', 'benefits', 'usedFor','container', 'email', 'city', 'state', 'country'];

  constructor(private _productService:ProductService, private _router:Router) { }

  ngOnInit(): void {
    this._productService.getAll().subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while getting all'),
      complete:()=>{
        console.log('completed get all');
        this.dataSource = this.products;
      }
    });
  }

  getDetail(product:Product){
    this._router.navigate(['/detail',product.id]);
  }

}
