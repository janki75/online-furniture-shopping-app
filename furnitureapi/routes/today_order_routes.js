var todayorder=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    todayorder.todayOrder(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }

    });
});

module.exports=router;