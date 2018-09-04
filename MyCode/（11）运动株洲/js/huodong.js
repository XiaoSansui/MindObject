

    window.onload = function(){

        var lists =document.querySelectorAll("#list>img");
        var rotate =document.querySelector("#rotate");
        var rotateL =document.querySelector("#rotate>.left");
        var rotateR =document.querySelector("#rotate>.right");
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