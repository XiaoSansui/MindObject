//聊天界面路由
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, List, InputItem,Grid,Icon} from 'antd-mobile'
import {sendMsg,readMsg} from '../../redux/actions'

const Item = List.Item

class Chat extends Component{

  state = {
    content:'',
    isShow:false //表情列表是否显示
  }
  componentWillMount(){
    const emojis = [
      '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
      '😋','😎','😍','😘','😗','😙','😚','😏','😮','🤗',
      '🤨','😐','😑','😶','🙄','😏','😣','😥','😮','😴',
      '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
      '😋','😎','😍','😘','😗','😙','😚','😏','😮','🤗',
      '🤨','😐','😑','😶','🙄','😏','😣','😥','😮','😴'
      ,'😣','😥','😮','😴'
    ]
    this.emojis = emojis.map(emoji =>({text:emoji}))
  }
  componentDidMount(){
    //初始显示列表
    window.scrollTo(0,document.body.scrollHeight)
  }
  componentDidUpdate(){
    //更新显示列表
    window.scrollTo(0,document.body.scrollHeight)
  }
  componentWillUnmount(){ //在退出之前
    //发请求更新未读消息的状态
    const from = this.props.match.params.userid
    const to =this.props.user._id
    this.props.readMsg(from,to)
  }
  handleSend =()=>{
    //收集数据
    const from = this.props.user._id
    const to = this.props.match.params.userid
    const content = this.state.content.trim()
    //发送请求(发消息)
    if(content){
      this.props.sendMsg({from,to,content})
    }
    //清除输入框内容
    this.setState({content:'',isShow:false})

  }
  toggleShow=()=>{
    const isShow = !this.state.isShow
    this.setState({isShow})
    if(isShow) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 0)
    }
  }

  render(){
    const {user} =this.props
    const {users,chatMsgs} = this.props.chat

    //计算当前聊天的chatID
    const meId = user._id
    //如果还没有得到数据,不作任何显示
    if(!users[meId]){
      return null
    }
    const targetId = this.props.match.params.userid
    const chatId = [meId,targetId].sort().join('_')

    //对chatMsgs进行过滤
    const msgs =chatMsgs.filter(msg=>msg.chat_id===chatId)
    //得到目标用户的header图片对象
    const targetHeader = users[targetId].header
    const headerIcon = targetHeader?require(`../../assets/images/${targetHeader}.png`):null;
    return(
      <div id='chat-page'>
        <NavBar icon={<Icon type='left'/>}
                onLeftClick={()=>this.props.history.goBack()}
                className="header-nav"
        >
          {users[targetId].username}
        </NavBar>
        <List style={{marginTop:50,marginBottom:50}}>
          {
            msgs.map(msg=>{
              if(targetId===msg.from){ //对方发给我的
                return (
                  <Item
                    key={msg._id}
                    thumb={headerIcon}
                  >
                    {msg.content}
                  </Item>
                )
              }else{    //我发给对方的
                return (
                  <Item
                    key={msg._id}
                    className='chat-me'
                    extra='我'
                  >
                    {msg.content}
                  </Item>
                )
              }
            })
          }
        </List>
        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            value={this.state.content}
            onChange={val=>{
              this.setState({content:val})
              this.keyPress=(e)=>{
                if (e.which !== 13) return
                this.handleSend()
              }
            }}
            onFocus={()=>this.setState({isShow:false})}
            onKeyPress={this.keyPress}
            extra={
             <span>
                <span className='emoji-top' onClick={this.toggleShow}>&nbsp;😃&nbsp;&nbsp;&nbsp;</span>
                <span onClick={this.handleSend}>发送</span>
             </span>
            }
          />
          {
            this.state.isShow?(
              <Grid
                data={this.emojis}
                columnNum={8}
                carouselMaxRow={4}
                isCarousel={true}
                onClick={(item)=>{
                  this.setState({
                    content:this.state.content +item.text
                  })
                }}
              />
            ):null
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({user:state.user,chat:state.chat}),
  {sendMsg,readMsg}
)(Chat)