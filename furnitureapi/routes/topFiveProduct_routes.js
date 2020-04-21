var topFiveProduct=require('../models/furniture_model');
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    topFiveProduct.topFiveSellingFurniture(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

});

module.exports=router;