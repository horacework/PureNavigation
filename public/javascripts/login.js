/**
 * Created by HoraceChan on 2016/1/29.
 */
//点击切换到“注册”
$("#signupBtn").click(function(){

    //$("#signinBox").fadeOut();
    $("#signinBox").css("display","none");
    $("#signupBox").fadeIn();

});

//点击切换到“登录”
$("#signinBtn").click(function(){

    $("#signupBox").css("display","none");
    $("#signinBox").fadeIn();

});

//登录事件
$('#loginBtn').click(function(){
    var data = {};
    data.username = $('#login-username').val();
    console.log(data);
    var url = "/login";

    postData(url,data);
});


//注册事件
$('#signBtn').click(function(){
    var data = {};
    data.username = $('#signup-username').val();
    data.email = $('#signup-email').val();
    var url = "/signup";

    postData(url, data);

});

//post事件
function postData(url, data){
    console.log(data);
    $.post(url, data, function(result){
        if(result=="成功"){
            window.location.href="/";
        }else{
            alert(result);
        }
    });
}

