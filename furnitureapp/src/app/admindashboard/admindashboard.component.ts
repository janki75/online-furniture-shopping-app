import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { catfurnitureclass } from '../classmodels/catfurniture';
import { MatTableDataSource } from '@angular/material';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { ManageorderService } from '../services/manageorder.service';
import { furnitureclass } from '../classmodels/furniture';
import { orderuserclass } from '../classmodels/orderuser';
import { orderclass } from '../classmodels/order';
import { oDetailFurnitureclass } from '../classmodels/orderDetailfurniture';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  displayedColumns: string[] = ['orderTotalPrice', 'orderTotalQty','userName', 'orderDate'];
  dataSource = new MatTableDataSource();
  arrorderuser:orderuserclass[]=[];

  arrorderdetailfurniture:oDetailFurnitureclass[]=[];
    i:number;
    displayedColumns1: string[] = ['fkFurnitureName','fkFurniturePrice','furnitureImg'];
  dataSource1 = new MatTableDataSource();

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(public _furserv:ManagefurnitureService,private breakpointObserver: BreakpointObserver,public _orderserv:ManageorderService) {}
  ngOnInit()
  {
    this._furserv.topFiveSellingProducts().subscribe(
      (data:oDetailFurnitureclass[])=>{
        this.arrorderdetailfurniture=data;
        this.dataSource1.data=data;

      }
    );
    this._orderserv.todayOrder().subscribe(
      (data:orderuserclass[])=>{
        this.arrorderuser=data;
        this.dataSource.data=data;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
