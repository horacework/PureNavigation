"use strict";

var uuid = require("node-uuid");

exports.init = function(req, res){

    if(req.cookies.userCook){
        console.log(req.cookies.userCook);
        res.send("检查到cookies");
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
            if(result==null){
                res.send("此用户名未注册")
            }else{
                req.session.userId = result[0].id;
                //TODO: cookie保存与记录
                res.send("成功");
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
                       res.send("成功");
                       req.session.userId = result.id;
                       //TODO: cookie保存与记录
                   }
                });
            }
        }

    });

};