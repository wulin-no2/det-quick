import ApiClient from "./ApiClient";

// Utility function to remove null values and send API request
const sendApiRequest = async (endpoint, postData) => {
  try {
    // Remove null or undefined values
    const cleanData = Object.entries(postData).reduce((acc, [key, value]) => {
      if (value != null) acc[key] = value;
      return acc;
    }, {});

    const response = await ApiClient.post(endpoint, cleanData);
    console.log(`Data from ${endpoint}:`, response.data);

    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.message || `There was an error with the ${endpoint} API!`);
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}: `, error.message);
    return null;
  }
};

export const fetchQuestionDetail = async (questionId, submoduleId) => {
  return sendApiRequest("/questions/detail", { questionId, submoduleId });
};

export const fetchNextQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
  return sendApiRequest('/questions/next', { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc });
};

export const fetchPreviousQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
  return sendApiRequest('/questions/previous', { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc });
};

