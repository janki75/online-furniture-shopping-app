import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
import { AdvertiseService } from '../services/advertise.service';


import { advertisement } from '../classmodels/advertise';
import { catAdvertisementUser } from '../classmodels/catAdvUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {

  dataSource=new MatTableDataSource();
  arrcatadvertise:catAdvertisementUser[]=[];
  displayedColumns: string[] = ['action',
  'furnitureAdvAmount',
 'userName','categoryName','update'];
  delarr:catAdvertisementUser[]=[];
  advarr:advertisement[]=[];

  i:number;


  userName:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _serv:AdvertiseService,private _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._serv.getAllAdvertise().subscribe(
      (data:catAdvertisementUser[])=>{
        this.arrcatadvertise=data;
        this.dataSource.data=this.arrcatadvertise;
      }
    );


  }
  onSingleDelete(item){


    var r = confirm("Are you sure you want to Permanently delete this Advertise?");
    if (r == true)
    {
      this._serv.deleteAdvertise(item).subscribe(
        (data:any)=>{
          this.arrcatadvertise.splice(this.arrcatadvertise.indexOf(item),1);
          this.dataSource.data=this.arrcatadvertise;
        }
      );
    }
    else
    {

    }





  }

  onDelchange(item){
    if(this.delarr.find(x=>x==item))
    {
       this.delarr.splice(this.delarr.indexOf(item),1)
    }
   else
   {
       this.delarr.push(item);
   }

  }
  onAdd(){
    this._route.navigate(['adminmenu/addadvertise']);
  }
  onupdate(item){
      this._route.navigate(['adminmenu/updateadvertise',item.furnitureAdvId]);
  }
  onAllDelete(){
    this._serv.deleteAllAdvertise(this.delarr).subscribe(
      (x:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++)
        {
        if(this.arrcatadvertise.find(x=>x==this.delarr[this.i]))
        {
        this.arrcatadvertise.splice(this.arrcatadvertise.indexOf(this.delarr[this.i]),1);
        }
        }
        this.dataSource.data=this.arrcatadvertise;
      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
