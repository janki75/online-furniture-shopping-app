import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { ManageuserService } from '../services/manageuser.service';
import { userclass } from '../classmodels/user';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManageuserComponent implements OnInit {
  displayedColumns: string[] = ['action1','userEmailId','userName','action'];
  dataSource = new MatTableDataSource();
  userarr:userclass[]=[];
  i:number;
  expandedElement:userclass;
  delarr:userclass[]=[];
  constructor(public _userser:ManageuserService,public _route:Router) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._userser.getAllUser().subscribe(
      (data:userclass[])=>{
        this.dataSource.data=data;
        this.userarr=data;


      }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onuseradd(){
    this._route.navigate(['adminmenu/adduser']);
  }
  onuserdeletecheckChange(item:userclass){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  onupdateuserdetail(element){
    this._route.navigate(['adminmenu/updateuser',element.userEmailId]);
  }
  singleuserdelete(element){


    var r = confirm("Are you sure you want to Permanently delete this user?");
    if (r == true)
    {
      this._userser.deleteSingleUser(element).subscribe(
        (data:any)=>{
          this.userarr.splice(this.userarr.indexOf(element),1);
          this.dataSource.data=this.userarr;
        }
      );

    }
    else
    {

    }

}
  deleteselectedUser(){
    this._userser.deleteAllUser(this.delarr).subscribe((x:any)=> {
      for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.userarr.find(x=>x==this.delarr[this.i])){
            this.userarr.splice(this.userarr.indexOf(this.delarr[this.i]),1);
          }
      }
      this.dataSource.data=this.userarr;
    });
  }

}
