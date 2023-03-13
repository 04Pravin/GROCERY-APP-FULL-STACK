import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }
  reteriveUrl:string = 'http://localhost:9000/product-reterive-api/products/';
  cudUrl:string = 'http://localhost:9000/product-api/products/';


  getById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(this.reteriveUrl+'id/'+id);
  }

  pagination(offSet:number, pageSize:number):Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.reteriveUrl+'offset/'+offSet+'/pageSize/'+pageSize)
  }

  add(product:Product){
    return this._httpClient.post<Product>(this.cudUrl,product);
  }

  update(product:Product){
    return this._httpClient.put<Product>(this.cudUrl, product);
  }

  delete(id:number){
    return this._httpClient.delete<Product>(this.cudUrl+'id/'+id);
  }

  getProductPage(key:string,sort:boolean,pageIndex:number,records:number){
    return this._httpClient.get<Product[]>(this.reteriveUrl+pageIndex+'/'+records+'/'+key+'/'+sort);
  }

}
