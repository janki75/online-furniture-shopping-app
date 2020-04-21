var getDescByFurId=require('../models/furniture_model');
var express=require('express');
var router=express.Router();

router.get('/:furnitureId?',function(req,res,next){

 
    getDescByFurId.getDescriptionById(req.params.furnitureId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    
    
});


module.exports=router;