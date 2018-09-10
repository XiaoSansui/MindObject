// 注册组件路由
import React,{Component} from 'react';
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile';
import Logo from '../../components/logo/logo'


const ListItem = List.Item;

class Register extends Component{
  state={
    username:'', //用户名
    password:'', //密码
    password2:'', //确认密码
    type:'dashen', //用户类型
  }
  register =()=>{
    console.log(this.state);
  }
  //切换页面
  toLogin=()=>{
    this.props.history.replace('/login')
  }
  //处理输入数据的改变:更新对应的状态
  handleChnage=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  render(){
    let {type} =this.state;
    return(
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem onChange={val => {this.handleChnage('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' onChange={val => {this.handleChnage('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' onChange={val => {this.handleChnage('password2',val)}}>确认密码:</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型:</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => {this.handleChnage('type','dashen')}}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => {this.handleChnage('type','laoban')}}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default Register;
