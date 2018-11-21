<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    style="display: flex;justify-content: space-around"
    @select="handleSelect"
    background-color="#373D41"
    text-color="#fff"
    router
    active-text-color="#a6a9ad">
    <el-menu-item index="main">&nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="article">&nbsp;&nbsp;&nbsp;&nbsp;文章&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="video">&nbsp;&nbsp;&nbsp;&nbsp;视频&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="software">&nbsp;&nbsp;&nbsp;&nbsp;软件&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="comments">&nbsp;&nbsp;&nbsp;&nbsp;留言&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="aboutus">&nbsp;&nbsp;&nbsp;&nbsp;关于我们&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="" @click="goAdmin">&nbsp;&nbsp;&nbsp;&nbsp;后台管理&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
    <el-menu-item index="">
      <el-input v-model="input" placeholder="关键字" style="width: 150px;" @focus="showTag" @blur="showCanvas=false"></el-input>
      <el-button type="primary" style="margin: 0 10px" @click="serchContent">搜索</el-button>
      <transition name="canvas">
        <div class="b_10_3" v-show="showCanvas">
          <canvas width="280" height="200" id="myCanvas"></canvas>
          <div id="tags">
            <a href="#">每天有个好心情</a>
            <a href="#" v-for="(lable,index) in lables" :key="index" @click="serchLable(lable.id)">{{lable.name}}</a>
          </div>
        </div>
      </transition>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import '../../static/jquery-1.11.3.min'
  import '../../static/tagcanvas.min'
  import {mapState,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:'',
        showCanvas:false,  //时候显示canvas面板
        lables:'', //热门标签
      };
    },
    methods: {
      goAdmin(){
        window.location.href=('http://47.107.83.220/admin/sysUser/ToUserLog')
      },
      handleSelect(key, keyPath) {
      },
      serchLable(id){
        this.$store.dispatch('getSearchItems',id)
        //console.log(this.serchData);
      },
      serchContent(){
        let value = this.input
        this.$store.dispatch('getSearchContent',value)
      },
      showTag(){
        this.showCanvas=true
        if(this.lables){
          try {
            var i, et = document.getElementById('tags').childNodes;
            for (i in et) {
              et[i].nodeName == 'A' && et[i].addEventListener('click', function (e) {
                e.preventDefault();
              });
            }
            TagCanvas.Start('myCanvas', 'tags', {
              textColour: '#fff',
              outlineColour: '#ff0281',
              reverse: true,
              depth: 0.8,
              dragControl: true,
              decel:0.95,
              maxSpeed: 0.05,
              initial: [-0.2, 0]
            });
          } catch (e) {
        }
        }
      }
    },
    computed:{
      ...mapState(['lableItems']),
      ...mapGetters(['serchData']),
    },
    mounted(){
      this.$store.dispatch('getLableItems')
    },
    watch:{
      lableItems(){
        this.$nextTick(()=>{
          this.lables=this.lableItems
        })
      },

    }
  }
</script>

<style>
  .b_10_3 {
    overflow: hidden; text-align:center;
    background: rgba(55, 61, 65, 0.51);
    position: absolute;
    margin-left: -20px;
    z-index: 99;
    border-right:1px solid rgba(191, 2, 99, 0.27);
    border-left:1px solid rgba(191, 2, 99, 0.27);
    border-bottom:1px solid rgba(191, 2, 99, 0.27);
    border-radius: 3px;
  }
  .b_10_3 span {
    float: left; font-size:16px; line-height:2em;
  }
  .b_10_3 span.bold {
    font-weight:bold;
  }
  .b_10_3 span:nth-child(1) {
    width: 35%;
    text-align: center;
  }
  .b_10_3 span:nth-child(2) {
    width: 30%;
    text-align: left;
  }
  .b_10_3 span:nth-child(3) {
    width: 35%;
    text-align: left;
  }
  .b_10_3 span:nth-child(4) {
    width: 35%;
    text-align: right;
  }
  .b_10_3 span:nth-child(5) {
    width: 25%;
    text-align: right;
  }
  .b_10_3 span:nth-child(6) {
    width: 25%;
    text-align: right;
  }
  .b_10_3 span:nth-child(7) {
    width: 50%;
    text-align: center;
  }
  .b_10_3 span:nth-child(8) {
    width: 30%;
    text-align: center;
  }
  .b_10_3 span:nth-child(9) {
    width: 50%;
    text-align: right;
  }
  .b_10_3 span:nth-child(10) {
    width: 40%;
    text-align: right;
  }
  .canvas-enter-active, .canvas-leave-active{
    transition: all 0.4s ease
  }
  .canvas-enter, .canvas-leave-active{
    opacity: 0;
  }

</style>
