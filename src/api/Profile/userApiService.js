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
    const response = await apiClient.post("/api/public/login", params);
    return response.data;
}


export const requestSendVerifyCode = async (account) => {
    const params = {
        account: account,
    };
    const response = await apiClient.post("/api/public/sendVerifyCode", params);
    return response.data;
}

export const requestVerify = async (account, verifyCode) => {
    const params = {
        account: account,
        verifyCode: verifyCode,
    };
    const response = await apiClient.post("/api/public/verify", params);
    return response.data;
}

export const requestLogout = async () => {
    const response = await apiClient.post("/api/logout");
    return response.data;
}
