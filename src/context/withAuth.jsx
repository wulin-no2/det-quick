// copied from Zain. haven't used it

import { Navigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext"; // 确保路径正确

const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { isLoggedIn } = useAuthContext(); // 从 AuthContext 获取 isLoggedIn

    if (!isLoggedIn) {
      // 如果用户未登录，重定向到登录页面
      return <Navigate to="/login" replace />;
    }

    // 用户已登录，渲染目标组件
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};

export default withAuth;








