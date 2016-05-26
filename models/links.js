"use strict";

exports = module.exports = function(db,models) {
    models.links = db.define("links", {
        id      : {type:'text' , key:true},
        userid    : {type:'text'},
        name   : {type:'text'},
        url   : {type:'text'},
        count   : {type:'number'},
        isDel   : {type:'number'}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};