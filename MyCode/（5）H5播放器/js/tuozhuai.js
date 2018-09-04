(function (w) {
    w.tuozhuai = {};
    tuozhuai.drag = function drag(node,flag,value,node2,callBack){
    // node : 开启拖拽的元素
    // node2 ：图片碰撞元素
    // flag ： 是否开启范围判断 默认值true
    // value ： 边缘吸附值 默认值0
    var onflag = true;
    var onvalue  = 0;
    var start = {x:0,y:0};
    var mouseDown = {x:0,y:0};
    node.onmousedown=function (ev) {
        ev = ev||event;
        if(this.setCapture){
            this.setCapture();
        }
        start.x = this.offsetLeft;
        start.y = this.offsetTop;
        mouseDown.x = ev.clientX;
        mouseDown.y = ev.clientY;
        document.onmousemove = function (ev) {
            ev=ev||event;
            var mouseMove = {x:0,y:0};
            mouseMove.x = ev.clientX;
            mouseMove.y = ev.clientY;
            var git = {x:0,y:0};
            git.x = mouseMove.x - mouseDown.x;
            git.y = mouseMove.y - mouseDown.y;
            var L = git.x + start.x;
            var T = git.y + start.y;
            //判断范围  磁性吸附
            onflag = flag===false?false:true;
            if(onflag){
                if(value){
                    onvalue=value;
                }
                if(L<value){
                    L=0;
                }else if(L>(document.documentElement.clientWidth - node.offsetWidth)-value){
                    L=document.documentElement.clientWidth - node.offsetWidth;
                }
                if(T<value){
                    T=0;
                }else if(T>(document.documentElement.clientHeight - node.offsetHeight)-value){
                    T=document.documentElement.clientHeight - node.offsetHeight;
                }
            }
            node.style.left = L+"px";
            node.style.top = T+"px";
            //回调检测
            if(callBack&&callBack["move"]&& typeof callBack["move"] === "function"){
                callBack["move"].call(testNode);
            }

            //碰撞检测
            if(node2){
                var T1 = node.offsetTop;
                var B1 = node.offsetTop+node.offsetWidth;
                var L1 = node.offsetLeft;
                var R1 = node.offsetLeft+node.offsetHeight;

                var T2 = node2.offsetTop;
                var B2 = node2.offsetTop+node2.offsetWidth;
                var L2 = node2.offsetLeft;
                var R2 = node2.offsetLeft+node2.offsetHeight;
                if(R1<L2||B1<T2||L1>R2||T1>B2){
                    node2.src = "2.png";
                }else{
                    node2.src = "xfz.png";
                }
            }
        }
        document.onmouseup = function () {
            // doucument.onmousemove = document.onmouseup = null;
            document.onmousemove = document.onmouseup = null;
            if(document.releaseCapture){
                document.releaseCapture();
            }
        }
        return false;
    }
}
})(window);
