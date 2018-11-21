/*
  包含N个接口请求函数的模块
*/
import ajax from './ajax'


//获取首页主体内容
export const reqHomeContent =(page)=>ajax('http://47.107.83.220/home/resouceContent/ResouceContentIndex',{page})
//获取热门标签
export const reqLableItems =()=>ajax('http://47.107.83.220/home/resouceLable/ResouceLableIndex')
//获取视频列表
export const reqViedeoItems =()=>ajax('http://47.107.83.220/home/resouceContent/QueryDefaultVideoList')
//获取文章列表
export const reqArticleItems =()=>ajax('http://47.107.83.220/home/resouceContent/QueryDefaultArticle')
//获取软件列表
export const reqSoftwareItems =()=>ajax('http://47.107.83.220/home/resouceContent/QueryDefaultSoftList')
//获取搜索内容
export const reqSearchContent =(Search_field)=>ajax('http://47.107.83.220/home/resouceContent/seek',{Search_field})
