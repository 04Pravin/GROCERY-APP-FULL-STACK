import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor( private fb: UntypedFormBuilder, private _productService:ProductService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  floatLabelControl = new UntypedFormControl('Available' as FloatLabelType);
  // fromattedDate!:Date;

  addForm = new UntypedFormGroup({
    id : new UntypedFormControl,
    name : new UntypedFormControl,
    category : new UntypedFormControl,
    brand : new UntypedFormControl,
    price : new UntypedFormControl,
    discount : new UntypedFormControl,
    manufDate : new UntypedFormControl,
    barcodeNum: new UntypedFormControl,
    expDate : new UntypedFormControl,
    usedFor : new UntypedFormControl,
    // ('', [
    //   Validators.required,
    //   Validators.pattern(
    //     /^(\d{4,})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/
    //   )]),
    rating : new UntypedFormControl,
    quantity : new UntypedFormControl,
    unit : new UntypedFormControl,
    availability : new UntypedFormControl,
    container : new UntypedFormControl,
    orginiOfCountry : new UntypedFormControl,
    benefits : new UntypedFormControl,
    storage : new UntypedFormControl,
    manfDetails : this.fb.group({
      email : new UntypedFormControl,
      city : new UntypedFormControl,
      state : new UntypedFormControl,
      country : new UntypedFormControl
    })
  })
  editForm!:boolean;
  id!:number;
  productById!:Product;
  flag!:boolean;
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data)=>{
      this.id = data['id'];
      console.log("inADD:-------"+this.id);
      if(this.id){
        this._productService.getById(this.id).subscribe({
         next:(data)=>{
          this.flag = true;
          console.log(data);
          this.productById=data;
          console.log("ProductBYId:-----"+this.productById);
          this.addForm.setValue(this.productById);
         }
        })
      }
      
    })
  }

  add(addForm:any){
    if(!this.flag){
      this._productService.add(addForm).subscribe({
        error:()=>console.log('Error while adding a product'),
        complete:()=>console.log('Completed adding')
      });
     }
     else{
      this._productService.update(addForm).subscribe({
        error:()=>console.log('Error while updating a product'),
        complete:()=>console.log('Updated')
      })
     }
  }

  cancel(){
    this._router.navigate(['']);
  }

}
