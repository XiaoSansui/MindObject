$(function(){
	//返回
	$(".return").click(function() {
		window.location.href = "../stageshopManagement/stageshop.html";
	});
	//返回主界面
	$('.returnindexCon').click(function(){
		window.location.href = "../stageindex.html";
	});
	//查询订单商品信息
	$('.selectmyqorder').click(function(){
		window.location.href = "stagebackSingle.html";
	});
	//查询退单商品信息
	$('.sbackmyitems').click(function(){
		window.location.href = "stagesbackitems.html";
	});
})
