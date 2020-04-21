var orderByUserEmailId=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.get('/:fkUserEmailId',function(req,res,next){

        orderByUserEmailId.getOrderByUserEmailId(req.params.fkUserEmailId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
})
module.exports=router;