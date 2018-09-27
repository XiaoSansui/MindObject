//nav底部组件路由
import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

function getSumMsgs(chatMsgs,userid) {
  // 1.找出每个聊天的lastMsg,并用一个对象容器来保存{chat_id:lastMsg}
  const sumMsgObjs ={}
  chatMsgs.forEach(msg=>{
    //对msg进行个体的统计
    if(msg.to===userid && !msg.read){
      msg.unReadCount=1
    }else{
      msg.unReadCount=0
    }
    const chatId = msg.chat_id
    let sumMsg = sumMsgObjs[chatId]
    //没有
    if(!sumMsg){
      sumMsgObjs[chatId] = msg
    }else{
      const unReadCount =sumMsg.unReadCount +msg.unReadCount
      if(msg.create_time>sumMsg.create_time){
        sumMsgObjs[chatId] = msg
      }
      sumMsgObjs[chatId].unReadCount = unReadCount
    }
  })
  const sumsMsgs = Object.values(sumMsgObjs)
  let msgNums = 0
  sumsMsgs.forEach(sum =>{
    if(!sum.read){
      msgNums += sum.unReadCount
    }
  })
  return msgNums
}

const Item = TabBar.Item
class NavFooter extends Component{
  static propTypes = {
    navList:PropTypes.array.isRequired
  }
  constructor(props){
    super(props)
    this.state = {unReadCount:0}
  }
  static contextTypes = {
    unReadCount:PropTypes.number
  }
  componentWillMount(){
    this.setState({unReadCount:this.context.unReadCount})
  }
 
  render(){
    //console.log(this.context);
    let {navList,chatMsgs,userid} = this.props
   // const {unReadCount} = this.state
    //过滤掉hide为true的列表
    navList=navList.filter(nav=>!nav.hide)
    const path = this.props.location.pathname
    let unReadCount = getSumMsgs(chatMsgs,userid)
    return(
      <TabBar>
        {
          navList.map((nav)=>(
            <Item key={nav.path}
                  badge={nav.path==='/message' ? (unReadCount>0?unReadCount:0):0}
                  title={nav.text}
                  icon={{uri:require(`./images/${nav.icon}.png`)}}
                  selectedIcon={{uri:require(`./images/${nav.icon}-selected.png`)}}
                  selected={path===nav.path}
                  onPress={()=>this.props.history.replace(nav.path)}
            />
          ))
        }
      </TabBar>
    )
  }
}

//向外暴露withRouter()包装的组件
//内部会向组件中传入一些路由组件特有的属性 : history/location/math
export default withRouter(NavFooter)
