/*
  包含N个接口请求函数的模块
*/
import ajax from './ajax'

//登录获取用户信息
export const reqUsers= (email,pass,isSave,send) =>ajax('http://118.24.33.192/api/landing.php',{email,pass,isSave,send},'POST')
//获取用户信息列表
export const reqUserList = (curPage,listrows) =>ajax('http://118.24.33.192/api/getuser.php',{curPage,listrows})
//修改用户信息
export const reviseUser = ({EditID,pass,checkPass,sex,level,send})=>ajax('http://118.24.33.192/api/Edituser.php',{EditID,pass,checkPass,sex,level,send},'POST')
//添加用户
export const addUser = ({email,pass,checkPass,sex,level,send})=>ajax('http://118.24.33.192/api/adduser.php',{email,pass,checkPass,sex,level,send},'POST')
//获取新闻列表
export const reqNewsList = (curPage,listrows)=>ajax('http://118.24.33.192/api/getnews.php',{curPage,listrows})
//发布新闻
export const reviseNews = ({title,editorContent,date,author,category,newimg,send})=>ajax('http://118.24.33.192/api/addnew.php',{title,editorContent,date,author,category,newimg,send},'POST')
//获取新闻分类列表
export const reqClassify = (curPage,listrows)=>ajax('http://118.24.33.192/api/getnewclass.php',{curPage,listrows})
//添加新闻分类
export const reviseNewsClassify = ({title,content,href,send})=>ajax('http://118.24.33.192/api/addnewclass.php',{title,content,href,send},'POST')
