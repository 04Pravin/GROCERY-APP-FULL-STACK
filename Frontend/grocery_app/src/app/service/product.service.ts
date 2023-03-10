import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }
  reteriveUrl:string = 'http://localhost:8082/product-reterive-api/products/';

  getAll():Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.reteriveUrl);
  }

  getById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(this.reteriveUrl+'id/'+id);
  }

}
