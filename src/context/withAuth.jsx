// copied from Zain. haven't used it

import { Navigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

// 高阶组件的实现
const withAuth = (Component) => {
  // 返回一个新组件
  return (props) => {
    const { isLoggedIn } = useAuthContext(); // 从 AuthContext 获取 isLoggedIn

    if (!isLoggedIn) {
      // 如果用户未登录，重定向到登录页面
      return <Navigate to="/login" replace />;
    }

    // 用户已登录，渲染目标组件
    return <Component {...props} />;
  };
};

export default withAuth;
