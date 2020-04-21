var user=require('../models/user_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/user_images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.post('/',upload.single('image'),function(req,res,next){
    
user.addUser(req.body,req.file.filename,function(err,rows){
        
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

router.get('/:userEmailId?',function(req,res,next){
    if(req.params.userEmailId){
        user.getUserById(req.params.userEmailId,function(err,rows){
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
        user.getAllUser(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
   
})
router.delete('/:userEmailId',function(req,res,next){
    user.deleteUser(req.params.userEmailId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
router.put('/:userEmailId',function(req,res,next){
    user.updateUser(req.body,req.params.userEmailId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

module.exports=router;