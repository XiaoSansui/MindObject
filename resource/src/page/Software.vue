<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>软件</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="block" >
      <el-cascader
        expand-trigger="hover"
        :options="options1"
        v-model="selectedOptions1"
        @change="handleChange1"
        size="small "
      >
      </el-cascader>
      <el-cascader
        expand-trigger="hover"
        :options="options2"
        v-model="selectedOptions2"
        @change="handleChange2"
        size="small "
      >
      </el-cascader>
    </div>
    <div class="cardWrap clearfix">
      <div class="card" v-for="software in softwareList" :key="software.id" @click="detailId(software.id,software.siteType)">
        <router-link to="/details">
          <div class="left" :style="imgUrl(software.thumbnailImg)">
          </div>
          <div class="right">
          <p><span class="rightText">&nbsp;&nbsp;{{software.title}}</span></p>
          <p class="rightContent">
            {{software.summary}}
          </p>
          <div class="rightBottom">
            <div class="author">
              <i class="el-icon-edit-outline"></i>&nbsp;<span>{{software.author}}</span>
            </div>
            <div class="read">
              <i class="el-icon-view"></i>&nbsp;<span>{{software.clickCount}}</span>
            </div>
            <div class="time">
              <i class="el-icon-time"></i>&nbsp;<span>{{ software.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
          </div>
        </div>
        </router-link>
      </div>
      <div class="scene" v-show="!softwareList" style="width: 30%;margin: 0 auto">
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
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        options1: [
          {
            value: 'quanbu',
            label: '全部',
          },
          {
            value: 'qiandaunchajian',
            label: '前端插件',
            children: [{
              value: 'quanbu',
              label: '全部',
            },{
              value: 'jquery',
              label: 'jQuery',
            }]
          },
          {
            value: 'kaifaruanjian',
            label: '开发软件',
          },
          {
            value: 'shujuku',
            label: '数据库',
          },
          {
            value: 'shaduruanjian',
            label: '杀毒软件',
          },
          {
            value: 'bangongruanjian',
            label: '办公软件',
          },
          {
            value: 'youxi',
            label: '游戏',
          },
        ],
        selectedOptions1: ['quanbu'],
        options2: [
          {
            value: 'moren',
            label: '默认',
          },
          {
            value: 'zuixin',
            label: '最新',
          },
          {
            value: 'zuire',
            label: '最热',
          },
        ],
        selectedOptions2: ['moren'],
        value2:'默认',
        softwareList:'',  //软件区主体内容
      }
    },
    computed:{
      ...mapState(['softwareItems'])
    },
    methods:{
      detailId(id,type){
        this.$store.state.saveId=id
        this.$store.state.saveType=type
      },
      imgUrl(url){
        return `background:url(http://47.107.83.220${url});background-size: 100% 100%`
      },
      handleChange1(){
      },
      handleChange2(){
      },
    },
    mounted(){
      this.$nextTick(()=>{
        this.$store.dispatch('getSoftwareItems')
      })
    },
    watch:{
      softwareItems(){
        if(this.softwareItems){
          this.softwareList = this.softwareItems
        }
      },
      selectedOptions1(value){
        if(this.softwareItems){
          switch (value[0]) {
            case 'quanbu':
              this.softwareList = this.softwareItems
              break;
            case 'qianduanchajian':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===9
              })
              break;
            case 'kaifaruanjian':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===23
              })
              break;
            case 'shujuku':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===24
              })
              break;
            case 'shaduruanjian':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===25
              })
              break;
            case 'bangongruanjian':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===26
              })
              break;
            case 'youxi':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===27
              })
              break;
          }
          switch (value[1]) {
            case 'quanbu':
              this.softwareList = this.softwareItems
              break;
            case 'jquery':
              this.softwareList = this.softwareItems.filter((item,x)=>{
                return this.softwareItems[x].catalogId===10
              })
              break;
          }
        }
      },
      selectedOptions2(value){
        switch (value[0]) {
          case 'moren':
            this.softwareList = this.softwareItems
            break;
          case 'zuixin':
            this.softwareList = this.softwareItems.sort((a,b)=>{
              return b.addTime-a.addTime
            })
            break;
          case 'zuire':
            this.softwareList = this.softwareItems.sort((a,b)=>{
              return b.clickCount-a.clickCount
            })
            break;
        }
      }
    }
  }
</script>

<style scoped lang="less">
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
  .crumbs{
    width: 98%;
    background-color: white;
    padding:11px;
    border-radius: 3px;
  }
  .selects{
    width: 98%;
    background-color: white;
    border-radius: 3px;
    padding: 11px;
    margin: 10px 0;
    .select{
      margin: 0 15px;
    }
  }
  .cardWrap{
    width: 100%;
    height: 100%;
    margin: 15px auto;
    border-radius: 5px;
    background-color: #ffffff;
    padding-top: 5px;
  }
  .cardWrap .title{
    color: black;
    padding: 10px;
    text-align: left;
    border-bottom: solid 1px #e6e6e6;
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
  .cardWrap .line{
    margin: 10px auto;
    height: 2px;
    width: 70%;
    border-radius: 10px;
    background: #757575;
  }
  .cardWrap .card .left{
    background-size: 100% 100%;
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
    width: 50px;
    height: 20px;
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
    overflow: hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-height: 25px;
    -webkit-box-orient: vertical;
    width:100%;
    height: 50%;
    margin: 5px;
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
    text-align: left;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin:10px 0;
    background: whitesmoke;
    border-radius: 5px;
  }
</style>
