
import axios from "axios";

const ApiClient = axios.create({
  baseURL: 'http://54.159.192.226:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default ApiClient;
// ApiClient.interceptors.request.use(
//   (config) => {
//     // 获取token
//     const token = localStorage.getItem("accessToken"); // 或者您存储token的方式
//     // if (token) {
//     //   // 如果token存在，则附加到请求头中，使用'Authentication'作为键名
//     //   // config.headers['Authentication'] = `Bearer ${token}`;
//     //   config.headers["Authentication"] = `${token}`;
//     // }
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`; //the standard header name for bearer tokens is Authorization
//     }
    
//     // 返回配置的请求
//     return config;
//   },
//   (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// // 响应拦截器
// ApiClient.interceptors.response.use(
//   (response) => {
//     // 第一情况：数据返回正常，且code为0
//     const businessCode = response.data.code;
//     switch (businessCode) {
//       case 0:
//         // Business logic is successful, return the data part
//         return response.data.data;
//       case 20101:
//       case 20102:
//         // Handle the specific business logic error code
//         // ... (e.g., prompt user to log in)
//         break;
//       // Handle other business logic error codes
//       default:
//         // Handle unknown business logic error
//         // ...
//         break;
//     }
//     // 创建一个错误实例，包含从后端返回的错误代码和消息
//     const error = new Error(response.data.msg || "Unknown error");
//     error.code = response.data.code;
//     error.data = response.data.data; // 这里可以包含后端返回的任何额外数据
//     return Promise.reject(error); // 抛出错误，以便catch可以捕获
//   },
//   (error) => {
//     // 第三情况：HTTP状态码错误处理
//     if (error.response) {
//       // 服务器返回了错误状态码
//       const path = error.response.config.url;
//       const { status, data } = error.response;
//       // 创建一个错误实例，包含状态码、后端返回的错误以及请求的路径
//       const httpError = new Error(data.error || "HTTP error");
//       httpError.status = status;
//       httpError.path = path;
//       return Promise.reject(httpError); // 抛出HTTP错误，以便catch可以捕获
//     } else {
//       // 处理网络连接错误或请求被阻止的情况
//       const netError = new Error(error.message || "Network Error");
//       return Promise.reject(netError); // 抛出网络错误，以便catch可以捕获
//     }
//   }
// );


