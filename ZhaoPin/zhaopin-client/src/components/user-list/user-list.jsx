//userlist组件路由
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'


const Header=Card.Header
const Body = Card.Body
class UserList extends Component{
  static propTypes={
    userList:PropTypes.array.isRequired
  }
  render(){
    const {userList} = this.props
    return(
      <WingBlank style={{marginBottom:50,marginTop:50}}>
        <QueueAnim type='scale' delay={20} >
          {
            userList.map(user=>(
              <div key={user._id}>
                <WhiteSpace/>
                <Card onClick={()=>this.props.history.push(`/Chat/${user._id}`)}>
                  <Header
                    thumb={user.header?require(`../../assets/images/${user.header}.png`):null}
                    extra={user.username}
                  />
                  <Body>
                  <div>姓名:{user.post}</div>
                  {user.company ? <div>联系方式:{user.company}</div> : null}
                  {user.salary ? <div>地址:{user.salary}</div> : null}
                  <div>个人介绍:{user.info}</div>
                  </Body>
                </Card>
              </div>
            ))
          }
        </QueueAnim>
      </WingBlank>
    )
  }
}
export default withRouter(UserList)