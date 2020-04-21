import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cat } from '../classmodels/category';

@Injectable({
  providedIn: 'root'
})
export class ManagecategoryService {
geturl:string='http://localhost:3000/category/';
delallurl:string='http://localhost:3000/delallcategory/'
  constructor(public _http:HttpClient) {  }
  getAllCategory(){
    return this._http.get(this.geturl);
  }
  getCategoryById(id){
    return this._http.get(this.geturl+id);
  }
  updateCategory(item:cat){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.geturl+item.categoryId,body,{headers:head1});
  }
  addCategory(item:cat){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.geturl,body,{headers:head1});
  }
  deleteCategory(item:cat){
    let head1=new HttpHeaders().delete('Content-Type','application/json');
    return this._http.delete(this.geturl+item.categoryId,{headers:head1});

  }
  deleteAll(item:cat[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.delallurl,body,{headers:head1});
  }
  categorySingleDelete(item:cat){
    return this._http.delete(this.geturl+item.categoryId);
  }
}
