!(function (w) {
  w.transformText = {};
  w.transformText.css= function (node, type, val) {
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
  w.transformText.carousel= function (arr){
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
      var index=0;
      var mouseX = 0;//手指开始的位置
      var elementX = 0;//元素开始的位置
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
          var index = transformText.css(ulNode, "translateX") / document.documentElement.clientWidth;
          if (-index === 0) {
            index = -pointslength;
          } else if (-index == (arr.length - 1)) {
            index = -(pointslength - 1)
          }
          transformText.css(ulNode, "translateX", index * document.documentElement.clientWidth)
        }
        var TouchC = ev.changedTouches[0];


        mouseX = TouchC.clientX;
        // elementX = translateX;
        elementX=transformText.css(ulNode,"translateX")
      })
      carouselWrap.addEventListener("touchmove",function(ev){
        ev=ev||event;
        var TouchC = ev.changedTouches[0];
        var nowX = TouchC.clientX;
        var disX = nowX - mouseX;
        // translateX = disX+elementX;
        //ulNode.style.left = disX+elementX+"px";
        // ulNode.style.transform = "translateX("+translateX+"px)";
        transformText.css(ulNode,"translateX",disX+elementX)
      })


      carouselWrap.addEventListener("touchend",function(ev){
        ev=ev||event;

        // var index = translateX/document.documentElement.clientWidth;
        index =transformText.css(ulNode,"translateX")/document.documentElement.clientWidth;
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
        transformText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
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
            transformText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
          }
          setTimeout(function () {
            index--;
            smallrow(index);
            ulNode.style.transition = "1s transform";
            transformText.css(ulNode,"translateX",index*(document.documentElement.clientWidth))
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

})(window)