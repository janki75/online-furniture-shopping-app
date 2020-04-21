var db=require('../dbconnection');
var category={
    getAllCategory:function(callback){
        return db.query('select * from category_table',callback);
    },
    getCategoryById:function(categoryId,callback){
        return db.query("select * from category_table where categoryId=?",[categoryId],callback);
    },
    addCategory:function(item,callback){
        return db.query("insert into category_table (categoryName) values(?)",[item.categoryName],callback);
    },
    updateCategory:function(item,categoryId,callback){

        return db.query("update category_table set categoryName=? where categoryId=?",[item.categoryName,categoryId],callback);
    },
    deleteCategory:function(categoryId,callback){
        return db.query("delete from category_table where categoryId=?",[categoryId],callback);
    },
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].categoryId;
        }

        return db.query("delete from category_table where categoryId in (?)",[delarr],callback);
    }

}
module.exports=category;