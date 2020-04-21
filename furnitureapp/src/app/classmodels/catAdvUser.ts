export class catAdvertisementUser
{
  constructor(
    public categoryId:number,
    public categoryName:string,
    public furnitureAdvId:number,
    public furnitureAdvAmount:number,
    public furnitureAdvUsedTime:string,
    public furnitureAdvSize:string,
    public furniturAdvBrand:string,
    public furniturAdvImg:string,
    public advFkUserEmailId:string,
    public advFkUserMobileNo:number,
    public furnitureAdvCondition:string,
    public advFkCategoryId:number,
    public userEmailId:string,
    public userPassword:string,
    public userName:string,
    public userMobileNo:number,
    public userCity:string,
    public userGender:string,
    public userAddress:string,
    public userPhoto:string,
    public userType:string

  ){};
}
