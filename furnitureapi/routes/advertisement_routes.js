var advertise=require('../models/advertisement_model');
var express=require('express');
var router=express.Router();

router.get('/:furnitureAdvId?',function(req,res,next){
    if(req.params.furnitureAdvId){
        advertise.getAdvertiseById(req.params.furnitureAdvId,function(err,rows){
            if(err)
            {
        res.json(err);
            }
            else{
        res.json(rows);
            }
        }) 
    }
    else
    {
        advertise.getAllAdvertiseByCategory(function(err,rows){
            if(err)
            {
        res.json(err);
            }
            else{
        res.json(rows);
            }
        })
    }

});


router.put('/:furnitureAdvId',function(req,res,next){
    advertise.updateAdvertise(req.body,req.params.furnitureAdvId,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:furnitureAdvId',function(req,res,next){
    advertise.deleteAdvertise(req.params.furnitureAdvId,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
   advertise.deleteAllAdvertise(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;