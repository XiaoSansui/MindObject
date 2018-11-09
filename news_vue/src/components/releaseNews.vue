<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
           style="display: inline-block;float: left;width: 40%"
           label-width="100px" class="demo-ruleForm">
    <el-form-item label="新闻标题" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="发布时间" required>
      <el-col :span="11">
        <el-form-item prop="date">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="新闻分类" prop="category" style="text-align: left">
      <el-radio-group v-model="ruleForm.category">
        <el-radio label="生活随想"></el-radio>
        <el-radio label="精品转载"></el-radio>
        <el-radio label="胡言乱语"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="发布作者" prop="author" >
      <el-input v-model="ruleForm.author" readonly></el-input>
    </el-form-item>
    <el-form-item label="新闻内容" prop="editorContent">
      <div type="text/textarea" id="myEditor" style="width:600px;height:250px;">
        <p></p>
      </div>
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
          date: '',
          category: '生活随想',
          author: '',
          editorContent: '',
          newimg:'',
          send:true,
        },
        rules: {
          title: [
            { required: true, message: '请输入新闻标题', trigger: 'blur' },
            { min: 5, max: 25, message: '长度在 5 到 25 个字符', trigger: 'blur' }
          ],
          author: [
            { required: true}
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          category: [
            { type: 'category', required: true, message: '请选择一个新闻分类', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请输入发布内容', trigger: 'blur' }
          ]
        },
      };
    },
    computed:{
      ...mapState(['users','NewsMessage'])
    },
    methods: {
      submitForm(formName) {
        let {title,editorContent,date,author,category,newimg,send} = this.ruleForm
        editorContent=UM.getEditor('myEditor').getContentTxt()
        let news = {title,editorContent,date,author,category,newimg,send}
        this.$store.dispatch('receiveNews',news)

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
        this.ruleForm.editorContent=''
      }
    },
    mounted(){
      let um = UM.getEditor('myEditor');
      this.ruleForm.author = this.users.message.useremail
    },
    watch:{
      users(value){
        this.$nextTick(()=>{
          this.ruleForm.author = value.email
        })
      },
      NewsMessage(value){
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
    height: 120%;
  }
</style>
