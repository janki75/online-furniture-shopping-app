var express=require('express');
var router=express.Router();
var addadvertise=require('../models/advertisement_model');
var multer=require('multer');
var path=require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/advertise_images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

    router.get('/:userEmailId?',function(req,res,next){
         
           addadvertise.getUserById(req.params.userEmailId,function(err,rows){
                if(err){
                    res.json(err);
                }
                else
                {
                    res.json(rows);
                }
            })
    
        
    });
    
router.post('/',upload.single('image'),function(req,res,next){
    addadvertise.addAdvertise(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

router.put('/',upload.single('image'),function(req,res,next){
    addadvertise.updateAdvertiseImage(req.body,req.file.filename,function(err,rows){
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