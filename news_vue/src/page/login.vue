<template>
  <div id="box">
    <div class="wrap">
      <h1 class="title">NewsVue新闻管理系统</h1>
      <div class="content">
        <p class="login-text">登录账号</p>
        <input type="text" placeholder="请输入账号" v-model="account">
        <p class="login-text">登录密码</p>
        <input type="password" placeholder="请输入密码" v-model="password">
        <br>
        <div class="chick">
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#DDDDDD">
          </el-switch>
          <span>是否保存登录信息</span>
        </div>
        <br>
        <el-button type="primary" class="login" @click="dataLegal">登录</el-button>
        <p v-if="error" :class="error==='验证成功'?'secces':'error'">{{error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    computed:{
      ...mapState(['users','message']),
      ...mapGetters(['reseveUsers']),
    },
    data(){
      return{
        value1:true,
        value2:false,
        account:'',
        password:'',
        error:'',
        isSave:1,
        send:true,
        loginInfo:null,
      }
    },
    methods:{
      dataLegal(){
        let {account,password}  = this
        if(!account){
          this.error='账号不能为空!'
        }else if(!password){
          this.error='密码不能为空!'
        }else{
          this.error='验证成功'
          const {account,password,isSave,send} = this
          this.$store.dispatch('getUsers', {account,password,isSave,send})
          setTimeout(()=>{
            if(this.$store.state.users.valid===0){
              this.error=this.users.message
            }else if(this.$store.state.users.valid===1){
              this.$router.replace('/mainpage')
            }
          },100)
        }
      }
    },
    mounted(){
      let loginInfo = JSON.parse(window.localStorage.getItem('loginInfo')||null);
      if(loginInfo){
        const {account,password,isSave,send} = loginInfo
        this.$store.dispatch('getUsers', {account,password,isSave,send})
      }
    },
    watch:{
      users(value){
        this.$nextTick(()=>{
          if(value.valid===0){
            this.error=value.message
            //this.$router.go(0)
          }else if(value.valid===1){
            this.$router.replace('/mainpage')
          }
        })
      },
    }
  }
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;

  }
  #app{
    width: 100%;
    height: 100%;
  }
  #box{
    width: 100%;
    height: 100%;
    background: url("./images/login_bg.jpg");
    background-size: 100% 100%;
    position: relative;
  }
  .error{
    color: red;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 5px 0;
  }
  .secces{
    color: green;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 5px 0;
  }
  .login{
    width: 100%;
  }
  .chick{
    width: 100%;
    margin: 5px;
  }
  .chick span{
    color: white;
    font-size: 14px;
  }
  .wrap{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

  }
  .wrap input{
    width: 90%;
    height: 40px;
    border-radius: 5px;
    padding: 0 20px;
  }
  .wrap .login-text{
    color: white;
    margin: 8px 0;
    font-size: 18px;
    font-weight: 400;
  }
  .wrap .title{
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin: 10px 0;
  }
  .wrap .content{
    border:5px solid whitesmoke;
    border-radius: 10px;
    width: 500px;
    padding: 10px;
    transition: 0.5s height;
  }
</style>
