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
    const response = await apiClient.post("/api/public/verification/verify", params);
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