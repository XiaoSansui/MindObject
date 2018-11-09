<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
           style="display: inline-block;float: left;width: 50%"
           label-width="150px" class="demo-ruleForm">
    <el-form-item label="新闻分类名称" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="新闻分类外链" prop="href">
      <el-input v-model="ruleForm.href"></el-input>
    </el-form-item>
    <el-form-item label="新闻分类说明" prop="content">
      <el-input v-model="ruleForm.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        ruleForm: {
          title: '',
          href: '',
          content: '',
          send:true,
        },
        rules: {
          title: [
            { required: true, message: '请输入新闻分类名称', trigger: 'blur' },
            { min: 5, max: 25, message: '长度在 5 到 25 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入新闻分类说明', trigger: 'blur' }
          ]
        },
      };
    },
    computed:{
      ...mapState(['users','classifyMessage'])
    },
    methods: {
      submitForm(formName) {
        let {title,content,href,send} = this.ruleForm
        let news = {title,content,href,send}
        this.$store.dispatch('addNewsClassify',news)
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch:{
      classifyMessage(value){
        this.$nextTick(()=>{
          if(value.valid===1){
            this.open1(value.message)
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
