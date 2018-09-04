$(function () {

  //初始化4个方向
   var direction = {up:1,right:2,down:3,left:4};
  //初始化坐标变量
  var last = {row:0,col:0};
  var now = {row:1,col:1};
  //检测是否移动
  var isMove = false;
  //往上滑
  $(document).swipeUp(function () {
    if(isMove){
      return;
    }
    last.row = now.row;
    last.col = now.col;
    if(last.col!=5){
      now.row =1;
      now.col = last.col+1;
      pageMove(direction.up);
    }
  })
  //往右滑
  $(document).swipeRight(function () {
    if(isMove){
      return;
    }
    last.row = now.row;
    last.col = now.col;
    if(last.col>1&&last.col<5&&last.row==2){
      now.row =last.row-1;
      pageMove(direction.right);
    }
  })
  //往下滑
  $(document).swipeDown(function () {
    if(isMove){
      return;
    }
    last.row = now.row;
    last.col = now.col;
    if(last.col!=1){
      now.row =1;
      now.col = last.col-1;
      pageMove(direction.down);
    }
  })
  //往左滑
  $(document).swipeLeft(function () {
    if(isMove){
      return;
    }
    last.row = now.row;
    last.col = now.col;
    if(last.col<5&&last.col>1&&last.row==1){
      now.row =last.row+1;
      pageMove(direction.left);
    }
  })


  //定义move函数
  function pageMove(dir) {
    //初始化页面类
    var inClass = "";
    var outClass ="";
    //初始化作用的两个页面
    var lastPage = ".page-"+last.col+"-"+last.row;
    var nowPage = ".page-"+now.col+"-"+now.row;

    //匹配方向
    switch (dir){
      case direction.up:
        outClass ="an-page-moveToTop";
        inClass ="an-page-moveFromBottom";
        break;
      case direction.right:
        outClass ="an-page-moveToRight";
        inClass ="an-page-moveFromLeft";
        break;
      case direction.down:
        outClass ="an-page-moveToBottom";
        inClass ="an-page-moveFromTop";
        break;
      case direction.left:
        outClass ="an-page-moveToLeft";
        inClass ="an-page-moveFromRight";
        break;
    }

    //为页面添加动画开始的类
    $(nowPage).removeClass("hide");
    $(lastPage).addClass(outClass);
    $(nowPage).addClass(inClass);
    isMove = true;
    //处理动画完成时页面的类
    setTimeout(function () {
      $(lastPage).addClass("hide");
      $(lastPage).removeClass(outClass);
      $(lastPage).removeClass("courous");
      $(lastPage).find("img").addClass("hide");

      $(nowPage).removeClass(inClass);
      $(nowPage).addClass("courous");
      $(nowPage).find("img").removeClass("hide");
      isMove = false;
    },600)
  }


})