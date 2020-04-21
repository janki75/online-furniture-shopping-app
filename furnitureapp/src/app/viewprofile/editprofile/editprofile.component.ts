import { Component, OnInit } from '@angular/core';
import { userclass } from '../../classmodels/user';
import { Router } from '@angular/router';
import { ManageuserService } from '../../services/manageuser.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  flag1:boolean=true;
  arrgender = [
    'male',
    'female'

  ];
  arrcity=[
    'Baroda',
    'Ahmedabad',
    'Mumbai'
  ];

  arrtype=[
    'user',
    'admin'
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
  userType:string;
  flag:boolean=false;


  selectedFile:File=null;
  selectedValue="1";

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
        this.userType=data[0].userType;
        this.userPhoto=data[0].userPhoto;

      }
    );
  }
  onUpdate()
  {
    if(this.flag){
      const fd=new FormData();
      fd.append('userEmailId',this.userEmailId);
      fd.append('userPassword',this.userPassword);
      fd.append('userName',this.userName);
      fd.append('userMobileNo',this.userMobileNo+"");
      fd.append('userCity',this.userCity);
      fd.append('userGender',this.userGender);
      fd.append('userAddress',this.userAddress);
      fd.append('userType',this.userType);
      fd.append('image',this.selectedFile,this.selectedFile.name);

      this._proserv.updateUserImage(fd).subscribe(
        (data:any)=>{
          console.log(data);
          console.log(fd);
          alert('User Deatails updated successfully');
          this._route.navigate(['usermenu/viewprofile']);
        }
      );

    }
      else
      {

      this._proserv.updateUser(new userclass(this.userEmailId,this.userPassword,this.userName,this.userMobileNo,this.userCity,this.userGender,this.userAddress,this.userType,this.userPhoto)).subscribe(
        (data:any)=>{
          console.log(data);
          this._route.navigate(['usermenu/viewprofile']);
        }
      );
      }

  }

  onChange(value){
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }

  oncancel(){
    this._route.navigate(['usermenu/viewprofile']);
  }

}
