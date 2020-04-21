import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageuserService } from '../services/manageuser.service';
import { userclass } from '../classmodels/user';
import { forgetpasswordclass } from '../classmodels/forgetpassword';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email:string;
  password:string;
  constructor(private _route:Router,private _userserv:ManageuserService) { }

  ngOnInit() {

  }

  onclicksubmit()
  {

   this._userserv.getUserById(this.email).subscribe(
     (data:userclass[])=>{
       if(data.length==0)
       {
         alert('please enter valid email id');
       }
       else
       {
         this.password=data[0].userPassword;
         localStorage.setItem('userEmailId',this.email);
         this._userserv.sendmail(new forgetpasswordclass(this.email,"Your passwordDetail","Your Password is :"+this.password)).subscribe(
           (data:any)=>{

           }
         );
         alert('Your Password has been sent to your Email Id!!Please Check your MailBox');
         this._route.navigate(['']);

       }
     }

   );
  }
oncancel()
{
  this._route.navigate(['']);
}
addForm(item){

}
}
