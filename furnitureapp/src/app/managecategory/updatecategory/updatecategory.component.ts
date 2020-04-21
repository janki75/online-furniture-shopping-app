import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../../services/managecategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { cat } from '../../classmodels/category';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  categoryId:number;
  categoryName:string;
  flag:true;
  constructor(public _serv:ManagecategoryService,private _acroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.categoryId=this._acroute.snapshot.params['id'];

    this._serv.getCategoryById(this.categoryId).subscribe(
      (data:any)=>{
        this.categoryId=data[0].categoryId;
        this.categoryName=data[0].categoryName;
      }
    );

  }
  onupdate(){
    this._serv.updateCategory(new cat(this.categoryId,this.categoryName)).subscribe(
      (data:any)=>{
        alert('category updated successfully');
         this._route.navigate(['adminmenu/managecategory']);

      }
    );
  }
  oncancel(){
    this._route.navigate(['adminmenu/managecategory']);
  }

}
