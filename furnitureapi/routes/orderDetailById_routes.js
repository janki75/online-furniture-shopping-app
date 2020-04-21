var orderDetail=require('../models/orderDetail_model');
var express=require('express');
var router=express.Router();

router.get('/:orderDetailId',function(req,res,next){

        orderDetail.getOrderDetailById(req.params.orderDetailId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
})
module.exports=router;