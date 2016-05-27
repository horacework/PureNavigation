/**
 * Created by HoraceChan on 2016/1/24.
 */
'use strict';

exports.init = function(req, res){
    if(req.session.userId){
        console.log(req.session.userId);
        res.render('index',{ title: '纯洁的导航', username:req.session.username });
        //TODO 判断并刷新cookies
    }else if(req.cookies.userCook){
        //TODO cookies验证
    }else{
        res.redirect('/login');
    }

};