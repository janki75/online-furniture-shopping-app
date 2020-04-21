import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subCategory } from '../classmodels/subcat';

@Injectable({
  providedIn: 'root'
})
export class SubcatService {
  getall_url:string='http://localhost:3000/subcat/';
  getAllCatSubCat_url:string='http://localhost:3000/getAllCatSubCat/';
  getsubcatById_url:string='http://localhost:3000/getsubcatById/';
  delall_url:string='http://localhost:3000/delallsubcat/';
  delsubcatByCat_url:string='http://localhost:3000/delSubCatByCat/';
  constructor(public _http:HttpClient) { }
  getAllSubCategory()
  {
    return this._http.get(this.getall_url);
  }
  getSubCatByCategoryId(subCatId)
  {
    return this._http.get(this.getall_url+subCatId);
  }
  getCategorySubCategory()
  {
    return this._http.get(this.getAllCatSubCat_url);
  }
  addSubCategory(item:subCategory)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getall_url,body,{headers:head1});

  }
  deleteSubCategory(item:subCategory)
  {
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.getall_url+item.subCatId,{headers:head1});
  }
  updateSubCategory(item:subCategory)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.getall_url+item.subCatId,body,{headers:head1});
  }
  getSubCategoryById(subCatId)
  {
    return this._http.get(this.getsubcatById_url+subCatId);
  }
  deleteAll(item:subCategory[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.delall_url,body,{headers:head1});
  }
  delSubCatByCat(categoryId:number)
  {
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.delsubcatByCat_url+categoryId,{headers:head1});
  }
 }
