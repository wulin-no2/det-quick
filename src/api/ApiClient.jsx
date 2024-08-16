
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

// 列出不需要认证令牌的接口
const noAuthRequired = ["/login", "/register", "/verify", "/sendVerifyCode","/user/exist","/questions/list"];


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