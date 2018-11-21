/*
  通过mutation间接更新state 的多个方法对象
*/
import {
  reqHomeContent,
  reqViedeoItems,
  reqLableItems,
  reqArticleItems,
  reqSoftwareItems,
  reqSearchContent
} from '../api/index'
import {
  HOMECONTENT,
  VIDEOITEMS,
  LABLEITEMS,
  ARTICLE,
  SOFTWARE,
  SEARCHITEMS,
  SEARCHCONTENT
} from './mutation-type'

export default {

  //异步获取首页主体内容
  async getHomeContent({commit},page){
    const result = await reqHomeContent(page);
    const data = result.extend.pages
    commit(HOMECONTENT,{data})
  },

  //异步获取视频列表
  async getVideoItems({commit}){
    const result = await reqViedeoItems();
    commit(VIDEOITEMS,{result})
  },

  //异步获取文章列表
  async getArticleItems({commit}){
    const result = await reqArticleItems();
    commit(ARTICLE,{result})
  },

  //异步获取软件列表
  async getSoftwareItems({commit}){
    const result = await reqSoftwareItems();
    commit(SOFTWARE,{result})
  },

  //异步获取热门标签
  async getLableItems({commit}){
    const result = await reqLableItems();
    commit(LABLEITEMS,{result})
  },
  //异步搜索内容
  async getSearchContent({commit},Search_field){
    const newArr = await reqSearchContent(Search_field);
    commit(SEARCHCONTENT,{newArr})
  },
  //异步保存搜索id
  async getSearchItems({commit,state},id){
      let arr=[];
      let newArr= [];
      arr = arr.concat(state.videoItems,state.articleItems,state.softwareItems)
      arr.forEach(item=>{
        if(item.id===id){
          newArr.push(item)
        }
      })
    commit(SEARCHITEMS,{newArr})
  },

}
