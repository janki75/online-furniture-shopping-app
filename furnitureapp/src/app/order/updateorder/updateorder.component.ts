import { Component, OnInit } from '@angular/core';
import { ManageorderService } from '../../services/manageorder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { orderclass } from '../../classmodels/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css'],
  providers: [DatePipe]
})
export class UpdateorderComponent implements OnInit {
  orderTotalPrice:number;
  orderId:number;
  orderTotalQty:number;
  fkUserEmailId:string;
  orderDate:Date;
  datestr:string;


  constructor(public _serv:ManageorderService,public _acroute:ActivatedRoute,public _route:Router,private datePipe: DatePipe) { }

  ngOnInit() {
    this.orderId=this._acroute.snapshot.params['orderId'];

    this._serv.getOrderById(this.orderId).subscribe(
      (data:orderclass)=>{
        this.orderTotalPrice=data[0].orderTotalPrice;
        this.orderTotalQty=data[0].orderTotalQty;
        this.fkUserEmailId=data[0].fkUserEmailId;
        this.orderDate=data[0].orderDate;



      }
    );
  }
  oncancel(){
    this._route.navigate(['adminmenu/order']);
  }
  onupdateuser(){

    this._serv.updateOrder(new orderclass(this.orderId,this.orderTotalQty,this.orderTotalPrice,this.fkUserEmailId,this.orderDate)).subscribe(
      (data:any)=>{
        this._route.navigate(['adminmenu/order']);
      }
    );
  }
}
