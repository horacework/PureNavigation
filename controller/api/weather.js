/**
 * Created by HoraceChan on 2016/7/28.
 */

var request = require('request');
var amapKey = require('../../config').amapKey;

exports.init = function(req, res){
    var longitude = req.query.longitude;
    var latitude = req.query.latitude;
    console.log(longitude);
    var regeoUrl = "http://restapi.amap.com/v3/geocode/regeo?location="+longitude+","+latitude+"&&key="+amapKey;
    var weatherUrl = "http://restapi.amap.com/v3/weather/weatherInfo?key="+amapKey+"&&extensions=base&&city=";
    request(regeoUrl,function (err,response,body) {
        if (!err && response.statusCode == 200) {
            var resultAdCode = JSON.parse(body).regeocode.addressComponent.adcode;
            request(weatherUrl+resultAdCode,function (err2,response2,body2) {
                if (!err2 && response2.statusCode == 200){
                    res.send(body2);
                }else {
                    res.send("fail!");
                }
            });
        }else {
            res.send("fail!");
        }
    })
};