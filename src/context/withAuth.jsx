// copied from Zain
import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// 高阶组件的实现
const withAuth = (Component) => {
  // 返回一个新组件
  return (props) => {
    const { isLoggedIn } = useAuth(); // 从 AuthContext 获取 isLoggedIn

    if (!isLoggedIn) {
      // 如果用户未登录，重定向到登录页面
      return <Navigate to="/login" replace />;
    }

    // 用户已登录，渲染目标组件
    return <Component {...props} />;
  };
};

export default withAuth;
