/**
 * Created by HoraceChan on 2016/1/24.
 */
'use strict';

exports.init = function(req, res){
    if(req.session.userId){
        //Seesion登录
        console.log("userid:"+req.session.userId);
        console.log("cookies:"+req.cookies.userCook);
        req.models.links.find({userid:req.session.userId},function(err,result){
            if(err){
                console.log("ERROR:"+err);
                res.send("发生未知错误！");
            }else{
                //TODO seesion中的username在cookies登录中无显示
                res.render('index',{ title: '纯洁的导航', username:req.session.username, links:result});
            }

        });

        //TODO 判断并刷新cookies
    }else if(req.cookies.userCook){
        //cookies登录
        //有待验证的cookies变量
        var userCook = req.cookies.userCook;
        req.models.cookies.find({id:userCook}, function(err,result){
            if(err){
                res.redirect('/login');
            }else if(result.length==0){
                //cookies错误
                res.redirect('/login');
            }else{
                var userid = result[0].userid;

                req.models.cookies.find({userid:userid},["login","Z"],function(error,results){
                    console.log(results[0]);
                    if(error){
                        res.redirect('/login');
                    }else if(results[0].id != userCook){
                        //不是最新的cookies
                        res.redirect('/login');
                    }else{
                        req.session.userId = userid;
                        res.redirect('/');
                    }
                })
            }
        });

    }else{
        console.log(req.cookies.userCook);
        res.redirect('/login');
    }

};