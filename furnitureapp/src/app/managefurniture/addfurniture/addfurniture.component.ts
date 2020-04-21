import { Component, OnInit } from '@angular/core';
import { ManagecategoryService } from '../../services/managecategory.service';
import { cat } from '../../classmodels/category';
import { Router } from '@angular/router';
import { ManagefurnitureService } from '../../services/managefurniture.service';
import { subCategory } from '../../classmodels/subcat';
import { SubcatService } from '../../services/subcat.service';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  furnitureName:string;
  furnitureId:number;
  furniturePrice:number;
  furnitureBrand:string;
  furnitureSize:string;
  fkCategoryId:number;
  rentFlag:boolean=false;
  rentAmount:number=0;
  rentDescription:string='';
  furnitureDescription:string;

  fkSubCatId:number;

  arrrating=[
    {value:1,label:'1'},
    {value:2,label:'2'},
    {value:3,label:'3'},
    {value:4,label:'4'},
    {value:5,label:'5'},

  ];
  furnitureRating:number=this.arrrating[0].value;;
  arrcat:cat[]=[];
  arrsubcat:subCategory[]=[];
  selectedFile:File=null;
  selectedValue='1';
   arroptions=[
    {value:0,label:'no'},
    {value:1,label:'yes'}
  ];

  constructor(public _catserv:ManagecategoryService,public _route:Router,public _furserv:ManagefurnitureService,public _subcatserv:SubcatService) { }

  ngOnInit() {


    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        this.fkCategoryId=this.arrcat[0].categoryId;

       this.rentFlag=true;
       this._subcatserv.getSubCatByCategoryId(this.fkCategoryId).subscribe(
        (data:subCategory[])=>{
          this.arrsubcat=data;

          this.fkSubCatId=this.arrsubcat[0].subCatId;
        }
      );

      }
    );


  }
  onSubCatChange(){

    this._subcatserv.getSubCatByCategoryId(this.fkCategoryId).subscribe(
      (data:subCategory[])=>{
        this.arrsubcat=data;

        this.fkSubCatId=this.arrsubcat[0].subCatId;
      }
    );
  }
  addForm(item){
    console.log(item);
  }
  onadd(){
   const fd=new FormData();

    fd.append('furnitureName',this.furnitureName);
    fd.append('furniturePrice',this.furniturePrice+"");
    fd.append('furnitureBrand',this.furnitureBrand);
    fd.append('furnitureSize',this.furnitureSize);
    fd.append('fkCategoryId',this.fkCategoryId+"");
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('rentFlag',this.rentFlag+"");
    fd.append('rentAmount',this.rentAmount+"");
    fd.append('rentDescription',this.rentDescription);
    fd.append('furnitureDescription',this.furnitureDescription);
    fd.append('furnitureRating',this.furnitureRating+"");
    fd.append('fkSubCatId',this.fkSubCatId+"");


console.log(this.rentAmount);
    this._furserv.addFurniture(fd).subscribe(
      (data:any)=>{

        this._route.navigate(['adminmenu/managefurniture']);
      }
    );

  }

  oncancel(){
    this._route.navigate(['adminmenu/managefurniture']);
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  onrentchange()
  {
    if(this.rentFlag)
    {
      this.rentFlag=false;
    }
    else
    {
      this.rentFlag=true;
    }
  }
}
