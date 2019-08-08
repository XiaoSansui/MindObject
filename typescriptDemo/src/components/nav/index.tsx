import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

export default function Nav() {
  return (
    <div className='nav'>
      <Link to="/todo">Todo</Link>
      <br/>
      <Link to="/tstest1">变量、函数</Link>
      <br/>
      <Link to="/tstest2">引用类型</Link>
      <br/>
      <Link to="/tstest3">面向对象编程</Link>
      <br/>
    </div>
  );
}
