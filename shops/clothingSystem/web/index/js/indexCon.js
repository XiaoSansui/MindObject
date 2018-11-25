$(function(){
	//我的店铺
	$(".myshops").click(function() {
		window.location.href = "shopManagement/myshop.html";
	});
	//我的资产
	$(".myassetss").click(function() {
		window.location.href = "assetsManagement/myassets.html";
	});
	//我的商品
	$(".myitemss").click(function() {
		window.location.href = "itemsManagement/myitems.html";
	});
	//员工管理
	$(".mystaffs").click(function() {
		window.location.href = "staffManagement/mystaff.html";
	});
	//上线管理
	$(".myonlines").click(function() {
		window.location.href = "onlineManagement/online.html";
	});
	//订单查询
	$(".myorders").click(function() {
		window.location.href = "orderManagement/myqorder.html";
	});
	
	$(".returnlogin").click(function() {
		window.location.href = "../../login.html";
	});
})
