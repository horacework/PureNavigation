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




//关于 弹窗
$.artwl_bind({ showbtnid: "about", title: "关于", content: $("#aboutContent").html() });
//$.artwl_bind({ showbtnid: "logout", title: "From Cnblogs Artwl", content: $("#Content").html() });