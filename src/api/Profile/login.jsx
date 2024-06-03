// copied from Zain. haven't used it
import apiClient from "../ApiClient";

export const sendVerificationCode = async (phone) => {
  try {
    const formData = new FormData();
    formData.append("phone", phone);

    // 由于响应拦截器的处理，这里直接获取结果
    const data = await apiClient.post("/login/sendVerificationCode", formData);

    console.log("Verification code sent:", data);
    return { success: true, data: data };
  } catch (error) {
    // 所有错误现在都由拦截器处理
    console.error("Error sending verification code:", error.message || error);
    return {
      success: false,
      message: error.message || error,
      code: error.code,
    };
  }
};

export const loginApi = async (phone, code, channel) => {
  try {
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("code", code);
    formData.append("channel", channel);

    // 由于响应拦截器的处理，这里直接获取结果
    const data = await apiClient.post("/login/login", formData);

    return { success: true, data: data };
  } catch (error) {
    // 所有错误现在都由拦截器处理
    console.error("Login error:", error.message || error);
    return {
      success: false,
      message: error.message || error,
      code: error.code,
    };
  }
};

export const logoutApi = async () => {
  try {
    const data = await apiClient.post("/login/logout");

    console.log(data);
    return { success: true, data: data };
  } catch (error) {
    console.error("Login error:", error.message || error);
    return {
      success: false,
      message: error.message || error,
      code: error.code,
    };
  }
};

export const tokenCheckApi = async () => {
  try {
    const data = await apiClient.post("/login/tokenCheck");
    return { success: true, data: data };
  } catch (error) {
    console.error("Login error:", error.message || error);
    return {
      success: false,
      message: error.message || error,
      code: error.code,
    };
  }
};
