import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  apiurl = 'https://dummyjson.com/products';
  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}
