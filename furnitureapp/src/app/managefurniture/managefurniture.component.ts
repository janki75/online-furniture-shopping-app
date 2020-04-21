import { Component, OnInit ,ViewChild } from '@angular/core';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { furnitureclass } from '../classmodels/furniture';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { catfurnitureclass } from '../classmodels/catfurniture';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-managefurniture',
  templateUrl: './managefurniture.component.html',
  styleUrls: ['./managefurniture.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManagefurnitureComponent implements OnInit {
  displayedColumns: string[] = ['action1','furnitureName','furnitureBrand','categoryName','furniturePrice','action'];
  dataSource = new MatTableDataSource();
  expandedElement: catfurnitureclass;
  catfurniture:catfurnitureclass[]=[];
  delarr:catfurnitureclass[]=[];
  i:number;
   splitdescription:string[]=[];
  furnitureDescription:string;
  j:number=0;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public _serv:ManagefurnitureService,public _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;

    this._serv.getAllFurniture().subscribe(
      (data:catfurnitureclass[])=>{
        this.dataSource.data=data;
        this.catfurniture=data;

        this.furnitureDescription=data[0].furnitureDescription;
        this.splitdescription=this.furnitureDescription.split("=");
      }
    );

  }
  onupdate(element:furnitureclass){
    this._route.navigate(['adminmenu/updatefurniture',element.furnitureId]);
  }
  onadd(){
    this._route.navigate(['adminmenu/addfurniture']);

  }
  checkChange(item:catfurnitureclass){
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
          if(this.catfurniture.find(x=>x==this.delarr[this.i])){
            this.catfurniture.splice(this.catfurniture.indexOf(this.delarr[this.i]),1);
          }
      }
      this.dataSource.data=this.catfurniture;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onsingledelete(item){
    var r = confirm("Are you sure you want to Permanently delete this order?");
    if (r == true)
    {
      this._serv.deleteSingleFurniture(item).subscribe(
        (data:any)=>{
          this.catfurniture.splice(this.catfurniture.indexOf(item),1);
          this.dataSource.data=this.catfurniture;
        }
      );

    }
    else
    {

    }


  }
  onsale()
  {
    this._serv.onsale().subscribe(
      (data:catfurnitureclass[])=>{

        this.dataSource.data=data;
        this.catfurniture=data;

      }
    )
  }
  onrent()
  {
    this._serv.onrent().subscribe(
      (data:catfurnitureclass[])=>{

        this.dataSource.data=data;
        this.catfurniture=data;

      }
    )
  }
  onallfurnitures()
  {
    this._serv.getAllFurniture().subscribe(
      (data:catfurnitureclass[])=>{
        this.dataSource.data=data;
        this.catfurniture=data;

      }
    );
  }
  onclick()
  {
    alert('hi');
  }
}
