var delallorder=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    delallorder.deleteAll(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;