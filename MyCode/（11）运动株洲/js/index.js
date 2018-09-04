var text=document.querySelector("#navigation > nav > .nav-li > li >.text")
var textUl=document.querySelector("#navigation > nav > .nav-li > li >.text >ul")

text.onmouseenter=function () {
    textUl.style.display="block"
}
text.onmouseleave=function () {
    textUl.style.display="none"
}

// 轮播图
var heared=document.querySelector("#warp > section > header")
var hearedDiv=document.querySelector("#warp > section > header div")
var spanLeft=document.querySelector("#warp > section > header > .left")
var spanRight=document.querySelector("#warp > section > header > .right")
var headerImg=document.querySelectorAll("#warp > section > header  img")

var imgW=document.documentElement.clientWidth
var aNodes=document.querySelectorAll("#warp > section > header > .btn a")
var divWidth=0
for(var i=0;i<headerImg.length;i++){
    headerImg[i].style.width=imgW+"px"
}
for(var i=0;i<aNodes.length;i++){
    aNodes[i].index=i
    aNodes[i].onclick=function (ev) {
        move(this.index)
        hearedDiv.style.left=-this.index*imgW+"px"
        divWidth=this.index
        return false;
    }
}
function  move(divWidth) {
    for(var i=0;i<aNodes.length;i++){
        aNodes[i].classList.remove("active")
    }
    aNodes[divWidth].classList.add("active")
    console.log(divWidth)
}
var setTime=setInterval(setfun,2000)
    function setfun() {
    if(divWidth==1){
        divWidth=0
    }else if(divWidth==0){
        divWidth=1
    }
    move(divWidth)
    hearedDiv.style.left=-divWidth*imgW+"px"

}
spanLeft.onclick=function () {
    // clearInterval(setTime)
    if(divWidth==1){
        divWidth=0
    }else if(divWidth==0){
        divWidth=1
    }
    hearedDiv.style.left=-divWidth*imgW+"px"
    move(divWidth)
    setTime=setInterval(setfun,2000)
}
spanRight.onclick=function () {
    clearInterval(setTime)
    if(divWidth==1){
        divWidth=0
    }else if(divWidth==0){
        divWidth=1
    }
    move(divWidth)
    hearedDiv.style.left=-divWidth*imgW+"px"
    setTime=setInterval(setfun,2000)
}

// 轮播图2
var ulNode=document.querySelector("section > .center > .section-2 .top-img > ul")
var spanLeft=document.querySelector("section > .center > .section-2 > .top-img > .left")
var spanRight=document.querySelector("section > .center > .section-2 > .top-img > .right")
var ulIndex=0
var ulImgTime=setInterval(ulImg,2000)
function ulImg() {
    ulIndex++
    if(ulIndex>=22){
        ulIndex=0
    }
    ulNode.style.left=-ulIndex*800+"px"
}
spanRight.onclick=function () {
    clearInterval(ulImgTime)
    ulIndex=ulIndex+1
    ulNode.style.left=-ulIndex*800+"px"
    ulImgTime=setInterval(ulImg,2000)
}
spanLeft.onclick=function () {
    clearInterval(ulImgTime)
    if(ulIndex==0){
        ulIndex=22
    }
    ulIndex=ulIndex-1
    ulNode.style.left=-ulIndex*800+"px"
    ulImgTime=setInterval(ulImg,2000)
}

//移入显示
var returnTop=document.querySelector("#warp > .returnTop ")
window.onscroll=function () {
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    var h=document.documentElement.clientHeight
        if(t > h){
            returnTop.style.display="block"
        }else{
            returnTop.style.display="none"
        }
}
var ulLiNodes=document.querySelectorAll(".section-4 > .ul-li >ul > li")
var divLiNode =document.querySelectorAll(".section-4 > .div-ul > li ")
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

var index=0;
var  warpImg=document.querySelectorAll("#warp section  .center .warp-img")
var  warpText=document.querySelectorAll("#warp section .center .warp-img > .text")


/*
 上下左右四个方向
 * */

//boder margin会影响这个函数的取值
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




/*
 判断鼠标方向
 * */


// warpImg.onmouseenter=function (event){
//     var event=event||window.event
//     var x=event.pageX-warp.offsetLeft;//(得到鼠标在框中的坐标)
//     var y=event.pageY-warp.offsetTop;//(得到鼠标在框中的坐标)
//     var H=warp.clientHeight;
//     var W=warp.clientWidth;
//     var k=Math.floor(H/W);//为了防止不能整除
//     //得到2个斜边函数
//     //设y=ax+c
//     //(0,0) (width,height)其中一个斜边过这两点
//     //a=height/width,c=0
//     //y=(height/width)*x;
//     //(0,height) (width,0)另外一个斜边过这两点
//     //a=-height/width,c=height
//     //y=-(height/width)*x+height
//     if((k*x)>=y && (H-k*x)>=y){//这是判断从上方进入,这边简化处理不对等于情况做特别处理
//         console.log("从上方进入");
//         index=0
//     }
//
//     if((k*x)<y && (H-k*x)<y){
//         console.log("从下方进入");
//         index=1
//     }
//
//     if((k*x)<y && (H-k*x)>y){
//         console.log("从左边进入");
//         index=2
//     }
//
//     if((k*x)>y && (H-k*x)<y){
//         console.log("从右边进入");
//         index=3
//     }
//
//     switch (index) {
//         case 0 :
//             warpImg.style.cssText = "top:"+T+"px;left:0";
//             console.log("0")
//             break;
//         case 1 :
//             warpImg.style.cssText = "top:"+B+"px;left:0";
//             console.log("1")
//             break;
//         case 2 :
//             warpImg.style.cssText = "top:0;left:"+L+"px";
//             console.log("2")
//             break;
//         case 3 :
//             warpImg.style.cssText = "top:0;left:"+R+"px";
//             console.log("3")
//             break;
//     }
//
//     warpImg.style.animation = 'move 0.5s forwards';
//
// }
// warp.onmouseleave= function (ev){
//     var  ev=ev||window.event
//     var x=ev.pageX-warp.offsetLeft;//(得到鼠标在框中的坐标)
//     var y=ev.pageY-warp.offsetTop;//(得到鼠标在框中的坐标)
//     var H=warp.clientHeight;
//     var W=warp.clientWidth;
//     var k=Math.floor(H/W);//为了防止不能整除
//     //得到2个斜边函数
//     //设y=ax+c
//     //(0,0) (width,height)其中一个斜边过这两点
//     //a=height/width,c=0
//     //y=(height/width)*x;
//     //(0,height) (width,0)另外一个斜边过这两点
//     //a=-height/width,c=height
//     //y=-(height/width)*x+height
//     if((k*x)>=y && (H-k*x)>=y){//这是判断从上方进入,这边简化处理不对等于情况做特别处理
//         console.log("从上方离开");
//         warpImg.style.animation = 'move1 0.5s forwards';
//     }
//
//     if((k*x)<y && (H-k*x)<y){
//         console.log("从下方离开");
//         warpImg.style.animation = 'move3 0.5s forwards';
//     }
//
//     if((k*x)<y && (H-k*x)>y){
//         console.log("从左边离开");
//         warpImg.style.animation = 'move4 0.5s forwards';
//     }
//
//     if((k*x)>y && (H-k*x)<y){
//         console.log("从右边离开");
//         warpImg.style.animation = 'move2 0.5s forwards';
//     }
//
// }
















