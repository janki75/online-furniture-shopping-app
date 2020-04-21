var furnitureBySubCat=require('../models/furniture_model');
var express=require('express');
var router=express.Router();

router.get('/:subCat',function(req,res,next){
    furnitureBySubCat.getFurnitureBySubCat(req.params.subCat,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;