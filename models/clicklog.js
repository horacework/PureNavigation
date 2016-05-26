"use strict";

exports = module.exports = function(db,models) {
    models.clicklog = db.define("clicklog", {
        id      : {type:'serial' , key:true},
        linkid    : {type:'text'},
        time   : {type:'date',time:true}
    }, {
        methods: {
            getUserName:function(){
                return this.name;
            }
        }
    });
};