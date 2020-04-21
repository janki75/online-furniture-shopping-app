import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartclass } from '../classmodels/cart';

@Injectable({
  providedIn: 'root'
})
export class UsercartService {
  addcart_url:string='http://localhost:3000/cart/';
  multidelcartitems_url:string='http://localhost:3000/delmulticartitems/';
  constructor(private _http:HttpClient) { }
  addcart(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

  return  this._http.post(this.addcart_url,body,{headers:head1});
  }
  getAllCartItems(fkUserEmailId)
  {
    return this._http.get(this.addcart_url+fkUserEmailId);
  }
  deleteCartItem(cartId)
  {
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.addcart_url+cartId,{headers:head1});
  }
  deletemultiCartItems(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.multidelcartitems_url,body,{headers:head1});
  }
}
