import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products!:Product[];
  dataSource:any;
  offset!:number;
  pageSize!:number;
  grid:boolean = true;
  field!:string;
  records!:number;
  index!:number;
  order!:boolean;
  roles!:string[];
  length!:any;
  
  displayedColumns:string[]=['id','name','category', 'brand', 'price', 'discount', 'manfDate', 'expDate', 'rating', 'quantity', 'unit', 'availability', 'orginiOfCountry', 'barcodeNum', 'storage', 'benefits', 'usedFor','container', 'email', 'city', 'state', 'country', 'edit','delete'];

  
  constructor(private _productService:ProductService, private _router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
    this.roles = this._authService.getUser();

    this.index = 0;
    this.records = 10;
    this.field="id";
    this.order=false;
    this._productService.getProductPage(this.field,this.order, this.index, this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>{
        console.log('records'+this.records);
        console.log(this.index);   
        console.log('completed pagintaion and sorting')}
    });    

    this._productService.totalRecords().subscribe({
      next:(data)=>this.length = data
    })
  }

  getDetail(product:Product){
    this._router.navigate(['/detail',product.id]);
  }

  onPageChange(PageSizeOptions:PageEvent){
    this.index = PageSizeOptions.pageIndex;
    this.records = PageSizeOptions.pageSize;
    this._productService.getProductPage(this.field,this.order, this.index,this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>console.log('completed pagintaion and sorting')
    });
  }

  add(){
    this._router.navigate(['add']);
  }
  
  view(){
    this.grid = !this.grid;
  }

  sort(sortData:{column:string,sortOption:boolean}){
    this.field=sortData.column;
    this.order=sortData.sortOption
     this._productService.getProductPage(this.field,this.order, this.index,this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>{  
        console.log('completed pagintaion and sorting')}
    });
    
  }
}
