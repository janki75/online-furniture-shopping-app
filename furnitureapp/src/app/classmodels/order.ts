export class orderclass
{
  constructor(
    public orderId:number,
    public orderTotalQty:number,
    public orderTotalPrice:number,
    public fkUserEmailId:string,
    public orderDate?:Date
  ){}
}
