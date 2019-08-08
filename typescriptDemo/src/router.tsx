import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/nav";
import Todo from "./components/todo";
import TsTest1 from "./components/tsTest/test1";
import TsTest2 from "./components/tsTest/test2";
import TsTest3 from "./components/tsTest/test3";

// 路由配置
const routes = [
  {
    path: "/",
    exact: true,
    component: Nav
  },
  {
    path: "/tstest1",
    component: TsTest1
  },
  {
    path: "/tstest2",
    component: TsTest2
  },
  {
    path: "/tstest3",
    component: TsTest3
  },
  {
    path: "/todo",
    component: Todo,
    // 子路由
    routes: [
      //   {
      //     path: "/tacos/cart",
      //     component: Cart
      //   }
    ]
  }
];

// 包装路由
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // 传递子路由保持嵌套
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

// 生成Router结构
function RouteConfig() {
  return (
    <Router>
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfig;
