/*a
  通过mutation间接更新state 的多个方法对象
*/
import {
  reqUsers,
  reqUserList,
  reviseUser,
  addUser,
  reqNewsList,
  reviseNews,
  reqClassify,
  reviseNewsClassify
} from '../api'
import {
  RECEIVE_USERS,
  RECEIVE_USER_LIST,
  REVISE_USER,
  ADD_USER,
  RECEIVE_NEWS_LIST,
  RECEIVE_NEWS_MESSAGE,
  RECEIVE_NEWS_CLASSIFY,
  ADD_NEWS_CLASSIFY,
  SAVE_USERS,
} from './mutation-type'


export default {
  //异步发送登录请求
  async getUsers({commit},{account,password,isSave,send}){
    const result = await reqUsers(account,password,isSave,send)
    if(result.valid===1){ //成功
      commit(RECEIVE_USERS,{result})
      commit(SAVE_USERS,{result})
      let loginInfo = {account,password,isSave,send}
      window.localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
      window.localStorage.setItem('users', JSON.stringify(result));
    }else{
      commit(RECEIVE_USERS,{result})
    }
  },

  //异步获取用户信息列表
  async getUserList({commit},{curPage,listrows}){
    const result = await reqUserList(curPage,listrows)
    if(result.valid  === 1){
      commit(RECEIVE_USER_LIST,{result})
    }
  },

  //异步修改用户信息
  async reviseUser({commit},user){
    const result = await reviseUser({...user})
    commit(REVISE_USER,{result})
  },

  //异步添加用户
  async addUser({commit},user){
    const result = await addUser({...user})
    commit(ADD_USER,{result})
  },

  //异步获取新闻列表
  async getNewsList({commit},{curPage,listrows}){
    const result = await reqNewsList(curPage,listrows)
    if(result.valid  === 1){
      commit(RECEIVE_NEWS_LIST,{result})
    }
  },

  //异步发布新闻
  async receiveNews({commit},news){
    const result = await reviseNews({...news})
    commit(RECEIVE_NEWS_MESSAGE,{result})
  },

  //异步获取新闻分类
  async getNewsClassify({commit},{curPage,listrows}){
    const result = await reqClassify(curPage,listrows)
    if(result.valid  === 1){
      commit(RECEIVE_NEWS_CLASSIFY,{result})
    }
  },

  //异步添加新闻分类
  //异步发布新闻
  async addNewsClassify({commit},news){
    const result = await reviseNewsClassify({...news})
    commit(ADD_NEWS_CLASSIFY,{result})
  },
}
