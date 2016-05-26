"use strict";

exports.init = function(req, res){
    if(res.cookie['userId']!=null){
        console.log(res.cookie['userId']);
        res.send("检查到cookies");
    }else{
        res.render('login',{ title: '导航登录页' });
    }
};


exports.login = function(req, res){

};

exports.signup = function(req, res){


};