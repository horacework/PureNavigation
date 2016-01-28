/**
 * Created by HoraceChan on 2016/1/28.
 */

exports = module.exports = function(app, mongoose) {
    //embeddable docs first
    require('./user')(app, mongoose);
    require('./userdata')(app, mongoose);
};
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//var userScheMa = new Schema({
//    username: String,
//    email: String
//});
//exports.users = mongoose.model('users',userScheMa);
//
//var userdataScheMa = new Schema({
//    username: String,
//    email: String
//});
//exports.userdata = mongoose.model('userdata',userdataScheMa);