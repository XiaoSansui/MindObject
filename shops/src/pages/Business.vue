<template>
  <div class="layui-clear businessWrap">
    <div class="header layui-clear">
      <h3 class="businessTitle">TOP服装商家收银系统</h3>
      <ul class="layui-nav header-nav">
        <li class="layui-nav-item">
          <a href="">控制台<span class="layui-badge">9</span></a>
        </li>
        <li class="layui-nav-item">
          <a href="">个人中心<span class="layui-badge-dot"></span></a>
        </li>
        <li class="layui-nav-item">
          <a href=""><img src="//t.cn/RCzsdCq" class="layui-nav-img">我</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">修改我的信息</a></dd>
            <dd><a href="javascript:;">修改我的密码</a></dd>
            <dd><a href="javascript:;">退出登录</a></dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="side layui-clear">
      <ul class="layui-nav layui-nav-tree" lay-filter="test">
        <!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
        <li class="layui-nav-item layui-nav-itemed">
          <a href="javascript:;">商品管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">添加我的商品</a></dd>
            <dd><a href="javascript:;">查询我的商品信息</a></dd>
            <dd><a href="javascript:;">修改我的商品信息</a></dd>
            <dd><a href="javascript:;">删除我的商品</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item ">
          <a href="javascript:;">店铺管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">修改我的店铺信息</a></dd>
            <dd><a href="javascript:;">查询我的店铺信息</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item ">
          <a href="javascript:;">资产管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">查询我的资产信息</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item ">
          <a href="javascript:;">上线管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">查询收银员上线信息</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item ">
          <a href="javascript:;">员工管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">添加收银员</a></dd>
            <dd><a href="javascript:;">删除收银员</a></dd>
            <dd><a href="javascript:;">查询收银员</a></dd>
            <dd><a href="javascript:;">修改收银员信息</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item ">
          <a href="javascript:;">订单管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">查询我的订单</a></dd>
            <dd><a href="javascript:;">查询订单的商品信息</a></dd>
            <dd><a href="javascript:;">查询已退订单</a></dd>
            <dd><a href="javascript:;">查询已退的订单信息</a></dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="businessContent">
     <p>123</p>
     <p>123</p>
     <p>123</p>
     <p>123</p>
     <p>123</p>
     <p>123</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
.businessTitle{
  font-size: 30px;
  font-weight: 500;
  color: white;
  float: left;
  padding: 20px 0 0 20px;
}
.header{
  width:  100%;
  background-color: #393D49;
}
.header-nav{
  float: right;
  margin: 0 10px;
}
.side{
  height: 100%;
  background-color: #393D49;
  float: left;
}
  .businessWrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .businessContent{
    width: 100%-200px;
    height: 100%;
    margin-left: 200px;
    background-color: black;
    p{
      color: red;
      padding: 20px;
    }
  }
</style>
