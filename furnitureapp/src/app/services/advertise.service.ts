import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { advertisement } from '../classmodels/advertise';
import { catAdvertisementUser } from '../classmodels/catAdvUser';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {
advertise_url:string='http://localhost:3000/advertise/';
addadvertise_url:string='http://localhost:3000/addadvertise/';
user_url:string='http://localhost:3000/user/';
getAllAdvertisewithoutjoin_url:string='http://localhost:3000/getAllAdvertise/';
getAdvertiseByEmail_url:string='http://localhost:3000/getAdvertiseByEmail/';
  constructor(private _http:HttpClient) { }
  getAllAdvertiseWithoutJoin()
  {
    return this._http.get(this.getAllAdvertisewithoutjoin_url);
  }
  getAdvertiseByEmail(userEmailId)
  {
    return this._http.get(this.getAdvertiseByEmail_url+userEmailId);
  }
  getAllAdvertise(){
    return this._http.get(this.advertise_url);
   }
  getAdvertiseById(id){
    return this._http.get(this.advertise_url+id);
  }
   addAdvertise(item:FormData){
      return this._http.post(this.addadvertise_url,item);
   }
   getUserById(id){
     return this._http.get(this.user_url+id);
   }

   updateAdvertise(item:advertisement){
     let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.put(this.advertise_url+item.furnitureAdvId,body,{headers:head1});
   }

   upadteAdvertiseImg(item:FormData)
   {
     return this._http.put(this.addadvertise_url,item);
   }
   deleteAdvertise(item:catAdvertisementUser){

    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.advertise_url+item.furnitureAdvId,{headers:head1});
  }
   deleteAllAdvertise(item:catAdvertisementUser[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.advertise_url,body,{headers:head1});
  }
}
