<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    layui.use(['element', 'form'], function(exports){
      var element = layui.element
        ,form = layui.form;
    });
  }
}
</script>

<style scoped lang="less">
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
