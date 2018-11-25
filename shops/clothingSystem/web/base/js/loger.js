function loginLog() {
	$.ajax({
		type: "get",
		url: "http://win.z913953534.wang/studentDemo/demo/findPageData?%20page=1&rows=10",
		async: true,
		"success": function(result) {
			var list1 = result.data.list;
			for(var j = 0; j <= list1.length; j++) {
				var tr = $("<tr></tr>");
				var td1 = $("<td></td>").append(list1[j].login_log_id);
				var td2 = $("<td></td>").append(list1[j].user_id);
				var td3 = $("<td></td>").append(list1[j].user_account);
				var td4 = $("<td></td>").append(list1[j].user_password);
				var td5 = $("<td></td>").append(list1[j].user_name);
				var td6 = $("<td></td>").append(list1[j].login_date);
				var td7 = $("<td></td>").append(list1[j].loginout_date);
				var td8 = $("<td></td>").append(list1[j].request_ip);
				var td9 = $("<td></td>").append(list1[j].state);
				var td10 = $("<td></td>").append(list1[j].type);
				var td11 = $("<td></td>").append(list1[j].imei);
				var td12 = $("<td></td>").append(list1[j].model_number);
				var td13 = $("<td></td>").append(list1[j].version_num);
				var td14 = $("<td></td>").append(list1[j].loginout_type);
				var td15 = $("<td></td>").append(list1[j].session_id);
				tr.append(td1).append(td2).append(td3).append(td4).append(td5)
					.append(td6).append(td7).append(td8).append(td9).append(td10)
					.append(td11).append(td12).append(td13).append(td14).append(td15).appendTo("tbody");
			}

		}
	});
}
loginLog();