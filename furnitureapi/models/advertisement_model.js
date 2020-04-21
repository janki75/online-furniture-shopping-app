var db=require('../dbconnection');
var advertise={
    getAllAdvertise:function(callback)
    {
        return db.query('select * from advertise_table',callback);
    },
   getAdvertiseByEmailId:function(advFkUserEmailId,callback)
   {
    return db.query('select * from advertise_table where advFkUserEmailId=?',[advFkUserEmailId],callback);
   },
    getAdvertiseById:function(id,callback){
        return db.query('select * from advertise_table where furnitureAdvId=?',id,callback);
    },
     getAllAdvertiseByCategory:function(callback){
        return db.query('select c.*,a.*,u.* from category_table c,advertise_table a,user_table u where c.categoryId=a.advFkCategoryId and a.advFkUserEmailId=u.userEmailId',callback);
    },
   
    addAdvertise:function(item,filename,callback){
        return db.query('insert into advertise_table (furnitureAdvAmount,furnitureAdvUsedTime,furnitureAdvSize,furnitureAdvBrand,furnitureAdvImg,advFkUserEmailId,advFkUserMobileNo,furnitureAdvCondition,advFkCategoryId) values(?,?,?,?,?,?,?,?,?)',[item.furnitureAdvAmount,item.furnitureAdvUsedTime,item.furnitureAdvSize,item.furnitureAdvBrand,filename,item.advFkUserEmailId,item.advFkUserMobileNo,item.furnitureAdvCondition,item.advFkCategoryId],callback);
    },
    updateAdvertise:function(item,furnitureAdvId,callback){
        return db.query('update advertise_table set furnitureAdvAmount=?,furnitureAdvUsedTime=?,furnitureAdvSize=?,furnitureAdvBrand=?,furnitureAdvImg=?,advFkUserEmailId=?,advFkUserMobileNo=?,furnitureAdvCondition=?,advFkCategoryId=? where furnitureAdvId=?',[item.furnitureAdvAmount,item.furnitureAdvUsedTime,item.furnitureAdvSize,item.furnitureAdvBrand,item.furnitureAdvImg,item.advFkUserEmailId,item.advFkUserMobileNo,item.furnitureAdvCondition,item.advFkCategoryId,furnitureAdvId],callback);
    },
    updateAdvertiseImage:function(item,filename,callback){
        return db.query('update advertise_table set furnitureAdvAmount=?,furnitureAdvUsedTime=?,furnitureAdvSize=?,furnitureAdvBrand=?,furnitureAdvImg=?,advFkUserEmailId=?,advFkUserMobileNo=?,furnitureAdvCondition=?,advFkCategoryId=? where furnitureAdvId=?',[item.furnitureAdvAmount,item.furnitureAdvUsedTime,item.furnitureAdvSize,item.furnitureAdvBrand,filename,item.advFkUserEmailId,item.advFkUserMobileNo,item.furnitureAdvCondition,item.advFkCategoryId,item.furnitureAdvId],callback);
    },
    deleteAdvertise:function(furnitureAdvId,callback){
        return db.query('delete from advertise_table where furnitureAdvId=?',[furnitureAdvId],callback);
    },
    deleteAllAdvertise:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].furnitureAdvId;
        }
        return db.query('delete from advertise_table where furnitureAdvId in (?)',[delarr],callback);
     
    },
    getUserById:function(userEmailId,callback){
        return db.query('select * from user_table where userEmailId=?',userEmailId,callback);
    },
    getAllCategory:function(callback){
        return db.query('select * from category_table',callback);
    }
}
module.exports=advertise;