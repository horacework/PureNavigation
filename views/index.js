/**
 * Created by HoraceChan on 2016/1/24.
 */
'use strict';

exports.init = function(req, res){
    if(req.session.userId){
        console.log(req.session.userId);
        req.models.links.find({userid:req.session.userId},function(err,result){
            if(err){
                console.log("ERROR:"+err);
                res.send("发生未知错误！");
            }else{
                console.log(result);
                res.render('index',{ title: '纯洁的导航', username:req.session.username, links:result});
            }

        });

        //TODO 判断并刷新cookies
    }else if(req.cookies.userCook){
        //TODO cookies验证
    }else{
        res.redirect('/login');
    }

};