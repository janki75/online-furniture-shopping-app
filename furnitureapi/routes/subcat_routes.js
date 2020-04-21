var subcat=require('../models/subcat_model');
var express=require('express');
var router=express.Router();

router.get('/:fkCategoryId?',function(req,res,next){

    if(req.params.fkCategoryId)
    {
        subcat.getSubCatByCategoryId(req.params.fkCategoryId,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    
    }
    else
    {

        subcat.getAllSubCategory(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    
});
router.post('/',function(req,res,next){
    subcat.addSubCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.delete('/:subCatId',function(req,res,next){
    subcat.deleteSubCategory(req.params.subCatId,function(err,rows){

        if(err)
          {
          res.json(err);
          }
          else
          {
          res.json(rows);
          }

    });

});
router.put('/:subCatId',function(req,res,next){
    subcat.updateSubCategory(req.body,req.params.subCatId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})



module.exports=router;