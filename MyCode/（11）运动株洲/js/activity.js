var navLis=document.querySelectorAll("#section > .nav > ul li")
var ulNodes=document.querySelectorAll("#section > .content > ul")
var aNodes=document.querySelectorAll("#section > .tiaozhuan > a")
for(var j=0;j<ulNodes.length;j++){
    ulNodes[j].style.display="none"
    ulNodes[0].style.display="block"
}
for(var i=0;i<navLis.length;i++){
    navLis[i].index=i
    navLis[i].onclick=function () {
     for(var j=0;j<ulNodes.length;j++){
       ulNodes[j].style.display="none"
       navLis[j].classList.remove("first")
    }
        ulNodes[this.index].style.display="block"
        navLis[this.index].classList.add("first")
        return false;
    }
}

for(var k=0;k<aNodes.length;k++){
    aNodes[k].onclick=function () {
        for(var i=0;i<aNodes.length;i++){
            aNodes[i].classList.remove("s1")
        }
              this.classList.add("s1")
                return false;
    }

}