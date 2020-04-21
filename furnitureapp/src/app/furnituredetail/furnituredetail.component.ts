import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { furnitureclass } from '../classmodels/furniture';
import { UserfurnitureService } from '../services/userfurniture.service';
import { UsercartService } from '../services/usercart.service';
import { cartclass } from '../classmodels/cart';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';


@Component({
  selector: 'app-furnituredetail',
  templateUrl: './furnituredetail.component.html',
  styleUrls: ['./furnituredetail.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class FurnituredetailComponent implements OnInit {
  public state = 'void';
  public disableSliderButtons: boolean = false;
arrcart:cartclass[]=[];
furnitureId:number;

furnitureName:string;
furniturePrice:number;
furnitureBrand:string;
furnitureSize:string;
fkCategoryId:number;
furnitureImg:string;
arrsimilarFurniture:furnitureclass[]=[];
sliderFlag:boolean=false;
arrlength:number=0;
cartId:number;
cartQuantity:number;
cartAmount:number;
fkUserEmailId:string;
updatedPrice:number;
furnitureDescription:string;
furnitureRating:number;
fkRentAmount:number=0;
splitdescription:string[]=[];
i:number;
j:number;
k:number;
cartflag:number=0;
starlist:string[]=[];
public images:string[]=[];
public img="";
public imagesUrl;
fkSubCatId:number;
  constructor(private _cartserv:UsercartService,public _acroute:ActivatedRoute,public _furserv:ManagefurnitureService,public _userfurnitureserv:UserfurnitureService,private _route:Router) { }

  ngOnInit() {

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
        this.updatedPrice=this.furniturePrice*1;
        this.furnitureDescription=data[0].furnitureDescription;
        this.fkSubCatId=data[0].fkSubCatId;
        this.furnitureRating=data[0].furnitureRating;
        this.splitdescription=this.furnitureDescription.split("=");

        for(this.i=1;this.i<=this.furnitureRating;this.i++)
        {
          this.starlist.push("star");
        }
        this._userfurnitureserv.getSimilarFurniture(this.fkCategoryId,this.furnitureId).subscribe(
          (data:furnitureclass[])=>{
            this.arrsimilarFurniture=data;
            this.arrlength=data.length;
            for(this.j=0;this.j<this.arrsimilarFurniture.length;this.j++)
            {
              this.images[this.j]='http://localhost:3000/images/furniture_images/'+this.arrsimilarFurniture[this.j].furnitureImg;



            }

          }
        );
      }
  );
}
);

}
onclicksimilaritems(furnitureId)
{

  this.starlist.splice(0,this.starlist.length);
  this._route.navigate(['usermenu/furnituredetail',furnitureId]);
}
onaddtocart()
{
  this._cartserv.getAllCartItems(this.fkUserEmailId).subscribe(
    (data:cartclass[])=>{
      this.arrcart=data;
  for(this.k=0;this.k<this.arrcart.length;this.k++)
  {

    if(this.furnitureId==this.arrcart[this.k].fkFurnitureId)
    {
      console.log(this.arrcart[this.k].fkFurnitureId);
      this.cartflag=1;
      break;
    }
  }
  if(this.cartflag==1)
  {
    alert('This furniture is already in the cart...please check the cart');
    this._route.navigate(['usermenu/cart']);

  }
  else
  {
    this.cartAmount=this.cartQuantity*this.furniturePrice;

    this._cartserv.addcart(new cartclass(this.cartId,this.cartQuantity,this.updatedPrice,this.fkUserEmailId,this.furnitureId,this.furnitureName,this.furnitureImg,this.furniturePrice,this.fkCategoryId,this.fkRentAmount)).subscribe(
      (data:cartclass)=>{
        console.log(data);
        alert('item successfully added in cart');
      }
    );
  }

    }
  );


}
onqtychange()
{

  this.updatedPrice=this.cartQuantity*this.furniturePrice;
}
imageRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

moveLeft() {
  if (this.disableSliderButtons) {
    return;
  }
  this.state = 'right';
  this.imageRotate(this.imagesUrl, true);
}

moveRight() {
  if (this.disableSliderButtons) {
    return;
  }
  this.state = 'left';
  this.imageRotate(this.imagesUrl, false);
}

onFinish($event) {
  this.state = 'void';
  this.disableSliderButtons = false;
}

onStart($event) {
  this.disableSliderButtons = true;
}
onback()
{
  this._route.navigate(['usermenu/furnituredisplay',this.fkSubCatId])
}
}
