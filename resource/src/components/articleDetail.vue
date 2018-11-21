<template>
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md8 ">
      <div class="layui-card">

        <div class="layui-card-body detail-box" v-for="item in articleItems">
          <h1>{{item.title}}</h1>
          <div class="ydl-detail-info">
            <span class="layui-badge " style="vertical-align: super;" >{{item.resouceCatalogName?item.resouceCatalogName:null}}}</span>
            <span class="ydl-yidong"><i class="layui-icon">&#xe705;</i><span class="num"> {{item.clickCount}}}</span></span>
            <span class="ydl-yidong ydl-right"><i class="layui-icon layui-icon-log"></i>{{ item.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
          </div>
          <div class="detail-about_tips">
              {{item.summary}}
          </div>
          <div class="detail-body">
            {{item.description}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import '../../static/layui/layui.all'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['articleItems'])
    }
  }
</script>

<style scoped lang="less">

</style>
