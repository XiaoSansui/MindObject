<template>
  <div class="aboutWrap">
    <p class="myMotto">个人签名</p>
    <div class="divide-wrap">
      <div class="colorbar-before"></div>
      <div class="colorbar-after"></div>
      <div class="colorbar"></div>
    </div>
    <div class="motto">
      <span class="mottoLine"></span>
      <p>Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back Never turn back </p>
    </div>
    <div class="relevant">
      <div class="reward">
        <p >给我打赏</p>
        <img src="../components/image/fukuan.png" alt="付款码" class="fukuan" width="300px">
      </div>
      <div class="follow">
        <p>关注我的微信</p>
        <img src="../components/image/tome.png" alt="微信二维码" class="tome" width="300px">
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  .aboutWrap{
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    .myMotto{
      font-size: 35px;
      padding: 10px;
    }
    .motto{
      margin:10px;
      border-radius: 5px;
      font-size: 18px;
      background-color: #f8f8f8;
      p{
        color: #999;
        padding: 5px;
        line-height: 18px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
    }
    .relevant{
      display: flex;
      justify-content: space-around;
      div{
        width: 50%;
      }
      p{
        line-height: 20px;
        color: #999;
        font-weight: bold;
        margin: 15px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.43);
        padding-bottom: 15px;
      }
      img{
        margin: 20px;
      }
    }
  }

  .divide-wrap{position:relative;height:1px;z-index:1;}
  .colorbar{width:100%;height:100%;z-index:11;background:url(//fanyi.bdstatic.com/static/translation/img/header/colorbar_623c2a2.png) center no-repeat;position:relative}
  .colorbar-before{content:"";position:absolute;left:0;width:50%;height:100%;z-index:9;background-color:#1b24ff}
  .colorbar-after{content:"";position:absolute;right:0;width:50%;height:100%;z-index:9;background-color:#fd0371}

</style>
