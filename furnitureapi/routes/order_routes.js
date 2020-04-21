var order=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.get('/:orderId?',function(req,res,next){
    if(req.params.orderId)
    {
        order.getOrderById(req.params.orderId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else
    {
        order.getAllOrderUser(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
  
})
router.delete('/:orderId',function(req,res,next){
    order.deleteOrder(req.params.orderId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.put('/:orderId',function(req,res,next){
    order.updateOrder(req.body,req.params.orderId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    
    })
});
router.post('/',function(req,res,next){
    order.addOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;