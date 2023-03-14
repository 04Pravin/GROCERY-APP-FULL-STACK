import { EventEmitter, Output, TemplateRef } from '@angular/core';
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit ,OnChanges{

  @Output() sort=new EventEmitter<{column:string,sortOption:boolean}>();

  @Input() products!:Product[];
  dataSource!:Product[];
  columns = new FormControl('');
  displayedColumns:string[]=['id','name','category', 'brand', 'price', 'discount', 'manfDate', 'expDate', 'rating', 'quantity', 'unit', 'availability', 'orginiOfCountry', 'barcodeNum', 'storage', 'benefits', 'usedFor','container', 'email', 'city', 'state', 'country', 'edit', 'delete'];
  emptyColumn: string[] = this.displayedColumns;  
  verifyColumns:boolean=true;
  options!:string[];
  field!:string;
  order!:string;
  sortedProducts!:Product[];
  roles!:string[];

  constructor(private _productService:ProductService, private _router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
    this.roles = this._authService.getUser();
    
  }

  ngOnChanges(){
    if(this.verifyColumns){
      this.options=this.displayedColumns;
    if(this.displayedColumns.length>0){
      this.verifyColumns=false;
    }
  }
  this.dataSource=this.products;
  }
  
  getDetail(product:Product){
    this._router.navigate(['/detail',product.id]);
  }

  sortData(sort:Sort){
    if(sort.direction==='asc'){
      this.sort.emit({column:sort.active,sortOption:false})
    }
    if(sort.direction==='desc'){
      this.sort.emit({column:sort.active,sortOption:true})
    }
  }

  delete(id:number){
    this._productService.delete(id).subscribe();
  }

  edit(product:Product){
    this._router.navigate(['edit',product.id]);
  }

  selectAll(){
    this.options = this.displayedColumns;
  }

  none(){
    this.options = [];
  }

  show(filter:string[]|any){
    if(filter)
      this.options=filter;
  }

  onSelect(event:any){
    this.displayedColumns = event.value;
    if(event.value == ''){
      this.displayedColumns=this.emptyColumn;
    }
  }

}
