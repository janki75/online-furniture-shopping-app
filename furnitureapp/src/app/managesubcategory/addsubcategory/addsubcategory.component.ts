import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../../services/managecategory.service';
import { cat } from '../../classmodels/category';
import { SubcatService } from '../../services/subcat.service';
import { subCategory } from '../../classmodels/subcat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {
  subCatName:string;
  fkCategoryId:number;
  arrcat:cat[]=[];
  subCatId:number;
  arrsubcat:subCategory[]=[];
  i:number;
  flag:number=0;
  constructor(private _catserv:ManagecategoryService,private _subcatserv:SubcatService,private _route:Router) { }

  ngOnInit() {
    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        this.fkCategoryId=this.arrcat[0].categoryId;

      }
    );
  }
  addForm(item){

  }
  onadd()
  {
    this._subcatserv.getAllSubCategory().subscribe(
      (data:subCategory[])=>{
        this.arrsubcat=data;
        for(this.i=0;this.i<this.arrsubcat.length;this.i++)
        {
          if(this.subCatName==this.arrsubcat[this.i].subCatName)
          {
            this.flag=1;
            break;
          }
        }
        if(this.flag==0)
        {
          this._subcatserv.addSubCategory(new subCategory(this.subCatId,this.subCatName,this.fkCategoryId)).subscribe(
            (data:subCategory)=>{

              this._route.navigate(['adminmenu/managesubcategory']);
            }
          );
        }
        else
        {
          alert('Subcategory already is exsist');
        }

      }
    );

  }
  oncancel(){
    this._route.navigate(['adminmenu/managesubcategory']);
  }
}
