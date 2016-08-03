"use strict";

exports = module.exports = function(db,models) {
    models.links = db.define("links", {
        id      : {type:'text' , key:true},
        userid    : {type:'text'},
        name   : {type:'text'},
        url   : {type:'text'},
        count   : {type:'number',defaultValue: '0'},
        isDel   : {type:'number',defaultValue: '0'}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};