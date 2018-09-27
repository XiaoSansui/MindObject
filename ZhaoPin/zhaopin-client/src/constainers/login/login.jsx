// 登录组件路由
import React,{Component} from 'react';
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile';
import Logo from '../../components/logo/logo'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'

class Login extends Component{
  state={
    username:'', //用户名
    password:'' //密码
  }
  login =()=>{
    this.props.login(this.state)
  }
  toRegister=()=>{
    //切换页面
    this.props.history.push('/register')
  }
  handleChnage=(name,val)=>{
    //更新状态
    this.setState({
      [name]:val
    })
  }
  render(){
    const {msg,redirectTo} = this.props.user;
    if(redirectTo){
      return  <Redirect to={redirectTo}/>
    }
    return(
      <div>
        <NavBar>W&nbsp;e&nbsp;C&nbsp;h&nbsp;a&nbsp;t</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg?<div className='error-msg'>{msg}</div>:null}
            <WhiteSpace/>
            <InputItem onChange={val => {this.handleChnage('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' onChange={val => {this.handleChnage('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {login}
)(Login)
