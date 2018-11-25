$(function(){
    layui.use([ 'laypage'], function() {
     

        var laypage = layui.laypage;
        xsStaffindex(1,10);
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
        //返回
        $('.returnindex').click(function() {
            window.location.href = "index.html";
        });
        //计时器
        var myhs=syyh;//时
        var mymins=syym;//分
        var myss=syys;//秒
        function mytimes(){
            myss = myss < 10 ? "0"+myss : myss;//当数字只有一位数时，前面补0，保持2位整数。
            $('.mytimess').text("上班时长："+myhs+":"+mymins+":"+myss);
            myss++;
            if(myss==60){
                myss=0;
                mymins++;
                //mymins = mymins < 10 ? "0"+mymins : mymins;
                if(mymins==60){
                    mymins=0;
                    myhs++;
                    //myhs = myhs < 10 ? "0"+myhs : myhs;
                }
            }
        }
        setInterval(mytimes,1000);
        //结账
        $('.invo').click(function() {
            window.open('invoicing.html','','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=300,height=200,left=700,top=100');
        });
        //待完成订单
        $('.selectpending').click(function() {
            window.location.href = "pending.html";
        });
        //查询订单
        $('.selectQo').click(function() {
            window.location.href = "QorderSta.html";
        });
        //退单
        $('.backSIngle').click(function() {
            window.location.href = "backSingle.html";
        });


        function xsStaffindex(page, rows) {
            $.ajax({
                type: "get",
                url: "http://localhost:8080/commodity/selectAllCommon",
                data: {
                    "page": page,
                    "maxSize": rows,
                },
                async: false,
                "success": function(result) {
                    if(result.resultCode == 0) {
                        build_sysUserList(result);
                    } else {
                        layer.msg("请求失败！！！", {
                            icon: 2,
                            time: 1000
                        })
                    }
                }

            })
        }
        var s=0;
        var m="";
        var total;
        function build_sysUserList(result) {
            var userList = result.data.list;
            total = result.data.total;
            $(".table_tbody").empty();
            $.each(userList, function(index, item) {
                if(item.items_type==1){
                    m="大衣";
                }else if (item.items_type==2) {
                    m="裤子";
                }else if (item.items_type==3) {
                    m="毛衫";
                }else if (item.items_type==4) {
                    m="衬衣";
                }else if (item.items_type==5) {
                    m="棉服";
                }else if (item.items_type==6) {
                    m="T恤";
                }else if (item.items_type==7) {
                    m="鞋子";
                }else if (item.items_type==8) {
                    m="袜子";
                }else {
                    m="其它";
                }
                s=s+1;
                var tr = $("<tr></tr>");
                var td1 = $("<td></td>").append(""+s+"");
                var td2=$("<td></td>").append(item.items_id);
                var td3=$("<td></td>").append(m);
                var td4=$("<td></td>").append(item.brand_name);
                var td5=$("<td></td>").append(item.brand_type);
                var td6=$("<td></td>").append(item.items_color);
                var td7=$("<td></td>").append(item.items_size);
                var td8=$("<td></td>").append(item.is_discount);
                var td9=$("<td></td>").append(item.discount_money);
                var td10=$("<td></td>").append(item.items_price);
                var td11=$("<td></td>").append("1");
                var td12=$("<td></td>").append("<input type='button' value='下单'></input>");
                tr.append(td1).append(td2).append(td3).append(td4).append(td5)
                    .append(td6).append(td7).append(td8).append(td9).append(td10).append(td11).append(td12).appendTo(".table_tbody");
            })
        }
        //find_userList(1, 5);
        laypage.render({
            elem: 'table_page', //绑定页面元素节点的id
            count: total, //服务器读取的数据总数
            first: '首页',
            last: '尾页',
            prev: '上一页',
            next: '下一页',
            layout: ['baseModel', 'page', 'likeName','maxSize'],
            jump: function(obj, first) { //当前分页执行成功后的回调函数
                //obj包含了当前分页的所有参数，比如：
                //obj.curr 当前页，以便向服务端请求对应页的数据。
                //obj.limit 得到每页显示的条数
                //首次不执行
                if(!first) {
                    find_userList(obj.curr, obj.limit);
                }
            }
        });  var laypage = layui.laypage;
        xsStaffindex(1,10);
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
        //返回
        $('.returnindex').click(function() {
            window.location.href = "index.html";
        });
        //计时器
        var myhs=0;//时
        var mymins=0;//分
        var myss=0;//秒
        function mytimes(){
            myss = myss < 10 ? "0"+myss : myss;//当数字只有一位数时，前面补0，保持2位整数。
            $('.mytimess').text("上班时长："+myhs+":"+mymins+":"+myss);
            myss++;
            if(myss==60){
                myss=0;
                mymins++;
                //mymins = mymins < 10 ? "0"+mymins : mymins;
                if(mymins==60){
                    mymins=0;
                    myhs++;
                    //myhs = myhs < 10 ? "0"+myhs : myhs;
                }
            }
        }
        setInterval(mytimes,1000);
        //结账
        $('.invo').click(function() {
            window.open('invoicing.html','','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=300,height=200,left=700,top=100');
        });
        //待完成订单
        $('.selectpending').click(function() {
            window.location.href = "pending.html";
        });
        //查询订单
        $('.selectQo').click(function() {
            window.location.href = "QorderSta.html";
        });
        //退单
        $('.backSIngle').click(function() {
            window.location.href = "backSingle.html";
        });
        //商品单号查询
        function find_userList(page, rows,fieldName1,fieldValue1,fieldName2,fieldValue2) {

            $.ajax({
                type: "get",
                url: "http://localhost:8080/user/selectUserAllByPage",
                data: {
                    "page": page,
                    "maxSize": rows,
                    "baseModel.listAdvancedQuery[0].fieldName": fieldName1,
                    "baseModel.listAdvancedQuery[0].fieldValue": fieldValue1,
                    "baseModel.listAdvancedQuery[1].fieldName": fieldName2,
                    "baseModel.listAdvancedQuery[1].fieldValue": fieldValue2
                },
                async: false,
                "success": function(result) {
                    if(result.resultCode == 0) {
                        build_sysUserList(result);
                    } else {
                        layer.msg("请求失败！！！", {
                            icon: 2,
                            time: 1000
                        })
                    }
                }
            });
        }


        //收银员查询所有商品
        function xsStaffindex(page, rows) {
            $.ajax({
                type: "get",
                url: "http://localhost:8080/commodity/selectAllCommon",
                data: {
                    "page": page,
                    "maxSize": rows,
                },
                async: false,
                "success": function(result) {
                    if(result.resultCode == 0) {
                        build_sysUserList(result);
                    } else {
                        layer.msg("请求失败！！！", {
                            icon: 2,
                            time: 1000
                        })
                    }
                }

            })
        }
        var s=0;
        var m="";
        var total;
        function build_sysUserList(result) {
            var userList = result.data.list;
            total = result.data.total;
            $(".table_tbody").empty();
            $.each(userList, function(index, item) {
                if(item.items_type==1){
                    m="大衣";
                }else if (item.items_type==2) {
                    m="裤子";
                }else if (item.items_type==3) {
                    m="毛衫";
                }else if (item.items_type==4) {
                    m="衬衣";
                }else if (item.items_type==5) {
                    m="棉服";
                }else if (item.items_type==6) {
                    m="T恤";
                }else if (item.items_type==7) {
                    m="鞋子";
                }else if (item.items_type==8) {
                    m="袜子";
                }else {
                    m="其它";
                }

                var is_discount="";
                if (item.is_discount==0){
                    is_discount="否"
                }
                s=s+1;
                var tr = $("<tr></tr>");
                var td1 = $("<td></td>").append(""+s+"");
                var td2=$("<td></td>").append(item.items_id);
                var td3=$("<td></td>").append(m);
                var td4=$("<td></td>").append(item.brand_name);
                var td5=$("<td></td>").append(item.brand_type);
                var td6=$("<td></td>").append(item.items_color);
                var td7=$("<td></td>").append(item.items_size);
                var td8=$("<td></td>").append(is_discount);
                var td9=$("<td></td>").append(item.discount_money);
                var td10=$("<td></td>").append(item.items_price);
                var td11=$("<td></td>").append("1");
                var td12=$("<td></td>").append("<input type='button' class='syyxdtd"+s+"' value='下单'></input>");
                tr.append(td1).append(td2).append(td3).append(td4).append(td5)
                    .append(td6).append(td7).append(td8).append(td9).append(td10).append(td11).append(td12).appendTo(".table_tbody");
            })
        }
        //find_userList(1, 5);
        laypage.render({
            elem: 'table_page', //绑定页面元素节点的id
            count: total, //服务器读取的数据总数
            first: '首页',
            last: '尾页',
            prev: '上一页',
            next: '下一页',
            layout: ['page',    'count', 'page', 'prev', 'next', 'skip'],
            jump: function(obj, first) { //当前分页执行成功后的回调函数
                //obj包含了当前分页的所有参数，比如：
                //obj.curr 当前页，以便向服务端请求对应页的数据。
                //obj.limit 得到每页显示的条数
                //首次不执行
                if(!first) {
                    find_userList(obj.curr, obj.limit);
                }
            }
        });
        //下单
       // var table = document.getElementById("Top_Table");
        //获取表值
        $(".syyxdtd1").click(function(){
            var $table =$(".syjm2").find("table[name='ssss']").eq(1);
            var nameTd =$table.find("tr").eq(1).children("td").eq(1);
            alert(nameTd);
        });












    })


})
