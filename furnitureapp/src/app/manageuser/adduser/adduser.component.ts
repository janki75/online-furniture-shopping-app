import { Component, OnInit } from '@angular/core';
import { ManageuserService } from '../../services/manageuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
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
  hide = true;
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
  addForm(item){

  }
  oncancel(){
    this._route.navigate(['adminmenu/manageuser']);
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
        console.log(data);
        alert('New user added successfully');
        this._route.navigate(['adminmenu/manageuser']);
      }
    );

  }
  onfileUploadChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }



}
