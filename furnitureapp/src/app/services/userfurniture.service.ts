import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserfurnitureService {
furnitureByCategory_url:string='http://localhost:3000/furnitureByCategory/';
similarFurniture:string='http://localhost:3000/similarFurniture/';
furnitureByCategoryId_url:string='http://localhost:3000/furnitureByCategoryId/';
  constructor(public _http:HttpClient) { }
  getFurnitureByCategory(categoryName)
  {
    return this._http.get(this.furnitureByCategory_url+categoryName);
  }
  getSimilarFurniture(fkCategoryId,furnitureId)
  {
    return this._http.get(this.similarFurniture+fkCategoryId+"/"+furnitureId);
  }
  getFurnitureByCategoryId(categoryId)
  {
    return this._http.get(this.furnitureByCategoryId_url+categoryId);
  }
}
