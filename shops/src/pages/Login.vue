<template>
  <div class="login-wrap">
    <div class="box-wrap">
      <h2 class="login-title">TOP服装商家收银系统</h2>
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" stretch class="login-tabs">
        <el-tab-pane label="商家注册" name="first">
          <el-form ref="form2" :model="form2" label-width="100px" size="small ">
            <el-form-item label="商家名称:" :rules="[{ required: true, message: '请输入商家名称', trigger: 'blur' },]">
              <el-input v-model="form2.name" autocomplete="off" placeholder="请输入商家名称" ></el-input>
            </el-form-item>
            <el-form-item label="账号:"  :rules="[{ required: true, message: '请输入账号', trigger: 'blur' },]">
              <el-input v-model="form2.username" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form :model="form2" status-icon :rules="rules1" ref="form2" size="small " label-width="100px" class="demo-ruleForm">
              <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="form2.pass"  placeholder="请输入密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                <el-input type="password" v-model="form2.checkPass"  placeholder="请确认密码" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-form-item label="性别:">
              <el-radio-group v-model="form2.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form2.date" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="联系方式:" :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },]">
              <el-input v-model="form2.phone" autocomplete="off" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item label="身份证:" :rules="[{ required: true, message: '请输入身份证信息', trigger: 'blur' },]">
              <el-input v-model="form2.IDcard" autocomplete="off" placeholder="请输入身份证信息"></el-input>
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
              <el-input v-model="form1.username" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="form1.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码:">
              <el-input v-model="form1.code" placeholder="请输入验证码" style="width: 150px;"></el-input>
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
              <el-input v-model="form3.username" autocomplete="off" placeholder="请输入账号"></el-input>
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
        } else if (value !== this.form2.pass) {
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
        } else if (value !== this.form2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        isShow:false, //是否找回密码
        form1: {
          username: '', //账号
          password:'', //密码
          code:'', //验证码
          type:'收银员', //用户类型
        },
        form2: {
          name:'', //商家名称
          username: '', //账号
          sex:'男', //性别
          date:'', //出生年月
          phone:'' , //联系方式
          IDcard:'' , //身份证号码
          pass: '',
          checkPass: '',
        },
        form3: {
          username: '', //账号
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
    methods: {
      //确认修改密码
      onConfirm(){
        this.isShow = false
        this.activeName ='second'
        console.log(this.form3);
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
       console.log(this.form1);
      },
      handleClick(tab, event) {
      },
      onRegister(){
        console.log(this.form2);
      },
      resetForm() {
        this.form2.name=''
        this.form2.username=''
        this.form2.pass=''
        this.form2.checkPass=''
        this.form2.sex='男'
        this.form2.date=''
        this.form2.phone=''
        this.form2.IDcard=''
        this.$refs.form2.resetFields();
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
