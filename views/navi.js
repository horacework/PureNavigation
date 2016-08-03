"use strict";

var uuid = require('node-uuid');

exports.addUrl = function(req, res){

    if (req.session.userId){

        var regExpUrl = /([a-z]([a-z0-9\-]*[\.])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/;
        var reExpName = /^[a-zA-Z0-9]{1,9}$|^[\u4e00-\u9fa5]{1,6}$/;

        if (regExpUrl.test(req.body.url)&& reExpName.test(req.body.name)){
            req.models.links.create({
                id      :   uuid.v4(),
                userid  :   req.session.userId,
                name    :   req.body.name,
                url     :   req.body.url
            },function (err) {
                if (err){
                    res.send({status:2, message:'服务器错误，请重新再试'});
                }else {
                    res.send({status:0, message:'添加成功'});
                }
            })
        }else {
            res.send({status:3, message:'输入不合法，请重新输入'});
        }
    }else {
        res.send({status:1, message:'尚未登录或会话过期，请重新登录'});
    }

};