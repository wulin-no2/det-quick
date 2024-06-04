import ApiClient from "./ApiClient";

// export const FetchQuestionsList = async () => {
//   try {
//     const postData = {
//       isAsc: true,
//       submoduleId: 1,
//       difficultyLevel: "Hard",
//       templateType: "NARRATIVE",
//       isCorrect: true,
//       page: 1,
//       size: 10,
//     };

//     const response = await ApiClient.post("/questions/list", postData);
//     console.log("response", response);
//     if (response.data.success) {
//       console.log("Fetched Data:", response.data);
//       return response.data.data.content; // Assuming 'content' holds the actual questions
//     } else {
//       console.log("response.success fails");
//       throw new Error(
//         response.message || "An error occurred while fetching the data"
//       );
//     }
//   } catch (error) {
//     console.error("Error fetching questions:", error.message);
//     return []; // Return an empty array or handle the error as needed
//   }
// };

// export const FetchQuestionsTotalResults = async () => {
//   try {
//     const postData = {
//       isAsc: true,
//       submoduleId: 1,
//       difficultyLevel: "Hard",
//       templateType: "NARRATIVE",
//       isCorrect: true,
//       page: 1,
//       size: 10,
//     };

//     const response = await ApiClient.post("/questions/list", postData);
//     console.log("response", response);
//     if (response.data.success) {
//       console.log("Fetched Data:", response.data);
//       return response.data.data.totalElements; 
//     } else {
//       throw new Error(
//         response.message || "An error occurred while fetching the data"
//       );
//     }
//   } catch (error) {
//     console.error("Error fetching total results:", error.message);
//     return 0; // Return an empty array or handle the error as needed
//   }
// };

export const FetchQuestionListResponseData = async () => {
  try {
    const postData = {
      isAsc: true,
      submoduleId: 1,
      difficultyLevel: "Hard",
      templateType: "NARRATIVE",
      isCorrect: true,
      page: 1,
      size: 10,
    };

    const response = await ApiClient.post("/questions/list", postData);
    console.log("response", response);
    if (response.data.success) {
      console.log("Fetched Data:", response.data);
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
