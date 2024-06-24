import ApiClient from "./ApiClient";

export const fetchQuestionListResponseData = async (postData) => {
  try {

    console.log('this is postData log from fetch question list ', postData);
    // Remove null, undefined or "null" values
    const cleanData = Object.entries(postData).reduce((acc, [key, value]) => {
      if (value != null && value !== "null") acc[key] = value;
      return acc;
    }, {});

    const response = await ApiClient.post("/questions/list", cleanData);
    console.log("this is response from api ", response);
    if (response.data.success) {
      console.log("returned Data:", response.data.data);
      return response.data.data; 
    } else {
      throw new Error(
        response.message || "An error occurred while fetching the data"
      );
    }
  } catch (error) {
    console.error("Error fetching total results:", error.message);
    return []; // Return an empty array or handle the error as needed
  }
};
