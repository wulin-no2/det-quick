
import axios from "axios";
import globalSettingsConfig  from "../globalSettingsConfig";  
import { pubSub } from "../utils/pubSub";
// Set default Authorization header
// const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTQ1NTgwMC0zOWRkLTQyZjItOWNiNS1kNTIxMzkyZDRkYmQiLCJpYXQiOjE3MjI0MDU4MTQsImV4cCI6MTcyMjQ1OTgxNH0.URi_xxgZx1EqXCvi3Spy-gdWkQJNm71kPvbfRiOHr5vbyE2IvPVCZg6kc1CcEnnTWR_MT6DNlIY18uGS_U3Mwg';
// localStorage.setItem('accessToken', accessToken);

// const token = localStorage.getItem('accessToken');

const ApiClient = axios.create({
  // baseURL: 'http://54.159.192.226:8080',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}` // Set the Authorization header
  }
});
export default ApiClient;

// 列出不需要认证令牌的接口
const noAuthRequired = ["/login", "/register", "/verify", "/sendVerifyCode","/user/exist","/questions/list","/api/public/updateNewToken"];


ApiClient.interceptors.request.use(
  (config) => {
    const requiresAuth = !noAuthRequired.some(path => config.url.includes(path));
    if (requiresAuth) {
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      if (authTokens && authTokens.accessToken) {
        config.headers.Authorization = `Bearer ${authTokens.accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    //不用于处理发送请求时的错误。具体请求发出的错误，在具体每个请求的地方做处理，用try catch
    return Promise.reject(error);
  }
);

ApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 检查是否是登录相关的请求
    if (originalRequest.url.includes("/login")) {
      // 对于登录请求，直接返回错误，不进行任何重定向或刷新逻辑
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 避免无限循环
      try {
        // await refreshAccessToken(); // 尝试刷新accessToken
        // return ApiClient(originalRequest); // 使用新的accessToken重新发送失败的请求

        const tokenRefreshedResult = await refreshAccessToken(); // 尝试刷新令牌
        if (tokenRefreshedResult) {
          pubSub.publish(globalSettingsConfig.event.AUTH_LOGIN_SUCCESS, { loggedIn: true });

          return ApiClient(originalRequest); // 令牌刷新成功，重新发送原始请求
        }

      } catch (refreshError) {
        // 如果刷新accessToken失败，可能是refreshToken无效
        redirectToLogin();
        return Promise.reject(refreshError);
      }
    } else if (error.response.status === 403) {
      // accessToken无效或refreshToken过期/无效
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  const localRefreshToken = authTokens.refreshToken;



    try {
      const params = {
        refreshToken: localRefreshToken,
      };
      const result = await ApiClient.post("/api/public/updateNewToken", params);
      const response = result.data;
    if (response.success) {
      if (response.data) {
        // 更新本地存储的accessToken和refreshToken
        localStorage.setItem('authTokens', JSON.stringify({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          expiresAt: response.data.expiresAt // 保存令牌过期时间
        }));
        return true; // 刷新成功，返回 true

      }
    } else {
      throw new Error("Unable to refresh token");
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error; // 重新抛出异常，以便调用者处理（比如重定向到登录页）
  }
}

function redirectToLogin() {

  pubSub.publish(globalSettingsConfig.event.AUTH_LOGIN_FAILURE, { loggedIn: false });

  // 实现重定向到登录页的逻辑
  console.log("Redirecting to login page...");
  // window.location.href = '/login';
}


