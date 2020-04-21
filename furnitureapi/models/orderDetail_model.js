var db=require('../dbconnection');
var orderDetail={

    getOrderDetailCategoryByOrderId:function(orderId,callback)
    {
        return db.query('select o.*,c.* from orderDetail_table o,category_table c where o.fkCategoryId=c.categoryId and fkOrderId=?',[orderId],callback);
    },
    deleteOrderDetail:function(fkOrderId,callback)
    {
        return db.query('delete from orderDetail_table where fkOrderId=?',[fkOrderId],callback);
    },
    getOrderDetailById:function(orderDetailId,callback)
    {
        return db.query('select * from orderDetail_table where orderDetailId=?',[orderDetailId],callback);
    },
    updateOrderDetail:function(item,orderDetailId,callback)
    {
        return db.query('update orderDetail_table set orderFurnitureQty=?,fkFurnitureName=?,fkFurniturePrice=?,orderDetailPrice=?,fkCategoryId=?,fkOrderId=? where orderDetailId=?',[item.orderFurnitureQty,item.fkFurnitureName,item.fkFurniturePrice,item.orderDetailPrice,item.fkCategoryId,item.fkOrderId,orderDetailId],callback);
    },
    addOrderDetail:function(item,callback)
    {
        return db.query('insert into orderDetail_table (orderFurnitureQty,fkFurnitureName,fkFurniturePrice,orderDetailPrice,fkCategoryId,fkOrderId,fkFurnitureId) values(?,?,?,?,?,?,?)',[item.orderFurnitureQty,item.fkFurnitureName,item.fkFurniturePrice,item.orderDetailPrice,item.fkCategoryId,item.fkOrderId,item.fkFurnitureId],callback);
    }
};
module.exports=orderDetail;