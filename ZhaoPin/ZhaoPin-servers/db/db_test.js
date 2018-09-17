/*
使用 mongoose 操作 mongodb 的测试文件
1. 连接数据库
  1.1. 引入 mongoose
  1.2. 连接指定数据库 (URL 只有数据库是变化的 )
  1.3. 获取连接对象
  1.4. 绑定连接完成的监听 ( 用来提示连接成功 )
2. 得到对应特定集合的 Model
  2.1. 字义 Schema( 描述文档结构 )
  2.2. 定义 Model( 与集合对应 , 可以操作集合 )
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
  3.1. 通过 Model 实例的 save() 添加数据
  3.2. 通过 Model 的 find()/findOne() 查询多个或一个数据
  3.3. 通过 Model 的 findByIdAndUpdate() 更新某个数据
  3.4. 通过 Model 的 remove() 删除匹配的数据
*/
//引入MD5
const md5=require('blueimp-md5')
// 1.1. 引入 mongoose
const mongoose =require('mongoose');
// 1.2. 连接指定数据库 (URL 只有数据库是变化的 )
mongoose.connect('mongodb://localhost:27017/MyServes');
// 1.3. 获取连接对象
const conn = mongoose.connection;
// 1.4. 绑定连接完成的监听 ( 用来提示连接成功 )
conn.on('connected',function () {//连接成功回调
  console.log('数据库连接成功!!!');
})

// 2.1. 字义 Schema( 描述文档结构 )
const userSchema = mongoose.Schema({
  username: {type: String, required: true}, // 用户名
  password: {type: String, required: true}, // 密码
  type: {type: String, required: true}, // 用户类型 : dashen/laoban
})
// 2.2. 定义 Model( 与集合对应 , 可以操作集合 )
const UserModel = mongoose.model('user',userSchema); //集合的名称为users

/*3. 通过 Model 或其实例对集合数据进行 CRUD 操作*/
// 3.1. 通过 Model 实例的 save() 添加数据
function testSave() {
  //创建UserModel的实例
  const userModel=new UserModel({username:'Bob',password:md5('333'),type:'dashen'})
  //调用save()保存
  userModel.save(function (error,userDoc) {
    console.log('Save()'+error+userDoc);
  })
}
//testSave()
// 3.2. 通过 Model 的 find()/findOne() 查询多个或一个数据
function testFind() {
  //查询多个:得到的是包含所有匹配文档对象的数组,如果没有匹配的元素,返回[]
  UserModel.find({_id:'5b962ff629742510e428a390'},function (error,users) {
    console.log('find()',error,users);
  })
  //查询单个:得到的是匹配的文档对象,如果没有匹配的就返回null
  UserModel.findOne({_id:'5b962ff629742510e428a390'},function (error,user) {
    console.log('findOne()',error,user);
  })
}
//testFind()
// 3.3. 通过 Model 的 findByIdAndUpdate() 更新某个数据
function testUpdate() {
  UserModel.findByIdAndUpdate({_id:'5b962ff629742510e428a390'},{username:'Alis'},function (error,oldUser) {
    console.log('findByIdAndUpdate()',error,oldUser);
  })
}
//testUpdate()
// 3.4. 通过 Model 的 remove() 删除匹配的数据
function testDelete() {
  UserModel.remove({_id:'5b962ff629742510e428a390'},function (error,data) {
    console.log('remove()',error,data); //{n:0/1 ,ok:1} n表示删除几条 ok表示删除成功
  })
}
testDelete()