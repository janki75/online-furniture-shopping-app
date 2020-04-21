import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcatService } from '../../services/subcat.service';
import { subCategory } from '../../classmodels/subcat';
import { ManagecategoryService } from '../../services/managecategory.service';
import { cat } from '../../classmodels/category';

@Component({
  selector: 'app-updatesubcategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./updatesubcategory.component.css']
})
export class UpdatesubcategoryComponent implements OnInit {
  subCatId:number;
  subCatName:string;
  fkCategoryId:number;
  arrcat:cat[]=[];
  catId:number;
  constructor(private _acroute:ActivatedRoute,private _route:Router,private _subcatserv:SubcatService,private _catserv:ManagecategoryService) { }

  ngOnInit() {
    this.subCatId=this._acroute.snapshot.params['subCatId'];
    this._subcatserv.getSubCategoryById(this.subCatId).subscribe(
      (data:subCategory)=>{
        this.subCatName=data[0].subCatName;
        this.fkCategoryId=data[0].fkCategoryId;
      }
    );

  this._catserv.getAllCategory().subscribe(
    (data:cat[])=>{
      this.arrcat=data;
    }
  );
  }
  addForm(item){

  }
  oncancel()
  {
    this._route.navigate(['adminmenu/managesubcategory']);
  }
  onupdate()
  {
    this._subcatserv.updateSubCategory(new subCategory(this.subCatId,this.subCatName,this.fkCategoryId)).subscribe(
      (data:subCategory)=>{
        alert('subcategory Deatails updated successfully');
      this._route.navigate(['adminmenu/managesubcategory']);
      }
    );
  }

}
