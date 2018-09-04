/*
* 第4屏边框小刺  卡通人物特效

*
* */

$(function () {

  var timer = 0;
  var now = 0;
  var $listLis = $('#wrap>.wrap-list>li')

  //页面动画
  first()

  function first() {
    $('.wrap-list i').eq(1).animate({
      top: -100,
    }, 0)
      .animate({
        top: 10
      }, 600)
      .animate({
        top: 0
      }, 100)
    $('.wrap-list i').eq(2).animate({
      top: -100,
    }, 0)
      .animate({
        top: 80
      }, 700)
      .animate({
        top: 70
      }, 100)
    $('.wrap-list i').eq(3).animate({
      top: -100,
    }, 0)
      .animate({
        top: 250
      }, 700)
      .animate({
        top: 230
      }, 100)
    $('.wrap-list i').eq(4).animate({
      top: -200,
    }, 0)
      .animate({
        top: 140
      }, 500)
      .animate({
        top: 120
      }, 100)
  }


  $('#wrap').on('mousemove', function (ev) {
      var x = ev.originalEvent.x || ev.originalEvent.layerX || 0;
      var y = ev.originalEvent.y || ev.originalEvent.layerY || 0;
      mouseMove(x, y)
    })

  //设置元素高度
  $listLis.css({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  $('#wrap>.wrap-list').css('height', ($listLis.Height) * $listLis.length)

  //nav导航条动画
  var colors = ['#ACB800', '#F67400', '#73BDDC', '#616161', '#1541C2', '#5F7E00']
  var navLis = $('.wrap-nav li');
  var nowLi = 0;
  navLis.eq(0).find('div').css('background', colors[0])
  navLis.eq(0).css('right', 100)
  navLis.find('i').css('color', colors[0])
  navLis.eq(0).find('i').css('color', 'white')

  $('.wrap-nav').on('click', 'li', function () {
    now = $(this).index()
    navLis.find('div').css('background', 'white')
    navLis.find('i').css('color', colors[now])
    navLis.eq(now).find('div').css('background', colors[now])
    navLis.eq(now).find('i').css('color', 'white')



    navLis.animate({
      right: 0
    }, 150)
    navLis.eq(now).animate({
      right: 100
    }, 150)
    nowLi = now;
    move(now)
    return nowLi
  })
  $('.wrap-nav li').hover(function () {
    $(this).stop().animate()
    now = $(this).index()
    navLis.eq(now).find('i').css('color', 'white')
    navLis.eq(now).find('div').css('background', colors[nowLi])
    $(this).animate({
      right: 100
    }, 150)
  }, function () {
    now = $(this).index()
    $(this).stop().animate()
    navLis.not(navLis.eq(nowLi)).find('div').css('background', 'white')
    navLis.not(navLis.eq(nowLi)).find('i').css('color', colors[nowLi])
    navLis.not(navLis.eq(nowLi)).eq(now).find('i').css('color', colors[nowLi])
    navLis.not(navLis.eq(nowLi)).animate({
      right: 0
    }, 150)
  })

  //设置滚屏事件
  $('#wrap').mousewheel(function (event, delta) {
    $(this).stop().animate()
    clearInterval(timer)
    timer = setTimeout(function () {
      mouwheel(delta)
    }, 300)
  });

  function mouwheel(delta) {
    var dir = delta > 0 ? 'up' : 'down';
    if (now == 0 && dir == 'up' || now == $listLis.length - 1 && dir == 'down') {
      return;
    }
    switch (dir) {
      case 'up':
        if (now > 0) {
          now--;
        }
        move(now);
        navMove(now)
        break
      case 'down':
        if (now < $listLis.length - 1) {
          now++;
        }
        move(now);
        navMove(now)
        break
    }
    return false
  }

  function move(index) {
    $(this).stop().animate()
    $('.wrap-list').animate({top: -index * $listLis.height()}, 600)

  }

  function navMove(now) {

    navLis.find('div').css('background', 'white')
    navLis.find('i').css('color', colors[now])
    navLis.eq(now).find('i').css('color', 'white')
    navLis.eq(now).find('div').css('background', colors[now])
    navLis.animate({
      right: 0
    }, 150)
    navLis.eq(now).animate({
      right: 100
    }, 150)
  }

  function mouseMove(x, y) {
    var randomPX = getRandomIntInclusive(50, 55);
    var Rmove3 =getRandomIntInclusive(0, 3);
    var Rmove4 =getRandomIntInclusive(0, 4);
    var Rmove5 =getRandomIntInclusive(0, 5);
    var move3 = $('.wrap-list .move3')
    var move4 = $('.wrap-list .move4')
    var move5 = $('.wrap-list .move5')
    var speedX = x / randomPX;
    var speedY = y / randomPX;
    var eleX = x / 100 + speedX;
    var eleY = y / 100 + speedY;
    move3.eq(Rmove3).css({
      transition:'500ms transform',
      transform: 'translateX(' + x / 100 + 1.2*Rmove4 + 'px) translateY(' + y / 100 + 1.2*Rmove4 + 'px)'
    })
    move4.eq(Rmove4).css({
      transition:'500ms transform',
      transform: 'translateX(' + x / 100 + 1.2*Rmove4 + 'px) translateY(' + y / 100 + 1.2*Rmove4 + 'px)'
    })
    move5.eq(Rmove5).css({
      transition:'500ms transform',
      transform: 'translateX(' + x / 100 + 1.2*Rmove4 + 'px) translateY(' + y / 100 + 1.2*Rmove4 + 'px)'
    })
    $('.wrap-list .move').css({
      transform: 'translateX(' + eleX + 'px) translateY(' + eleY + 'px)'
    })
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

})