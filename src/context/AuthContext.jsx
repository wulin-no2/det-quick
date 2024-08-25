
import React, { createContext, useContext, useState, useEffect } from 'react';
import { pubSub } from '../utils/pubSub';
import globalSettingsConfig from '../globalSettingsConfig';
import { requestUpdateNewToken } from '../api/Profile/userApiService';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 更新变量名称
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log("authTokens==888888=", );


    // 尝试从 localStorage 获取令牌
    const tokens = localStorage.getItem(globalSettingsConfig.localStorageKeys.AUTH_TOKEN);
    if (tokens) {
      console.log("authTokens==7777788=", );

      const parsedTokens = JSON.parse(tokens);
      // 假设我们有一个方法来验证令牌是否过期
      if (parsedTokens && !isTokenExpired(parsedTokens.expiresAt)) {
        setAuthTokens(parsedTokens);
        setIsLoggedIn(true);  // 更新登录状态为true
        console.log("authTokens==5555588=", );
        setLoading(false);  // 设置加载完成


       
      } else{
        handleTokenRefresh();

        // setIsLoggedIn(false);  // 更新登录状态为true
        // setLoading(false);  // 设置加载完成
      }
    }else{
      console.log("authTokens==66666688=", );

      setIsLoggedIn(false);  // 更新登录状态为true
      setLoading(false);  // 设置加载完成


    }


  }, []);

  const handleTokenRefresh = async () => {
    try {
      setLoading(true);  // 设置加载完成

      // 调用刷新令牌的 API
      const response = await requestUpdateNewToken();
      if(response.success){
        if (response.data) {
          // 更新本地存储的accessToken。
          localStorage.setItem(globalSettingsConfig.localStorageKeys.AUTH_TOKEN, JSON.stringify({
            accessToken: response.data.accessToken,
            expiresAt: response.data.expiresAt // 保存令牌过期时间
          }));
          setIsLoggedIn(true);  // 更新登录状态为false

        }



      }else{
        setIsLoggedIn(false);  // 更新登录状态为false

      }

    

      // setLoading(false); // 刷新成功，加载完成
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);

    } catch (error) {
      console.error('Failed to refresh token', error);
      logout(); // 刷新失败，重定向到登录
    } finally {
      setLoading(false);  // 设置加载完成
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false); // 无论成功或失败，都停止 loading
    }
  };

  // 登出逻辑
  const logout = () => {
    localStorage.removeItem(globalSettingsConfig.localStorageKeys.AUTH_TOKEN);
    setAuthTokens(null);
    setIsLoggedIn(false);  // 更新登录状态为false
    setLoading(false);  // 设置加载完成


  };

  // 登入逻辑，通常是在登录成功后调用
  const login = (newTokens) => {
    localStorage.setItem(globalSettingsConfig.localStorageKeys.AUTH_TOKEN, JSON.stringify(newTokens));
    setAuthTokens(newTokens);
    setIsLoggedIn(true);  // 更新登录状态为true

  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens,isLoggedIn,setIsLoggedIn, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

// 简单的函数检查 accessToken 是否过期
function isTokenExpired(expiresAt) {
  // 将expiresAt转换为JavaScript的Date对象
  const expirationDate = new Date(expiresAt);

  // 获取当前时间
  const currentDate = new Date();

  // 比较当前时间和过期时间
  return expirationDate <= currentDate;
}