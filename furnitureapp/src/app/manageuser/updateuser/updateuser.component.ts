import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageuserService } from '../../services/manageuser.service';
import { userclass } from '../../classmodels/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userEmailId:string;
  userPassword:string;
  userName:string;
  userMobileNo:number;
  userCity:string;
  userGender:string;
  userAddress:string;
  userPhoto:string;
  flag:boolean=false;
  userType:string;
  selectedFile:File=null;
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
  constructor(public _acroute:ActivatedRoute,public _route:Router,public _userserv:ManageuserService) { }

  ngOnInit() {
    this.userEmailId=this._acroute.snapshot.params['id'];
    this._userserv.getUserById(this.userEmailId).subscribe(
      (data:userclass)=>{
        this.userPassword=data[0].userPassword;
        this.userName=data[0].userName;
        this.userMobileNo=data[0].userMobileNo;
        this.userGender=data[0].userGender;
        this.userCity=data[0].userCity;
       this.userAddress=data[0].userAddress;
        this.userPhoto=data[0].userPhoto;
        this.userType=data[0].userType;


      }
    );
  }

  onfileUploadChange(value){
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];

  }
  onupdateuser(){
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

      this._userserv.updateUserImage(fd).subscribe(
        (data:any)=>{
          alert('User Deatails updated successfully');
          this._route.navigate(['adminmenu/manageuser']);
        }
      );

    }
    else
    {
      this._userserv.updateUser(new userclass(this.userEmailId,this.userPassword,this.userName,this.userMobileNo,this.userCity,this.userGender,this.userAddress,this.userType)).subscribe(
        (data:any)=>{
          alert('User Deatails updated successfully');
          this._route.navigate(['adminmenu/manageuser']);
        }
      );
    }

  }
  oncancel(){
    this._route.navigate(['adminmenu/manageuser']);


  }

}
