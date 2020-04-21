export class orderuserclass
{
  constructor(
    public orderId:number,
    public orderTotalQty:number,
    public orderTotalPrice:number,
    public fkUserEmailId:string,
    public orderDate:Date,
    public userEmailId:string,
    public userPassword:string,
    public userName:string,
    public userMobileNo:number,
    public userCity:string,
    public userGender:string,
    public userAddress:string,
    public userType:string,
    public userPhoto?:string,
  ){}
}
