var furnitureByCategory=require('../models/furniture_model');
var express=require('express');
var router=express.Router();

router.get('/:categoryName',function(req,res,next){
    furnitureByCategory.getFurnitureByCategory(req.params.categoryName,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;