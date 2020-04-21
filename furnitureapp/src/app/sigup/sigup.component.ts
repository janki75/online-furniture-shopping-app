import { Component, OnInit } from '@angular/core';
import { ManageuserService } from '../services/manageuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  hide = true;
  userEmailId:string;
  userPassword:string;
  userName:string;
  userMobileNo:number;
  userCity:string;
  userGender:string;
  userAddress:string;
  userPhoto:string;
  userType:string='user';
  selectedFile:File=null;
  flag:boolean=true;
  arrgender:string[]=[
    'female',
    'male'
  ]
  arrcity:string[]=[
    'Ahmedabad',
    'Mumbai',
    'Baroda',
    'Surat',
    'Other'
  ]
  arrtype:string[]=[
    'user',
    'admin'
  ]
  constructor(public _serv:ManageuserService,public _route:Router) { }

  ngOnInit() {
    this.userCity=this.arrcity[0];
    this.userGender=this.arrgender[0];
  }
  onclickcancel()
  {
   this._route.navigate(['']);
  }
  addForm(item){

  }
  oncancel(){
    this._route.navigate(['']);
  }
  onadduser(){
    const fd=new FormData();
    fd.append('userEmailId',this.userEmailId);
    fd.append('userPassword',this.userPassword);
    fd.append('userName',this.userName);
    fd.append('userMobileNo',this.userMobileNo+"");
    fd.append('userCity',this.userCity);
    fd.append('userGender',this.userGender);
    fd.append('userAddress',this.userAddress);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('userType',this.userType);



    this._serv.addUser(fd).subscribe(
      (data:any)=>{
        this._route.navigate(['']);
      }
    );

  }
  onfileUploadChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }



}

