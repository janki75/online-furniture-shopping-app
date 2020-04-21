import { Component, OnInit } from '@angular/core';
import { ManageorderService } from '../services/manageorder.service';
import { orderclass } from '../classmodels/order';
import { OrderDetailService } from '../services/order-detail.service';
import { orderDetailclass } from '../classmodels/orderDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.css']
})
export class PastordersComponent implements OnInit {
  pastordercount:number;
  userEmailId:string;
  arrorder:orderclass[]=[];

  constructor(private _route:Router,private _orderdetailserv:OrderDetailService,private _orderserv:ManageorderService) { }

  ngOnInit() {
    this.userEmailId=localStorage.getItem('userEmailId');
    this._orderserv.getOrderByUserEmailId(this.userEmailId).subscribe(
      (data:orderclass[])=>{
        this.arrorder=data;
        this.pastordercount=this.arrorder.length;

      }
    );
  }
  onclick(orderId)
  {

    this._route.navigate(['usermenu/pastorderdetail',orderId]);
  }

}
