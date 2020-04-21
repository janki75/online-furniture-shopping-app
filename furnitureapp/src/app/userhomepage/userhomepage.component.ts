import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../services/managecategory.service';
import { cat } from '../classmodels/category';
import { UserfurnitureService } from '../services/userfurniture.service';
import { catfurnitureclass } from '../classmodels/catfurniture';
import { Router } from '@angular/router';
import { furnitureclass } from '../classmodels/furniture';
import { ManagefurnitureService } from '../services/managefurniture.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css'],
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
export class UserhomepageComponent implements OnInit {
arrcat:cat[]=[];
arrtopfour:furnitureclass[]=[];
arrcatfurniture:catfurnitureclass[]=[];
wardrobe_image:string='';
arr_recommand:furnitureclass[]=[];
public state = 'void';
public disableSliderButtons: boolean = false;
public images:string[]=[];
public img="";
public imagesUrl;
arrsimilarFurniture:furnitureclass[]=[];
arrlength:number=0;
j:number;
  constructor(public _route:Router,public _catserv:ManagecategoryService,public _furByCatServ:UserfurnitureService,private _furserv:ManagefurnitureService) { }

  ngOnInit() {
    this._furByCatServ.getSimilarFurniture(101,1).subscribe(
      (data:furnitureclass[])=>{
        this.arrsimilarFurniture=data;
        this.arrlength=data.length;
        for(this.j=0;this.j<this.arrsimilarFurniture.length;this.j++)
        {
          this.images[this.j]='http://localhost:3000/images/furniture_images/'+this.arrsimilarFurniture[this.j].furnitureImg;



        }

      }
    );
    this._furserv.getFurnitureBySubCat(1).subscribe(
      (data:furnitureclass[])=>{
        this.arr_recommand=data;
      }
    );
  this._furserv.topFourSellingProducts().subscribe(
    (data:furnitureclass[])=>{
      this.arrtopfour=data;


    }
  );
        this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;

      }
    );

  }
  onclickwardrobes(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickBeds(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickDiningSets(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickStudyTables(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickKitchenAppliances(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickChairsAndStools(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickSofaAndLounges(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onclickDecorPieces(fkCategoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',fkCategoryId]);
  }
  onfurnitureDetail(furnitureId)
  {
    this._route.navigate(['usermenu/furnituredetail',furnitureId]);
  }


}
