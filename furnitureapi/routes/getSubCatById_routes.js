var getsubcatById=require('../models/subcat_model');
var express=require('express');
var router=express.Router();

router.get('/:subCatId?',function(req,res,next){

 
        getsubcatById.getSubCategoryById(req.params.subCatId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    
    
});


module.exports=router;