
import axios from "axios";
import globalSettingsConfig  from "../globalSettingsConfig";  

// Set default Authorization header
const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTQ1NTgwMC0zOWRkLTQyZjItOWNiNS1kNTIxMzkyZDRkYmQiLCJpYXQiOjE3MjI0MDU4MTQsImV4cCI6MTcyMjQ1OTgxNH0.URi_xxgZx1EqXCvi3Spy-gdWkQJNm71kPvbfRiOHr5vbyE2IvPVCZg6kc1CcEnnTWR_MT6DNlIY18uGS_U3Mwg';
localStorage.setItem('accessToken', accessToken);

const token = localStorage.getItem('accessToken');

const ApiClient = axios.create({
  // baseURL: 'http://54.159.192.226:8080',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}` // Set the Authorization header
  }
});
export default ApiClient;

ApiClient.interceptors.request.use(
  (config) => {
    // 列出不需要认证令牌的接口
    const noAuthRequired = ["/login", "/register", "/verify", "/sendVerifyCode"];

    // 检查当前请求的URL是否在这个列表中
    const requiresAuth = !noAuthRequired.some((path) =>
      config.url.includes(path)
    );

    // 如果不在列表中，则添加认证令牌
    if (requiresAuth) {
      const accessToken = localStorage.getItem(
        globalSettingsConfig.localStorageKeys.ACCESS_TOKEN
      );
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    //用于在发送请求之前处理请求，例如设置请求头、添加认证信息等。
    // 这里可以添加认证令牌等
    return config;
  },
  (error) => {
    //不用于处理发送请求时的错误。具体请求发出的错误，在具体每个请求的地方做处理，用try catch
    return Promise.reject(error);
  }
);