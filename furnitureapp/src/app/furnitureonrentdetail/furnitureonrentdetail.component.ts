import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

import { ManagecategoryService } from '../services/managecategory.service';
import { UserfurnitureService } from '../services/userfurniture.service';
import { cat } from '../classmodels/category';
import { cartclass } from '../classmodels/cart';
import { furnitureclass } from '../classmodels/furniture';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { UsercartService } from '../services/usercart.service';
import { subCategory } from '../classmodels/subcat';
import { SubcatService } from '../services/subcat.service';

@Component({
  selector: 'app-furnitureonrentdetail',
  templateUrl: './furnitureonrentdetail.component.html',
  styleUrls: ['./furnitureonrentdetail.component.css']
})
export class FurnitureonrentdetailComponent implements OnInit {
  categoryName:string="WARDROBES";

  arrcat:cat[]=[];
  arrfurniture:furnitureclass[]=[];
  constructor(private _subcat:SubcatService,private _catserv:ManagecategoryService,private _route:Router,private _furserv:ManagefurnitureService,private _userfurnitureserv:UserfurnitureService,private _cartserv:UsercartService,private _acroute:ActivatedRoute) { }
  furnitureId:number;
  furnitureName:string;
  furniturePrice:number;
  furnitureBrand:string;
  furnitureSize:string;
  fkCategoryId:number;
  furnitureImg:string;
  rentAmount:number;
  rentDescription:string;
  furnitureRating:number;
  splitrentDescription:string[]=[];
  arrsimilarFurniture:furnitureclass[]=[];
  sliderFlag:boolean=false;
  arrlength:number=0;
  i:number=0;
  starlist:string[]=[];
  cartId:number;
  cartQuantity:number;
  cartAmount:number;

 fkUserEmailId:string;
 fkFurnitureId:number;
 fkFurnitureName:string;
 fkFurnitureImg:string;
 fkFurniturePrice:number;

 fkRentAmount?:number;
 arrsubcat:subCategory[]=[];


  updatedPrice:number;
  ngOnInit() {
    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;

      }
    );
    this.cartQuantity=1;
    this.fkUserEmailId=localStorage.getItem('userEmailId');
    this.sliderFlag=true;


    this._acroute.params.subscribe(
      (x:Params)=>{
        this.furnitureId=x['furnitureId'];

    this._furserv.getFurnitureById(this.furnitureId).subscribe(
      (data:furnitureclass[])=>{
        this.furnitureName=data[0].furnitureName;
        this.furniturePrice=data[0].furniturePrice;
        this.furnitureBrand=data[0].furnitureBrand;
        this.furnitureSize=data[0].furnitureSize;
        this.fkCategoryId=data[0].fkCategoryId;
        this.furnitureImg=data[0].furnitureImg;
        this.rentDescription=data[0].rentDescription;
       this.splitrentDescription= this.rentDescription.split("=");
       this.rentAmount=data[0].rentAmount;
       this.furnitureRating=data[0].furnitureRating;
        for(this.i=1;this.i<=this.furnitureRating;this.i++)
        {
          this.starlist.push("star");
        }


        this._userfurnitureserv.getSimilarFurniture(this.fkCategoryId,this.furnitureId).subscribe(
          (data:furnitureclass[])=>{
            this.arrsimilarFurniture=data;
            this.arrlength=data.length;

          }
        );
      }
  );
}
);


  }
  onaddtocart()
{

  this.cartAmount=this.cartQuantity*this.rentAmount;

  this._cartserv.addcart(new cartclass(this.cartId,this.cartQuantity,this.cartAmount,this.fkUserEmailId,this.furnitureId,this.furnitureName,this.furnitureImg,this.furniturePrice,this.fkCategoryId,this.rentAmount)).subscribe(
    (data:cartclass)=>{

      alert('item successfully added in cart');

    }
  );
}
onclickmyac()
{
  this._route.navigate(['usermenu/viewprofile']);
}
onclickcontact()
{
  this._route.navigate(['usermenu/contactus']);
}

onqtychange()
  {

  this.updatedPrice=this.cartQuantity*this.rentAmount;
  }
  onclicksimilaritems(furnitureId)
{

  this.starlist.splice(0,this.starlist.length);
  this._route.navigate(['usermenu/furnitureonrentdetail',furnitureId]);
}
onclicksubcat(catId)
  {

 this._subcat.getSubCatByCategoryId(catId).subscribe(
  (data:subCategory[])=>{
    this.arrsubcat=data;

  }
 );
  }
  onclick()
  {
    this._route.navigate(['usermenu/furnitureonrent']);

  }
  onclickcart()
  {
    this._route.navigate(['usermenu/cart']);
  }
  onlogout()
  {
    this._route.navigate(['']);
    localStorage.setItem('userEmailId','');
  }
}
