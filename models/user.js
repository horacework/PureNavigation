exports = module.exports = function(app, mongoose) {
    var userScheMa = new mongoose.Schema({
        username: String,
        email: String
    });
    app.db.model('users',userScheMa);
};
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//var userScheMa = new Schema({
//    username: String,
//    email: String
//});
//exports.users = mongoose.model('users',userScheMa);