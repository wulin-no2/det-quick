import ApiClient from "./ApiClient";

export const FetchQuestionsList = async () => {
  try {
    const postData = {
      isAsc: true,
      submoduleId: 1,
      difficultyLevel: "Hard",
      isCorrect: true,
      page: 1,
      size: 10
    };

    const response = await ApiClient.post('/questions/list', postData);
    if (response.success) {
      console.log('Fetched Data:', response.data);
      return response.data.content;  // Assuming 'content' holds the actual questions
    } else {
      throw new Error(response.message || "An error occurred while fetching the data");
    }
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    return [];  // Return an empty array or handle the error as needed
  }
};
