/**
 * Created by HoraceChan on 2016/1/24.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;