"use strict";

exports = module.exports = function(db,models) {
    models.cookies = db.define("cookies", {
        id      : {type:'text' , key:true},
        userid    : {type:'text'},
        login   : {type:'date',time:true}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};