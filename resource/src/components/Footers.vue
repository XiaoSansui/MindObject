<template>
 <div>
   <div class="footerWrap">
     <div class="box1">
       <el-tabs v-model="box1" @tab-click="handleClick"  stretch>
         <el-tab-pane label="点击排行" name="click">
           <div class="items">
             <div class="item" v-for="(item,index) in click"  @click="detailId(item.id,item.siteType)" :key="index">
               <span class="itemHead orange">{{index+1}}</span>
               <span class="hide">{{item.title}}</span>
             </div>
           </div>
         </el-tab-pane>
         <el-tab-pane label="最新文章" name="article">
           <div class="items">
             <div class="item" v-for="(item,index) in article" @click="detailId(item.id,item.siteType)" :key="index">
               <span class="itemHead orange">{{index+1}}</span>
               <span class="hide">{{item.title}}</span>
             </div>
           </div>
         </el-tab-pane>
         <el-tab-pane label="站长推荐" name="recommend">
           <div class="items">
             <div class="item" v-for="(item,index) in recommend" @click="detailId(item.id,item.siteType)" :key="index">
               <span class="itemHead orange">{{index+1}}</span>
               <span class="hide">{{item.title}}</span>
             </div>
           </div>
         </el-tab-pane>
       </el-tabs>
       <div class="scene" v-show="!click" style="width: 30%;margin: 0 auto">
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
     <div class="box2">
       <el-tabs v-model="box2" stretch>
         <el-tab-pane label="推荐软件" name="software" @tab-click="handleClick">
           <div class="items">
             <div class="item" v-for="(item,index) in software"  @click="detailId(item.id,item.siteType)" :key="index">
               <span class="itemHead orange">{{index+1}}</span>
               <span class="hide">{{item.title}}</span>
             </div>
           </div>
         </el-tab-pane>
       </el-tabs>
       <div class="scene" v-show="!software" style="width: 30%;margin: 0 auto">
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
   <div class="bottom">
     <p>@12313213123213121123333333333333</p>
   </div>
 </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        box1: 'click',
        box2: 'software',
        click:'',//点击排行
        recommend:'',//站长推荐
        videos:'', //推荐视频
        article:'', //推荐文章
        software:'', //推荐软件
        clickName:'',  //点击的标签名
      };
    },
    methods: {
      detailId(id,type){
        this.$store.state.saveId=id
        this.$store.state.saveType=type
      },
      handleClick(tab) {
        console.log(tab.name);
        this.clickName=tab.name;
      }
    },
    computed:{
      ...mapState(['videoItems','articleItems','softwareItems']),
    },
    mounted(){
      this.$store.dispatch('getSoftwareItems')
      this.$store.dispatch('getArticleItems')
      this.$store.dispatch('getVideoItems')
    },
    watch:{
      videoItems(){
        this.video = this.videoItems
        if(this.video){
          this.clickName ='videos'
        }
        if(this.article && this.video && this.software){
          this.clickName ='click'
        }
      },
      articleItems(){
        this.article = this.articleItems
        if(this.article && this.video && this.software){
          this.clickName ='click'
        }
      },
      softwareItems(){
        this.software = this.softwareItems.slice(0,8)
        if(this.software){
          this.clickName ='software'
        }
        if(this.software && this.article && this.video){
          this.clickName ='click'
        }
      },
      clickName(value){
       switch (value) {
         case 'click':
           //整合所有的数据  根据点击量进行排序  截取前9个数据
           this.click = this.videoItems.concat(this.articleItems).concat(this.softwareItems).sort((a,b)=>{
               return b.clickCount-a.clickCount
              }).slice(0,8)
           break;
         case 'recommend':
          //整合所有数据  筛选所有新的数据  根据时间进行排序  截取前9个数据
           this.recommend = this.videoItems
             .concat(this.articleItems)
             .concat(this.softwareItems)
             .filter((item,index)=>{
               return item.isNews ===1
             })
             .sort((a,b)=>{
               return b.addTime-a.addTime
             })
             .slice(0,8)
           break;
         case 'article':
           //  筛选所有为 isNews的数据  根据时间进行排序  截取前8个数据
           this.article = this.articleItems
             .sort((a,b)=>{
               return b.addTime-a.addTime
             })
             .slice(0,8)
           break;
       }
      }
    }
  }
</script>

<style scoped lang="less">
  body{
    width: 100%;
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
  .el-icon-star-on{
    margin: 0 2px;
    color: orange;
  }
  .box1{
    width: 90%;
    background: white;
    border-radius: 5px;
    margin:-15px auto 15px;
  }
  .box2{
    width: 90%;
    background: white;
    border-radius: 5px;
    margin: 15px auto 0;

  }
  .box3{
    width: 90%;
    background: white;
    border-radius: 5px;
    margin: -15px auto;

  }
  .items{
    width: 100%;
    height: 100%;

    .item{
      width: 100%;
      padding: 8px 10px;
      cursor:pointer;
      &:hover{
        background: whitesmoke;
      }
      .itemHead{
        display: inline-block;
        color: white;
        padding:1px 4px;
        border-radius: 2px;
      }
    }

    .videoItems{
      width: 100%;
      height: 100%;
      .videoItem{
        width: 100%;
        cursor:pointer;
        padding: 8px;
        &:hover{
          background: whitesmoke;
        }
        img{
          width: 60px;
          display: inline-block;
          float: left;
          padding: 1px;
        }
        .videoTest{
          display: inline-block;
          float: left;
          margin-top: 3px;
          .videoTitle{
            font-size: 17px;
            font-weight: 600;
            margin: 10px 5px;
          }
          .videoDate{
            color: gray;
            display: inline-block;
            margin: 10px 5px;
          }
        }
      }
    }
    .orange{
      background-color: #F55B1A;
    }
    .blue{
      background-color:#009789;
    }
    .black{
      background-color:#323C55;
    }
  }
  .bottom{
    width: 90%;
    height: 50px;
    background-color: whitesmoke;
    text-align: center;
    margin:30px auto 10px auto;
    font-size: 20px;
    line-height: 50px;
    border-radius: 5px;
  }

</style>
