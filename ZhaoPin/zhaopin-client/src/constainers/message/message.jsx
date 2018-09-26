//消息列表组件路由
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List, Badge} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
/*
  对chatMsgs按chat_id进行分组,并得到每个组的lastMsg组成的数组
  1.找出每个聊天的lastMsg,并用一个对象容器来保存{chat_id:lastMsg}
  2.得到所有的lastMsg的数组
  3.对数组进行排序(按creat_time降序)
*/
function getLastMsgs(chatMsgs,userid) {
  // 1.找出每个聊天的lastMsg,并用一个对象容器来保存{chat_id:lastMsg}
 const lastMsgObjs ={}
 chatMsgs.forEach(msg=>{
   //对msg进行个体的统计
   if(msg.to===userid && !msg.read){
     msg.unReadCount=1
   }else{
     msg.unReadCount=0
   }

   //得到msg的聊天标识id
   const chatId = msg.chat_id
   //获取以保存的当前组件的lastMsg
   //根据获得的chatId
   // 将与其对应的对象里面的值封装成对象赋值给lastMsgObjs然后在封装成对象赋值给lastMsgs
   let lastMsg = lastMsgObjs[chatId]
   //没有
   if(!lastMsg){  //当前msg就是所在组的lastMsg
     lastMsgObjs[chatId] = msg
   }else{//有
     //累加unReadCount = 已经统计的+当前msg的
     const unReadCount =lastMsg.unReadCount +msg.unReadCount
     //如果msg比lastMsg晚,就将msg保存为lastMsg
     if(msg.create_time>lastMsg.create_time){
       lastMsgObjs[chatId] = msg
     }
     //将unReadCount保存在最新的msg上
     lastMsgObjs[chatId].unReadCount = unReadCount
   }
 })
  // 2.得到所有的lastMsg的数组
  const lastMsgs = Object.values(lastMsgObjs)
  // 3.对数组进行排序(按creat_time降序)
  lastMsgs.sort(function (m1,m2) {//如果结果小与0,将m1放在前面,如果结果为0,不变,如果结果大于0,将m2放在前面
    return m2.create_time-m1.create_time
  })
  return lastMsgs
}

class Message extends Component {
  render() {
    const {user} = this.props
    const {users,chatMsgs} = this.props.chat
    //对chatMsgs按chat_id进行分组
    const lastMsg = getLastMsgs(chatMsgs,user._id)

    return (
      <List style={{marginTop:50,marginBottom:50}}>
        {
          lastMsg.map(msg=>{
            //获取目标用户id    如果msg.to意味着是发给我 所以msg.to就是目标id
            const targetUserId = msg.to===user._id?msg.from:msg.to
            //获取目标用户信息
            const targetUser = users[targetUserId]
            return (
              <Item
                key={msg._id}
                extra={<Badge text={msg.unReadCount}/>}
                thumb={require(`../../assets/images/${targetUser.header}.png`)}
                arrow='horizontal'
                onClick={()=>this.props.history.push(`/chat/${targetUserId}`)}
              >
                {targetUser.username}
                <Brief>{msg.content}</Brief>
              </Item>
            )
          })
        }
      </List>
    )
  }
}
export default connect(
  state=>({user:state.user,chat:state.chat}),
  {}
)(Message)