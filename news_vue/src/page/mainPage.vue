<template>
  <div class="wrap1">
    <header class="header">
      NewsVue新闻管理系统
    </header>
    <div class="center">
      <el-row class="tac">
        <el-col class="leftNav" :span="4">
          <el-menu
            default-active="1"
            @select="navShow"
            unique-opened
            class="el-menu-vertical-demo"
            >
            <router-link to="/mainpage/workbench" @click="navShow">
              <el-menu-item index="1">
                <span slot="title">工作台</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="2">
              <template slot="title">
                <span>用户管理</span>
              </template>
              <router-link to="/mainpage/userlist">
                <el-menu-item index="2-1" @click="totalNav('用户列表')">用户列表</el-menu-item>
              </router-link>
              <router-link to="/mainpage/addUser">
              <el-menu-item index="2-2"  @click="totalNav('添加用户')">添加用户</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>新闻管理</span>
              </template>
              <router-link to="/mainpage/newslist">
                <el-menu-item index="3-1" @click="totalNav('新闻列表')">新闻列表</el-menu-item>
              </router-link>
              <router-link to="/mainpage/releasenews">
                <el-menu-item index="3-2" @click="totalNav('新闻发布')">新闻发布</el-menu-item>
              </router-link>
              <router-link to="/mainpage/classifynews">
                <el-menu-item index="3-3" @click="totalNav('新闻分类')">新闻分类</el-menu-item>
              </router-link>
              <router-link to="/mainpage/addclassifynews">
                <el-menu-item index="3-4" @click="totalNav('添加新闻分类')">添加新闻分类</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span>系统设置</span>
              </template>
              <router-link to="/mainpage/install">
                <el-menu-item index="4-1" @click="totalNav('基本设置')">基本设置</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </el-col>
        <div class="content" >
          <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb" v-show="isShow">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{pathNav}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="interface">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </el-row>

    </div>
    <footer class="footer">
      Copyright © 2006-2018 vuedemo All Rights Reserved. Powered by vuedemmo
    </footer>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:false,//是否显示面包屑导航
        pathNav:'',  //面包屑
      }
    },
    methods:{
      navShow(key, keyPath){
        if(key==='1'){
          this.isShow=false
        }else{
          this.isShow=true
        }
      },
      totalNav(navName){
        this.pathNav = navName
      }
    },
    created(){
      let users=window.localStorage.getItem('users')||null
      if(users){
       // users.message = JSON.parse(users.message)
        this.$router.push({
          path:'/mainpage/workbench',
          query:{
            users:users
          }
        })
      }
    },
  }
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
  }
  .content .interface{
    text-align: center;
  }

  .content .Breadcrumb{
    height: 50px;
    line-height: 50px;

  }
  #app{
    height:100%;
  }
  .wrap1 .footer{
    display: inline-block;
    width: 100%;
    height: 10%;
    line-height: 60px;
    background: #CCCCCC;
    text-align: center;
    color:#2C3E50;
    font-size: 18px;
    position: relative;
    bottom: 0;

  }
  .wrap1 .header{
    background: #1278F6;
    height: 10%;
    color: white;
    font-size:20px;
    font-weight: 600;
    padding-left: 20px;
    line-height: 60px
  }
  .wrap1{
    height:100%;
    position: relative;
  }
  .wrap1 .center{
    height: 80%;
    background: #EAE9E9;
    width: 100%;
    position: relative;
  }
  .wrap1 .center .tac{
    height: 100%;

  }
  .wrap1 .center .leftNav{
    height: 100%;
    background: white;
  }
</style>
