var orderDetail=require('../models/orderDetail_model');
var express=require('express');
var router=express.Router();

router.get('/:orderId',function(req,res,next){

        orderDetail.getOrderDetailCategoryByOrderId(req.params.orderId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
})
router.delete('/:fkOrderId',function(req,res,next){
    orderDetail.deleteOrderDetail(req.params.fkOrderId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.put('/:orderDetailId',function(req,res,next){
    orderDetail.updateOrderDetail(req.body,req.params.orderDetailId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.post('/',function(req,res,next){
    orderDetail.addOrderDetail(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
            console.log(rows.insertId);
        }
    })
});

module.exports=router;