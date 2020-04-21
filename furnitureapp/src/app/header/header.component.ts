import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../services/managecategory.service';
import { cat } from '../classmodels/category';
import { Router } from '@angular/router';
import { SubcatService } from '../services/subcat.service';
import { subCategory } from '../classmodels/subcat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _subcat:SubcatService,private _route:Router,private _catserv:ManagecategoryService) { }
  arrcat:cat[]=[];
arrsubcat:subCategory[]=[];
  ngOnInit() {
    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;

      }
    );
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
    this._route.navigate(['usermenu/furnituredisplay',subCatId]);

  }
  onclickheader(categoryId)
  {
    this._route.navigate(['usermenu/furnituredisplay',categoryId]);
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
  onclickplaceadvertise()
  {
    this._route.navigate(['usermenu/postadvertise']);
  }
  onclickviewAdvertise()
  {
    this._route.navigate(['usermenu/viewadvertise']);
  }
  onclickMyAdvertise()
  {
    this._route.navigate(['usermenu/myadvertise']);
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
