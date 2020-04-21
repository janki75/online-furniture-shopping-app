var cart=require('../models/cart_model');
var express=require('express');
var router=express.Router();

router.get('/:fkUserEmailId',function(req,res,next){

    cart.getAllCartItems(req.params.fkUserEmailId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});
router.post('/',function(req,res,next){
    cart.addItemToCart(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});
router.delete('/:cartId',function(req,res,next){
    cart.deleteCartItem(req.params.cartId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;