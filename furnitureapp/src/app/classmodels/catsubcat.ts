export class categorySubcategory
{
  constructor(
    public categoryId:number,
  public categoryName:string,
    public subCatId:number,
    public subCatName:string,
    public fkCategoryId:number
  ){}
}
