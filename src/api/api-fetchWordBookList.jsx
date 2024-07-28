import ApiClient from "./ApiClient";

// Helper function to clean the post data
const cleanPostData = (postData) => {
  return Object.entries(postData).reduce((acc, [key, value]) => {
    if (value != null && value !== "null") acc[key] = value;
    return acc;
  }, {});
};

// Helper function to make API calls
const fetchData = async (url, postData) => {
  try {
    console.log(`This is postData log from ${url}`, postData);

    const cleanData = cleanPostData(postData);

    const response = await ApiClient.post(url, cleanData);
    console.log(`This is response from api ${url}`, response);

    if (response.data.success) {
      console.log("Returned Data:", response.data.data);
      return response.data.data;
    } else {
      throw new Error(response.message || "An error occurred while fetching the data");
    }
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return []; // Return an empty array or handle the error as needed
  }
};

export const fetchWordBookListResponseData = async (postData) => {
  return fetchData("/wordbook/list", postData);
};

export const fetchWordBookSearchData = async (postData) => {
  return fetchData("/wordbook/search", postData);
};
