//个人中心组件路由
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Result,List,WhiteSpace,Button,Modal} from 'antd-mobile'
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'

const Item = List.Item
const Breif = Item.Brief
class Personal extends Component{
  logout=()=>{
    Modal.alert('退出','确认退出登录吗?',[
      {text:'取消'},
      {text:'确认',
        onPress:()=>{
          //清除cookie中的userid
          Cookies.remove('userid')
          //清除redux中管理的userid
          this.props.resetUser()
        }
      }
    ])
  }
  render(){
    const {header,username,post,salary,info,company} = this.props.user
    return(
      <div style={{marginBottom:50,marginTop:50}}>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} style={{width:50}} alt="header"/>}
          title={username}
          message={company}
        />
        <List renderHeader={()=>'相关信息'}>
          <Item multipleLine>
            <Breif>职位:{post}</Breif>
            <Breif>简介:{info}</Breif>
            {salary?<Breif>薪资:{salary}</Breif>:null}
          </Item>
        </List>
        <WhiteSpace/>
        <Button type="warning" onClick={this.logout}>退出登录</Button>
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {resetUser}
)(Personal)