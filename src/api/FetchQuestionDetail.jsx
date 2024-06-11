import ApiClient from "./ApiClient";


export const FetchQuestionDetail = async (postData) => {
  try {
    // const postData ={
    //   "questionId": 20400,
    //   "submoduleId": 1
    // }

    console.log('this is postData log from fetch question detail ', postData);

    const response = await ApiClient.post("/questions/detail", postData);
    console.log("this is response from questions/detail api ", response);
    if (response.data.success) {
      console.log("returned questions/detail Data:", response.data.data);
      return response.data.data; 
    } else {
      throw new Error(
        response.message || "An error occurred while fetching the question detail data"
      );
    }
  } catch (error) {
    console.error("Error fetching total results:", error.message);
    return []; // Return an empty array or handle the error as needed
  }
};
