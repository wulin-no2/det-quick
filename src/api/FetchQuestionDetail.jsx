import ApiClient from "./ApiClient";


export const FetchQuestionDetail = async (questionId, submoduleId) => {
  try {
    const postData ={
      questionId: questionId,
      submoduleId: submoduleId
    }

    console.log('this is postData log from fetch question detail ', postData);

    const response = await ApiClient.post("/questions/detail", postData);
    console.log("this is response from questions/detail api ", response);
    if (response.data.success) {
      console.log("returned questions/detail Data:", response.data.data);
      return response.data.data; 
    } else {
      throw new Error(
        response.message || "There was an error fetching the question detail!"
      );
    }
  } catch (error) {
    console.error("Error fetching total results: ", error.message);
    return null; // Return an empty array or handle the error as needed
  }
};
