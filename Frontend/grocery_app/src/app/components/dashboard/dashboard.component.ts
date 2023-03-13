import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  offset!:number;
  pageSize!:number;
  grid:boolean = true;
  order!:string;
  field!:string;
  records:number=10;
  index:number=0;
  sortKey!:string;
  sortOption!:boolean;

  displayedColumns:string[]=['id','name','category', 'brand', 'price', 'discount', 'manfDate', 'expDate', 'rating', 'quantity', 'unit', 'availability', 'orginiOfCountry', 'barcodeNum', 'storage', 'benefits', 'usedFor','container', 'email', 'city', 'state', 'country', 'edit','delete'];

  constructor(private _productService:ProductService, private _router:Router) { }

  ngOnInit(): void {
    this.sortKey="id";
    this.sortOption=false;
    this._productService.getProductPage(this.sortKey,this.sortOption, this.index, this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>{
        console.log(this.records);
        console.log(this.index);   
        console.log('completed pagintaion and sorting')}
    });    
  }

  getDetail(product:Product){
    this._router.navigate(['/detail',product.id]);
  }

  onPageChange(PageSizeOptions:PageEvent){
    this.index = PageSizeOptions.pageIndex;
    this.records = PageSizeOptions.pageSize;
    this._productService.getProductPage(this.sortKey,this.sortOption, this.index,this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>console.log('completed pagintaion and sorting')
    });
  }

  add(){
    this._router.navigate(['add']);
  }
  change(){
    this.grid = !this.grid;
  }

  sort(sortData:{column:string,sortOption:boolean}){
    this.sortKey=sortData.column;
    this.sortOption=sortData.sortOption
    this.sortPaginator();
    
  }

  sortPaginator(){
    this._productService.getProductPage(this.sortKey,this.sortOption, this.index,this.records).subscribe({
      next:(data)=>this.products = data,
      error:()=>console.log('error while pagination and sorting'),
      complete:()=>{  
        console.log('completed pagintaion and sorting')}
    });
  }
}
