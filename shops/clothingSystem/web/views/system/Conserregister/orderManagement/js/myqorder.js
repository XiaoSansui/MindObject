$(function(){
	//返回主界面
	$('.returnindexCon').click(function(){
		window.location.href = "../indexCon.html";
	});
	//查询订单商品信息
	$('.selectmyqorder').click(function(){
		window.location.href = "backSingle.html";
	});
	//查询退单商品信息
	$('.sbackmyitems').click(function(){
		window.location.href = "sbackitems.html";
	});
})
