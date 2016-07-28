/**
 * Created by HoraceChan on 2016/7/26.
 */
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

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function clearCookie(name) {
    setCookie(name, "", -1);
}

$("#header-weather").click(function () {

    if (window.navigator.geolocation) {
        var options = {enableHighAccuracy: false};
        window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
        } else {
            //TODO 获取当前ip，利用ip定位
            alert("浏览器不支持html5来获取地理位置信息")
        }

});

function handleSuccess(position) {
    var long = position.coords.longitude.toFixed(6);
    var lati = position.coords.latitude.toFixed(6);
    console.log("/api/weather?longitude="+long+"&&latitude="+lati);
    $.get("/api/weather?longitude="+long+"&&latitude="+lati,function (results) {
        console.log(results);
    })
}
function handleError(error) {
    alert(error);
}


//关于 弹窗
$.artwl_bind({ showbtnid: "about", title: "关于", content: $("#aboutContent").html() });
//$.artwl_bind({ showbtnid: "logout", title: "From Cnblogs Artwl", content: $("#Content").html() });