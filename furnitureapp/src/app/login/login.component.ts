import { Component, OnInit } from '@angular/core';
import { ManageuserService } from '../services/manageuser.service';
import { loginclass } from '../classmodels/login';
import { userclass } from '../classmodels/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmailId:string;
  userPassword:string;
  arrlogin:userclass[]=[];
  userType:string;
  hide = true;
  constructor(public _serv:ManageuserService,public _route:Router) { }

  ngOnInit() {
  }
onlogin()
{
  this._serv.getLoginById(new userclass(this.userEmailId,this.userPassword)).subscribe(
  (data:userclass[])=>{
    if(data.length==1)
    {
      localStorage.setItem('userEmailId',this.userEmailId);
      this.userType=data[0].userType;
      if(this.userType=='admin')
      {
        this._route.navigate(['/adminmenu']);
      }
      else
      {

        this._route.navigate(['/usermenu']);
      }
    }
    else
    {
      alert('Please enter valid Password or EmailId');
    }
  }
);
}
onsignup()
{
  this._route.navigate(['/signup']);
}
}
