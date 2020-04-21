var furniture=require('../models/furniture_model');
var express=require('express');
var router=express.Router();

router.get('/:categoryId/:furnitureId',function(req,res,next){
    furniture.getSimilarFurniture(req.params.categoryId,req.params.furnitureId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});

module.exports=router;