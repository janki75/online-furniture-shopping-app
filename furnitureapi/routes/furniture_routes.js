var furniture=require('../models/furniture_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/furniture_images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.post('/',upload.single('image'),function(req,res,next){
    
    furniture.addFurniture(req.body,req.file.filename,function(err,rows){
        
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


router.get('/:furnitureId?',function(req,res,next){
    if(req.params.furnitureId){
        furniture.getFurnitureById(req.params.furnitureId,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{

        furniture.getAllFurniture(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    
        });
    }

});
router.put('/:furnitureId',function(req,res,next){
    furniture.updateFurniture(req.body,req.params.furnitureId,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.delete('/:furnitureId',function(req,res,next){
    furniture.deleteFurniture(req.params.furnitureId,function(err,rows){

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