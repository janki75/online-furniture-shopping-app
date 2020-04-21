import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import { orderDetailCatclass } from '../../classmodels/orderDetailCat';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailService } from '../../services/order-detail.service';
@Component({
  selector: 'app-pastorderdetail',
  templateUrl: './pastorderdetail.component.html',
  styleUrls: ['./pastorderdetail.component.css']
})
export class PastorderdetailComponent implements OnInit {
  fkOrderId:number;
  displayedColumns: string[] = ['fkFurnitureName','fkFurniturePrice','orderFurnitureQty','orderDetailPrice','categoryName'];
  dataSource = new MatTableDataSource();
  arrorderDetailCat:orderDetailCatclass[]=[];
  orderDetailId:number;
  constructor(public _acroute:ActivatedRoute,public _serv:OrderDetailService,public _route:Router) { }
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
  onback()
  {
    this._route.navigate(['usermenu/pastorders']);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
