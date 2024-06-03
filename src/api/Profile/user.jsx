// copied from Zain. haven't used it
import apiClient from "../ApiClient";

export const getUserDetailApi = async (phone) => {
  try {
    // 由于响应拦截器的处理，这里直接获取结果
    const response = await apiClient.get("/user/detail");

    console.log("user data :", response);
    return { success: true, data: response };
  } catch (error) {
    // 所有错误现在都由拦截器处理
    console.error("Error GetUserDetailApi code:", error.message || error);
    return {
      success: false,
      message: error.message || error,
      code: error.code,
    };
  }
};
