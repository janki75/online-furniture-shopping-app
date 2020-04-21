import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { orderclass } from '../classmodels/order';

@Injectable({
  providedIn: 'root'
})
export class ManageorderService {
  order_url:string='http://localhost:3000/order/';
  delallorder_url:string='http://localhost:3000/delallorder/'
  todayOrder_url:string='http://localhost:3000/todayorder/';
  orderByUserEmailId_url:string='http://localhost:3000/orderByUserEmailId/';
  constructor(private _http:HttpClient) { }
  getAllOrdersUser()
  {
    return this._http.get(this.order_url);
  }
  getOrderByUserEmailId(userEmailId)
  {
    return this._http.get(this.orderByUserEmailId_url+userEmailId);
  }
  addOrder(item:orderclass)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.order_url,body,{headers:head1});
  }
  deleteOrder(item:orderclass){
    let head1=new HttpHeaders().delete('Content-Type','application/json');
    return this._http.delete(this.order_url+item.orderId,{headers:head1})
  }
  getOrderById(orderId)
  {
    return this._http.get(this.order_url+orderId);
  }
  updateOrder(item:orderclass){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.order_url+item.orderId,body,{headers:head1});

  }
  deleteAll(item:orderclass[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.delallorder_url,body,{headers:head1});
  }
  todayOrder()
  {
    return this._http.get(this.todayOrder_url);
  }
}
