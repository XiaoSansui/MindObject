<template>
  <div id="app" >
    <el-container class="wrap">
      <el-header class="header" style="padding: 0;">
        <Nav class="nav"/>
        <div class="divide-wrap">
          <div class="colorbar-before"></div>
          <div class="colorbar-after"></div>
          <div class="colorbar"></div>
        </div>
      </el-header>
      <el-main class="content ">
          <router-view/>
      </el-main>
      <el-footer class="footer">
          <Footers/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Footers from './components/Footers'

  export default {
    components:{
      Nav,
      Footers
    },


  }
</script>

<style>
  html,body{
    min-width:1000px;
    background-color: #444c51;
    height: 100%;
  }
  .content{
    width: 90%;
    margin: auto;
  }
  .divide-wrap{position:relative;height:1px;z-index:1;}
  .colorbar{width:100%;height:100%;z-index:11;background:url(//fanyi.bdstatic.com/static/translation/img/header/colorbar_623c2a2.png) center no-repeat;position:relative}
  .colorbar-before{content:"";position:absolute;left:0;width:50%;height:100%;z-index:9;background-color:#1b24ff}
  .colorbar-after{content:"";position:absolute;right:0;width:50%;height:100%;z-index:9;background-color:#fd0371}

</style>
