export class catfurnitureclass{
  constructor(public categoryId:number,
    public categoryName:string,
    public furnitureId:number,
    public furnitureName:string,
    public furniturePrice:number,
    public furnitureBrand:string,
    public furnitureSize:string,
    public fkCategoryId:number,
    public furnitureImg:string,
    public rentFlag:boolean,
    public rentAmount:number,
    public rentDescription?:string,
    public furnitureDescription?:string,
    public furnitureRating?:number,
    public fkSubCatId?:number
  ){}
}
