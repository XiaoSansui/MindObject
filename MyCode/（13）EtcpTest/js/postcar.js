window.onload = function () {

    var navAs = document.querySelectorAll("#content .wrap .nav .a1")
    var wraps = document.querySelectorAll("#content .wrap .none")
    var nav = document.querySelector("#content .wrap .nav")

     var anlistAs = document.querySelectorAll("#content .wrap .anli .list li a")
    var anlistLists = document.querySelectorAll("#content .wrap .anli .wrap .list1")

    var index = 0;
    var indexa = 0;
    for(var i=0;i<navAs.length;i++){
      navAs[i].types = i;
      navAs[i].onclick=function () {

        for(var i=0;i<navAs.length;i++) {
          navAs[i].classList.remove("active")
        }
        this.classList.add("active")
        index=this.types;
        for(var x=0;x<wraps.length;x++){
          wraps[x].classList.remove("nonone")
        }
        wraps[index].classList.add("nonone")
      }
    }

    for(var d=0;d< anlistAs.length;d++){
     anlistAs[d].types = d;
     anlistAs[d].onclick = function () {
       for(var j=0;j<anlistAs.length;j++){
         anlistAs[j].classList.remove("active");
       }
       this.classList.add("active");
       indexa = this.types;
       for(var x=0;x<anlistLists.length;x++){
         anlistLists[x].classList.remove("nonone")
       }
       anlistLists[indexa].classList.add("nonone")
   }
 }

     window.onscroll=function () {
       var t = document.documentElement.scrollTop || document.body.scrollTop;
       if(t>=620){
         nav.style.position = "fixed";
       }else if(t<620){
         nav.style.position = "relative"
       }
     }

}