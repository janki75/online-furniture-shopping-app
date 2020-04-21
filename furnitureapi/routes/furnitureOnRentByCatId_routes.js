var furnitureRent=require('../models/furnitureRent_model');
var express=require('express');
var router=express.Router();


router.get('/:fkCategoryId',function(req,res,next){
    furnitureRent.getFurnitureOnRentByCategoryId(req.params.fkCategoryId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;