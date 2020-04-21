var delSubCatByCat=require('../models/subcat_model');
var express=require('express');
var router=express.Router();


router.delete('/:fkCategoryId',function(req,res,next){
    delSubCatByCat.deleteSubCatByCategory(req.params.fkCategoryId,function(err,rows){
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