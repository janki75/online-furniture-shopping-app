import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageorderService } from '../services/manageorder.service';
import { orderclass } from '../classmodels/order';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
random:number;
flag:boolean=true;
orderId:string;
oid:number;
orderTotalQty:number;
orderTotalPrice:number;
orderDate:Date;
constructor(private _route:Router,private _acroute:ActivatedRoute,private _orderserv:ManageorderService) { }

  ngOnInit() {
    this.oid=this._acroute.snapshot.params['orderId'];
   this.random=Math.floor((Math.random()*6)+1);
   this.orderId="00110023"+this.random+"";
   this._orderserv.getOrderById(this.oid).subscribe(
     (data:orderclass)=>{
      this.orderTotalPrice=data[0].orderTotalPrice;
      this.orderTotalQty=data[0].orderTotalQty;
      this.orderDate=data[0].orderDate;
     }
   );

  }
  ondone()
  {
    this._route.navigate(['usermenu/thankyou']);
  }



}
