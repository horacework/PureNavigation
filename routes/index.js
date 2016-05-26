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

    //首页入口
    app.get('/', require('../views/index').init);
    //登录页面
    app.get('/login', require('../views/user').init);
    //登录认证接口
    app.post('/login', require('../views/user').login);
    //注册接口
    app.post('/signup',require('../views/user').signup);
    //测试cookies
    app.get('/getcookies',function(req, res){

        res.cookie['userId'] = "lalalalal";
        res.send("保存cookies成功");

    });
    //测试数据库
    app.get('/dbtest',function(req,res){
        req.models.person.find({},function(err,results){
            if(err){
                console.log(err);
            }else{
                console.log(results);
            }
            res.send("oooooo");
        })
    });
};
