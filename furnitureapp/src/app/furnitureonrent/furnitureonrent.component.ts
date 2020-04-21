import { Component, OnInit } from '@angular/core';
import { cat } from '../classmodels/category';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagecategoryService } from '../services/managecategory.service';
import { ManagefurnitureService } from '../services/managefurniture.service';
import { furnitureclass } from '../classmodels/furniture';
import { catfurnitureclass } from '../classmodels/catfurniture';
import { UserfurnitureService } from '../services/userfurniture.service';
import { SubcatService } from '../services/subcat.service';
import { subCategory } from '../classmodels/subcat';

@Component({
  selector: 'app-furnitureonrent',
  templateUrl: './furnitureonrent.component.html',
  styleUrls: ['./furnitureonrent.component.css']
})
export class FurnitureonrentComponent implements OnInit {
arrcat:cat[]=[];
arrsubcat:subCategory[]=[];
fkCategoryId:number;
arrfurniture:furnitureclass[]=[];
arrcatfurniture:catfurnitureclass[]=[];
rentFlag:boolean;
categoryName:string="WARDROBES";
  constructor(private _furserv:ManagefurnitureService,private _subcat:SubcatService,private _route:Router,private _catserv:ManagecategoryService,private _manfurnserv:ManagefurnitureService,private _userfurserv:UserfurnitureService,private _acroute:ActivatedRoute) { }


  ngOnInit() {
    this.fkCategoryId=this._acroute.snapshot.params['fkCategoryId'];

    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
       }
    );
         this._manfurnserv.furnitureOnRentBySubCategoryId(1).subscribe(
        (data:furnitureclass[])=>{
          this.arrfurniture=data;
        }
      );

  }
  onclickheader(categoryId)
  {

    this._manfurnserv.furnitureOnRentByCategoryId(categoryId).subscribe(
      (data:furnitureclass[])=>{
        this.arrfurniture=data;
      }
    );


  }
  onclickquickview(furnitureId)
  {
    this._route.navigate(['usermenu/rentquickview',furnitureId]);
  }
  onfurnitureOnRentDetail(furnitureId)
  {
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
  onclick(subCatId)
  {
   this._furserv.furnitureOnRentBySubCategoryId(subCatId).subscribe(
     (data:furnitureclass[])=>{
      this.arrfurniture=data;
     }
   );
  }
  onlogout()
  {
    this._route.navigate(['']);
    localStorage.setItem('userEmailId','');
  }
  onclickcart()
  {
    this._route.navigate(['usermenu/cart']);
  }
  onclickmyac()
  {
    this._route.navigate(['usermenu/viewprofile']);
  }
  onclickcontact()
  {
    this._route.navigate(['usermenu/contactus']);
  }


}
