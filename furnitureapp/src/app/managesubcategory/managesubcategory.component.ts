import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { SubcatService } from '../services/subcat.service';
import { subCategory } from '../classmodels/subcat';
import { categorySubcategory } from '../classmodels/catsubcat';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managesubcategory',
  templateUrl: './managesubcategory.component.html',
  styleUrls: ['./managesubcategory.component.css']
})
export class ManagesubcategoryComponent implements OnInit {
  displayedColumns: string[] = ['action1','subCatName','fkCategoryId','action'];
  dataSource = new MatTableDataSource();
arrcatsubcat:categorySubcategory[]=[];
delarr:categorySubcategory[]=[];
i:number;
  constructor(private _subserv:SubcatService,private _route:Router) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._subserv.getCategorySubCategory().subscribe(
      (data:categorySubcategory[])=>{
        this.arrcatsubcat=data;
        this.dataSource.data=this.arrcatsubcat;

      }
    );
  }
  onadd()
  {
    this._route.navigate(['adminmenu/addsubcategory']);
  }
  onsingledelete(item)
  {
    var r = confirm("Are you sure you want to Permanently delete this subcategory?");
    if (r == true)
    {
     this._subserv.deleteSubCategory(item).subscribe(
     (data:subCategory)=>{
      this.arrcatsubcat.splice(this.arrcatsubcat.indexOf(item),1);
      this.dataSource.data=this.arrcatsubcat;

     }
     );
    }
    else
    {

    }

  }
  onupdate(item)
  {
    this._route.navigate(['adminmenu/updatesubcategory/',item.subCatId]);
  }
  deleteselectedUser(){
    this._subserv.deleteAll(this.delarr).subscribe((x:any)=> {
      for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.arrcatsubcat.find(x=>x==this.delarr[this.i])){
            this.arrcatsubcat.splice(this.arrcatsubcat.indexOf(this.delarr[this.i]),1);
          }
      }
      this.dataSource.data=this.arrcatsubcat;
    });
  }
  onuserdeletecheckChange(item:categorySubcategory){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }



}
