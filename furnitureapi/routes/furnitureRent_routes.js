var furnitureRent=require('../models/furnitureRent_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    furnitureRent.getAllFurnitureRent(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.get('/:fkSubCatId',function(req,res,next){
    furnitureRent.getFurnitureOnRentBySubCategoryId(req.params.fkSubCatId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;