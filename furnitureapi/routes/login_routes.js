var login=require('../models/user_model');
var express=require('express');
var router=express.Router();


router.post('/',function(req,res,next){
    login.getLoginById(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;