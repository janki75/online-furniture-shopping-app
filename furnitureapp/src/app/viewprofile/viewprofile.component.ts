import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { userclass } from '../classmodels/user';
import { ManageuserService } from '../services/manageuser.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
flag:boolean=true;
hide = true;
  arrgender = [
    'male',
    'female'

  ];
  arrcity=[
    'Baroda',
    'Ahmedabad',
    'Mumbai'
  ];
  arruser:userclass[]=[];
  userEmailId:string;
  userPassword:string;
  userName:string;
  userMobileNo:number;
  userCity:string;
  userGender:string;
  userAddress:string;
  userPhoto:string;
  constructor(private _route:Router,private _proserv:ManageuserService) { }

  ngOnInit() {
    this.userEmailId=localStorage.getItem('userEmailId');
    this._proserv.getUserById(this.userEmailId).subscribe(
      (data:userclass)=>
      {
        this.userEmailId=data[0].userEmailId;
        this.userPassword=data[0].userPassword;
        this.userName=data[0].userName;
        this.userMobileNo=data[0].userMobileNo;
        this.userCity=data[0].userCity;
        this.userGender=data[0].userGender;
        this.userAddress=data[0].userAddress;
        this.userPhoto=data[0].userPhoto;
      }
    );

  }
  onEditProfile(){
      this._route.navigate(['usermenu/editprofile']);
  }
  oncancel()
  {
    this._route.navigate(['usermenu/']);
  }
}
