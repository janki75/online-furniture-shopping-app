var getAllCatSubCat=require('../models/subcat_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){

        getAllCatSubCat.getAllCategorySubCategory(function(err,rows){
            if(err)
            {
        res.json(err);
            }
            else{
        res.json(rows);
            }
        })
    

});





module.exports=router;