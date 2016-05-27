"use strict";

exports = module.exports = function(db,models) {
    models.user = db.define("user", {
        id      : {type:'text' , key:true},
        name    : {type:'text'},
        email    : {type:'text'},
        level   : {type:'number',defaultValue: "1"},
        isDel   : {type:'number',defaultValue: "0"}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};