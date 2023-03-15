import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, UntypedFormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private _productService:ProductService, private _router:Router, private _activatedRoute:ActivatedRoute,
    private _authService:AuthService) { }

  addForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    discount: new FormControl(0, [Validators.required]),
    manufDate: new FormControl(),
    expDate:new FormControl(),
    rating: new FormControl(0, [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    availability: new FormControl('', [Validators.required]),
    orginiOfCountry: new FormControl('', [Validators.required]),
    barcodeNum: new FormControl(),
    storage: new FormControl('', [Validators.required]),
    benefits: new FormControl('', [Validators.required]),
    usedFor: new FormControl('', [Validators.required]),
    container: new FormControl('', [Validators.required]),
    manfDetails: new FormGroup({
      email: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    })
  })
  editForm!:boolean;
  id!:number;
  productById!:Product;
  flag!:boolean;
  roles!:string[];
  ngOnInit(): void {

    this.roles = this._authService.getUser();

    this._activatedRoute.params.subscribe((data)=>{
      this.id = data['id'];
      
      if(this.id){
        console.log("in edit:-------");
        this._productService.getById(this.id).subscribe({
         next:(data)=>{
          this.flag = true;
          console.log(data);
          this.productById=data;
          console.log("ProductBYId:-----"+this.productById);
          this.addForm.setValue(data);
          this.addForm.patchValue({manufDate:data.manufDate.toString().slice(0,10)})
          this.addForm.patchValue({expDate:data.expDate.toString().slice(0,10)})
         }
        })
      }
      
    })
  }

  add(addForm:any){
    if(!this.flag){
      this._productService.add(addForm.value).subscribe({
        next:()=>console.log(),
        error:()=>{
          console.log(addForm.value);
          console.log('Error while adding a product')},
        complete:()=>{
          console.log('Completed adding');
          this._router.navigate(['']);
        }
      });

      
     }
     else{
      this._productService.update(addForm.value).subscribe({
        error:()=>console.log('Error while updating a product'),
        complete:()=>console.log('Updated')
      })
      this._router.navigate(['']);
     }
  }

  cancel(){
    this._router.navigate(['']);
  }

}
