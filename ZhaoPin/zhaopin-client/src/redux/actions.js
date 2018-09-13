/*
包含n个action creator
异步action
同步action
*/
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from './action-types'
import {
  reqRegister,
  reqLogin,
  reqUpdateUser,
  reqUser
} from '../api'



//授权成功的同步action
const authSuccess = (user)=>({type:AUTH_SUCCESS,data:user})
//错误提示信息的同步action
const errorMsg = (msg)=>({type:ERROR_MSG,data:msg})
//接受用户的同步action
const receiveUser = (user)=>({type:RECEIVE_USER,data:user})
//更新用户的同步action
const resetUser = (msg)=>({type:RESET_USER,data:msg})


//注册异步action
export const register = (user) =>{
  const {username,password,password2,type} = user
  //做表单的前台检查,如果不通过,返回一个errorMsg的同步action
  if(!username){
    return errorMsg('用户名不能为空!!!')
  }else if(!password){
    return errorMsg('密码不能为空!!!')
  }else if(password2!==password){
    return errorMsg('两次密码不一致!!!')
  }else if(username===password){
    return errorMsg('用户名不能与密码相同!!!')
  }
  //表单数据合法,返回一个发ajax请求的异步action函数
  return async dispath =>{
    //发送注册的异步ajax请求
    const response = await reqRegister({username,password,type})
    const result = response.data //{code:0/1,data:user,msg:''}
    if(result.code===0){//成功
      //分发授权成功的同步action
      dispath(authSuccess(result.data))
    }else{//失败
      //分发错误提示信息的同步action
      dispath(errorMsg(result.msg))
    }
  }
}

//登录异步action
export const login = (user) =>{
  const {username,password} = user
  //做表单的前台检查,如果不通过,返回一个errorMsg的同步action
  if(!username){
    return errorMsg('用户名不能为空!!!')
  }else if(!password){
    return errorMsg('密码不能为空!!!')
  }
  return async dispath =>{
    //发送注册的异步ajax请求
    const response = await reqLogin(user)
    const result = response.data
    if(result.code===0){//成功
      //分发授权成功的同步action
      dispath(authSuccess(result.data))
    }else{//失败
      //分发错误提示信息的同步action
      dispath(errorMsg(result.msg))
    }
  }
}

//更新用户信息的异步action
export const updateUser=(user) =>{
    return async dispatch =>{
      const response =await reqUpdateUser(user)
      const result = response.data
      if(result.code===0){//更新成功
        dispatch(receiveUser(result.data))
      }else{//更新失败
        dispatch(resetUser(result.msg))
      }
    }
}

//获取用户信息的异步action
export const getUser = ()=>{
  return async dispath=>{
    const response = await reqUser()
    const result = response.data
    if(result.code===0){//成功
      dispath(receiveUser(result.data))
    }else{//失败
      dispath(resetUser(result.msg))
    }
  }
}