// src/config.js

const globalSettingsConfig = {
    messages: {
        generalError: "Something went wrong. Please try again later.",
   
        tokenInvalid: "Sorry, your token has expired.",
    },
    // ... 其他配置

    event: {
        SHOW_LOADING: 'show_loading',
        SHOW_TOAST: 'show_toast',
        HIDE_TOAST: 'hide_toast', // 确保添加了这个事件

        AUTH_LOGIN_SUCCESS: 'auth_login_success',
        AUTH_LOGIN_FAILURE: 'auth_login_failure',
    
        api_token_expire: 'api_token-expire',
        // 其他事件名称...
    },

    localStorageKeys: {
        // ACCESS_TOKEN: 'userAccessToken',
        AUTH_TOKEN: 'authToken',
        // 其他localStorage键名...
    },

    zIndex: {
        errorPage: 2000,
        subscriptionPopConfirmBg: 1000,
        loadingSpinner:3000,
    }
};

export default globalSettingsConfig;
