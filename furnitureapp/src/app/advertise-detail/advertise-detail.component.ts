import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertiseService } from '../services/advertise.service';
import { advertisement } from '../classmodels/advertise';

@Component({
  selector: 'app-advertise-detail',
  templateUrl: './advertise-detail.component.html',
  styleUrls: ['./advertise-detail.component.css']
})
export class AdvertiseDetailComponent implements OnInit {
  furnitureAdvId:number;
  furnitureAdvImg:string;
  furnitureAdvAmount:number;
  furnitureAdvBrand:string;
  furnitureAdvSize:string;
  furnitureAdvUsedTime:string;
  furnitureAdvCondition:string;
  advFkUserMobileNo:number;
  advFkUserEmailId:string;

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _adserv:AdvertiseService) { }

  ngOnInit() {
    this.furnitureAdvId=this._acroute.snapshot.params['furnitureAdvId'];
    this._adserv.getAdvertiseById(this.furnitureAdvId).subscribe(
      (data:advertisement)=>{
        this.furnitureAdvImg=data[0].furnitureAdvImg;
        this.furnitureAdvAmount=data[0].furnitureAdvAmount;
        this.furnitureAdvBrand=data[0].furnitureAdvBrand;
        this.furnitureAdvSize=data[0].furnitureAdvSize;
        this.furnitureAdvUsedTime=data[0].furnitureAdvUsedTime;
        this.furnitureAdvCondition=data[0].furnitureAdvCondition;
        this.advFkUserMobileNo=data[0].advFkUserMobileNo;
        this.advFkUserEmailId=data[0].advFkUserEmailId;



      }
    );

  }
  onback()
  {
    this._route.navigate(['usermenu/viewadvertise'])
  }

}
