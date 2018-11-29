<template>
  <div class="login-wrap">
    <div class="box-wrap">
      <h2 class="login-title">TOP服装商家收银系统</h2>
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" stretch class="login-tabs">
        <el-tab-pane label="商家注册" name="first">
          <el-form ref="form2" :model="form2" label-width="100px" size="small ">
            <el-form-item label="商家名称:" :rules="[{ required: true, message: '请输入商家名称', trigger: 'blur' },]">
              <el-input v-model="form2.shopName" autocomplete="off" placeholder="请输入商家名称" ></el-input>
            </el-form-item>
            <el-form-item label="姓名:" :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' },]">
              <el-input v-model="form2.userName" autocomplete="off" placeholder="请输入姓名" ></el-input>
            </el-form-item>
            <el-form-item label="账号:"  :rules="[{ required: true, message: '请输入账号', trigger: 'blur' },]">
              <el-input v-model="form2.userId" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form :model="form2" status-icon :rules="rules1" ref="form2" size="small " label-width="100px" class="demo-ruleForm">
              <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="form2.password"  placeholder="请输入密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                <el-input type="password" v-model="form2.checkPass"  placeholder="请确认密码" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-form-item label="出生日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form2.brithday" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="联系方式:" :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },]">
              <el-input v-model="form2.phone" autocomplete="off" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item label="身份证:" :rules="[{ required: true, message: '请输入身份证信息', trigger: 'blur' },]">
              <el-input v-model="form2.idCard" autocomplete="off" placeholder="请输入身份证信息"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onRegister()">&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
              <el-button @click="resetForm()">&nbsp;&nbsp;&nbsp;&nbsp;重置&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="用户登录" name="second">
          <el-form ref="form1" :model="form1" label-width="100px" size="small ">
            <el-form-item label="账号:">
              <el-input v-model="form1.userId" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="form1.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码:">
              {{form1.yanzhenma}}
              <el-input v-model="form1.code" style="width: 50px;"></el-input>
              <i class="el-icon-refresh" @click="yzm()"></i>
            </el-form-item>
            <el-form-item label="用户类型">
              <el-select v-model="form1.type" placeholder="请选择用户类型">
                <el-option label="收银员" value="shouyin"></el-option>
                <el-option label="商家" value="shangjia"></el-option>
                <el-option label="管理员" value="guanli"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
              <el-button type="info" style="margin: 0 10px" @click="resetPass">忘记密码?</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="找回密码" v-if="isShow" name="three">
          <el-form ref="form2" :model="form3" label-width="100px" size="small ">
            <el-form-item label="账号:"  :rules="[{ required: true, message: '请输入账号', trigger: 'blur' },]">
              <el-input v-model="form3.userId" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="联系方式:" :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },]">
              <el-input v-model="form3.phone" autocomplete="off" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item label="身份证:" :rules="[{ required: true, message: '请输入身份证信息', trigger: 'blur' },]">
              <el-input v-model="form3.IDcard" autocomplete="off" placeholder="请输入身份证信息"></el-input>
            </el-form-item>
            <el-form :model="form3" status-icon :rules="rules2" ref="form3" size="small " label-width="100px" class="demo-ruleForm">
              <el-form-item label="新密码:" prop="newpass">
                <el-input type="password" v-model="form3.newpass" placeholder="请输入新密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码:" prop="checknewPass">
                <el-input type="password" v-model="form3.newcheckPass"  placeholder="请确认新密码" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-form-item>
              <el-button type="primary" @click="onConfirm()">&nbsp;&nbsp;&nbsp;&nbsp;确认&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
              <el-button @click="onCancel()">&nbsp;&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import '../../static/jquery-1.11.3.min'
  import {mapState} from 'vuex'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form2.checkPass !== '') {
            this.$refs.ruleForm1.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.form2.checkPass !== '') {
            this.$refs.ruleForm1.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.form2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        isShow:false, //是否找回密码
        form1: {
          userId: '', //账号
          password:'', //密码
          code:'', //验证码
          yzmNum:'', //验证码答案
          yanzhenma:'', //验证码问题
          type:'收银员', //用户类型
        },
        form2: {
          userName:'', //姓名
          shopName:'',//商家名称
          userId: '', //账号
          brithday:'', //出生年月
          phone:'' , //联系方式
          idCard:'' , //身份证号码
          password: '',
          checkPass: '',
        },
        form3: {
          userId: '', //账号
          phone:'' , //联系方式
          IDcard:'' , //身份证号码
          newpass: '', //新密码
          checknewPass: '', //确认新密码
        },
        activeName: 'second',
        rules1: {
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {  required: true,validator: validatePass2, trigger: 'blur' }
          ],
        },
        rules2: {
          newpass: [
            { required: true, validator: validatePass3, trigger: 'blur' }
          ],
          checknewPass: [
            {  required: true,validator: validatePass4, trigger: 'blur' }
          ],
        }
      }
    },
    computed:{
      ...mapState(['loginMsg','registerMsg'])
    },
    methods: {
      //登陆验证码
      yzm() {
        var mn = 0;
        var m = 0;
        var n = 0;
        //获取验证码两个两位数的随机数
        m = Math.floor(Math.random() * 10) + 10;
        n = Math.floor(Math.random() * 10) + 10;
        mn = m + n;
        //验证码
        this.form1.yzmNum = m+n
        this.form1.yanzhenma= m + "+" + n + "= ";
      },
      openMsg(msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: 'error'
        });
      },
      openSuccess(msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: 'success'
        });
      },
      //确认修改密码
      onConfirm(){
        this.isShow = false
        this.activeName ='second'
      },
      onCancel(){
        this.isShow = false
        this.activeName ='second'
      },
      //显示重置密码界面
      resetPass(){
        this.isShow = true
        this.activeName ='three'
      },
      onSubmit() {
        if(!this.form1.userId){
          this.openMsg("请输入账号!")
        }else if(!this.form1.password){
          this.openMsg("请输入密码!")
        }else if(this.form1.code*1 !== this.form1.yzmNum){
          this.openMsg("验证码不正确!")
          this.yzm()
        }else{
          const user =this.form1
          this.$store.dispatch('login',user)
        }
      },
      handleClick(tab, event) {
      },
      onRegister(){

        if(!this.form2.shopName){
          this.openMsg("请输入商家名称!")
        }else if(!this.form2.name){
          this.openMsg("请输入姓名!")
        }else if(!this.form2.userId){
          this.openMsg("请输入账号!")
        }else if(!this.form2.pass){
          this.openMsg("请输入密码!")
        }else if(!this.form2.date){
          this.openMsg("请输入出生年月!")
        }else if(!this.form2.phone){
          this.openMsg("请输入联系方式!")
        }else if(!this.form2.IDcard){
          this.openMsg("请输入身份信息!")
        }else{
          const user = this.form2
          this.$store.dispatch('register',user)
        }

      },
      resetForm() {
        this.form2.name=''
        this.form2.shopName=''
        this.form2.userId=''
        this.form2.pass=''
        this.form2.checkPass=''
        this.form2.sex='男'
        this.form2.date=''
        this.form2.phone=''
        this.form2.IDcard=''
        this.$refs.form2.resetFields();
      }
    },
    mounted(){
      this.$nextTick(()=>{
       this.yzm()
      })
    },
    watch:{
      loginMsg(value){
        if(value.code===1){
          this.openSuccess(value.msg)
          this.$route.path('/business')
        }else{
          this.openMsg(value.msg)
          this.form1.userId=''
          this.form1.password=''
          this.form1.code=''
          this.yzm()
        }
      },
      registerMsg(value){
        console.log(value);
        if(value.code === 1){
          this.openSuccess(value.msg)
        }else{
          this.openMsg(value.msg)
        }
      }
    }
  }
</script>

<style scoped lang="less">

.login-wrap{
  width: 100%;
  height: 100%;
  background: #393D49;
}
.login-title{
  color: white;
  text-align: center;
  padding: 20px 0;
  font-weight: 500;
  font-family: 黑体;
  font-size: 35px;
}
.login-tabs{
  border-radius: 5px;
}
.box-wrap{
  width: 50%;
  margin: auto;

}
</style>
