import { Component, OnInit } from '@angular/core';
import { UserfurnitureService } from '../services/userfurniture.service';
import { catfurnitureclass } from '../classmodels/catfurniture';
import { ManagecategoryService } from '../services/managecategory.service';
import { cat } from '../classmodels/category';
import { ActivatedRoute, Router } from '@angular/router';
import { furnitureclass } from '../classmodels/furniture';
import { SubcatService } from '../services/subcat.service';
import { subCategory } from '../classmodels/subcat';
import { ManagefurnitureService } from '../services/managefurniture.service';

@Component({
  selector: 'app-furnituredisplay',
  templateUrl: './furnituredisplay.component.html',
  styleUrls: ['./furnituredisplay.component.css']
})
export class FurnituredisplayComponent implements OnInit {

  constructor(private _subcat:SubcatService,private _furserv:ManagefurnitureService,private _subcatserv:SubcatService,private _route:Router,public _catserv:ManagecategoryService,private _furByCatServ:UserfurnitureService,public _acroute:ActivatedRoute ) { }
  arrcatfurniture:catfurnitureclass[]=[];
  arrcat:cat[]=[];
  categoryName:string="WARDROBES";
  fkCategoryId:number;
  subcatId:number;
  arrfurniture:furnitureclass[]=[];
  arrsubcat:subCategory[]=[];
  ngOnInit() {
    this.subcatId=this._acroute.snapshot.params['subCatId'];

    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
       }
    );

     this._furserv.getFurnitureBySubCat(this.subcatId).subscribe(
       (data:furnitureclass[])=>{
         this.arrfurniture=data;

       }
     );
  }
  onclickheader(categoryId)
  {

    this._furByCatServ.getFurnitureByCategoryId(categoryId).subscribe(
      (data:furnitureclass[])=>{
        this.arrfurniture=data;
      }
    );


  }
  onclickquickview(furnitureId)
  {
    this._route.navigate(['usermenu/quickview',furnitureId]);
  }
  onfurnitureDetail(furnitureId)
  {
    this._route.navigate(['usermenu/furnituredetail',furnitureId]);
  }
  onclickcart()
  {
    this._route.navigate(['usermenu/cart']);
  }
  onclicksubcat(subCatId)
  {

 this._subcat.getSubCatByCategoryId(subCatId).subscribe(
  (data:subCategory[])=>{
    this.arrsubcat=data;

  }
 );
  }
  onclick(subCatId)
  {
    this._furserv.getFurnitureBySubCat(subCatId).subscribe(
      (data:furnitureclass[])=>{
        this.arrfurniture=data;
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
  onlogout()
  {
    this._route.navigate(['']);
    localStorage.setItem('userEmailId','');
  }

}
