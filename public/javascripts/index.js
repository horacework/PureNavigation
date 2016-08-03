
/**
 * Created by HoraceChan on 2016/7/26.
 */

$(function(){
    getWeatherByIP();
});


//登出
$("#logout").click(function(){
    if (confirm("你确定要退出登录吗？")){
        var data = {};
        data.userCook = getCookie("userCook");
        if(data.userCook != null){
            $.post("/logout", data, function(result){
                if(result=="成功"){
                    clearCookie("userCook");
                    window.location.href="/login";
                }else{
                    alert(result);
                }
            });
        }
    }
});

//cookies操作
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function clearCookie(name) {
    setCookie(name, "", -1);
}

//基于经纬度定位获取天气
$("#header-weather").click(function () {});//TODO 到时候搞个预报

//基于IP定位获取天气
function getWeatherByIP() {
    $.get("/api/weather/ip",function (data) {
        showWeather(data);
    })
}

//显示天气情况
function showWeather(data) {
    if(data != "fail"){
        var result = JSON.parse(data);
        if(result.status != "1"){
            //失败，不做任何处理或提示
        }else{
            $("#weather-city").html(result.lives[0].city);
            $("#weather-icon").html(result.lives[0].weather);
            // $("#weather-icon").html("&#xf0209;");
            $("#weather-temp").html(result.lives[0].temperature+"℃");
        }
    }
}


//“关于我”---弹窗
$.artwl_bind({ showbtnid: "about", title: "关于", content: $("#aboutContent").html() });

//添加URL页面---弹窗
$("#newUrl").click(function () {
    var height = $("#newContent").height();
    var width = $("#newContent").width();
    $("#artwl_mask").show();
    $("#newContent").css("top", ($(window).height() - height) / 2).css("left", ($(window).width() - width) / 2).show();
    if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
        width = $(window).width() > 600 ? 600 : $(window).width() - 40;
        $("#newContent").css("width", width + "px").css("top", ($(window).height() - height) / 2).css("left", ($(window).width() - width) / 2).show();
        $("#artwl_mask").css("width", $(window).width() + "px").css("height", $(window).height() + "px").css("background", "#888");
        //$("#artwl_close").css("top", "30px").css("right", "30px").css("font-size", "20px").text("关闭");
    }
});

//添加URL操作---确定按钮
$("#newContentBtn").click(function () {
    var regExpUrl = /([a-z]([a-z0-9\-]*[\.])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/;
    var reExpName = /^[a-zA-Z0-9]{1,9}$|^[\u4e00-\u9fa5]{1,6}$/;
    var url = $('#newUrlLine').val();
    var name = $('#newUrlName').val();
    if (!regExpUrl.test(url)){
        alert("URL不合法");
    }else if (!reExpName.test(name)){
        alert("Name不合法");
    }else {
        $.post('/addUrl',{name:name,url:url},function (result) {
            switch(result.status){
                case 0:
                    $('#website .webItem').eq($(this).size()-3).after("<div class='webItem'><a href='http:\/\/"+url+"target='_blank' class='webDesc trans'>"+name+"</a><div class='webLink'>"+url+"</div></div>");
                    newContentCancel()
                    break;
                default:
                    alert(result.message);
                    newContentCancel()
            }

        });
    }
});

//添加URL操作---取消按钮
$("#newContentCancel").click(function () {
    newContentCancel();
});

function newContentCancel() {
    $("#artwl_mask").hide();
    $("#newContent").hide();
}

//回到顶部按钮
$("#backToTop").click(function(){
    $("html, body").animate({scrollTop:0}, 'slow');
});
//改变背景图
$("#changeBackground").click(function () {
    $(".background-img").css("background-image","url('../images/" + Math.floor(Math.random()*7) + ".jpg')");
});