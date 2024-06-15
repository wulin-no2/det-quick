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


// export const FetchQuestionDetail = async (questionId, submoduleId) => {
//   try {
//     const postData ={
//       questionId: questionId,
//       submoduleId: submoduleId
//     }

//     console.log('this is postData log from fetch question detail ', postData);

//     const response = await ApiClient.post("/questions/detail", postData);
//     console.log("this is response from questions/detail api ", response);
//     if (response.data.success) {
//       console.log("returned questions/detail Data:", response.data.data);
//       return response.data.data; 
//     } else {
//       throw new Error(
//         response.message || "There was an error fetching the question detail!"
//       );
//     }
//   } catch (error) {
//     console.error("Error fetching total results: ", error.message);
//     return null; // Return an empty array or handle the error as needed
//   }
// };


// export const fetchNextQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
//   try {
    
//       // create object and remove null
//       let postData = { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc };
//       postData = Object.entries(postData).reduce((acc, [key, value]) => {
//         if (value !== null) acc[key] = value;
//         return acc;
//       }, {});

//     const response = await ApiClient.post('/questions/next', postData);
//     console.log('Data:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error fetching the next question!", error);
//     return null;  // catch error
//   }
// };

// export const fetchPreviousQuestion = async (questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc) => {
//   try {
    
//       // create object and remove null
//       let postData = { questionId, submoduleId, difficultyLevel, templateType, isCorrect, isAsc };
//       postData = Object.entries(postData).reduce((acc, [key, value]) => {
//         if (value !== null) acc[key] = value;
//         return acc;
//       }, {});

//     const response = await ApiClient.post('/questions/previous', postData);
//     console.log('Data:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error fetching the previous question!", error);
//     return null;  // catch error
//   }
// };
