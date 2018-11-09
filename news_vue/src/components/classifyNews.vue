<template>
  <div>
    <div class="title">新闻分类</div>
    <el-table
      :data="tableData"
      style="width: 70%;margin: auto;">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="200">
      </el-table-column>
      <el-table-column
        prop="title"
        label="分类名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="分类说明"
        width="270"
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
      <span>此操作将永久删除该条新闻分类, 是否继续?</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteData()">确 定</el-button>
        </span>
    </el-dialog>
    <div class="block" style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="listrows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="newsClassify.totalRows*1">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        tableData:[],  //数据
        curPage:1,   //当前页码数
        listrows:5,  //每页显示数
        deleteIndex:'',  //需要删除的数据
        dialogVisible:false, //警告框
      }
    },
    computed:{
      ...mapState(['newsClassify'])
    },
    methods:{
      //编辑用户信息
      handleEdit(index, row) {
        console.log('无法编辑!');
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
      //每页显示数目
      handleSizeChange(val) {
        let {curPage,listrows} = this
        listrows = val
        this.$store.dispatch('getNewsClassify',{curPage,listrows})
      },
      handleCurrentChange(val) {
        let {curPage,listrows} = this
        curPage = val
        this.$store.dispatch('getNewsClassify',{curPage,listrows})
      },
    },
    mounted(){
      const {curPage,listrows} = this
      this.handleSizeChange(listrows)
      this.$store.dispatch('getNewsClassify',{curPage,listrows})
    },
    watch:{
      newsClassify(value){
        let arr = []
        for(let i =0;i<value.message.length-1;i++){
          arr.push(value.message[i])
        }
        this.tableData=arr
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
