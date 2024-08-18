// import { useContext, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import ApiClient from '../api/ApiClient'; // 确保这是ApiClient的正确路径
// import { useAuth } from "../context/AuthContext"

// const useConfigureApiClient = () => {
//     const { setAuthTokens } = useAuth(); // 使用 useAuth 来获取 setAuthTokens

//     // const navigate = useNavigate();

//     useEffect(() => {
//         const reqInterceptor = ApiClient.interceptors.request.use(config => {
//             const noAuthRequired = ["/login", "/register", "/verify", "/sendVerifyCode", "/user/exist", "/questions/list", "/api/public/updateNewToken"];
//             const requiresAuth = !noAuthRequired.some(path => config.url.includes(path));
//             const authTokens = JSON.parse(localStorage.getItem('authTokens'));

//             if (requiresAuth && authTokens && authTokens.accessToken) {
//                 config.headers.Authorization = `Bearer ${authTokens.accessToken}`;
//             }
//             return config;
//         });

//         const resInterceptor = ApiClient.interceptors.response.use(response => response, async (error) => {
//             const originalRequest = error.config;
//             if (!originalRequest._retry && error.response.status === 401) {
//                 originalRequest._retry = true;
//                 try {
//                     const refreshedTokens = await refreshAccessToken();
//                     if (refreshedTokens) {
//                         setAuthTokens(refreshedTokens);
//                         originalRequest.headers.Authorization = `Bearer ${refreshedTokens.accessToken}`;
//                         return ApiClient.request(originalRequest);
//                     }
//                 } catch (refreshError) {
//                     redirectToLogin(navigate);
//                 }
//             }
//             return Promise.reject(error);
//         });

//         return () => {
//             ApiClient.interceptors.request.eject(reqInterceptor);
//             ApiClient.interceptors.response.eject(resInterceptor);
//         };
//     }, [setAuthTokens]);

//     async function refreshAccessToken() {
//         const authTokens = JSON.parse(localStorage.getItem('authTokens'));
//         const localRefreshToken = authTokens.refreshToken;
    
//         try {
//             const params = { refreshToken: localRefreshToken };
//             const result = await ApiClient.post("/api/public/updateNewToken", params);
//             const response = result.data;
//             if (response.success && response.data) {
//                 const newTokens = {
//                     accessToken: response.data.accessToken,
//                     refreshToken: response.data.refreshToken,
//                     expiresAt: response.data.expiresAt
//                 };
//                 localStorage.setItem('authTokens', JSON.stringify(newTokens));
//                 return newTokens;
//             } else {
//                 throw new Error("Unable to refresh token");
//             }
//         } catch (error) {
//             console.error("Error refreshing access token:", error);
//             throw error;
//         }
//     }

//     function redirectToLogin(navigate) {
//         console.log("Redirecting to login page...");
//         // navigate('/login');
//     }
// };

// export default useConfigureApiClient;
