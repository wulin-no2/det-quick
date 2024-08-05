import ApiClient from "./ApiClient";

// Utility function to remove null values and send API request for get question apis
const sendApiRequest = async (endpoint, postData) => {
  try {
    // Remove null, undefined or "null" values
    const cleanData = Object.entries(postData).reduce((acc, [key, value]) => {
      if (value != null && value !== "null") acc[key] = value;
      return acc;
    }, {});
    // print postData
    console.log('postData after clean null is ',cleanData)

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

// get question detail when click list
export const fetchQuestionDetail = async (questionId, submoduleId) => {
  return sendApiRequest("/questions/detail", { questionId, submoduleId });
};

// next question
export const fetchNextQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
  return sendApiRequest('/questions/next', { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc });
};

// previous question
export const fetchPreviousQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
  return sendApiRequest('/questions/previous', { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc });
};


// update question status - is practiced or not
export const updatePracticeStatus = async (questionId, isPracticed) => {
  try {
    const postData={
      questionId,
      isPracticed,
    }
    const response = await ApiClient.post('/practice', postData);
    if (response.status === 200) {
      console.log('Practice status updated successfully.');
    } else {
      console.error('Failed to update practice status.');
    }
  } catch (error) {
    console.error('Error updating practice status:', error);
  }
};

// Utility function to remove null values and send API request for get question APIs
const sendApiRequestAnswer = async (endpoint, postData) => {
  try {
    // Remove null, undefined, or "null" values
    const cleanData = Object.entries(postData).reduce((acc, [key, value]) => {
      if (value != null && value !== "null") acc[key] = value;
      return acc;
    }, {});
    
    // Print postData before and after cleaning
    console.log('Original postData:', postData);
    console.log('Cleaned postData:', cleanData);

    const response = await ApiClient.post(endpoint, cleanData);
    console.log(`Data from ${endpoint}:`, response.data);

    if (response.data.success) {
      // Return entire response data object, not just the `data` field
      return response.data;
    } else {
      throw new Error(response.data.message || `There was an error with the ${endpoint} API!`);
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}: `, error.response ? error.response.data : error.message);
    return null;
  }
};

// Submit user answer
export const submitUserAnswer = async (questionId, submoduleId, answer) => {
  return sendApiRequestAnswer('/questions/answer', { questionId, submoduleId, answer });
};

// Submit user answer
export const submitUserAnswerWithFileUrl = async (questionId, submoduleId, blobUrl) => {
  return sendApiRequestAnswer('/questions/answer', { questionId, submoduleId, answer: blobUrl });
};