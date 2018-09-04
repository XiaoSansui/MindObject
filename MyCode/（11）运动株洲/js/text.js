window.onload = function(){
    var navItem = document.querySelector("#nav>.list-nav .item");
    var navActive = document.querySelector("#nav>.list-nav .active");
    var rotate =document.querySelector("#rotate");
    var rotateL =document.querySelector("#rotate>.left");
    var rotateR =document.querySelector("#rotate>.right");
    var lists =document.querySelectorAll("#list>img");
    var zzlunbuo = document.querySelector("#text>.lunbuo>.warp>.list");
    var zzlunbuoLis = document.querySelectorAll("#text>.lunbuo>.warp>.list>li");
    var zzlunbuoLisimg = document.querySelector("#text>.lunbuo>.warp>.list>li img");
    var zzlunbuowarp = document.querySelector("#text>.lunbuo>.warp");
    var zzlunbuoyou = document.querySelector("#you");
    var zzlunbuozuo = document.querySelector("#zuo");
    

    var ulLiNodes=document.querySelectorAll("#text .section-4 > .ul-li >ul > li")
    var divLiNode =document.querySelectorAll("#text .section-4 > .div-ul > li ")
    for(var i=0;i<ulLiNodes.length;i++){
    ulLiNodes[i].index=i
    divLiNode[i].index=i
    divLiNode[i].style.visibility="hidden"
    divLiNode[0].style.visibility="visible"
    ulLiNodes[i].onmouseenter=function () {
        for(var j=0;j<divLiNode.length;j++){
            divLiNode[j].style.visibility="hidden"
        }
          divLiNode[this.index].style.visibility="visible"
        return false
    }
}
   //列表鼠标事件
    var index=0;
    var  warpImg=document.querySelectorAll("#text .warp-img")
    var  warpText=document.querySelectorAll("#text .warp-img > .text")

    var point
    function getPointAb(node){
        //while循环叠加offsetParent的offsetTop和offsetLeft
        var x =0;
        var y = 0;
        while(node){
            x+=node.offsetLeft;
            y+=node.offsetTop;
            node = node.offsetParent;
        }
        return {x:x,y:y};
    }
    for(var i=0;i<warpImg.length;i++){
        warpImg[i].index=i
        warpImg[i].onmouseenter=function (event){
            point = getPointAb(warpImg[this.index]);
            var event=event||window.event
            var x=event.pageX-point.x;//(得到鼠标在框中的坐标)
            var y=event.pageY-point.y;//(得到鼠标在框中的坐标)
            var H=this.clientHeight;
            var W=this.clientWidth;
            var k=Math.floor(H/W);//为了防止不能整除
            //得到2个斜边函数
            //设y=ax+c
            //(0,0) (width,height)其中一个斜边过这两点
            //a=height/width,c=0
            //y=(height/width)*x;
            //(0,height) (width,0)另外一个斜边过这两点
            //a=-height/width,c=height
            //y=-(height/width)*x+height
            if((k*x)>=y && (H-k*x)>=y){//这是判断从上方进入,这边简化处理不对等于情况做特别处理
                console.log("从上方进入");
                index=0
            }

            if((k*x)<y && (H-k*x)<y){
                console.log("从下方进入");
                index=1
            }

            if((k*x)<y && (H-k*x)>y){
                console.log("从左边进入");
                index=2
            }

            if((k*x)>y && (H-k*x)<y){
                console.log("从右边进入");
                index=3
            }

            switch (index) {
                case 0 :
                    warpText[this.index].style.cssText = "top:-194px;left:0";
                    console.log("0")
                    break;
                case 1 :
                    warpText[this.index].style.cssText = "top:194px;left:0";
                    console.log("1")
                    break;
                case 2 :
                    warpText[this.index].style.cssText = "top:0;left:-194px";
                    console.log("2")
                    break;
                case 3 :
                    warpText[this.index].style.cssText = "top:0;left:194px";
                    console.log("3")
                    break;
            }
            warpText[this.index].style.animation = 'move 0.5s forwards';

        }
        warpImg[i].onmouseleave= function (ev){
            point = getPointAb(warpImg[this.index]);
            var  ev=ev||window.event
            var x=ev.pageX-point.x;//(得到鼠标在框中的坐标)
            var y=ev.pageY-point.y;//(得到鼠标在框中的坐标)
            var H=this.clientHeight;
            var W=this.clientWidth;
            var k=Math.floor(H/W);//为了防止不能整除
            //得到2个斜边函数
            //设y=ax+c
            //(0,0) (width,height)其中一个斜边过这两点
            //a=height/width,c=0
            //y=(height/width)*x;
            //(0,height) (width,0)另外一个斜边过这两点
            //a=-height/width,c=height
            //y=-(height/width)*x+height
            if((k*x)>=y && (H-k*x)>=y){//这是判断从上方进入,这边简化处理不对等于情况做特别处理
                console.log("从上方离开");
                warpText[this.index].style.animation = 'move1 0.5s forwards';
            }

            if((k*x)<y && (H-k*x)<y){
                console.log("从下方离开");
                warpText[this.index].style.animation = 'move3 0.5s forwards';
            }

            if((k*x)<y && (H-k*x)>y){
                console.log("从左边离开");
                warpText[this.index].style.animation = 'move4 0.5s forwards';
            }

            if((k*x)>y && (H-k*x)<y){
                console.log("从右边离开");
                warpText[this.index].style.animation = 'move2 0.5s forwards';
            }

        }
    }

    

   
    //zz轮播
   zzlunbuo.style.width = zzlunbuoLis.length*zzlunbuoLisimg.offsetWidth+"px";
   zzlunbuotu()
   var index=1;
   function zzlunbuotu(){
    
    var timer=0;
    zzlunbuowarp.addEventListener("mouseenter",function(){
        clearInterval(timer);
    })
    zzlunbuowarp.addEventListener("mouseleave",function(){
        clearInterval( zzlunbuotu());
    })
    zzlunbuoyou.onclick=function(){
       if(index==zzlunbuoLis.length-1){
           index=0;
           zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
       }else if(index<=zzlunbuoLis.length-1){
            index++;
            zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
       }
       now = index;      
    }
    zzlunbuozuo.onclick=function(){
        if(index==0){
            index=zzlunbuoLis.length-1;
            zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
        }else if(index<=zzlunbuoLis.length-1){
            index--;      
            zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
        }
        now = index;
        
    }
        
       timer=setInterval(function(){
            if(index==zzlunbuoLis.length-1){
            index=0;
            zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
             }else if(index<=zzlunbuoLis.length-1){
            index++;
            zzlunbuo.style.left = -index*zzlunbuoLis[index].offsetWidth+"px";
            }
        },3000)

   }


    //头部列表动画
    navItem.addEventListener("mouseenter",function(){
        navActive.style.display ="block";
    })
    navItem.addEventListener("mouseleave",function(){
        navActive.style.display ="none";
    })
    //首页轮播图
    
    lunbo();
    
    function lunbo(){
        var index=0;
         var timer=0;
        rotateL.onclick=function(){
            for(var i=0;i<lists.length;i++){
                lists[i].classList.remove("active");
               }
                if(index==1){
                    index=0;
                }else if(index==0){
                    index=1;
                }
                lists[index].classList.add("active");
        }
        rotateR.onclick=function(){
            for(var i=0;i<lists.length;i++){
                lists[i].classList.remove("active");
               }
                if(index==1){
                    index=0;
                }else if(index==0){
                    index=1;
                }
                lists[index].classList.add("active");
        }
        rotate.addEventListener("mouseenter",function(){
            clearInterval(timer);
        })
        rotate.addEventListener("mouseleave",function(){
            lunbo();
        })
        timer=setInterval(function(){
            for(var i=0;i<lists.length;i++){
             lists[i].classList.remove("active");
            }
             if(index==1){
                 index=0;
             }else if(index==0){
                 index=1;
             }
             lists[index].classList.add("active");
             
        },2000)
        
    }
    
 
    
    
    

}