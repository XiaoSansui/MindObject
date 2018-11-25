$(function(){
	//返回主界面
	$('.returnindexCon').click(function(){
		window.location.href = "../stageindex.html";
	});
	//查看商品信息界面
	$('.selectiems').click(function(){
		window.location.href = "../stageitemsManagement/stageitems.html";
	});
	//查看订单信息界面
	$('.selectorder').click(function(){
		window.location.href = "../stageorderManagement/stageqorder.html";
	});
	//查看员工信息界面
	$('.selectstaff').click(function(){
		window.location.href = "../stagestaffManagement/stagestaff.html";
	});
	//查看资产信息界面
	$('.selectonlines').click(function(){
		window.location.href = "../satgeassetsManagement/stageassets.html";
	});
	
})
