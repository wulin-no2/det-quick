// Get data based on filters and currentPage, 
// refresh QuestionList when the data changes
import { useEffect, useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
// import QuestionFilterMenu from "./question-list-components/QuestionFilterMenu";
// import QuestionList from "./question-list-components/QuestionList";
// import PaginationRounded from "../common/PaginationRounded";
// import { fetchQuestionListResponseData } from "../../api/api-fetchQuestionList";
// import { buttonGroups } from "../../utils/practice/questionListConstantAndFunc";
// import useQuestionStateContext from "../../context/useQuestionStateContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));

// const cleanFilters = (filters) => {
//   const cleanedFilters = {};
//   Object.entries(filters).forEach(([key, value]) => {
//     if (value !== "null") {
//       cleanedFilters[key] = value;
//     }
//   });
//   return cleanedFilters;
// };

const WordBookFilterAndList= ({questionType}) => {
    const questionTypeName = questionType.name;

//   const [questions, setQuestions] = useState([]);
//   const [pages, setPages] = useState(0);
//   const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
//         const cleanedFilters = cleanFilters(filters);
//         const postData = {
//           ...cleanedFilters,
//           submoduleId,
//           page: currentPage,
//           size: 10,
//         };
//         const result = await fetchQuestionListResponseData(postData);
//         setQuestions(result.content);
//         setPages(result.totalPages);
//         setCount(result.totalElements);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleFiltersChange = (newFilters) => {
//     setFilters(newFilters);
//     setCurrentPage(1);  // Reset to the first page when filters change
//     setGlobalIndex(1); // Reset globalIndex when filters change
//   };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stack spacing={3}>
        <Item>{questionTypeName}
          {/* <QuestionFilterMenu
            buttonGroups={buttonGroups}
            count={count}
            currentPage={currentPage}
            filters={filters}
            onFiltersChange={handleFiltersChange}
          /> */}
        </Item>
        <Item>2
          {/* <QuestionList
            questionsArr={questions}
            count={count}
            filters={filters}
          /> */}
        </Item>
        <Item sx={{ width: "100%", display: 'flex', justifyContent: 'center', p: 2 }}>
            3
          {/* <PaginationRounded
            pages={pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          /> */}
        </Item>
      </Stack>

    </Box>
  );
};

WordBookFilterAndList.propTypes = {
  questionType: PropTypes.object.isRequired,
  questionTypeName: PropTypes.string.isRequired,
};

export default WordBookFilterAndList;
