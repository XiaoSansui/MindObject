/*
  直接更新state 的多个方法对象
*/
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
  [HOMECONTENT](state,{data}){
    state.homeContent = data
  },
  [VIDEOITEMS](state,{result}){
    state.videoItems = result
  },
  [LABLEITEMS](state,{result}){
    state.lableItems = result
  },
  [ARTICLE](state,{result}){
    state.articleItems = result
  },
  [SOFTWARE](state,{result}){
    state.softwareItems = result
  },
  [SEARCHITEMS](state,{newArr}){
    state.searchItems = newArr
  },
  [SEARCHCONTENT](state,{newArr}){
    state.searchItems = newArr
  },
}
