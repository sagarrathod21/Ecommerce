import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http: HttpClient) { }

  addPost(data: any): Observable<any>{
    return this.http.post(' http://localhost:3000/login', data);
  }
  
  
  addCart(item: any){
    return this.http.post(' http://localhost:3000/cartList', item);
  }
  
  removeCart(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/cartList/${id}`)
  }

  getCartList(): Observable<any>{
    return this.http.get('http://localhost:3000/cartList');
  }

}
