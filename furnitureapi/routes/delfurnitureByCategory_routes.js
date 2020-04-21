var delfurnitureBycategory=require('../models/furniture_model');
var express=require('express');
var router=express.Router();


router.delete('/:fkCategoryId',function(req,res,next){
    delfurnitureBycategory.deleteFurnitureByCategory(req.params.fkCategoryId,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

module.exports=router;