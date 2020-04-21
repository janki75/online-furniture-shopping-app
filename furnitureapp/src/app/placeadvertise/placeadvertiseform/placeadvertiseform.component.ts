import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagecategoryService } from '../../services/managecategory.service';
import { cartclass } from '../../classmodels/cart';
import { cat } from '../../classmodels/category';
import { AdvertiseService } from '../../services/advertise.service';
import { ManageuserService } from '../../services/manageuser.service';
import { userclass } from '../../classmodels/user';

@Component({
  selector: 'app-placeadvertiseform',
  templateUrl: './placeadvertiseform.component.html',
  styleUrls: ['./placeadvertiseform.component.css']
})
export class PlaceadvertiseformComponent implements OnInit {

  constructor(private _userserv:ManageuserService,private _adserv:AdvertiseService,private _route:Router,private _acroute:ActivatedRoute,private _catserv:ManagecategoryService) { }
  name:number;
  flag=true;
  selectedFile:File=null;
  arrcat:cat[]=[];
  fkCategoryId:number;
  furnitureBrand:string;
  furnitureSize:string;
  furnitureUsedTime:number;
furnitureCondition:string;
furniturePrice:number;
furnitureExpectedPrice:number;
userEmailId:string;
userPhoneNo:number;
flag1:boolean=false;
arrfurniturecondition:string[]=[
  'Almost Like New',
  'Brand New',
  'Gently Used',
  'Heavily Used',
  'Unboxed'
];
  ngOnInit() {

    this.userEmailId=localStorage.getItem('userEmailId');
    this.name=this._acroute.snapshot.params['name'];


    this._catserv.getAllCategory().subscribe(
      (data:cat[])=>{
        this.arrcat=data;
        this.fkCategoryId=this.arrcat[0].categoryId;
        this.furnitureCondition=this.arrfurniturecondition[0];
      }
    );
    this._userserv.getUserById(this.userEmailId).subscribe(
      (data:userclass)=>{
        this.userPhoneNo=data[0].userMobileNo;
      }
    );
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  addForm(item){
    console.log(item);
  }
  onpostad()
  {


      const fd=new FormData();

      fd.append('furnitureAdvAmount',this.furniturePrice+"");
      fd.append('furnitureAdvUsedTime',this.furnitureUsedTime+"");
      fd.append('furnitureAdvSize',this.furnitureSize);
      fd.append('furnitureAdvBrand',this.furnitureBrand);
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('advFkUserEmailId',this.userEmailId);
      fd.append('advFkUserMobileNo',this.userPhoneNo+"");
      fd.append('furnitureAdvCondition',this.furnitureCondition);
      fd.append('advFkCategoryId',this.fkCategoryId+"");
console.log(this.selectedFile.name);
      this._adserv.addAdvertise(fd).subscribe(
        (data:any)=>{
          console.log(data);
          alert('Your advertisement added successfully');
          this._route.navigate(['usermenu/myadvertise']);

        }
      );

  }
  onclickterms()
  {
    this._route.navigate(['usermenu/terms']);
  }
  oncancel()
  {

    this._route.navigate(['usermenu/']);
  }
  onFlagchange()
  {

    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }


  }


}
