export class orderDetailclass
{
  constructor(
    public orderDetailId:number,
    public orderFurnitureQty:number,
    public fkFurnitureName:string,
    public fkFurniturePrice:number,
    public orderDetailPrice:number,
    public fkCategoryId:number,
    public fkOrderId:number,
    public fkFurnitureId?:number
     ){}
}
