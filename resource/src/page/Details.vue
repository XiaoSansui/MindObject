<template>
  <div>
    <div v-for="item in articleList" class="article wraps" v-if="item.siteType===1">
      <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/article' }">文章</el-breadcrumb-item>
          <el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h3 class="detailsTitle" style="font-family: '微软雅黑';font-size: 28px">{{item.title}}</h3>
      <div class="headerWrap" style="display: flex;justify-content: space-between;margin: 10px 0">
        <span style="padding: 0 20px;color: gray"><i class="el-icon-view"></i>&nbsp;<span>{{item.clickCount}}</span></span>
        <span style="padding: 0 20px;color: gray"><i class="el-icon-time"></i>&nbsp;<span>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span></span>
      </div>
      <div v-html="item.description">
        {{item.description}}
      </div>
    </div>
    <div v-for="item in videoList" class="video wraps" v-if="item.siteType===2">
      <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/video' }">视频</el-breadcrumb-item>
          <el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h3 class="detailsTitle" style="font-family: '微软雅黑';font-size: 28px">{{item.title}}</h3>
      <div class="headerWrap" style="display: flex;justify-content: space-between;margin: 10px 0">
        <span style="padding: 0 20px;color: gray"><i class="el-icon-view"></i>&nbsp;<span>{{item.clickCount}}</span></span>
        <span style="padding: 0 20px;color: gray"><i class="el-icon-time"></i>&nbsp;<span>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span></span>
      </div>
      <div v-html="item.description">
        {{item.description}}
      </div>
      <div class="noData">
        <h1 class="h1Title">暂无视频内容</h1>
        <div class="error-container">
          <span>4</span>
          <span><span class="screen-reader-text">0</span></span>
          <span>4</span>
        </div>
      </div>
    </div>
    <div v-for="item in softwareList" class="software wraps" v-if="item.siteType===3">
      <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/software' }">软件</el-breadcrumb-item>
          <el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h3 class="detailsTitle" style="font-family: '微软雅黑';font-size: 28px">{{item.title}}</h3>
      <div class="headerWrap" style="display: flex;justify-content: space-between;margin: 10px 0">
        <span style="padding: 0 20px;color: gray"><i class="el-icon-view"></i>&nbsp;<span>{{item.clickCount}}</span></span>
        <span style="padding: 0 20px;color: gray"><i class="el-icon-time"></i>&nbsp;<span>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span></span>
      </div>
      <div v-html="item.description">
        {{item.description}}
      </div>
    </div>
    <div class="scene" v-show="!articleList &&!videoList && !softwareList" style="width: 30%;margin: 0 auto">
      <svg
        version="1.1"
        id="dc-spinner"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        width:38px
        height:38px
        viewBox="0 0 38 38"
        preserveAspectRatio="xMinYMin meet"
      >
        <text x="14" y="21" font-family="Monaco" font-size="2px" style="letter-spacing:0.6px" fill="grey">LOADING
          <animate
            attributeName="opacity"
            values="0;1;0" dur="1.8s"
            repeatCount="indefinite"/>
        </text>
        <path fill="#373a42" d="M20,35c-8.271,0-15-6.729-15-15S11.729,5,20,5s15,6.729,15,15S28.271,35,20,35z M20,5.203
    C11.841,5.203,5.203,11.841,5.203,20c0,8.159,6.638,14.797,14.797,14.797S34.797,28.159,34.797,20
    C34.797,11.841,28.159,5.203,20,5.203z">
        </path>

        <path fill="#373a42" d="M20,33.125c-7.237,0-13.125-5.888-13.125-13.125S12.763,6.875,20,6.875S33.125,12.763,33.125,20
    S27.237,33.125,20,33.125z M20,7.078C12.875,7.078,7.078,12.875,7.078,20c0,7.125,5.797,12.922,12.922,12.922
    S32.922,27.125,32.922,20C32.922,12.875,27.125,7.078,20,7.078z">
        </path>

        <path fill="#2AA198" stroke="#2AA198" stroke-width="0.6027" stroke-miterlimit="10" d="M5.203,20
			c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
            keyTimes="0;1"
            dur="2s"
            repeatCount="indefinite" />
        </path>

        <path fill="#859900" stroke="#859900" stroke-width="0.2027" stroke-miterlimit="10" d="M7.078,20
  c0-7.125,5.797-12.922,12.922-12.922V6.875C12.763,6.875,6.875,12.763,6.875,20S12.763,33.125,20,33.125v-0.203
  C12.875,32.922,7.078,27.125,7.078,20z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1.8s"
            repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        articleList:'',  //文章列表
        videoList:'',  //视频列表
        softwareList:'',  //软件列表
      }
    },
    computed:{
      ...mapState(['articleItems','videoItems','softwareItems','saveId','saveType']),
    },
    beforeDestroy(){
      if(!this.articleList && !this.videoList && !this.softwareList){
        this.$router.push('/main')
      }
    },
    mounted(){
      if(this.saveType){
        switch (this.saveType) {
          case 1:
            this.$store.dispatch('getArticleItems')
            break
          case 2:
            this.$store.dispatch('getVideoItems')
            break
          case 3:
            this.$store.dispatch('getSoftwareItems')
            break
        }
      }
    },
    watch:{
      articleItems(){
        if(this.articleItems){
          this.articleList=this.articleItems.filter((item,index)=>{
            return item.id === this.saveId
          })
        }
      },
      videoItems(){
        if(this.videoItems){
          this.videoList=this.videoItems.filter((item,index)=>{
            return item.id === this.saveId
          })
        }
      },
      softwareItems(){
        if(this.softwareItems){
          this.softwareList=this.softwareItems.filter((item,index)=>{
            return item.id === this.saveId
          })
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .noData{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 30px 0;
  }
  .detailsTitle{
    margin: 5px;
  }
  .wraps{
    background-color: white;
    padding: 15px;
    border-radius: 5px;
  }
  .error-container {
    text-align: center;
    font-size: 180px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 800;
    margin: 20px 15px;
  }
  .error-container > span {
    display: inline-block;
    line-height: 0.7;
    position: relative;
    color: #FFB485;
  }
  .error-container > span {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .error-container > span:nth-of-type(1) {
    color: #D1F2A5;
    animation: colordancing 4s infinite;
  }
  .error-container > span:nth-of-type(3) {
    color: #F56991;
    animation: colordancing2 4s infinite;
  }
  .error-container > span:nth-of-type(2) {
    width: 120px;
    height: 120px;
    border-radius: 999px;
  }
  .error-container > span:nth-of-type(2):before,
  .error-container > span:nth-of-type(2):after {
    border-radius: 0%;
    content:"";
    position: absolute;
    top: 0; left: 0;
    width: inherit; height: inherit;
    border-radius: 999px;
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
    inset 0 30px 0 rgba(239, 250, 180, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
    inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    animation: shadowsdancing 4s infinite;
  }
  .error-container > span:nth-of-type(2):before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
  }
  @keyframes shadowsdancing {
    0% {
      box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
        inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    }
    25% {
      box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 30px 0 rgba(209, 242, 165, 0.4),
        inset -30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 -30px 0 rgba(255, 196, 140, 0.4);
    }
    50% {
      box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 30px 0 rgba(245, 105, 145, 0.4),
        inset -30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 -30px 0 rgba(239, 250, 180, 0.4);
    }
    75% {
      box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 30px 0 rgba(255, 196, 140, 0.4),
        inset -30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 -30px 0 rgba(209, 242, 165, 0.4);
    }
    100% {
      box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
        inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    }
  }
  @keyframes colordancing {
    0% {
      color: #D1F2A5;
    }
    25% {
      color: #F56991;
    }
    50% {
      color: #FFC48C;
    }
    75% {
      color: #EFFAB4;
    }
    100% {
      color: #D1F2A5;
    }
  }
  @keyframes colordancing2 {
    0% {
      color: #FFC48C;
    }
    25% {
      color: #EFFAB4;
    }
    50% {
      color: #D1F2A5;
    }
    75% {
      color: #F56991;
    }
    100% {
      color: #FFC48C;
    }
  }

  /* demo stuff */
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #416475;
    margin-bottom: 50px;
  }
  html, button, input, select, textarea {
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #92a4ad;
  }
  .h1Title {
    max-width: 490px;
    margin: 30px auto 30px;
    font-size: 19px;
    text-align: center;
    font-weight: 600;
    color: #ffa859;
  }
  .link-container {
    text-align: center;
  }
  a.more-link {
    text-transform: uppercase;
    font-size: 13px;
    background-color: #92a4ad;
    padding: 10px 15px;
    border-radius: 0;
    color: #416475;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    line-height: 1.5;
    text-decoration: none;
    margin-top: 50px;
    letter-spacing: 1px;
  }
  .scene a, .scene a:visited {
    text-decoration: none;
    color: #FF805F;
  }
  html body h4 {
    margin: 0;
    color: #666;
  }
  .scene {
    width: 100%;
    height: 100%;
    -webkit-perspective: 600px;
    perspective: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scene svg {
    width: 240px;
    height: 240px;
  }
  .dc-logo {
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
  .dc-logo:hover svg {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: arrow-spin 2.5s 0s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: arrow-spin 2.5s 0s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .dc-logo:hover:hover:before {
    content: '\2764';
    padding: 6px;
    font: 10px/1 Monaco, sans-serif;
    color: #00fffe;
    text-transform: uppercase;
    position: absolute;
    left: -70px;
    top: -30px;
    white-space: nowrap;
    z-index: 20;
    box-shadow: 0px 0px 4px #222;
    background: rgba(0, 0, 0, 0.4);
  }
  .dc-logo:hover:hover:after {
    content: 'Digital Craft';
    padding: 6px;
    font: 10px/1 Monaco, sans-serif;
    color: #6E6F71;
    text-transform: uppercase;
    position: absolute;
    right: 0;
    top: -30px;
    white-space: nowrap;
    z-index: 20;
    box-shadow: 0px 0px 4px #222;
    background: rgba(0, 0, 0, 0.4);
    background-image: none;
  }
  @-webkit-keyframes arrow-spin {
    50% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  @keyframes arrow-spin {
    50% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }

</style>
