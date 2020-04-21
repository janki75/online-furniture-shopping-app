import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdvertiseService } from '../../services/advertise.service';
import { userclass } from '../../classmodels/user';
import { cat } from '../../classmodels/category';
import { ManagecategoryService } from '../../services/managecategory.service';

@Component({
  selector: 'app-addadvertise',
  templateUrl: './addadvertise.component.html',
  styleUrls: ['./addadvertise.component.css']
})
export class AddadvertiseComponent implements OnInit {
  arrfurniturecondition:string[]=[
    'Almost Like New',
    'Brand New',
    'Gently Used',
    'Heavily Used',
    'Unboxed'
  ];

userMobileNo:number;
arrcat:cat[]=[];
arruser:userclass[]=[];
userEmailId:string;
 furnitureAdvId:number;
 furnitureAdvAmount:number;
 furnitureAdvUsedTime:string;
 furnitureAdvSize:string;
 furnitureAdvBrand:string;
 furnitureAdvImg:string;
 advFkUserEmailId:string=localStorage.getItem('userEmailId');
 advFkUserMobileNo:number;
 furnitureAdvCondition:string;
advFkCategoryId:number;
furnitureCondition:string;
selectedFile:File=null;
selectedValue="1";

  constructor(private _advserv:AdvertiseService,private _route:Router,private _catserv:ManagecategoryService) { }

  ngOnInit() {

    this._advserv.getUserById(this.advFkUserEmailId).subscribe(
      (data:userclass[])=>{
          this.userEmailId=data[0].userEmailId;
          this.advFkUserMobileNo=data[0].userMobileNo;
          this.furnitureCondition=this.arrfurniturecondition[0];

      }
    );

    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        this.advFkCategoryId=data[0].categoryId;


      }
    );
  }
  addForm(item){
    console.log(item);
  }
  onadd(){
    const fd=new FormData();

    fd.append('furnitureAdvAmount',this.furnitureAdvAmount+"");
    fd.append('furnitureAdvUsedTime',this.furnitureAdvUsedTime);
    fd.append('furnitureAdvSize',this.furnitureAdvSize);
    fd.append('furnitureAdvBrand',this.furnitureAdvBrand);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('advFkUserEmailId',this.advFkUserEmailId);
    fd.append('advFkUserMobileNo',this.advFkUserMobileNo+"");
    fd.append('furnitureAdvCondition',this.furnitureAdvCondition);
    fd.append('advFkCategoryId',this.advFkCategoryId+"");

    this._advserv.addAdvertise(fd).subscribe(
      (data:any)=>{
        alert('New advertisement added successfully');
        this._route.navigate(['adminmenu/advertise']);

      }
    );
  }
  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }
  oncancel(){
    this._route.navigate(['adminmenu/advertise']);
  }
}
