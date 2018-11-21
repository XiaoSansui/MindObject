<template>
  <div>
    <div class="carousel">
      <el-carousel :interval="5000"  indicator-position="none" >
        <el-carousel-item>
          <img src="../components/image/lb3.jpg" alt="" width="100%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../components/image/lb2.jpg" alt="" width="100%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../components/image/lb3.jpg" alt="" width="100%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../components/image/lb2.jpg" alt="" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="cardWrap clearfix">
      <p class="title">精品推荐</p>
      <div class="card" v-if="homeContents" v-for="(item,index) in homeContents" :key="index"  @click="detailId(item.id,item.siteType)">
        <router-link to="/details">
          <div class="left" :style=imgUrl(item.thumbnailImg)>
            <span class="leftTitle">{{item.siteType===1?'文章':item.siteType===2?'视频':'软件'}}</span>
          </div>
          <div class="right">
            <p><span class="rightTitle">{{item.resouceCatalog.name}}</span><span class="rightText">{{item.title}}</span></p>
            <p class="rightContent">
              {{item.summary}}
            </p>
            <div class="rightBottom">
              <div class="author">
                <i class="el-icon-edit-outline"></i>&nbsp;<span>{{item.author}}</span>
              </div>
              <div class="read">
                <i class="el-icon-view"></i>&nbsp;<span>{{item.clickCount}}</span>
              </div>
              <div class="time">
                <i class="el-icon-time"></i>&nbsp;<span>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="card" v-if="newHomeData" v-for="(item,index) in newHomeData" @click="detailId(item.id,item.siteType)">
        <router-link to="/details">
          <div class="left" :style=imgUrl(item.thumbnailImg)>
            <span class="leftTitle">{{item.siteType===1?'文章':item.siteType===2?'视频':'软件'}}</span>
          </div>
          <div class="right">
            <p><span class="rightText">{{item.title}}</span></p>
            <p class="rightContent">
              {{item.summary}}
            </p>
            <div class="rightBottom">
              <div class="author">
                <i class="el-icon-edit-outline"></i>&nbsp;<span>{{item.author}}</span>
              </div>
              <div class="read">
                <i class="el-icon-view"></i>&nbsp;<span>{{item.clickCount}}</span>
              </div>
              <div class="time">
                <i class="el-icon-time"></i>&nbsp;<span>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="scene" v-show="!homeContents &&!newHomeData" style="width: 30%;margin: 0 auto">
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
      <div class="block" v-show="!newHomeData">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="6"
          layout="prev, pager, next, jumper"
          :total="30">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        currentPage1: 1, //当前页数
        homeContents:'', //主页数据
        newHomeData:'',//新数据
      };
    },
    methods: {
      detailId(id,type){
        this.$store.state.saveId=id
        this.$store.state.saveType=type
      },
      imgUrl(url){
        return `background:url(http://47.107.83.220${url});background-size: 100% 100%`
      },
      handleCurrentChange(val) {
        this.$store.dispatch('getHomeContent',val)
      }
    },
    computed:{
      ...mapState(['homeContent','searchItems']),
    },
    mounted(){
      this.$nextTick(()=>{
        const path = this.currentPage1
        this.$store.dispatch('getHomeContent',path)
      })
      document.getElementsByTagName('img')[0].onmousedown = function(e){
        e.preventDefault()
      };
    },
    watch:{
      homeContent(value){
        this.homeContents=value.records
      },
      searchItems(value){
        if(value){
          //
          //console.log('value.resouceCatalog.name',value.resouceCatalog);
          this.homeContents=null
          this.newHomeData = value
        }
      }
    }
  }
</script>

<style>
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
  .el-icon-star-on{
    margin: 0 2px;
    color: orange;
  }

  .title{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    color: #929292;
  }
  .text{
    font-size: 15px;
    color: #222222;
  }
  .cardWrap{
    width: 100%;
    height: 100%;
    margin: 10px auto;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .cardWrap .title{
    color: black;
    padding: 10px;
    text-align: left;
    border-bottom: solid 1px #e6e6e6;
  }
  .carousel{
    margin-top: -10px;
  }
  .cardWrap .card{
    width: 90%;
    height: 160px;
    margin: 30px;
    background-color: white;
    cursor:pointer
  }
  .cardWrap .card:hover{
    background-color: whitesmoke;
  }
  .cardWrap .card .left{
    margin: 3px;
    float: left;
    height: 95%;
    width: 25%;
    border: 1px solid #bdbdbd;
  }
  .cardWrap .card .left .leftTitle{
    display: inline-block;
    width: 50px;
    height: 25px;
    background: #009688;
    line-height: 25px;
    text-align: center;
    color: white;
  }
  .cardWrap .card .right{
    height: 85%;
    width: 65%;
    float: left;
    margin: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cardWrap .card .right .rightTitle{
    display: inline-block;
    margin-right: 5px;
    height: 20px;
    padding: 3px;
    color: #81C794;
    border: 1px solid #81C794;
    text-align: center;
  }
  .cardWrap .card .right .rightText{
    font-size: 20px;
    font-weight: 600;
  }
  .cardWrap .card .right .rightContent,.cardWrap .card .right .rightBottom span{
    font-size: 15px;
    color: #4c4c4c;
  }
  .cardWrap .card .right .rightContent{
    width: 100%;
    height: 60px;
    white-space:inherit;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .cardWrap .card .right .rightBottom{
    float: left;
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .el-menu.el-menu--horizontal{
    border-bottom:none;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .block{
    text-align: center;
    padding: 10px 0;
    width: 100%;
    background: whitesmoke;
    border-radius: 5px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
