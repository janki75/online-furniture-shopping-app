export class advertisement
{
  constructor(
    public furnitureAdvId:number,
    public furnitureAdvAmount:number,
    public furnitureAdvUsedTime:string,
    public furnitureAdvSize:string,
    public furnitureAdvBrand:string,
    public furnitureAdvImg:string,
    public advFkUserEmailId:string,
    public advFkUserMobileNo:number,
    public furnitureAdvCondition:string,
    public advFkCategoryId:number,

  ){};
}
