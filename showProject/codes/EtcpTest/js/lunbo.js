window.onload = function () {

  var head = document.querySelector("#head");

  head.style.width = document.documentElement.clientWidth+"px";
  head.style.height = document.documentElement.clientHeight+"px";

  //清除默认样式
  document.addEventListener("mousedown",function (ev) {
    ev=ev||event;
    ev.preventDefault();
  })

  var videoBtn = document.querySelector("#video-btn ")
  var close = document.querySelector("#close")
  var video = document.querySelector("#video")
  videoBtn.onclick=function(){

    video.style.display ="block"
  }
  close.onclick = function(){
    video.style.display ="none"
  }

  //首页lunbo
  chlunbo()
  function chlunbo(){
    var contentList = document.querySelector("#content .content-head .list")
    var contentListLis = document.querySelectorAll("#content .content-head .list li")

    contentList.style.width = contentListLis.length*contentListLis[0].offsetWidth+"px";
    var x=0;
    var flag=0;
    var timer=0;
    var w =contentListLis[0].offsetWidth;
    timer=setInterval(function () {
      x++;
      contentList.style.left = -x+"px";
      if(x==3*w){
        x=0;
      }
    },1000/60)
    contentList.addEventListener("mouseenter",function () {
      clearInterval(timer);
    })
    contentList.addEventListener("mouseleave",function () {
      timer=setInterval(function () {
        x++;
        contentList.style.left = -x+"px";
        if(x==3*w){
          x=0;
        }
      },1000/60)
    })
  }
  //span文字效果
  spanNum()
  function spanNum() {
    var nums = document.querySelectorAll(".head-bottom .wrap .num")
    var timer=0;
    var num=0;
    timer=setInterval(function () {
      num+=40;
      for(var i=0;i<nums.length;i++){
        nums[i].innerHTML=num;
      }
      if(num>=3242){
        nums[0].innerHTML=3242;
        nums[1].innerHTML=417492;
        nums[2].innerHTML=42268;
        clearInterval(timer)
      }
    },10)
  }


}