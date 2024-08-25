import apiClient from "../ApiClient";

export const requestRegister = async (account, password) => {
  const params = {
    account: account,
    password: password,
  };
  const response = await apiClient.post("/api/public/register", params);
  return response.data;
};


export const requestLogin = async (account, password) => {
    const params = {
        account: account,
        password: password,
    };
    const response = await apiClient.post("/api/public/login", params, {
        withCredentials: true  // 确保请求时包括凭证,不写这个，后端无法写入cookie到前端
    });
    return response.data;
}


export const requestSendVerificationCode = async (account) => {
    const params = {
        account: account,
    };
    const response = await apiClient.post("/api/public/verification/send", params);
    return response.data;
}

export const requestVerifyCode = async (account, verifyCode) => {
    const params = {
        account: account,
        verifyCode: verifyCode,
    };
    const response = await apiClient.post("/api/public/verification/verify", params, {
        withCredentials: true  // 确保请求时包括凭证,不写这个，后端无法写入cookie到前端
    });
    return response.data;
}

export const requestLogout = async () => {
    const response = await apiClient.post("/api/public/logout");
    return response.data;
}

export const requestCheckUserExist = async (account) => {
    const params = {
        account: account,
    };

    console.log("=====");
    console.log(account);
    console.log(params);
    console.log("=====");
    const response = await apiClient.post("/api/public/user/exist", params);
    return response.data;
}

export const requestUpdateNewToken = async () => {
  
    const response = await apiClient.post("/api/public/updateNewToken", {}, {
        withCredentials: true  // 确保携带 Cookie
    });
    return response.data;
}

export const requestResetPasswordSendCode = async (account) => {
    const params = {
        account: account,
    };
    const response = await apiClient.post("/api/public/passwordReset/sendCode", params);
    return response.data;
}

export const requestResetPasswordVerifyCode = async (account, verifyCode, newPassword) => {
    const params = {
        account: account,
        verifyCode: verifyCode,
        newPassword: newPassword,
    };
    const response = await apiClient.post("/api/public/passwordReset/verifyCode", params);
    return response.data;
}