"use strict";

exports = module.exports = function(db,models) {
    models.user = db.define("user", {
        id      : {type:'text' , key:true},
        name    : {type:'text'},
        level   : {type:'number'},
        isDel   : {type:'number'}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};