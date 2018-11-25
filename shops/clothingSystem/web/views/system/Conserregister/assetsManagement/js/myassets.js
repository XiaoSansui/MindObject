	$(function() {
	function YYYYMMDDstart() {
		//先给年下拉框赋内容   
		var y = new Date().getFullYear();
		for(var i = (y - 30); i < (y + 30); i++) //以今年为准，前30年，后30年   
			document.reg_testdate.YYYY.options.add(new Option(" " + i + " 年", i));
		//赋月份的下拉框   
		for(var i = 1; i < 13; i++)
			document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));

		document.reg_testdate.YYYY.value = y;
		document.reg_testdate.MM.value = new Date().getMonth() + 1;
		if(new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
		document.reg_testdate.DD.value = new Date().getDate();
	}
	if(document.attachEvent)
		window.attachEvent("onload", YYYYMMDDstart);
	else
		window.addEventListener('load', YYYYMMDDstart, false);
    //年发生变化时日期发生变化(主要是判断闰平年)
	function YYYYDD(str)  {
		var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
		if(MMvalue == "") {
			var e = document.reg_testdate.DD;
			optionsClear(e);
			return;
		}
		var n = MonHead[MMvalue - 1];
		if(MMvalue == 2 && IsPinYear(str)) n++;
		writeDay(n)
	}
	//返回主界面
	$('.returnindexCon').click(function(){
		window.location.href = "../indexCon.html";
	});
	
})