<template>
  <div>
    <div class="title">用户列表</div>
    <el-table
      :data="tableData"
      style="width: 70%;margin: auto;">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="useremail"
        label="邮箱"
        width="220">
      </el-table-column>
      <el-table-column
        prop="usersex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userlevel"
        label="级别"
        width="220"
      >
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="警告"
      :visible.sync="dialogVisible"
      width="30%"
       >
      <span>此操作将永久删除用户信息, 是否继续?</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteData()">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item
          label="邮箱"
          :rules="[
              { required: true}
                ]"
          status-icon
        >
          <el-input v-model="form.email" value="123" readonly></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="不输入则不修改"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :error="form.error">
          <el-input v-model="form.password2" placeholder="不输入则不修改" @blur="paw" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女" ></el-radio>
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
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="dialogFormVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div class="block" style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userList.totalRows*1">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        tableData: [],//数据
        form: {
          email: '',
          password: '',
          password2: '',
          sex: '',
          level: '',
          delivery: false,
          error:''
        },  //表单数据
        dialogVisible: false,  //警告框
        deleteIndex:'',    //需要删除的元素
        dialogFormVisible: false,//编辑框
        formLabelWidth: '120px',
        curPage:1,   //当前页码数
        listrows:5,  //每页显示数
        index:null,  //当前选择的用户位置
      }
    },
    computed:{
      ...mapState(['userList','reviseUser']),
    },
    methods: {
      open1(reviseMessage) {
        this.$message({
          message: reviseMessage,
          type: 'success'
        });
      },
      open2(reviseMessage) {
        this.$message.error(reviseMessage);
      },
      paw(){
        if(this.form.password2!==this.form.password){
          this.form.error='两次密码不一致!'
        }else{
          this.form.error=''
        }

      },
      //编辑用户信息
      handleEdit(index, row) {
        this.dialogFormVisible=true
        this.form.email = this.tableData[index].useremail
        this.form.sex = this.tableData[index].usersex
        this.form.level = this.tableData[index].userlevel
        this.index = index
      },
      //删除用户信息(本地)
      handleDelete(index, row) {
        this.dialogVisible = true
        this.deleteIndex = index
      },
      deleteData(){
        this.tableData.splice(this.deleteIndex,1)
        this.dialogVisible = false
      },
      //提交用户信息修改
      onSubmit() {
        const {form,index} = this
        let EditID = this.userList.users[index].id*1,
          pass = form.password,
          checkPass = form.password2,
          sex = form.sex==='男'?'1':form.sex==='女'?'0':'2',
          level = form.level==='普通会员'?'1':'0',
          send = true;
        const user = {EditID,pass,checkPass,sex,level,send}
        this.$store.dispatch('reviseUser',user)
      },
      //每页显示数目
      handleSizeChange(val) {
        let {curPage,listrows} = this
        listrows = val
        this.$store.dispatch('getUserList',{curPage,listrows})
      },
      handleCurrentChange(val) {
        let {curPage,listrows} = this
        curPage = val
        this.$store.dispatch('getUserList',{curPage,listrows})
      },
    },
    mounted(){
      let {curPage,listrows} = this
      this.handleSizeChange(listrows)
      this.$store.dispatch('getUserList',{curPage,listrows})
    },
    watch:{
      userList(value){
        this.$nextTick(()=>{
          let arr=[]
          for(let i=0;i<value.users.length;i++){  //遍历数组赋值
            value.users[i].usersex=value.users[i].usersex==='0'?'女':value.users[i].usersex==='1'?'男':'保密'
            value.users[i].userlevel=value.users[i].userlevel==='0'?'管理员':'普通会员'
            arr.push(value.users[i])
          }
          this.tableData=arr
        })
      },
      reviseUser(value){
        this.$nextTick(()=>{
          if(value.valid===1){
            this.open1(value.message)
            //数据修改成功的话立即重新获取一次最新的数据
            let {curPage,listrows} = this
            this.$store.dispatch('getUserList',{curPage,listrows})
            this.dialogFormVisible = false
          }else{
            this.open2(value.message)
            this.dialogFormVisible = false
          }
        })
      }
    }
  }
</script>

<style>
  .title{
    text-align: center;
    margin: 20px;
    font-size: 25px;
    font-weight: 600;
    color: #5b5b5b;
  }
  .wrap1 .center{
    height: 80%;
  }
</style>
