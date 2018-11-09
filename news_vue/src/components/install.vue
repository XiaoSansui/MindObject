<template>
  <el-form :model="ruleForm"  ref="ruleForm"
           style="display: inline-block;float: left;width: 50%"
           label-width="150px" class="demo-ruleForm">
    <el-form-item label="网站标题" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="网站名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="网站logo" prop="logo">
      <el-input v-model="ruleForm.logo"></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="网站域名" prop="href">
      <el-input v-model="ruleForm.href"></el-input>
    </el-form-item>
    <el-form-item label="版权信息" prop="copyright">
      <el-input v-model="ruleForm.copyright"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">保存设置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          title: '',
          name: '',
          logo: '',
          href: '',
          email: '',
          copyright: '',
          send:true,
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.open1('设置成功!')
        this.$refs[formName].resetFields();
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
    }
  }
</script>

<style>
  .wrap1 .center{
    height: 80%;
  }
</style>
