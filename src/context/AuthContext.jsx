// copied from Zain
// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginApi, logoutApi } from "../api/Profile/login";
import { useNavigate } from "react-router-dom";
import { getUserDetailApi } from "../api/Profile/user";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null); // 用来保存认证状态和用户信息
  const isLoggedIn = auth !== null;
  const [userDetails, setUserDetails] = useState(null); // 新状态用于保存用户详细信息

  const loginAuth = async (phone, code, channel) => {
    const result = await loginApi(phone, code, channel);
    if (result.success) {
      setAuth(result.data); // 更新状态
      localStorage.setItem("accessToken", result.data.accessToken); // 存储token等数据
      localStorage.setItem("refreshToken", result.data.refreshToken);
      // ... 可能还需要存储其他信息
    }
    return result; // 返回结果给调用者
  };

  const userDetailsAuth = async () => {
    try {
      const result = await getUserDetailApi(); //
      if (result.success) {
        setUserDetails(result.data); // 更新用户详细信息状态
      }
      return result;
    } catch (error) {
      console.error("Failed to UserDetailsAuth details:", error);

      return { success: false, error }; // 捕获异常时返回错误信息
    }
  };

  // ...其他context逻辑...
  const logoutAuth = async () => {
    const result = await logoutApi();
    if (result.success) {
      setAuth(null); // 清除状态
      setUserDetails(null); // 更新用户详细信息状态

      localStorage.removeItem("accessToken"); // 清除存储的token等数据
      localStorage.removeItem("refreshToken");
      // ... 可能还需要清除其他信息
    }
    return result;
  };
  useEffect(() => {
    // 尝试从本地存储中恢复状态
    const storedAuth = localStorage.getItem("accessToken");
    const storedRefresh = localStorage.getItem("refreshToken");
    // 假设我们可以根据存储的token决定用户是否登录（这里可以添加更复杂的逻辑）
    if (storedAuth && storedRefresh) {
      // 首先设置认证状态
      setAuth({ accessToken: storedAuth, refreshToken: storedRefresh });

      // 然后尝试获取用户详细信息
      userDetailsAuth()
        .then((result) => {
          if (result.success) {
            // 如果成功，设置用户详细信息状态
            setUserDetails(result.data);
          } else {
            // 如果无法恢复用户信息，则可能需要处理错误
            console.error("Unable to fetch user details:", result.error);
            // 清除本地存储的认证信息
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            // 清除应用中的认证状态
            setAuth(null);
            setUserDetails(null);
            // 可以添加更多的错误处理逻辑，如显示错误消息或重定向到登录页面
          }
        })
        .catch((error) => {
          // 处理在请求过程中发生的任何错误
          console.error(
            "An error occurred while fetching user details:",
            error
          );
          // 清除本地存储和应用状态
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setAuth(null);
          setUserDetails(null);
          // 处理错误，如显示通知或重定向
        });
    }
  }, []);

  const value = {
    auth,
    setAuth,
    isLoggedIn,
    loginAuth,
    userDetails,
    userDetailsAuth,
    setUserDetails,
    logoutAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
