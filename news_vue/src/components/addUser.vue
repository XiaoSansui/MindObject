<template>
  <el-form ref="form" :model="form" label-width="80px" style="display: inline-block;float: left;width: 40%">
    <el-form-item label="邮箱"
                  prop="email"
                  :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pass" type="password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" :error="form.error">
      <el-input v-model="form.checkPass" type="password" @blur="paw"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
        <el-radio label="保密"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="级别">
      <el-radio-group v-model="form.level">
        <el-radio label="管理员"></el-radio>
        <el-radio label="普通会员"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        form: {
          email: '',
          pass: '',
          checkPass: '',
          sex: '保密',
          level: '普通会员',
          send:true,
          error: '',
        }
      }
    },
    computed:{
      ...mapState(['addUser'])
    },
    methods: {
      onSubmit() {
        let {email,pass,checkPass,sex,level,send} = this.form
        sex=sex==='男'?'1':sex==='女'?'0':'2'
        level=level==='普通会员'?'1':'0'
        const user = {email,pass,checkPass,sex,level,send}
        this.$store.dispatch('addUser',user)
      },
      //重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.form.password=''
        this.form.password2=''
        this.form.sex='保密'
        this.form.level='普通会员'
      },
      paw(){
        if(this.form.password2!==this.form.password){
          this.form.error='两次密码不一致!'
        }else{
          this.form.error=''
        }
      },
      open1(reviseMessage) {
        this.$message({
          message: reviseMessage,
          type: 'success'
        });
      },
      open2(reviseMessage) {
        this.$message.error(reviseMessage);
      },
    },
    watch:{
      addUser(value){
        this.$nextTick(()=>{
          if(value.valid===1){
            this.open1(value.message)
            //数据修改成功的话立即重新获取一次最新的数据
            let {curPage,listrows} = this
            this.$store.dispatch('getUserList',{curPage,listrows})
          }else{
            this.open2(value.message)
          }
        })
      }
    }
  }
</script>

<style>
  .wrap1 .center{
    height: 80%;
  }
</style>
