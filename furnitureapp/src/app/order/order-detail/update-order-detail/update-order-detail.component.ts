import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailService } from '../../../services/order-detail.service';
import { orderDetailclass } from '../../../classmodels/orderDetail';
import { ManageorderService } from '../../../services/manageorder.service';
import { orderclass } from '../../../classmodels/order';

@Component({
  selector: 'app-update-order-detail',
  templateUrl: './update-order-detail.component.html',
  styleUrls: ['./update-order-detail.component.css']
})
export class UpdateOrderDetailComponent implements OnInit {
orderDeatailId:number;
orderFurnitureQty:number;
fkFurnitureName:string;
fkFurniturePrice:number;
orderDetailPrice:number;
fkCategoryId:number;
fkOrderId:number;

orderTotalPrice:number;
orderTotalQty:number;
fkUserEmailId:string;
orderDate:Date;
orderDetailPriceWithoutUpdate:number;
finalOrdeUpdatedPrice:number;
arrqty:number[]=[1,2,3,4,5,6,7,8,9,10];

  constructor(public _orderserv:ManageorderService,public _acroute:ActivatedRoute,public _orderDeatilByIdServ:OrderDetailService,public _route:Router) { }

  ngOnInit() {

    this.orderDeatailId=this._acroute.snapshot.params['orderDetailId'];
    this._orderDeatilByIdServ.getOrderDetailById(this.orderDeatailId).subscribe(
      (data:orderDetailclass)=>{
        this.orderFurnitureQty=data[0].orderFurnitureQty;
        this.fkFurnitureName=data[0].fkFurnitureName;
        this.fkFurniturePrice=data[0].fkFurniturePrice;
        this.orderDetailPrice=data[0].orderDetailPrice;
        this.orderDetailPriceWithoutUpdate=this.orderDetailPrice;
        this.fkCategoryId=data[0].fkCategoryId;
        this.fkOrderId=data[0].fkOrderId;
        this._orderserv.getOrderById(this.fkOrderId).subscribe(
          (data:orderclass)=>{
            this.orderTotalPrice=data[0].orderTotalPrice;
            this.orderTotalQty=data[0].orderTotalQty;
            this.fkUserEmailId=data[0].fkUserEmailId;
            this.orderDate=data[0].orderDate;


          }
        );
      }
    );
   }
   onselectionchange()
   {
     this.orderDetailPrice=this.fkFurniturePrice*this.orderFurnitureQty;
   }
   oncancel()
   {

    this._route.navigate(['adminmenu/order']);
   }
   onupdate()
   {
     this._orderDeatilByIdServ.updateOrderDetail(new orderDetailclass(this.orderDeatailId,this.orderFurnitureQty,this.fkFurnitureName,this.fkFurniturePrice,this.orderDetailPrice,this.fkCategoryId,this.fkOrderId)).subscribe(
       (data:any)=>{
      this.finalOrdeUpdatedPrice=this.orderTotalPrice-this.orderDetailPriceWithoutUpdate+this.orderDetailPrice;
        this._orderserv.updateOrder(new orderclass(this.fkOrderId,this.orderTotalQty,this.finalOrdeUpdatedPrice,this.fkUserEmailId,this.orderDate)).subscribe(
          (data:any)=>{
            console.log(data);
            this._route.navigate(['adminmenu/order']);
          }
        );

       }
     );
   }
}
