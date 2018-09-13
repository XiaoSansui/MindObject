//选择用户头像的UI组件
import React,{Component} from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component{
  static propTypes={
    setHeader:PropTypes.func.isRequired
  }
  state={
    icon:null //图片对象,默认为空
  }
  constructor(props) {
    super(props)
    //准备header头像列表数据
    this.haderList = []
    for (let i = 0; i < 20; i++) {
     this.haderList.push({
       icon:require(`./images/头像${i+1}.png`),
       test:'头像'+(i+1)
     })
    }
  }
  handeleClick=({icon,test})=>{
    this.setState({icon})
    this.props.setHeader(test)
  }
  render(){
    //头部界面
    const {icon} = this.state
    const listHeader= !icon?'请选择头像':(
      <div>
        已选择头像
        <img src={icon}/>
      </div>
    )
    return(
      <List renderHeader={()=>listHeader}>
        <Grid data={this.haderList} onClick={this.handeleClick} columnNum={5}/>
      </List>
    )
  }
}
