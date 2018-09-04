// 选项卡的切换
window.onload=function(){
    var oLi=document.querySelectorAll("#tab  li")
    var  oMain=document.querySelectorAll(".content  .box .main")
    var index =0;

  for (var i=0;i<oLi.length;i++){
        oLi[i].types=i;
        oLi[i].onclick=function(){
            for (var a=0;a<oLi.length;a++){
                oLi[a].className="";
            }
            this.className="on";
            index = this.types;
            for(var z =0;z<oMain.length;z++){
              oMain[z].style.display = "none";
            }
          oMain[index].style.display = "block";
        }
    }


  // 地图的复选框

  var oMap=document.getElementById('map');
  var oMapli=oMap.querySelectorAll(".city_f");
  var oMapimg=oMap.getElementsByTagName('img');

  var index=0;
  for(var i=0;i<oMapli.length;i++){
    oMapli[i].types=i;
    oMapli[i].onclick=function(){
      for(var j=0;j<oMapli.length;j++){
        oMapimg[j].style.display='none';
      }
      oMapimg[this.types].style.display='block';
      index = this.types;
      map(this.types);
      console.log(this.index)
    };
  }

  //地图第一次加载在为oBox[5].style.display='block'的时候；


  function map(type) {

    var myIcon = new BMap.Icon("img/About/contactsbj.png?v=fbad4cbada", new BMap.Size(94,42));
    var map = new BMap.Map("mapA");
    var point=new BMap.Point(116.404, 39.915);

    if(type==0){
      point = new BMap.Point(116.404, 40.915);
    }else if(type==1){
      point = new BMap.Point(121.487899486,31.24916171);
      myIcon = new BMap.Icon("img/About/contactssh.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==2){
      point = new BMap.Point(113.307649675,24.1200491021);
      myIcon = new BMap.Icon("img/About/contactsgz.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==3){
      point = new BMap.Point(114.025973657,22.5460535462);
      myIcon = new BMap.Icon("img/About/contactssz.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==4){
      point = new BMap.Point(106.530635013,29.5446061089);
      myIcon = new BMap.Icon("img/About/contactscq.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==5){
      point = new BMap.Point(112.979352788,28.2134782309);
      myIcon = new BMap.Icon("img/About/contactscs.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==6){
      point = new BMap.Point(114.316200103,30.5810841269);
      myIcon = new BMap.Icon("img/About/contactswh.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==7){
      point = new BMap.Point(108.953098279,34.2777998978);
      myIcon = new BMap.Icon("img/About/contactsxa.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==8){
      point = new BMap.Point(120.219375416,30.2592444615);
      myIcon = new BMap.Icon("img/About/contactshz.png?v=fbad4cbada", new BMap.Size(94,42));
    }else if(type==9){
      point = new BMap.Point(104.067923463,30.6799428454);
      myIcon = new BMap.Icon("img/About/contactscd.png?v=fbad4cbada", new BMap.Size(94,42));
    }

    map.centerAndZoom(point, 5);
    var marker2 = new BMap.Marker(point,{icon:myIcon, offset : new BMap.Size(0, -20) });
    map.addOverlay(marker2);
  }
};

// 加入我们
(function(){
    var oDd=document.getElementsByTagName("dd");
    for(var b=0;b<oDd.length;b++) {
        oDd[b].index=b;
        oDd[b].onclick=function(){
            for(var i=0;i<oDd.length;i++){
                oDd[i].className="";
            }
            this.className="active";
        }
    }
})();

//顶部显示
window.onscroll=function(){
    var oTab=document.getElementById("tab");
    var scroll=document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll>=600){
        oTab.style.position="fixed";
        oTab.style.top="0";
    }
    else{
       oTab.style.position="";
    }
};
