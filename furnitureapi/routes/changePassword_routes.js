var changePassword=require('../models/user_model');
var express=require('express');
var router=express.Router();
router.put('/:userEmailId',function(req,res,next){
    changePassword.changePassword(req.body,req.params.userEmailId,function(err,rows){
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