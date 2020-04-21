import { Component, OnInit } from '@angular/core';
import { UsercartService } from '../services/usercart.service';
import { cartclass } from '../classmodels/cart';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { furnitureclass } from '../classmodels/furniture';
import { Router } from '@angular/router';
import { ManageorderService } from '../services/manageorder.service';
import { orderclass } from '../classmodels/order';
import { OrderDetailService } from '../services/order-detail.service';
import { orderDetailclass } from '../classmodels/orderDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
arrcart:cartclass[]=[];
orderId:number;
orderDetailId:number;
cartitemcount:number;
furniturePrice:number;
total:number=0;
i:number=0;
userEmailId:string;
delcart:number[]=[];
orderDate:Date;
j:number=0;
cartarrfordetail:cartclass[]=[];
oid:number;
arrorderDetail:orderDetailclass[]=[];

  constructor(private _orderDetailserv:OrderDetailService,private _orderserv:ManageorderService,private _route:Router,private _cartserv:UsercartService,private _furserv:ManagefurnitureService) { }

  ngOnInit() {
    this.userEmailId=localStorage.getItem('userEmailId');
    this._cartserv.getAllCartItems(this.userEmailId).subscribe(
      (data:cartclass[])=>{
        this.arrcart=data;
        this.cartitemcount=data.length;

       for(this.i=0;this.i<this.arrcart.length;this.i++)
       {
         this.total+=this.arrcart[this.i].cartAmount;
        }

       }

    );


  }
  ondeletecartitem(cartId,i)
  {


    var r = confirm("Are you sure you want to Permanently delete this order?");
    if (r == true)
    {
      this.total-=this.arrcart[i].cartAmount;
      this._cartserv.deleteCartItem(cartId).subscribe(
        (data:cartclass)=>{
          this.arrcart.splice(i,1);

           this.cartitemcount--;
        }

      );
    }
    else
    {

    }




  }
  oncheckout()
  {

   this._orderserv.addOrder(new orderclass(this.orderId,this.cartitemcount,this.total,this.userEmailId,this.orderDate)).subscribe(
      (data:any)=>{
        this.oid=data.insertId;
      this._cartserv.getAllCartItems(this.userEmailId).subscribe(
        (data:cartclass[])=>{
          for(this.j=0;this.j<data.length;this.j++)
          {

            this._orderDetailserv.addOrderDetail(new orderDetailclass(this.orderDetailId,data[this.j].cartQuantity,data[this.j].fkFurnitureName,data[this.j].fkFurniturePrice,data[this.j].cartAmount,data[this.j].fkCategoryId,this.oid,data[this.j].fkFurnitureId)).subscribe(
              (data:orderDetailclass)=>{
                for(this.i=0;this.i<this.arrcart.length;this.i++)
                 {
                   this.delcart[this.i]=this.arrcart[this.i].cartId;

                   }
                  this._cartserv.deletemultiCartItems(this.delcart).subscribe(
                    (data:any)=>{
                       this._route.navigate(['usermenu/payment']);
                    }
                  );
                  this._route.navigate(['usermenu/payment',this.oid]);
              }
            );

          }
        }
      );
      }
    );




  }
  onback()
  {
    this._route.navigate(['usermenu/'])
  }

}
