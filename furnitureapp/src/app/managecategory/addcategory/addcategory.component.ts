import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../../services/managecategory.service';
import { cat } from '../../classmodels/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
categoryName:string;
categoryId:number;
flag:number=0;
arrcat:cat[]=[];
i:number=0;
  constructor(private _serv:ManagecategoryService,public _route:Router) { }

  ngOnInit() {
  }
  onadd(){
    this._serv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        for(this.i=0;this.i<this.arrcat.length;this.i++)
        {
          if(this.categoryName==this.arrcat[this.i].categoryName)
          {
            this.flag=1;
            break;
          }
        }
        if(this.flag==0)
        {
          this._serv.addCategory(new cat(this.categoryId,this.categoryName)).subscribe(
            (data:cat)=>{
              this._route.navigate(['adminmenu/managecategory']);
            }
          );

        }
        else
        {
          alert('This category is already exsist');
        }
      }
    );

  }
  addForm(item){

  }
  oncancel(){
    this._route.navigate(['adminmenu/managecategory']);
  }
}
