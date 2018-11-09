<template>
  <div >
    <h1 >管理员：{{email}}, 欢迎登录信息管理系统!</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        email:'',
      }
    },
    computed:{
      ...mapState(['users'])
    },
    mounted(){
     setTimeout(()=>{
       let users =JSON.parse(this.$route.query.users)
       if(users){
         users.message = JSON.parse(users.message)
         this.email =users.message.useremail
         this.$store.state.users = users
       }
     },500)
    },
    watch:{
      users(value){
        this.$nextTick(()=>{
          this.email = value.email
        })
      }
    }
  }
</script>

<style>
  h1{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 20px;
  }
  .wrap1 .center{
    height: 80%;
  }
</style>
