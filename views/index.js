/**
 * Created by HoraceChan on 2016/1/24.
 */
'use strict';

exports.init = function(req, res){
    //res.cookie['userId'] = "sdfhksjd";
    console.log(req.cookies.userId);
    if(!req.session.username){
        res.render('index',{ title: '纯洁的导航', username:req.session.username });
    }else if(req.cookies.userId){
        req.app.db.models.cookielog.find({},function(err,person){
            console.log(person);
            //req.session.username = username;
            res.render('index',{ title: '纯洁的导航' });
        });
    }else{
        res.redirect('/login');
    }

};

exports.login = function(req, res){
    console.log(req.cookies.userId);
    res.render('login',{ title: '导航登录页' });
};