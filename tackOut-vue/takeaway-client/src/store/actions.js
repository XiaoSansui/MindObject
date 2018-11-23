/*
  通过mutation间接更新state 的多个方法对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_ASSESS,
  RECEIVE_FOODS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqLogout,
  reqShops,
  reqUserInfo,
  reqShopAssess,
  reqShopInfo,
  reqShopFoods,
  reqSearchShop
} from '../api'

export default {
  //  异步获取地址
  async getAddress({commit, state}) {
  //  发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //  提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品信息列表
  async getCategorys({commit}){
    //发送异步ajax请求
    const result =await reqFoodCategorys()
    //提交一个mutation
    if (result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商户信息
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude,latitude} = state
    const result =await reqShops(longitude,latitude)
    //提交一个mutation
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //  同步保存用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //  异步获取用户信息
  async getUserInfo({ commit}) {
    const result = await reqUserInfo()
    if (result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  //  异步登出
  async logOut({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopAssess({commit }, callback) {
    const result = await reqShopAssess()
    if (result.code === 0) {
      const assess = result.data
      commit(RECEIVE_ASSESS, {assess})
      callback && callback()
    }

  },
  // 异步获取商家商品列表
  async getShopFoods ({commit}, callback) {
    const result = await reqShopFoods()
    if (result.code === 0) {
      const foods = result.data
      commit(RECEIVE_FOODS, {foods})
      callback && callback()
    }
  },

  //  同步更新food 中的count
  updateFoodCount({commit},{isAdd,food}){
    if (isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //  同步清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  },

  //  异步获取搜索的商家列表
  async getSearchShops({commit,state},keyword) {

    const geohash = state.latitude+","+state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if(result.code===0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
}
