import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { userclass } from '../classmodels/user';
import { loginclass } from '../classmodels/login';

@Injectable({
  providedIn: 'root'
})
export class ManageuserService {
user_url:string='http://localhost:3000/user/';
updateimage_url:string='http://localhost:3000/updateuserimage/';
delalluser_url:string='http://localhost:3000/delalluser/';
login_url:string='http://localhost:3000/login/';
email_url:string='http://localhost:3000/forgetpassword/';
changepssword_url:string='http://localhost:3000/changepassword/';
  constructor(public _http:HttpClient) { }
  getAllUser(){
    return this._http.get(this.user_url);

  }
  getUserById(id:string)
  {
    return this._http.get(this.user_url+id);
  }
  addUser(item:FormData){
    return this._http.post(this.user_url,item);
  }
  updateUserImage(item:FormData){
    return this._http.put(this.updateimage_url,item);
  }
  updateUser(item:userclass){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.user_url+item.userEmailId,body,{headers:head1});
  }
  deleteSingleUser(item:userclass){
    return this._http.delete(this.user_url+item.userEmailId);
      }
      updatePassword(item:userclass)
      {
        let body=JSON.stringify(item);
        let head1=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.changepssword_url+item.userEmailId,body,{headers:head1});
      }
      deleteAllUser(item:userclass[]){
        let body=JSON.stringify(item);
        let head1=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.delalluser_url,body,{headers:head1});
      }
      getLoginById(item:userclass)
      {
        let body=JSON.stringify(item);
        let head1=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.login_url,body,{headers:head1})
      }
      sendmail(item)
      {
        let head1=new HttpHeaders().set('Content-Type','application/json');
        let body=JSON.stringify(item);

        return this._http.post(this.email_url,body,{headers:head1});

      }


}
