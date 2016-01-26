/**
 * Created by HoraceChan on 2016/1/24.
 */
'use strict';

exports.init = function(req, res){
    res.render('index',{ title: '纯洁的导航' });
};

exports.login = function(req, res){
    res.render('login',{ title: '导航登录页' });
};