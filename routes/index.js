var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: '纯洁的导航' });
//});

router.get('/',require('../views/index').init);

router.get('/login',require('../views/index').login);

module.exports = router;
