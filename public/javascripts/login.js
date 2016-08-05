/**
 * Created by HoraceChan on 2016/1/29.
 */

$(function(){
    $('#login-username').select();
});

//点击切换到“注册”
$("#signupBtn").click(function(){

    //$("#signinBox").fadeOut();
    $("#signinBox").css("display","none");
    $("#signupBox").fadeIn();
    $('#signup-username').select();

});

//点击切换到“登录”
$("#signinBtn").click(function(){

    $("#signupBox").css("display","none");
    $("#signinBox").fadeIn();
    $('#login-username').select();

});

//登录事件
$('#loginBtn').click(function(){
    getInput();
});


//注册事件
$('#signBtn').click(function(){
    getInput();
});

//Enter事件
$(document).keypress(function(event){
    if(event.keyCode == 13){
        getInput();
    }
});

function getInput(){
    var data = {};
    var url;
    if($("#signinBox").css("display")=="block"){
        data.username = $('#login-username').val();
        url = "/login";
    }else{
        data.username = $('#signup-username').val();
        data.email = $('#signup-email').val();
        url = "/signup";
    }

    postData(url,data);
}

//post事件
function postData(url, data){
    //验证username输入合法性
    var checkUserName = (new RegExp("[a-zA-Z0-9\\u4e00-\\u9fa5]{3,10}")).test(data.username);
    //var checkEmail = (new RegExp("^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$")).test(data.email);
    if(!checkUserName){
        alert("请输入合法的用户名");
    }else{
        $.post(url, data, function(result){
            if(result=="成功"){
                window.location.href="/";
            }else{
                alert(result);
            }
        });
    }

}

