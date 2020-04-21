import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertiseService } from '../../services/advertise.service';
import { cat } from '../../classmodels/category';
import { ManagecategoryService } from '../../services/managecategory.service';
import { advertisement } from '../../classmodels/advertise';

@Component({
  selector: 'app-updateadvertise',
  templateUrl: './updateadvertise.component.html',
  styleUrls: ['./updateadvertise.component.css']
})
export class UpdateadvertiseComponent implements OnInit {

  furnitureAdvAmount:number;
  furnitureAdvUsedTime:string;
  furnitureAdvSize:string;
  furnitureAdvBrand:string;
  furnitureAdvImg:string;
  advFkUserEmailId:string;
  advFkMobileNo:number;
  furnitureAdvCondition:string;
  advFkCategoryId:number;
  furnitureAdvId:number;
  arrcat:cat[]=[];
  flag:boolean;
  furnitureCondition:string;
  selectedFile:File=null;
  selectedValue="1";
  arrfurniturecondition:string[]=[
    'Almost Like New',
    'Brand New',
    'Gently Used',
    'Heavily Used',
    'Unboxed'
  ];


  constructor(private _route:Router,private _advserv:AdvertiseService,private _catserv:ManagecategoryService,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        this.advFkCategoryId=data[0].categoryId;


      }
    );
    this.furnitureAdvId=this._acroute.snapshot.params['id'];
    this._advserv.getAdvertiseById(this.furnitureAdvId).subscribe(
      (data:advertisement[])=>{
        this.furnitureAdvAmount=data[0].furnitureAdvAmount;
        this.advFkUserEmailId=data[0].advFkUserEmailId;
        this.advFkMobileNo=data[0].advFkUserMobileNo;
        this.furnitureAdvUsedTime=data[0].furnitureAdvUsedTime;
        this.furnitureAdvSize=data[0].furnitureAdvSize;
        this.furnitureAdvBrand=data[0].furnitureAdvBrand;
        this.furnitureAdvImg=data[0].furnitureAdvImg;
        this.furnitureAdvCondition=data[0].furnitureAdvCondition;
        this.advFkCategoryId=data[0].advFkCategoryId;

      }
      );
  }
  onUpdate()
  {
      if(this.flag)
      {
        const fd=new FormData();
        fd.append('furnitureAdvId',this.furnitureAdvId+"");
        fd.append('furnitureAdvAmount',this.furnitureAdvAmount+"");
        fd.append('furnitureAdvUsedTime',this.furnitureAdvUsedTime);
        fd.append('furnitureAdvSize',this.furnitureAdvSize);
        fd.append('furnitureAdvBrand',this.furnitureAdvBrand);
        fd.append('image',this.selectedFile,this.selectedFile.name);
        fd.append('advFkUserEmailId',this.advFkUserEmailId);
        fd.append('advFkUserMobileNo',this.advFkMobileNo+"");
        fd.append('furnitureAdvCondition',this.furnitureAdvCondition);
        fd.append('advFkCategoryId',this.advFkCategoryId+"");

        this._advserv.upadteAdvertiseImg(fd).subscribe(
          (data:any)=>{

            alert('Furniture Advertisement Updated Successfully');
            this._route.navigate(['adminmenu/advertise']);
           }
        );
      }
      else
      {

      this._advserv.updateAdvertise(new advertisement(this.furnitureAdvId,this.furnitureAdvAmount,this.furnitureAdvUsedTime,this.furnitureAdvSize,this.furnitureAdvBrand,this.furnitureAdvImg,this.advFkUserEmailId,this.advFkMobileNo,this.furnitureAdvCondition,this.advFkCategoryId)).subscribe(
        (data:any)=>{
          this._route.navigate(['adminmenu/advertise']);
        }
      );
      }

  }

  onChange(value){
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  oncancel(){
    this._route.navigate(['adminmenu/advertise']);
  }
}
