var db=require('../dbconnection');
var furnitureSale={
  
    getAllFurnitureSale:function(callback){
        return db.query('select c.*,f.* from category_table c,furniture_table f where c.categoryId=f.fkCategoryId and rentFlag="0"',callback);
    },

}
module.exports=furnitureSale;