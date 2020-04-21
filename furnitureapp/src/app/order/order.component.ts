import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { ManageorderService } from '../services/manageorder.service';

import { Router } from '@angular/router';
import { orderuserclass } from '../classmodels/orderuser';
import { OrderDetailService } from '../services/order-detail.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = [ 'action1','orderTotalPrice', 'orderTotalQty','userName', 'orderDate','action'];
  dataSource = new MatTableDataSource();
  arrorderuser:orderuserclass[]=[];
  orderDate:Date;
  delarr:orderuserclass[]=[];
  i:number;
  fkOrderId:number;
  constructor(public _serv:ManageorderService,public _route:Router,public _orderDetailServ:OrderDetailService) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._serv.getAllOrdersUser().subscribe(
      (data:orderuserclass[])=>{
        this.arrorderuser=data;
        this.dataSource.data=data;
        this.orderDate=data[0].orderDate;


      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  singleorderdelete(element){
    this._serv.deleteOrder(element).subscribe(
      (data:any)=>{
        localStorage.setItem('deleteOrderId',element.orderId);

        this.arrorderuser.splice(this.arrorderuser.indexOf(element),1);
        this.dataSource.data=this.arrorderuser;
        this.fkOrderId=parseInt(localStorage.getItem('deleteOrderId'));

        this._orderDetailServ.deleteOrderDetail(this.fkOrderId).subscribe(
          (data:any)=>{

          }
        );



      }
    );
  }
  onupdateorderdetail(element){
    this._route.navigate(['adminmenu/updateorder',element.orderId]);
  }
  onorderdeletecheckChange(item:orderuserclass){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }

  }
  deleteAll(){
    this._serv.deleteAll(this.delarr).subscribe((x:any)=> {
      for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.arrorderuser.find(x=>x==this.delarr[this.i])){
            this.arrorderuser.splice(this.arrorderuser.indexOf(this.delarr[this.i]),1);
          }
      }
      this.dataSource.data=this.arrorderuser;
    });
  }
  onshowdetail(orderId)
  {
    this._route.navigate(['adminmenu/orderDetail',orderId]);
  }

}
