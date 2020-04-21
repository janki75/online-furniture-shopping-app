import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from '../services/advertise.service';
import { advertisement } from '../classmodels/advertise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-all-advertise',
  templateUrl: './see-all-advertise.component.html',
  styleUrls: ['./see-all-advertise.component.css']
})
export class SeeAllAdvertiseComponent implements OnInit {
arradvertise:advertisement[]=[];
  constructor(private _advserv:AdvertiseService,private _route:Router) { }

  ngOnInit() {
  this._advserv.getAllAdvertiseWithoutJoin().subscribe(
    (data:advertisement[])=>{
      this.arradvertise=data;

    }
  );
  }
  onDetail(furnitureAdvId)
  {
    this._route.navigate(['usermenu/advertiseDetail',furnitureAdvId]);
  }

}
