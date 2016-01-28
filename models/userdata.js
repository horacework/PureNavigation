exports = module.exports = function(app, mongoose) {
    var userdataScheMa = new mongoose.Schema({
        owner: String,
        website: String,
        websiteName:String,
        frequency:Number
    });
    app.db.model('userdata',userdataScheMa);
};

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//var userdataScheMa = new Schema({
//    username: String,
//    email: String
//});
//module.exports = mongoose.model('userdata',userdataScheMa);