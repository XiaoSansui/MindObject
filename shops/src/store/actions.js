/*
  通过mutation间接更新state 的多个方法对象
*/
import {
  reqLogin,
  reqRegister
} from '../api/index'
import {
  LOGINMSG,
  REGISTERMSG
} from './mutation-type'
import $ from '../../static/jquery-1.11.3.min'
export default {
  //登录
  async login({commit},user){
    let {userId,password} = user
    const result = await reqLogin(userId,password)
    commit(LOGINMSG,{result})
  },

  async register({commit},user){
    let {shopName,userId,password,userName,brithday,phone,idCard} = user
    //执行异步ajax请求
    brithday = brithday.toString();
    const result = await reqRegister({shopName,userId,password,userName,brithday,phone,idCard})
    commit(REGISTERMSG,{result})
    console.log( result );
  }

}
