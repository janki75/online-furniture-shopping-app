import { Component, OnInit } from '@angular/core';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { furnitureclass } from '../classmodels/furniture';

@Component({
  selector: 'app-quickviewfurniture',
  templateUrl: './quickviewfurniture.component.html',
  styleUrls: ['./quickviewfurniture.component.css']
})
export class QuickviewfurnitureComponent implements OnInit {
  furnitureId:number;
  furnitureImg:string;
  furnitureName:string;
  furniturePrice:number;
  furnitureSize:string;
  furnitureBrand:string;
  rentAmount:number;
  fkSubCatId:number;
  constructor(private _route:Router,private _managefurserv:ManagefurnitureService,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.furnitureId=this._acroute.snapshot.params['furnitureId'];
    this._managefurserv.getFurnitureById(this.furnitureId).subscribe(
      (data:furnitureclass)=>{
        this.furnitureImg=data[0].furnitureImg;
        this.furnitureName=data[0].furnitureName;
        this.furniturePrice=data[0].furniturePrice;
        this.furnitureBrand=data[0].furnitureBrand;
        this.furnitureSize=data[0].furnitureSize;
        this.rentAmount=data[0].rentAmount;
        this.fkSubCatId=data[0].fkSubCatId;

      }
    );
  }
onback()
{
  this._route.navigate(['usermenu/furnituredisplay',this.fkSubCatId])
}
}
