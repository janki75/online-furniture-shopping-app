import { Component, OnInit } from '@angular/core';
import { ManagefurnitureService } from '../../services/managefurniture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { furnitureclass } from '../../classmodels/furniture';
import { cat } from '../../classmodels/category';
import { ManagecategoryService } from '../../services/managecategory.service';
import { subCategory } from '../../classmodels/subcat';
import { SubcatService } from '../../services/subcat.service';

@Component({
  selector: 'app-updatefurniture',
  templateUrl: './updatefurniture.component.html',
  styleUrls: ['./updatefurniture.component.css']
})

export class UpdatefurnitureComponent implements OnInit {
  furnitureName:string;
  furnitureId:number;
  furniturePrice:number;
  furnitureBrand:string;
  furnitureSize:string;
  fkCategoryId:number;
  rentFlag:boolean=false;
  rentAmount:number;
  rentDescription:string='';
  furnitureDescription:string;
  furnitureRating:number;
  fkSubCatId:number;
  furnitureImg:string;
  selectedValue;
  arroptions=[
    {value:0,label:'no'},
    {value:1,label:'yes'}
  ];

  arrrating=[
    {value:1,label:'1'},
    {value:2,label:'2'},
    {value:3,label:'3'},
    {value:4,label:'4'},
    {value:5,label:'5'},

  ];

  selectedFile:File=null;
  arrcat:cat[]=[];
  arrsubcat:subCategory[]=[];
  flag:boolean;
  constructor(private _furnitureserv:ManagefurnitureService,private _route:Router,private _subcatserv:SubcatService,private _acroute:ActivatedRoute,public _catserv:ManagecategoryService) { }

  ngOnInit() {

    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;

        this.fkCategoryId=this.arrcat[0].categoryId;

       this.rentFlag=false;
       this._subcatserv.getSubCatByCategoryId(this.fkCategoryId).subscribe(
        (data:subCategory[])=>{
          this.arrsubcat=data;

          this.fkSubCatId=this.arrsubcat[0].subCatId;
        }
      );
      }
    )

    this.furnitureId=this._acroute.snapshot.params['id'];
    this._furnitureserv.getFurnitureById(this.furnitureId).subscribe(
      (data:furnitureclass)=>{
        this.furnitureId=data[0].furnitureId;
        this.furnitureName=data[0].furnitureName;
        this.furniturePrice=data[0].furniturePrice;
        this.furnitureBrand=data[0].furnitureBrand;
        this.furnitureSize=data[0].furnitureSize;
        this.fkCategoryId=data[0].fkCategoryId;
        this.furnitureImg=data[0].furnitureImg;
        this.rentFlag=data[0].rentFlag;
        this.rentDescription=data[0].rentDescription;
        this.furnitureRating=data[0].furnitureRating;
        this.furnitureDescription=data[0].furnitureDescription;


        this.rentAmount=data[0].rentAmount;
        this.fkSubCatId=data[0].fkSubCatId;


      }
    );

  }
  onupdate(){

    if(this.flag){


      const fd=new FormData();
      fd.append('furnitureId',this.furnitureId.toString());
      fd.append('furnitureName',this.furnitureName);
      fd.append('furniturePrice',this.furniturePrice+"");
      fd.append('furnitureBrand',this.furnitureBrand);
      fd.append('furnitureSize',this.furnitureSize);
      fd.append('fkCategoryId',this.fkCategoryId+"");
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('rentFlag',this.rentFlag+"");

      if(this.rentFlag==false)
      {
        this.rentDescription='';
        this.rentAmount=0;
      }
      fd.append('rentAmount',this.rentAmount+"");
      fd.append('rentDescription',this.rentDescription);
      fd.append('furnitureDescription',this.furnitureDescription);
      fd.append('furnitureRating',this.furnitureRating+"");
      fd.append('fkSubCatId',this.fkSubCatId+"");

      this._furnitureserv.updateFurnitureImage(fd).subscribe(
        (data:any)=>{

          alert('furniture updated successfully');
           this._route.navigate(['adminmenu/managefurniture']);

        }
      );


    }
    else
    {
      if(this.rentFlag==false)
      {
        this.rentDescription='';
        this.rentAmount=0;
      }
      this._furnitureserv.updateFurniture(new furnitureclass(this.furnitureId,this.furnitureName,this.furniturePrice,this.furnitureBrand,this.furnitureSize,this.fkCategoryId,this.furnitureImg,this.rentFlag,this.rentAmount,this.rentDescription,this.furnitureDescription,this.furnitureRating,this.fkSubCatId)).subscribe(
        (data:any)=>{

          alert('furniture item updated successfully');
          this._route.navigate(['adminmenu/managefurniture']);


        }
      );
    }

  }
  onSubCatChange(){

    this._subcatserv.getSubCatByCategoryId(this.fkCategoryId).subscribe(
      (data:subCategory[])=>{
        this.arrsubcat=data;

        this.fkSubCatId=this.arrsubcat[0].subCatId;
      }
    );
    }
  oncancel(){
    this._route.navigate(['adminmenu/managefurniture']);
  }
  onChange(value)
  {
      this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  onrentchange()
  {
    if(this.rentFlag)
    {
      this.rentFlag=true;
    }
    else
    {
      this.rentFlag=false;
    }

  }

}
