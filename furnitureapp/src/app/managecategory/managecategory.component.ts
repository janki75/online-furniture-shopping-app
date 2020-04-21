import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { ManagecategoryService } from '../services/managecategory.service';
import { cat } from '../classmodels/category';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { SubcatService } from '../services/subcat.service';
@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {
  displayedColumns: string[] = ['action1','categoryName','action'];
  dataSource = new MatTableDataSource();
  arrcat:cat[]=[];
  delarr:cat[]=[];
  i:number;
  fkCategoryId:number;
  constructor(private _subcatserv:SubcatService,private _serv:ManagecategoryService,public _route:Router,private _furnitureserv:ManagefurnitureService) { }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._serv.getAllCategory().subscribe(
      (data:any)=>{
        this.arrcat=data;
        this.dataSource.data=data;

      }
    );

  }
  checkChange(item:cat){
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
          if(this.arrcat.find(x=>x==this.delarr[this.i])){
            this.arrcat.splice(this.arrcat.indexOf(this.delarr[this.i]),1);
          }
      }
      this.dataSource.data=this.arrcat;
    });
  }
  onadd(){
    this._route.navigate(['adminmenu/addcategory']);
  }
  onupdate(item:cat){
this._route.navigate(['adminmenu/updatecategory',item.categoryId]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onsingledelete(item:cat){


    var r = confirm("Are you sure you want to Permanently delete this category?");
    if (r == true)
    {
      localStorage.setItem('categoryId',item.categoryId+"");
      this._serv.categorySingleDelete(item).subscribe(
        (data:any)=>{
          this.arrcat.splice(this.arrcat.indexOf(item),1);
          this.dataSource.data=this.arrcat;
          this.fkCategoryId=parseInt(localStorage.getItem('categoryId'));
          console.log(this.fkCategoryId);
          this._subcatserv.delSubCatByCat(this.fkCategoryId).subscribe(
            (data:any)=>{
              console.log(data);
              this._furnitureserv.deleteFurnitureByCategory(this.fkCategoryId).subscribe(
                (data:any)=>{


                }
              );

            }
          );

        }
      );
    }
    else
    {

    }







  }
}
