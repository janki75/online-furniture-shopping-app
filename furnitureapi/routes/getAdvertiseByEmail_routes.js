var advertise=require('../models/advertisement_model');
var express=require('express');
var router=express.Router();

router.get('/:advFkUserEmailId',function(req,res,next){

        advertise.getAdvertiseByEmailId(req.params.advFkUserEmailId,function(err,rows){
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