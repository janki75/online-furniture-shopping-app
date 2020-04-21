var db=require('../dbconnection');
var order={
    getAllOrderUser:function(callback){
        return db.query('select o.*,u.* from order_table o,user_table u where o.fkUserEmailId=u.userEmailId',callback);
    },
    getOrderByUserEmailId:function(fkUserEmailId,callback)
    {
        return db.query('select * from order_table where fkUserEmailId=?',[fkUserEmailId],callback);
    },
    addOrder:function(item,callback)
    {
        var todayDate=new Date();
     
        return db.query('insert into order_table (orderTotalQty,orderTotalPrice,fkUserEmailId,orderDate) values(?,?,?,?)',[item.orderTotalQty,item.orderTotalPrice,item.fkUserEmailId,todayDate],callback);
     },
    deleteOrder:function(orderId,callback){
        return db.query('delete from order_table where orderId=?',[orderId],callback);
    },
    getOrderById:function(orderId,callback){
        return db.query('select * from order_table where orderId=?',[orderId],callback);
    },
    updateOrder:function(item,orderId,callback){
        var odate=new Date(item.orderDate);
        return db.query('update order_table set orderTotalQty=?,orderTotalPrice=?,fkUserEmailId=?,orderDate=? where orderId=?',[item.orderTotalQty,item.orderTotalPrice,item.fkUserEmailId,odate,orderId],callback);
    },
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].orderId;
        }

        return db.query("delete from order_table where orderId in (?)",[delarr],callback);
    },
    todayOrder:function(callback)
    {
        // var todayDate=new Date();
        // console.log(todayDate);
        return db.query('select o.*,u.* from order_table o,user_table u where o.fkUserEmailId=u.userEmailId and o.orderDate=CURDATE()',callback);
    }
   
}
module.exports=order;