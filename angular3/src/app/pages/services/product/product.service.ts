import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<string[]>(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY);
  }

  getAllProducts(){
    return this.http.get<string[]>(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCTS);
  }

  saveProduct(obj: any){
    return this.http.post<any>(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY,obj);
  }

  getProductsByCat(category: string): Observable <any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT+Constant.METHODS.GET_PRODUCTS_BY_CATEGORY+category);
  }

  getProductDetails(id: string): Observable <any[]>{
    return this.http.get<any[]>(Constant.API_END_POINT+Constant.METHODS.GET_SINGLE_PRODUCT+id)
  }
}
