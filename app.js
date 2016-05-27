var config = require('./config');
var express = require('express');
//var session = require('express-session');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');

//var mongoose = require('mongoose');
//var MongoStore = require('connect-mongo')(session);


var orm = require('orm');

var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');
//var api = require('./routes/api');

var app = express();

app.config = config;

//app.db = mongoose.createConnection(app.config.dbHost,app.config.dbName);

app.use(orm.express(config.mysql.url,{
  define:function(db,models,next){
    //models.user = db.define("user",{});
    require("./models")(db,models);
    next();
  }
}));
//require('./models')(app, mongoose);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ secret: '123456', cookie: { maxAge: 60 * 60 * 1000 }}));
//app.use(cookieSession());
app.use(express.static(path.join(__dirname, 'public')));


require('./routes')(app);

//app.use('/', routes);
//app.use('/users', users);
//app.use('/api',api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
