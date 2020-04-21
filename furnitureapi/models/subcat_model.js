var db=require('../dbconnection');
var subcat={
    getAllSubCategory:function(callback){
      return db.query('select * from subcat_table',callback);
    },
    getSubCatByCategoryId:function(fkCategoryId,callback)
    {
        return db.query('select * from subcat_table where fkCategoryId=?',[fkCategoryId],callback);
    },
    getAllCategorySubCategory:function(callback)
    {
        return db.query('select c.*,s.* from category_table c,subcat_table s where c.categoryId=s.fkCategoryId',callback);
    },
    deleteSubCatByCategory:function(fkCategoryId,callback)
    {
        return db.query('delete from subcat_table where fkCategoryId=?',[fkCategoryId],callback);
    },
    addSubCategory:function(item,callback)
    {
        return db.query('insert into subcat_table (subCatName,fkCategoryId) values(?,?)',[item.subCatName,item.fkCategoryId],callback);
    },
    deleteSubCategory:function(subCatId,callback)
    {
        return db.query('delete from subcat_table where subCatId=?',[subCatId],callback);
    },
    updateSubCategory:function(item,subCatId,callback)
    {
        return db.query('update subcat_table set subCatName=?,fkCategoryId=? where subCatId=?',[item.subCatName,item.fkCategoryId,subCatId],callback);
    },
  
    getSubCategoryById:function(subCatId,callback)
    {
        return db.query('select * from subcat_table where subCatId=?',[subCatId],callback);
    },
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].subCatId;
        }

        return db.query("delete from subcat_table where subCatId in (?)",[delarr],callback);
    }

}
module.exports=subcat;