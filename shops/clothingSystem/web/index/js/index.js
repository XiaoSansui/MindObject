$(function(){
       //显示当前时间
	function getmytime(){
		var myDate = new Date();
		var y = myDate.getFullYear(); // 获取完整的年份(4位,)
        var m = myDate.getMonth()+1; // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var d = myDate.getDate(); // 获取日(1-31)
        var t = myDate.getTime(); // 获取时间(从1970.1.1开始的毫秒数)
        var h = myDate.getHours(); // 获取小时数(0-23)
        h = h < 10 ?"0"+h: h; //当数字只有一位数时，前面补0，保持2位整数。
        var min = myDate.getMinutes(); // 获取分钟数(0-59)
        min = min < 10 ? "0"+min : min;
        var s = myDate.getSeconds(); // 获取秒数(0-59)
        s = s < 10 ? "0"+s : s;
		$('#clock').text("当前时间："+y+"年"+m+"月"+d+"日"+" "+h+":"+min+":"+s);
	}
	setInterval(getmytime,1000);
	//返回登陆界面
	$('.returnlogin').click(function() {
		window.location.href = "../../login.html";
	});
	//跳转开始营业
	$('.ind').click(function() {
		//存储时长到浏览器
       /* localStorage.setItem("syyh","0");
        localStorage.setItem("syym","0");
        localStorage.setItem("syys","0");*/
		window.location.href = "indexStaff.html";
	});
})