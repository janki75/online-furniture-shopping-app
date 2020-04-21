export class cartclass{
  constructor(public cartId:number,
  public cartQuantity:number,
  public cartAmount:number,
  public fkUserEmailId:string,
  public fkFurnitureId:number,
  public fkFurnitureName:string,
  public fkFurnitureImg:string,
  public fkFurniturePrice:number,
  public fkCategoryId:number,
  public fkRentAmount?:number

){}
}
