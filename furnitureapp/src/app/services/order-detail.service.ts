import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { orderDetailclass } from '../classmodels/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
public orderDetail_url:string='http://localhost:3000/orderDetail/';
public orderDetailById_url:string='http://localhost:3000/orderDetailById/';
  constructor(public _http:HttpClient) { }
  getOrderDetailByOrderId(orderId)
  {
    return this._http.get(this.orderDetail_url+orderId);
  }
  deleteOrderDetail(fkOrderId)
  {
    let head1=new HttpHeaders().delete('Content-Type','application/json');
    return this._http.delete(this.orderDetail_url+fkOrderId,{headers:head1});
  }
  getOrderDetailById(orderDetailId)
  {
    return this._http.get(this.orderDetailById_url+orderDetailId);

  }
  updateOrderDetail(item:orderDetailclass)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.orderDetail_url+item.orderDetailId,body,{headers:head1});
  }
  addOrderDetail(item:orderDetailclass)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.orderDetail_url,body,{headers:head1});
  }
}
