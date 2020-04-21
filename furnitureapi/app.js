var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var category=require('./routes/category_routes');
var delallcategory=require('./routes/delallcat_routes');
var furniture=require('./routes/furniture_routes');
var delallfurniture=require('./routes/delallfurniture_routes');
var updatefurniture=require('./routes/updatefurnitureimage_routes');
var delalluser=require('./routes/delalluser_routes');
var user=require('./routes/user_routes');
var updateuserimage=require('./routes/updateuserimage_routes');
var furnitureRent=require('./routes/furnitureRent_routes');
var furnitureSale=require('./routes/furnitureSale_routes');
var order=require('./routes/order_routes');
var delallorder=require('./routes/delallorder_routes');
var orderDetail=require('./routes/orderDetail_routes');
var login=require('./routes/login_routes');
var orderDetailById=require('./routes/orderDetailById_routes');
var delFurnitureByCat=require('./routes/delfurnitureByCategory_routes');
var todayOrder=require('./routes/today_order_routes');
var topFiveProduct=require('./routes/topFiveProduct_routes');
var advertise=require('./routes/advertisement_routes');
var addadvertise=require('./routes/addadvertise_routes');
var updateimg=require('./routes/updateadvertiseimage_routes');
var furnitureByCategory=require('./routes/furnitureByCategory_routes.js');
var similarFurniture=require('./routes/similarFurniture_routes');
var furnitureByCategoryId=require('./routes/furnitureByCategoryId_routes');
var cart=require('./routes/cart_routes');
var forgetpassword=require('./routes/forgetpassword_routes');
var delmulticartitems=require('./routes/delmulticartitems_routes');
var getAllAdvertise=require('./routes/getAllAdvertise_routes');
var getAdvertiseByEmail=require('./routes/getAdvertiseByEmail_routes');
var changepassword=require('./routes/changePassword_routes');
var subcat=require('./routes/subcat_routes');
var furnitureBysubcat=require('./routes/furnitureBySubCat_routes');
var orderByUserEmailId=require('./routes/orderByUserEmailId_routes');
var topFourSellingProduct=require('./routes/topfourselling_routes');
var getAllCatSubCat=require('./routes/getAllCatSubCat_routes');
var getsubcatById=require('./routes/getSubCatById_routes');
var delallsubcat=require('./routes/delallsubcat_routes');
var delSubCatByCat=require('./routes/delSubCatByCat_routes');
var furnitureOnRentByCategoryId=require('./routes/furnitureOnRentByCatId_routes');
var getDescByFurId=require('./routes/furdescriptionById_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',category);
app.use('/delallcategory',delallcategory);
app.use('/furniture',furniture);
app.use('/delallfurniture',delallfurniture);
app.use('/updatefurnitureimage',updatefurniture);
app.use('/user',user);
app.use('/updateuserimage',updateuserimage);
app.use('/delalluser',delalluser);
app.use('/furnitureRent',furnitureRent);
app.use('/furnitureSale',furnitureSale);
app.use('/order',order);
app.use('/delallorder',delallorder);
app.use('/orderDetail',orderDetail);
app.use('/login',login);
app.use('/orderDetailById',orderDetailById);
app.use('/delFurnitureByCat',delFurnitureByCat);
app.use('/todayorder',todayOrder);
app.use('/topFiveSellingProduct',topFiveProduct);
app.use('/topFourSellingProduct',topFourSellingProduct);
app.use('/advertise',advertise);
app.use('/addadvertise',addadvertise);
app.use('/updateimg',updateimg);
app.use('/furnitureByCategory',furnitureByCategory);
app.use('/similarFurniture',similarFurniture);
app.use('/furnitureByCategoryId',furnitureByCategoryId);
app.use('/cart',cart);
app.use('/forgetpassword',forgetpassword);
app.use('/delmulticartitems',delmulticartitems);
app.use('/getAllAdvertise',getAllAdvertise);
app.use('/getAdvertiseByEmail',getAdvertiseByEmail);
app.use('/changepassword',changepassword);
app.use('/subcat',subcat);
app.use('/furnitureBysubcat',furnitureBysubcat);
app.use('/orderByUserEmailId',orderByUserEmailId);
app.use('/getAllCatSubCat',getAllCatSubCat);
app.use('/getsubcatById',getsubcatById);
app.use('/delallsubcat',delallsubcat);
app.use('/delSubCatByCat',delSubCatByCat);
app.use('/furnitureOnRentByCategoryId',furnitureOnRentByCategoryId);
app.use('/getDescByFurId',getDescByFurId);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handlerrder
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
