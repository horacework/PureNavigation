//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
////router.get('/', function(req, res, next) {
////  res.render('index', { title: '纯洁的导航' });
////});
//
//router.get('/',require('../views/index').init);
//
//router.get('/login',require('../views/index').login);
//
//router.get('/dbtest',function(req,res){
//    //app.model.user.find(function(err,person){
//    //    console.log("person:"+person);
//    //    console.log("err:"+err);
//    //    res.send('lalalal');
//    //})
//
//    console.log(models);
//    res.send("qqq");
//
//});
//
//module.exports = router;


exports = module.exports = function(app) {

    app.get('/', require('../views/index').init);

    app.get('/login', require('../views/index').login);

    app.get('/dbtest',function(req,res){
        //app.models.users.findOne(function(err,person){
        //    console.log("person:"+person);
        //    console.log("err:"+err);
        //    res.send('lalalal');
        //})
        //console.log(app);
        req.app.db.models.users.find(function(err,person){
            console.log(person);
            res.send("qqq");
        });

    });
}
