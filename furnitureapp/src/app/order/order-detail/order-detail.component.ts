import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableDataSource,MatSort} from '@angular/material';
import { OrderDetailService } from '../../services/order-detail.service';
import {  orderDetailCatclass } from '../../classmodels/orderDetailCat';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
fkOrderId:number;
displayedColumns: string[] = ['fkFurnitureName','fkFurniturePrice','orderFurnitureQty','orderDetailPrice','categoryName','action'];
dataSource = new MatTableDataSource();
arrorderDetailCat:orderDetailCatclass[]=[];
  constructor(public _acroute:ActivatedRoute,public _serv:OrderDetailService,public _route:Router) { }
orderDetailId:number;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.sort=this.sort;
    this.fkOrderId=this._acroute.snapshot.params['orderId'];
    this._serv.getOrderDetailByOrderId(this.fkOrderId).subscribe(
      (data:orderDetailCatclass[])=>{
        this.dataSource.data=data;
        this.arrorderDetailCat=data;
        this.orderDetailId=data[0].orderDetailId;




      }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onback()
  {
    this._route.navigate(['adminmenu/order']);
  }
  onupdateorderDetail(element){

    this._route.navigate(['adminmenu/updateOrderDetail',element.orderDetailId]);
  }

}
