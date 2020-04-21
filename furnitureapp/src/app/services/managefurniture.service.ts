import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { furnitureclass } from '../classmodels/furniture';
import { catfurnitureclass } from '../classmodels/catfurniture';

@Injectable({
  providedIn: 'root'
})
export class ManagefurnitureService {
furniture_url:string='http://localhost:3000/furniture/';
delallfurniture_url:string='http://localhost:3000/delallfurniture/';
updatefurnitureImage_url:string='http://localhost:3000/updatefurnitureimage/';
furnitureSale_url:string='http://localhost:3000/furnitureSale/';
furnitureRent_url:string='http://localhost:3000/furnitureRent/';
delFurnitureByCat_url:string='http://localhost:3000/delFurnitureByCat/';
topFiveSellingProduct_url:string='http://localhost:3000/topFiveSellingProduct/';
topFourSellingProduct_url:string='http://localhost:3000/topFourSellingProduct/';
subcat_url:string='http://localhost:3000/furnitureBysubcat/';
furnitureOnRentByCategoryId_url:string='http://localhost:3000/furnitureOnRentByCategoryId/';
furDescById_url:string='http://localhost:3000/getDescByFurId/';

  constructor(public _http:HttpClient) { }
  getAllFurniture(){
    return this._http.get(this.furniture_url);
  }
  deleteAll(item:catfurnitureclass[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.delallfurniture_url,body,{headers:head1});
  }
  addFurniture(item:FormData){

    return this._http.post(this.furniture_url,item);

  }
  updateFurnitureImage(item:FormData){
    return this._http.put(this.updatefurnitureImage_url,item);
  }
  updateFurniture(item:furnitureclass){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.furniture_url+item.furnitureId,body,{headers:head1});
  }
  getFurnitureById(id){
    return this._http.get(this.furniture_url+id);
  }
  deleteSingleFurniture(item:furnitureclass){
return this._http.delete(this.furniture_url+item.furnitureId);
  }
  deleteFurnitureByCategory(fkCategoryId)
  {
    return this._http.delete(this.delFurnitureByCat_url+fkCategoryId);
  }
  onsale()
  {
    return this._http.get(this.furnitureSale_url);
  }
  onrent()
  {
    return this._http.get(this.furnitureRent_url);
  }
  topFiveSellingProducts()
  {
    return this._http.get(this.topFiveSellingProduct_url);
  }
  getFurnitureBySubCat(furnitureBysubcat)
  {
    return this._http.get(this.subcat_url+furnitureBysubcat);
  }
  topFourSellingProducts()
  {
    return this._http.get(this.topFourSellingProduct_url);
  }
  furnitureOnRentBySubCategoryId(fkSubCatId)
  {
    return this._http.get(this.furnitureRent_url+fkSubCatId);
  }
  furnitureOnRentByCategoryId(fkCategoryId)
  {
    return this._http.get(this.furnitureOnRentByCategoryId_url+fkCategoryId);
  }
  getDescById(furnitureId)
  {
    return this._http.get(this.furDescById_url+furnitureId);
  }
}
