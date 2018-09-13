// 主组件路由
import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {NavBar} from 'antd-mobile'

import {getRedirectTo} from '../../utils'
import {getUser} from "../../redux/actions";
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Personal from '../personal/personal'
import NavFooter from '../../components/nav-footer/nav-footer'


class Main extends Component{
  //给组件对象添加属性
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: ' 大神列表',
      icon: 'dashen',
      text: ' 大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: ' 老板列表',
      icon: 'laoban',
      text: ' 老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: ' 消息列表',
      icon: 'message',
      text: ' 消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: ' 用户中心',
      icon: 'personal',
      text: ' 个人',
    }
  ]

  componentDidMount(){
    //登陆过(cookie中有userid),但没有登录(redux管理的user中没有_id) 发送请求获取对应的user
    const userid = Cookies.get('userid')
    const {_id} = this.props.user
    if(userid && !_id){
      //发送异步请求,获取user
      //console.log('发送ajax请求获取user');
      this.props.getUser()
    }
  }
  render(){
    //读取cookie中的userid
    const userid = Cookies.get('userid')
    //如果没有,自动重定向到登录界面
    if(!userid){
      return <Redirect to='/login'/>
    }
    //如果有,读取redux中的user状态
    const {user} = this.props
    //如果user没有_id,返回null(不做任何显示)
      if(!user._id){
        return null
      }else{
        //如果有_id,显示对应的界面
        //根据user的type和header来计算出一个重定向的路由路径,并自动重定向
        let path = this.props.location.pathname
        if(path==='/'){
          //得到一个重定向的路径
          path=getRedirectTo(user.type,user.header)
          return <Redirect to={path}/>
        }
      }

    const {navList} = this
    const path = this.props.location.pathname //请求的路径
    const currentNav = navList.find(nav=>nav.path===path)//得到当前你的nav,可能没有
      if(currentNav){
        //决定那个列表需要被隐藏
        if(user.type==='laoban'){//隐藏第二个
          navList[1].hide=true
        }else{//隐藏第一个
          navList[0].hide=true
        }
      }
    return(
      <div>
        {currentNav?<NavBar>{currentNav.title}</NavBar>:null}
        <Switch>
          {
            navList.map(nav=> <Route path={nav.path} component={nav.component}/>)
          }
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
        </Switch>
        {currentNav?<NavFooter navList={navList}/>:null}
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {getUser}
)(Main);

/*
1.实现自动登录
  1.componentDisMount()
    登陆过(cookie中有userid),但没有登录(redux管理的user中没有_id) 发送请求获取对应的user
  2.render()
    1).如果cookie中没有userid,直接重定向到login界面
    2).判断redux管理的user中是否有_id,如果没有,暂时不做任何显示
    3).如果有,说明当前已经登录,显示对应界面
    4).如果请求根路径: 根据user的type和header来计算出一个重定向的路由路径,并自动重定向
*/