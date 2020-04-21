var category=require('../models/category_model');
var express=require('express');
var router=express.Router();

router.get('/:categoryId?',function(req,res,next){
    if(req.params.categoryId){
        category.getCategoryById(req.params.categoryId,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{

        category.getAllCategory(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    
        });
    }

    

});
router.post('/',function(req,res,next){
    category.addCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.put('/:categoryId',function(req,res,next){
    category.updateCategory(req.body,req.params.categoryId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.delete('/:categoryId',function(req,res,next){
    category.deleteCategory(req.params.categoryId,function(err,rows){

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


module.exports=router;