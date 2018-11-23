!(function (w) {
  w.moveText = {};
  w.moveText.css= function (node, type, val) {
    if (typeof node["transform"] === "undefined" && typeof node === "object") {
      node["transform"] = {};
    }
    if (arguments.length >= 3) {
      var text = "";
      node["transform"][type] = val;
      for(item in node["transform"]){
        if(node["transform"].hasOwnProperty(item)){
          switch (item){
            case "translateX":
            case "translateY":
            case "translateZ":
              text += item+"("+node["transform"][item]+"px)"
              break;
            case "scale":
              text += item+"("+node["transform"][item]+")"
              break;
            case "rotate":
              text += item+"("+node["transform"][item]+"deg)"
              break;
          }
        }
      }
      node.style.transform = node.style.webkitTransform = text;
    }else if(arguments.length==2){
      val = node["transform"][type];
      if(typeof val ==="undefined"){
        switch (type){
          case "translateX":
          case "translateY":
          case "translateZ":
          case "rotate":
            val = 0;
            break;
          case "scale":
            val=1;
            break;
        }
      }
      return val;
    }
  }
  w.moveText.carousel= function (arr){
    var carouselWrap = document.querySelector('.carousel-wrap');
    if(carouselWrap){
      var pointslength = arr.length;
      var needCarousel = carouselWrap.getAttribute("needCarousel");
      needCarousel = needCarousel == null?false:true;
      if(needCarousel){
        arr = arr.concat(arr);
      }

      //布局
      //生成ul li结构
      var ulNode = document.createElement("ul");
      var styleNode = document.createElement("style");
      styleNode.innerHTML = ".carousel-wrap > .list{width:"+arr.length*100+"%;}.carousel-wrap > .list > li{width:"+(1/arr.length*100)+"%;}"
      ulNode.className="list";
      for(var i=0;i<arr.length;i++){
        ulNode.innerHTML += '<li><a href="javascript:;"><img src="'+arr[i]+'"></a></li>'
      }
      carouselWrap.appendChild(ulNode);
      document.head.appendChild(styleNode);

      //延时获取图片高度
      var imgNode = document.querySelector(".carousel-wrap > .list > li > a >img");
      setTimeout(function(){
        carouselWrap.style.height = imgNode.offsetHeight+"px";
      },100)

      //小圆点
      var pointsWrap = document.querySelector(".carousel-wrap > .points-wrap")
      if(pointsWrap){
        for(var i=0;i<pointslength;i++){
          if(i==0){
            pointsWrap.innerHTML+='<span class="active"></span>';
          }else{
            pointsWrap.innerHTML+="<span></span>";
          }
        }
        var pointsWrapSpans = document.querySelectorAll(".carousel-wrap > .points-wrap > span")
      }


      //滑动
      /*
    * 防抖动
    *
    * 1.判断用户首次滑屏的方向
    * 2.如果是x轴
    * 		以后不管用户怎么滑都会抖动
    * 3.如果是y轴
    * 		以后不管用户怎么滑都不会抖动
    * */
      var index=0;
      var mouseX = 0;//手指开始的位置
      var mouseY=0;
      var elementX = 0;//元素开始的位置
      var elementY=0;

      //首次滑屏的方向
      var isX = true;
      var isFirst = true;
      // var translateX =0;
      carouselWrap.addEventListener("touchstart",function(ev){
        ev=ev||event;
        ulNode.style.transition = "none";
        clearInterval(timer);
        //无缝
        /*点击第一组的第一张时 瞬间跳到第二组的第一张
        点击第二组的最后一张时  瞬间跳到第一组的最后一张*/
        //index代表ul的位置
        if(needCarousel) {
          var index = moveText.css(ulNode, "translateX") / document.documentElement.clientWidth;
          if (-index === 0) {
            index = -pointslength;
          } else if (-index == (arr.length - 1)) {
            index = -(pointslength - 1)
          }
          moveText.css(ulNode, "translateX", index * document.documentElement.clientWidth)
        }
        var TouchC = ev.changedTouches[0];


        mouseX = TouchC.clientX;
        mouseY = TouchC.clientY;
        // elementX = translateX;
        elementX=moveText.css(ulNode,"translateX")
        elementY=moveText.css(ulNode,"translateY")

        isX = true;
        isFirst = true;
      })
      carouselWrap.addEventListener("touchmove",function(ev){
        ev=ev||event;
        //二次以后的防抖动
        if(!isX){
          return;
        }
        var TouchC = ev.changedTouches[0];
        var nowX = TouchC.clientX;
        var disX = nowX - mouseX;
        var nowY = TouchC.clientY;
        var disY = nowY - mouseY;
        // translateX = disX+elementX;
        //ulNode.style.left = disX+elementX+"px";
        // ulNode.style.transform = "translateX("+translateX+"px)";

        //首次判断用户的滑动方向
        if(isFirst){
           isFirst=false;
            //判断用户的滑动方向
            //x ---> 放行
            //y ---> 首次狠狠的咬住，并且告诉兄弟 下次也给我咬住
           if(Math.abs(disY)>Math.abs(disX)){
             //y轴上滑
             isX = false;
             //首次防抖动
             return;
           }
        }

        moveText.css(ulNode,"translateX",disX+elementX)
      })


      carouselWrap.addEventListener("touchend",function(ev){
        ev=ev||event;

        // var index = translateX/document.documentElement.clientWidth;
        index =moveText.css(ulNode,"translateX")/document.documentElement.clientWidth;
        index = Math.round(index);
        //超出控制
        if(index>0){
          index=0;
        }else if(index<1-arr.length){
          index = 1-arr.length;
        }

        smallrow(index);
        ulNode.style.transition = ".5s transform";
        // translateX = index*(document.documentElement.clientWidth);
        // ulNode.style.transform = "translateX("+translateX+"px)";
        moveText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
        if(needAuto){
          Auto();
        }
      })

      //自动轮播
      var timer=0;
      var needAuto = carouselWrap.getAttribute("needAuto");
      needAuto = needAuto == null?false:true;
      if(needAuto){
        Auto();
      }
      function Auto() {
        clearInterval(timer);
        timer = setInterval(function (){
          if(index==1-arr.length){
            index = 1-arr.length/2;
            ulNode.style.transition = "none";
            moveText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
          }
          setTimeout(function () {
            index--;
            smallrow(index);
            ulNode.style.transition = "1s transform";
            moveText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
          },50)
        },2000)
      }
      function smallrow(index) {
        if(!pointsWrap){
          return;
        }
        for(var i=0;i<pointsWrapSpans.length;i++){
          pointsWrapSpans[i].classList.remove('active');
        }
        pointsWrapSpans[-index%pointslength].classList.add("active");
      }
    }

  }
  w.moveText.nav = function () {
    var navDrag = document.querySelector(".moveText-drag-nav");
    var listNode = document.querySelector(".moveText-drag-nav .list");

    var mouseX = 0;
    var elementX = 0;
    var minX = navDrag.clientWidth - listNode.offsetWidth;

    var lastTime=0;
    var lastPoint=0;
    var timeDir=1;
    var pointDir=0;

    navDrag.addEventListener("touchstart",function (ev) {
      ev=ev||event;

      var touchC = ev.changedTouches[0]
      mouseX = touchC.clientX;
      elementX = moveText.css(listNode,"translateX");
      listNode.style.transition = "none"
      lastTime = new Date().getTime();
      lastPoint = touchC.clientX;

      //清除速度残留
      pointDir=0;
      listNode.handMove=false;
    })

    navDrag.addEventListener("touchmove",function (ev) {
      ev=ev||event;
      var touchC = ev.changedTouches[0];
      var nowX = touchC.clientX;
      var dirX = nowX - mouseX;
      var translateX = elementX+dirX;

      var nowTime = new Date().getTime();
      var nowPoint = touchC.clientX;
      timeDir = nowTime-lastTime;
      pointDir = nowPoint-lastPoint;

      lastTime=nowTime;
      lastPoint=nowPoint;

      /*手动橡皮筋效果
   *
   * 在move的过程中，每一次手指touchmove真正的有效距离慢慢变小，元素的滑动距离还是在变大
   *
   * pointDis：整个手指touchmove真正的有效距
   *
   * translateX = damu.css(item,"translateX") + pointDis*scale;!!!
   *
   * */
      if(translateX>0){
        //translateX=0;
        listNode.handMove=true;
        var scale = document.documentElement.clientWidth/((document.documentElement.clientWidth+translateX)*1.5);
        translateX = moveText.css(listNode,"translateX")+pointDir*scale;
      }else if(translateX<minX){
        //translateX=minX;
        listNode.handMove=true;
        var over = minX - translateX;
        var scale = document.documentElement.clientWidth/((document.documentElement.clientWidth+over)*1.5);
        translateX = moveText.css(listNode,"translateX")+pointDir*scale;
      }
      moveText.css(listNode,"translateX",translateX);
    })

    navDrag.addEventListener("touchend",function (ev) {
      var translateX = moveText.css(listNode,"translateX")
      if(!listNode.handMove){
        //快速滑屏
        //速度越大  位移越远
        var speed = pointDir/timeDir;
        speed = Math.abs(speed)<0.5?0:speed;
        var speedX = translateX+ speed*200;
        var bsr = "";
        var time= Math.abs(speed)*0.2;


        time = time<0.8?0.8:time;
        time = time>2?2:time;
        if(speedX>0){
          speedX=0;
          bsr = "cubic-bezier(.52,1.54,.6,1.64)";
          // moveText.css(listNode,"translateX",translateX);
        }else if(speedX<minX){
          speedX=minX;
          bsr = "cubic-bezier(.52,1.54,.6,1.64)";
          // moveText.css(listNode,"translateX",translateX);
        }
        listNode.style.transition = time+"s "+bsr+"transform"
        moveText.css(listNode,"translateX",speedX)
      }else{

        listNode.style.transition="1s transform";
        if(translateX>0){
          translateX=0;
          moveText.css(listNode,"translateX",translateX)
        }else if(translateX<minX){
          translateX=minX;
          moveText.css(listNode,"translateX",translateX)
        }
      }
    })
  }
})(window)