import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn,loading } = useAuth();
  const location = useLocation();
  
 // 如果正在加载中，不渲染任何内容，依靠全局 loading 来处理
 if (loading) {
  return null; // 不渲染内容，等待加载完成
}
  console.log("isLoggedIn==authTokens==",isLoggedIn);

  if (!isLoggedIn) {
    // 如果用户未登录，重定向到登录页面，并保存当前路径
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 如果用户已登录，渲染子组件
  return children;
}

export default ProtectedRoute;
