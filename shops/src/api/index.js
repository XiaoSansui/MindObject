/*
  包含N个接口请求函数的模块
*/
import ajax from './ajax'


//获取首页主体内容
export const reqLogin =(userId,password)=>ajax('http://192.168.0.168:8080/user/login',{userId,password},'POST')
export const reqRegister =({userName,shopName, userId,brithday,phone,idCard,password})=>ajax('http://192.168.0.168:8080/user/addUser',{userName,shopName, userId,brithday,phone,idCard,password},'POST')
