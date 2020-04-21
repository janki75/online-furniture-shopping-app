import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { userclass } from '../classmodels/user';
import { ManageuserService } from '../services/manageuser.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  oldPassword:string;
  newPassword:string;
  confirmPassword:string;
  userEmailId:string;
  userPassword:string;
  hide = true;
  constructor(private _route:Router,private _serv:ManageuserService,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.userEmailId=localStorage.getItem('userEmailId');
    console.log(this.userEmailId);
    this._serv.getUserById(this.userEmailId).subscribe(
      (data:userclass)=>{
        this.userPassword=data[0].userPassword;

      }
    );



  }
  onUpdate(){
    if(this.oldPassword==this.userPassword)
    {
          if(this.newPassword==this.confirmPassword){
      this.userPassword=this.newPassword;
      this._serv.updatePassword(new userclass(this.userEmailId,this.userPassword)).subscribe(
        (data:any)=>{

          alert('Your Password is successfully changed');
          this._route.navigate(['usermenu/']);
        }
      );

    }

    else
    {
      alert('new password and confirm password must be same');
    }
  }
  else{
    alert('please check your old password ');
  }

  }

  oncancel()
  {
    this._route.navigate(['usermenu/']);
  }

}
