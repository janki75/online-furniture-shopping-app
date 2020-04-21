export class oDetailFurnitureclass
{
  constructor(
    public orderDetailId:number,
    public orderFurnitureQty:number,
    public fkFurnitureName:string,
    public fkFurniturePrice:number,
    public orderDetailPrice:number,
    public ofkCategoryId:number,
    public fkOrderId:number,
    public fkFurnitureId:number,
    public furnitureId:number,
  public furnitureName:string,
  public furniturePrice:number,
  public furnitureBrand:string,
  public furnitureSize:string,
  public fkCategoryId:number,
  public furnitureImg:string,
  public rentFlag:boolean,
  public rentDescription?:string
     ){}
}
