import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }
  reteriveUrl:string = '/product-reterive-api/products/';
  cudUrl:string = '/product-api/products/';


  getById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(this.reteriveUrl+'id/'+id);
  }

  pagination(offSet:number, pageSize:number):Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.reteriveUrl+'offset/'+offSet+'/pageSize/'+pageSize)
  }

  add(product:Product){
    console.log(product);
    return this._httpClient.post<Product>(this.cudUrl,product);
  }

  update(product:Product){
    return this._httpClient.put<Product>(this.cudUrl, product);
  }

  delete(id:number){
    return this._httpClient.delete<Product>(this.cudUrl+'id/'+id);
  }

  getProductPage(key:string,order:boolean,pageIndex:number,records:number){
    return this._httpClient.get<Product[]>(this.reteriveUrl+pageIndex+'/'+records+'/'+key+'/'+order);
  }

  totalRecords(){
    return this._httpClient.get<number>(this.reteriveUrl+'count');
  }

}
