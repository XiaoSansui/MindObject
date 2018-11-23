window.onload=function () {
    var leftNode=document.querySelector(".imgMove > .img > .left")
    var rightNode=document.querySelector(".imgMove > .img > .right")
    var imgNode=document.querySelectorAll(".imgMove > .img > div >img")
    var imgBox=document.querySelector(".imgMove > .img > div")
    var aBtn=document.querySelectorAll(".imgMove > .img > .btn > a")
    var imgWidth=imgNode[0].clientWidth
    var index=0;
    var setTime=setInterval( fun,2000)
    function fun() {
        index++
        if(index<0){
            index=1;
        }else if(index>1){
            index=0;
        }
        imgBox.style.left=-index*imgWidth+"px"
        move(index)
    }
    leftNode.onclick=function () {
        clearInterval(setTime)
        index--
        if(index<0){
            index=1
        }
        move(index)
        imgBox.style.left=-index*imgWidth+"px"
        setTime=setInterval( fun,2000)
    }
    rightNode.onclick=function () {
        clearInterval(setTime)
        index++
        if(index>1){
            index=0
        }
        imgBox.style.left=-index*imgWidth+"px"
        move(index)
        setTime=setInterval( fun,2000)

    }
    function move(index) {
    for(var i=0;i<aBtn.length;i++){
         aBtn[i].classList.remove("active")
        }
          aBtn[index].classList.add("active")
    }
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].onclick=function (ev) {
            index++
            clearInterval(setTime)
            if(index>1){
                index=0
            }else if(index<0){
                index=0
            }
            console.log(index)
            imgBox.style.left=-index*imgWidth+"px"
            move(index)
            return false;
        }
    }
}