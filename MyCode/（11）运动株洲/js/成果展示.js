var navBtn=document.querySelectorAll("#warp > #section > .nav >span")
var centerImg=document.querySelectorAll("#warp > #section > .center-box > div")
for(var i=0;i<navBtn.length;i++){
    navBtn[i].index=i
    centerImg[0].style.visibility="visible"
    navBtn[i].onclick=function (ev) {
        for(var i=0;i<centerImg.length;i++){
            centerImg[i].style.visibility="hidden"
            navBtn[i].classList.remove("active")
        }
        centerImg[this.index].style.visibility="visible"
        navBtn[this.index].classList.add("active")

    }
}