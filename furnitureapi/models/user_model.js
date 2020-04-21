var db=require('../dbconnection');
var user={
    getAllUser:function(callback){
        return db.query('select * from user_table',callback);
    },
    addUser:function(item,filename,callback){
        return db.query('insert into user_table values(?,?,?,?,?,?,?,?,?)',[item.userEmailId,item.userPassword,item.userName,item.userMobileNo,item.userCity,item.userGender,item.userAddress,item.userType,filename],callback);
    },
    deleteUser:function(userEmailId,callback){
        return db.query('delete from user_table where userEmailId=?',[userEmailId],callback);
    },
    updateUser:function(item,userEmailId,callback){
        return db.query('update user_table set userPassword=?,userName=?,userMobileNo=?,userCity=?,userGender=?,userAddress=?,userType=? where userEmailId=?',[item.userPassword,item.userName,item.userMobileNo,item.userCity,item.userGender,item.userAddress,item.userType,userEmailId],callback);
    },
    updateUserImage:function(item,filename,callback){
        return db.query('update user_table set userPassword=?,userName=?,userMobileNo=?,userCity=?,userGender=?,userAddress=?,userType=?,userPhoto=? where userEmailId=?',[item.userPassword,item.userName,item.userMobileNo,item.userCity,item.userGender,item.userAddress,item.userType,filename,item.userEmailId],callback);
    },
    getUserById:function(userEmailId,callback){
        return db.query('select * from user_table where userEmailId=?',[userEmailId],callback);
    },
    deleteAllUser:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].userEmailId;
        }

        return db.query("delete from user_table where userEmailId in (?)",[delarr],callback);
    },
    getLoginById:function(item,callback){
        return db.query("select * from user_table where userEmailId=? And userPassword=?",[item.userEmailId,item.userPassword],callback);

    },
    changePassword:function(item,userEmailId,callback)
    {
        return db.query('update user_table set userPassword=? where userEmailId=?',[item.userPassword,userEmailId],callback);
    }
}
module.exports=user;