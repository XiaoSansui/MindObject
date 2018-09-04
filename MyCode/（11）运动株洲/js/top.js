(function(){  //网页加载时调用这个函数
    var top=document.querySelector("#nav >.list-row")
    //绑定单击事件，点击到顶部
    // top.onclick=function(){
    //     window.scrollTop(0,0);
    // };
    //滚动条>200px,出现top
    window.onscroll=function(){
        var y=0;
        if (window.pageYOffset){
            y=window.pageYOffset;
        }else{
            y-document.documentElement.scrollTop;
        }
        if (y>300) {
            top.style.display="flex";
        }else{
            top.style.display="none";
        }
    };
})();
  
   