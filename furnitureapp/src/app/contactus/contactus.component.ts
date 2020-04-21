import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  email:string;
  name1:string;
  phone:string;
  msg:string;
  constructor() { }

  ngOnInit() {
  }
onClick()
{
  alert("Your information has successfully sent");
  this.email="";
this.name1="";
this.phone="";
this.msg="";
}
}
