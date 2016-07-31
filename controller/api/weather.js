/**
 * Created by HoraceChan on 2016/7/28.
 */

var request = require('request');
var amapKey = require('../../config').amapKey;

exports.init = function(req, res){
    var longitude = req.query.longitude;
    var latitude = req.query.latitude;
    var regeoUrl = "http://restapi.amap.com/v3/geocode/regeo?location="+longitude+","+latitude+"&&key="+amapKey;

    request(regeoUrl,function (err,response,body) {
        if (!err && response.statusCode == 200) {
            requestWeather(res, JSON.parse(body).regeocode.addressComponent.adcode);
        }else {
            res.send("fail");
        }
    })
};

exports.ip = function(req, res){
    var IPAddress = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
    var url = "http://restapi.amap.com/v3/ip?key="+amapKey+"&ip=";

    request(url+IPAddress,function (err, response, body) {
        if(!err && response.statusCode == 200 ){
            requestWeather(res, JSON.parse(body).adcode);
        }else {
            res.send("fail");
        }
    });
};

function requestWeather(res, adCode) {
    var weatherUrl = "http://restapi.amap.com/v3/weather/weatherInfo?key="+amapKey+"&&extensions=base&&city=";

    request(weatherUrl+adCode,function (err,response,body) {
        if (!err && response.statusCode == 200){
            res.send(body);
        }else {
            res.send("fail");
        }
    });
}