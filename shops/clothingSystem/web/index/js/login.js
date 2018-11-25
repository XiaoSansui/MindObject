$(function() {
    var user=0;
	var mn = 0;
	var m = 0;
	var n = 0;
	//登陆验证码
	function yzm() {
		//获取验证码两个两位数的随机数
		m = Math.floor(Math.random() * 90) + 10;
		n = Math.floor(Math.random() * 90) + 10;
		mn = m + n;
		//验证码
		$('.yzmlogintxt').text(m + "+" + n + "=?");
	}
	yzm();
	//刷新验证码
	$("#sxyzm").click(function() {
		yzm(m, n, mn);
	})
	//判断验证码
	$('.buttonid').click(function() {
		var yzmlogtext = $("#yzmlogtext").val(); //获取输入的验证码
		if(yzmlogtext == mn) {
			if(user==0){
				window.location.href = "system/Staffregister/index.html";
			}else if(user==1){
				window.location.href = "system/Conserregister/indexCon.html";
			}else if(user==3){
				window.location.href = "system/stageConserregister/stageindex.html";
			}
			
		} else {
			$('.yzmlogins').css('color', 'red');
			timedMsg();
		}
	});
	//验证码错误，提示文字变红后3秒还原。
    function timedMsg(){
        setTimeout("$('.yzmlogins').css('color', 'blue')",3000);
     }
	//管理员、员工登陆切换
	var i = 0;
	$("#bb").click(function() {
		if(i == 0) {
			$('#login_text').html('管理员登陆');
			$('#bb').html('员工登陆');
			user=1;
			i++;
		} else {
			$('#login_text').html('员工登陆');
			$('#bb').html('管理员登陆');
			i = 0;
			user=0;
		}
	});
	//跳转注册界面
	$(".registers").click(function() {
		window.location.href = "register.html";
	});
	//跳转忘记密码界面
	$('.forgetpasswords').click(function() {
		window.location.href = "forgetpassword.html";
	});
	//存储当前账号id；


})