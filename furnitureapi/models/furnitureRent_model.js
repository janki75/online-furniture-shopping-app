var db=require('../dbconnection');
var furnitureRent={
  
    getAllFurnitureRent:function(callback){
        return db.query('select c.*,f.* from category_table c,furniture_table f where c.categoryId=f.fkCategoryId and rentFlag="1"',callback);
    },
    getFurnitureOnRentBySubCategoryId(fkSubCatId,callback)
    {
        return db.query('select * from furniture_table where fkSubCatId=? && rentFlag="1"',[fkSubCatId],callback);   
    },
    getFurnitureOnRentByCategoryId(fkCategoryId,callback)
    {
        return db.query('select * from furniture_table where fkCategoryId=? && rentFlag="1"',[fkCategoryId],callback);   
    }
}
module.exports=furnitureRent;