'use strict';

var db = {
    host:"localhost",
    name:"nav",
    username:"root",
    password:""
};

exports.mysql = {
    url: "mysql://"+db.username+":"+db.password+"@"+db.host+"/"+db.name
};