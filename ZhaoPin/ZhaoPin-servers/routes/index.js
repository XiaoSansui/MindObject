var express = require('express');
var router = express.Router();

const {UserModel,ChatModel} = require('../db/modules')
const md5 = require('blueimp-md5')
const filter = {password: 0,__v:0} // 查询时过滤出指定的属性

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
提供一个用户注册的接口
a) path 为: /register
b) 请求方式为: POST
c) 接收 username 和 password 参数
d) admin 是已注册用户
e) 注册成功返回: {code: 0, data: {_id: 'abc', username: ‘xxx’, password:’123’}
f) 注册失败返回: {code: 1, msg: '此用户已存在'}
*/
/*
1.获取请求参数
2.处理
3.返回响应数据
router.post('/register',function (req,res) {
  //1.获取请求参数
  const {username,password} = req.body;
  //2.处理
  if(username==='admin'){//注册会失败
    //返回响应数据(失败)
    res.send({code: 1, msg: ' 此用户已存在'})
  }else{
    //返回响应数据(成功)
    res.send({code: 0, data: {id: 'abc', username, password}});
  }
})
* */

//注册路由
router.post('/register',function (req,res) {
  //1.获取请求参数数据 (username, password, type)
  const {username,password,type} = req.body;
  // 2. 处理数据
  //根据 username 查询数据库 , 看是否已存在 user
  UserModel.findOne({username},function (error,user) {
    //如果存在返回一个提示数据:此用户已存在
    if(user){
      res.send({code:1,msg:'此用户已存在'})//code是数据是否是正常数据的标识
    }else{
      //如果不存在 将提交的user保存到数据库
      new UserModel({username,type,password:md5(password)}).save(function (error,user) {
        //生成一个cookie('userid:user._id')并交给浏览器保存
        //持久化cookie 浏览器会保存在本地文件
        res.cookie('userid',user._id,{maxAge:1000*60*60*24*30})
        //保存成功返回成功的响应数据
        const data = {_id:user._id,username,type}
        res.send({code:0,data})//返回的数据中不要携带密码
      })
    }
  })
})

//登录路由
router.post('/login',function (req,res) {
  //1.获取请求参数数据 (username, password, type)
  const {username,password} = req.body;
  // 2. 处理数据
  //根据 username,password 查询数据库 , 看是否已存在 user
  UserModel.findOne({username,password:md5(password)},filter,function (error,user) {
    //如果不存在返回一个提示数据:账号或密码错误,存在返回成功数据
    if(user){
      //持久化cookie 浏览器会保存在本地文件
      res.cookie('userid',user._id,{maxAge:1000*60*60*24*30})
      res.send({code:0,data:user})
    }else{
      res.send({code:1,msg:'账号或密码错误'})
    }
  })
})

//更新用户信息路由
router.post('/update',function (req,res) {
  //从请求的cookie得到userid
  const userid = req.cookies.userid
  //如果不存在,直接返回一个提示信息
  if(!userid){
    return res.send({code:1,msg:'请先登录'})
  }
  //存在,根据userid更新对应的user文档数据
  //得到提交的用户数据
  const user = req.body //没有_id
  UserModel.findByIdAndUpdate({_id:userid},user,function (error,oldUser) {
    if(!oldUser){
      //通知浏览器删除userid cookie
      res.clearCookie('userid')
      //返回一个提示信息
      res.send({code:1,msg:'请先登录'})
    }else{
      const {_id,username,type} = oldUser
      const data = Object.assign({_id,username,type},user)
      res.send({code:0,data})
    }
  })
})

//获取用户信息的路由(根据cookie中的userid)
router.get('/user',function (req,res) {
  //从请求的cookie得到userid
  const userid = req.cookies.userid
  //如果不存在,直接返回一个提示信息
  if(!userid){
    return res.send({code:1,msg:'请先登录'})
  }
  //根据userid查询对应的user
  UserModel.findOne({_id:userid},filter,function (error,user) {
    res.send({code:0,data:user})
  })
})

//获取用户类型的列表路由
router.get('/userlist',function (req,res) {
  const {type} = req.query
  UserModel.find({type},filter,function (error,user) {
    res.send({code:0,data:user})
  })
})

//获取当前用户所有相关聊天信息列表
router.get('/msglist',function (req,res) {
  //获取cookie中的userid
  const userid = req.cookies.userid
  //查询得到所有user文档数组
  UserModel.find(function (err,userDocs) {
    //用对象存储所有user信息:key为user的_id,val为name和header组成的user对象
    const users ={} //对象容器
    userDocs.forEach(doc=>{
      users[doc._id] = {username:doc.username,header:doc.header}
    })

    /*
     查询userid相关的所有聊天信息
      参数1:查询条件
      参数2:过滤条件
      参数3:回调函数
    */
    ChatModel.find({'$or':[{from:userid},{to:userid}]},filter,function (err,chatMsgs) {
      //返回包含所有用户和当前用户相关的所有聊天消息的数据
      res.send({code:0,data:{users,chatMsgs}})
    })
  })
})

//修改指定消息为已读
router.post('/readmsg',function (req,res) {
  //得到请求中的from和to(只需要得到是谁发送的)
  const from = req.body.from
  const to = req.cookies.userid
  /*
    更新数据库中的chat数据
      参数1:查询条件
      参数2:更新为指定的数据对象
      参数3:时候一次更新多条,默认一次只更新一条
      参数4:更新完成的回调函数
  */
  ChatModel.update({from,to,read:false},{read:true},{multi:true},function (err,doc) {
    console.log('/readmsg',doc);
    res.send({code:0,data:doc.nModified})//更新的数量
  })
})

module.exports = router;
