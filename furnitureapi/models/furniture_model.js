var db=require('../dbconnection');
var furniture={
   
    getAllFurniture:function(callback){
        return db.query('select c.*,f.* from category_table c,furniture_table f where c.categoryId=f.fkCategoryId',callback);
    },
    deleteAllFurniture:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].furnitureId;
        }

        return db.query("delete from furniture_table where furnitureId in (?)",[delarr],callback);
    },
    addFurniture:function(item,filename,callback){
        return db.query('insert into furniture_table (furnitureName,furniturePrice,furnitureBrand,furnitureSize,fkCategoryId,furnitureImg,rentFlag,rentAmount,rentDescription,furnitureDescription,furnitureRating,fkSubCatId) values(?,?,?,?,?,?,?,?,?,?,?,?)',
        [item.furnitureName,item.furniturePrice,item.furnitureBrand,
            item.furnitureSize,item.fkCategoryId,filename,item.rentFlag,item.rentAmount,item.rentDescription,item.furnitureDescription,item.furnitureRating,item.fkSubCatId],callback);
        },
    getFurnitureById:function(id,callback){
            return db.query('select * from furniture_table where furnitureId=?',[id],callback);
        },
        updateFurnitureImage:function(item,filename,callback){
            return db.query('update furniture_table set furnitureName=?,furniturePrice=?,furnitureBrand=?,furnitureSize=?,fkCategoryId=?,furnitureImg=?,rentFlag=?,rentAmount=?,rentDescription=?,furnitureDescription=?,furnitureRating=?,fkSubCatId=? where furnitureId=?',[item.furnitureName,item.furniturePrice,item.furnitureBrand,item.furnitureSize,item.fkCategoryId,filename,item.rentFlag,item.rentAmount,item.rentDescription,item.furnitureDescription,item.furnitureRating,item.fkSubCatId,item.furnitureId],callback);
        },

    deleteFurniture:function(furnitureId,callback){
            return db.query("delete from furniture_table where furnitureId=?",[furnitureId],callback);
        },
        updateFurniture:function(item,furnitureId,callback){
            return db.query('update furniture_table set furnitureName=?,furniturePrice=?,furnitureBrand=?,furnitureSize=?,fkCategoryId=?,furnitureImg=?,rentFlag=?,rentAmount=?,rentDescription=?,furnitureDescription=?,furnitureRating=?,fkSubCatId=? where furnitureId=?',[item.furnitureName,item.furniturePrice,item.furnitureBrand,item.furnitureSize,item.fkCategoryId,item.furnitureImg,item.rentFlag,item.rentAmount,item.rentDescription,item.furnitureDescription,item.furnitureRating,item.fkSubCatId,furnitureId],callback);
        },
        deleteFurnitureByCategory:function(fkCategoryId,callback)
        {
            return db.query('delete from furniture_table where fkCategoryId=?',[fkCategoryId],callback);
        },
        deleteFurnitureBySubCategory:function(fkSubCatId,callback)
        {
            return db.query('delete from furniture_table where fkSubCatId=?',[fkSubCatId],callback);
        },
        topFiveSellingFurniture:function(callback)
        {
       
           return db.query('select o.*,f.* ,SUM(o.orderFurnitureQty) AS TotalQuantity FROM orderdetail_table o,furniture_table f where o.fkFurnitureId=f.furnitureId GROUP BY o.fkFurnitureId ORDER BY SUM(o.orderFurnitureQty) DESC LIMIT 5',callback);
        },
        getFurnitureByCategory:function(category_name,callback)
        {
            return db.query('select c.*,f.* from category_table c,furniture_table f where c.categoryId=f.fkCategoryId and c.categoryName=?',[category_name],callback);
        },
        // getSimilarFurniture:function(fkCategoryId,furnitureId,callback)
        // {
        //     return db.query('select * from furniture_table where fkCategoryId=? and furnitureId not in(?)',[fkCategoryId,furnitureId],callback);
        // }
        getSimilarFurniture:function(fkCategoryId,furnitureId,callback)
        {
            return db.query('select * from furniture_table where fkCategoryId=? and furnitureId not in (?)',[fkCategoryId,furnitureId],callback);
        },
        getFurnitureByCategoryId(fkCategoryId,callback)
        {
            return db.query('select * from furniture_table where fkCategoryId=?',[fkCategoryId],callback);   
        },
        getFurnitureBySubCat(subCatId,callback)
        {
            return db.query('select * from furniture_table where fkSubCatId=?',[subCatId],callback);
        },
        topFourSellingFurniture:function(callback)
        {
       
           return db.query('select o.*,f.* ,SUM(o.orderFurnitureQty) AS TotalQuantity FROM orderdetail_table o,furniture_table f where o.fkFurnitureId=f.furnitureId GROUP BY o.fkFurnitureId ORDER BY SUM(o.orderFurnitureQty) DESC LIMIT 4',callback);
        },
        getDescriptionById:function(furnitureId,callback)
        {
            return db.query('select furnitureDescription from furniture_table where furnitureId=?',[furnitureId],callback);
        }
}
module.exports=furniture;