var db=require('../dbconnection');
var cart={
    getAllCartItems:function(fkUserEmailId,callback){
        return db.query('select * from cart_table where fkUserEmailId=?',[fkUserEmailId],callback);
    },
   addItemToCart:function(item,callback)
   {
       return db.query('insert into cart_table(cartQuantity,cartAmount,fkUserEmailId,fkFurnitureId,fkFurnitureName,fkFurnitureImg,fkFurniturePrice,fkCategoryId,fkRentAmount) values(?,?,?,?,?,?,?,?,?)',[item.cartQuantity,item.cartAmount,item.fkUserEmailId,item.fkFurnitureId,item.fkFurnitureName,item.fkFurnitureImg,item.fkFurniturePrice,item.fkCategoryId,item.fkRentAmount],callback);
   },
   deleteCartItem:function(cartId,callback)
   {
       return db.query('delete from cart_table where cartId=?',[cartId],callback);
   },
   deleteMultiCartItem:function(item,callback){
    var delarr=[];
   
    for(i=0;i<item.length;i++){
        delarr[i]=item[i];
    }

    return db.query("delete from cart_table where cartId in (?)",[delarr],callback);
},
}
module.exports=cart;