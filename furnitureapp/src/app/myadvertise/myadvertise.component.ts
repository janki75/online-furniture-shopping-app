import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from '../services/advertise.service';
import { advertisement } from '../classmodels/advertise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myadvertise',
  templateUrl: './myadvertise.component.html',
  styleUrls: ['./myadvertise.component.css']
})
export class MyadvertiseComponent implements OnInit {
userEmailId:string;
arradvertise:advertisement[]=[];
  constructor(private _advserv:AdvertiseService,private _route:Router) { }

  ngOnInit() {
    this.userEmailId=localStorage.getItem('userEmailId');
    this._advserv.getAdvertiseByEmail(this.userEmailId).subscribe(
      (data:advertisement[])=>{
        this.arradvertise=data;


      }
    );
  }
  onDetail(furnitureAdvId)
  {
    this._route.navigate(['usermenu/advertiseDetail',furnitureAdvId]);
  }
  onSingleDelete(item){


    var r = confirm("Are you sure you want to Permanently delete this Advertise?");
    if (r == true)
    {
      this._advserv.deleteAdvertise(item).subscribe(
        (data:any)=>{

          this.arradvertise.splice(this.arradvertise.indexOf(item),1);

        }
      );
    }
    else
    {

    }





  }

}
