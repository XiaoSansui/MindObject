/*
  直接更新state 的多个方法对象
*/
import {
  LOGINMSG,
  REGISTERMSG,
} from './mutation-type'

export default {
  [LOGINMSG](state,{result}){
    state.loginMsg = result
  },
  [REGISTERMSG](state,{result}){
    state.registerMsg = result
  },

}
