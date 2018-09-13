/*
能发送ajax请求的函数模块
函数返回值是promise对象
*/
import axios from 'axios';

export default function ajax(url,data={},type='GET') {
  if(type==='GET'){//发送GET请求
    //拼请求参数串
    //data:{username:tom,password:123}
    //dataStr:username=tom&password=123
    let dataStr='';
    Object.keys(data).forEach(key=>{
      dataStr += key + '=' + data[key] + '&'
    })
    if(dataStr){
      dataStr=dataStr.substring(0,dataStr.length-1)
    }
    //使用axios发送get请求
    return axios.get(url + '?' + dataStr)
  }else{//发送post请求
    //使用axios发post请求
    return axios.post(url,data)
  }
}
