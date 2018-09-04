$(function(){
    var contentNode = document.querySelector('#content')
    var $bodyNodeHeight = $('body').height()
    var $head = $('#head')
    var $clist = $('#content .list')
    var $cLiNodes = $('#content>.list >li')
    var $headLIs = $('#head .nav ul li')
    var $rowLi = $('#row > .item > li')
    var now = 0
    var timer =0
    var heightNode = $cLiNodes.height($bodyNodeHeight-$head.height())
    content()
    headClick()
    
    
    //出入场动画
    var arrAn = [
        {
            anIn:
            function(){
                var $img = $('#content >.list >.one>img')
                
                $img.animate({
                    opacity : 0,
                    top:200
                },0,function(){
                    $img.animate({
                        opacity : 1,
                        top:0
                    },1000)
                    .animate({
                        opacity : 0,
                        
                    },600)
                    .animate({
                        opacity : 1,
                        
                    },600)
                })
                
            }
        },
        {
            anIn:
            function(){
                var $one = $('#content >.list >.two .left>.one')
                var $two = $('#content >.list >.two .left>.two')
                var $three = $('#content >.list >.two .left>.three')
                var $right = $('#content >.list >.two .right')
                $one.animate({
                    top:800
                },700,function(){
                    $one.animate({
                        top:0
                    },800)   
                })
                $two.animate({
                    top:800
                },700,function(){
                    $two.animate({
                        top:0
                    },1000)   
                })
                $three.animate({
                    top:800
                },700,function(){
                    $three.animate({
                        top:0
                    },1200)   
                })
                $right.animate({
                    top:-400
                },700,function(){
                    $right.animate({
                        top:60
                    },1200)   
                })
                
            }
        },
        {
            anIn:
            function(){
                var $one = $('#content >.list >.three .left>.one')
                var $two = $('#content >.list >.three .left>.two')
                var $three = $('#content >.list >.three .left>.three')
                var $right = $('#content >.list >.three .right')
                $one.css('position','absolute')
                $two.css('position','absolute')
                $three.css('position','absolute')
                $right.css('position','absolute')
                $two.animate({
                    left:0
                },300,function(){
                    $two.animate({
                        left:'280px'
                    },800)   
                })
                $three.animate({
                    left:0
                },300,function(){
                    $three.animate({
                        left:'560px'
                    },900)   
                })
                $right.animate({
                    right:-400
                },300,function(){
                    $right.animate({
                        right:30
                    },1000)   
                })
                
            }
        },
        {
            anIn:
            function(){
                var $one = $('#content >.list >.four .left>.one')
                var $two = $('#content >.list >.four .left>.two')
                var $three = $('#content >.list >.four .left>.three')
                var $right = $('#content >.list >.four .right')
                $one.css('position','absolute')
                $two.css('position','absolute')
                $three.css('position','absolute')
                
                $one.animate({
                    top:-500,
                    left:330
                },300,function(){
                    $one.animate({
                        top:0,
                        left:330
                    },800)
                    .animate({
                        top:-30
                    },200)
                    .animate({
                        top:0
                    },200)
                    .animate({
                        top:-30
                    },200) 
                    .animate({
                        top:0
                    },200) 
                    .animate({
                        left:0
                    },900)  
                })
                $two.animate({
                    top:-500,
                    left:330
                },300,function(){
                    $two.animate({
                        top:0,
                        left:330
                    },800)
                    .animate({
                        top:-30
                    },200)
                    .animate({
                        top:0
                    },200)
                    .animate({
                        top:-30
                    },200) 
                    .animate({
                        top:0
                    },200)     
                })
                $three.animate({
                    top:-500,
                    left:330
                },300,function(){
                    $three.animate({
                        top:0,
                        left:330
                    },800)
                    .animate({
                        top:-30
                    },200)
                    .animate({
                        top:0
                    },200)
                    .animate({
                        top:-30
                    },200) 
                    .animate({
                        top:0
                    },200)   
                    .animate({
                        left:660
                    },900)   
                })
                $right.animate({
                    opacity:0
                },300,function(){
                    $right.animate({
                        opacity:1
                    },3000)   
                })
                
            }
        },
        {
            anIn:
            function(){
                var $one = $('#content >.list >.five .left>.one')
                var $two = $('#content >.list >.five .left>.two')
                var $three = $('#content >.list >.five .left>.three')
                var $right = $('#content >.list >.five .right')
                $one.css('position','absolute')
                $two.css('position','absolute')
                $three.css('position','absolute')
                
                $one.animate({
                    top:-500,
                    left:-500
                },300,function(){
                    $one.animate({
                        top:0,
                        left:0
                    },900)
                    
                })
                $two.animate({
                    top:-500,
                    left:-500
                },300,function(){
                    $two.animate({
                        top:0,
                        left:330
                    },1000)
                    
                })
                $three.animate({
                    top:-500,
                    left:-500
                },300,function(){
                    $three.animate({
                        top:0,
                        left:660
                    },1300)
                    
                })
                $right.animate({
                    opacity:0
                },300,function(){
                    $right.animate({
                        opacity:1
                    },3000)   
                })
                
            }
        }
            
    ]
    
    

    //内容区高度
    function content(){
        $clist.height($bodyNodeHeight-$head.height()*$cLiNodes.length)
        $cLiNodes.height($bodyNodeHeight-$head.height())
    }

    //头部点击事件
    function headClick(){
        $headLIs.click(function(){
            
            var index = $(this).index()
            $clist.css({top: -index*$cLiNodes.height()})
             $headLIs.removeClass('active')
             $(this).addClass('active')
            now = index
            move(now)
            
        }) 
    }

    //滚轮事件
    if(contentNode.addEventListener){
        contentNode.addEventListener("DOMMouseScroll",function(ev){
        clearInterval(timer)
        timer=setTimeout(function(){
            fn(ev);
        },200)
        })
    }
    
    contentNode.onmousewheel = function(ev){    
        clearInterval(timer)
        timer=setTimeout(function(){
            fn(ev);
        },200)
    };
    
    function fn(ev){
        ev = ev||event;
        var flag ="";
        if(ev.detail){
            flag = ev.detail>0?"down":"up";
        }else if(ev.wheelDelta){
            flag = ev.wheelDelta<0?"down":"up";
        }
        
        if((now==0&&flag=="up")||(now==$cLiNodes.length-1&&flag=="down")){
                return;
        }
        
        
        switch (flag){
            case "up":
            
                if(now>0){
                    now--;
                }
                move(now);
                break;
            case "down":
            
                if(now<$cLiNodes.length-1){
                    now++;
                }
                move(now);
                break;
        }
        
        if(ev.preventDefault){
            ev.preventDefault();
        }
        
        return false;
    }
    //小圆点样式切换
    $rowLi.click(function(){
        
        var row = $(this).index()
        move(row)
        
       
    })
    


    //动画
    function move(index){
        $clist.css({top: -index*$cLiNodes.height()})
        stop()
        arrAn[index]['anIn']().stop()
    
        $rowLi.removeClass('active')
        $rowLi[index].className='active'
        //头部样式切换
        $headLIs.removeClass('active')
        $headLIs[index].className='active'
    
    }


})