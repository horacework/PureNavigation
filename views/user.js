"use strict";

var uuid = require("node-uuid");

exports.init = function(req, res){

    if(req.session.userId || req.cookies.userCook){
        res.redirect("/")
    }else{
        res.render('login',{ title: '导航登录页' });
    }

};


exports.login = function(req, res){

    var username = req.body.username;
    //TODO 判断是否恶意登录 规则：一分钟只能错误登录4次
    req.models.user.find({name:username},1,function(err,result){
        if(err){
            console.log("ERROR:"+err);
            res.send("发生未知错误！");
        }else{
            if(result.length==0){
                res.send("此用户名未注册")
            }else{
                req.session.userId = result[0].id;
                req.session.username = result[0].name;

                cookiesSaveRecord(req,res);
            }
        }
    });

};

exports.signup = function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    var newUser = {};

    req.models.user.count({name:username},function(err,result){

        if(err){
            console.log("ERROR:"+err);
            res.send("发送未知错误");
        }else{
            if(result>0){
                res.send("此用户名已被注册！")
            }else{
                newUser.id = uuid.v4();
                newUser.name = username;
                newUser.email = email;
                req.models.user.create(newUser,function(err, result){
                   if(err){
                       console.log("ERROR"+err);
                       res.send("注册失败");
                   }else{
                       req.session.userId = result.id;
                       req.session.username = result.name;

                       cookiesSaveRecord(req,res);
                   }
                });
            }
        }

    });

};

exports.logout = function(req, res){
    var cookieId = req.body.userCook;
    req.models.cookies.find({id:cookieId},function(err,result){
        if(err){
            res.send("服务器错误，登出失败！");
            next();
        }
        console.log(result);
        result[0].logout = new Date().toLocaleString();;
        result[0].isLogout = 1;
        result[0].save(function(err){
            if(err){
                res.send("服务器错误，登出失败！");
            }else{
                req.session.userId = false;
                res.send("成功");
            }
        });

    });
};

function cookiesSaveRecord(req,res){
    var cookieDetail = {};
    cookieDetail.id = uuid.v4();
    cookieDetail.userid = req.session.userId;
    cookieDetail.login = new Date().toLocaleString();
    req.models.cookies.create(cookieDetail,function(err,result){
        if(err){
            console.log("保存cookies失败");
            res.send("成功");
        }else{
            console.log("保存cookies成功！");
            res.cookie("userCook",cookieDetail.id,{ maxAge: 30*24*60*60*1000, httpOnly: false });
            res.send("成功");
        }
    });
}