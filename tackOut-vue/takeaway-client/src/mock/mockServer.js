/*
  使用mockjs提供mock接口
*/
import Mock from 'mockjs'
import data from './data'

//返回foods 的接口
Mock.mock('/foods', {code:0, data:data.goods})

//返回assess 的接口
Mock.mock('/assess',{code:0, data:data.ratings})

//返回info 的接口
Mock.mock('/info',{code:0, data:data.info})

//不需要向外暴露任何东西
