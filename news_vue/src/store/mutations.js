/*
  直接更新state 的多个方法对象
*/

import {
  RECEIVE_USERS,
  RECEIVE_USER_LIST,
  REVISE_USER,
  ADD_USER,
  RECEIVE_NEWS_LIST,
  RECEIVE_NEWS_MESSAGE,
  RECEIVE_NEWS_CLASSIFY,
  ADD_NEWS_CLASSIFY,
  SAVE_USERS
} from './mutation-type'

export default {
  [RECEIVE_USERS](state,{result}){
    state.users=result
  },
  [RECEIVE_USER_LIST](state,{result}){
    state.userList=result
  },
  [REVISE_USER](state,{result}){
    state.reviseUser=result
  },
  [ADD_USER](state,{result}){
    state.addUser=result
  },
  [RECEIVE_NEWS_LIST](state,{result}){
    state.NewsList=result
  },
  [RECEIVE_NEWS_MESSAGE](state,{result}){
    state.NewsMessage=result
  },
  [RECEIVE_NEWS_CLASSIFY](state,{result}){
    state.newsClassify=result
  },
  [ADD_NEWS_CLASSIFY](state,{result}){
    state.classifyMessage=result
  },
  [SAVE_USERS](state,{result}){
    state.users=result
  },
}
