// Get data based on filters and currentPage, 
// refresh QuestionList when the data changes

import { useEffect, useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import QuestionFilterMenu from "./question-card-components/QuestionFilterMenu";
import QuestionList from "./question-card-components/QuestionList";
import PaginationRounded from "../common/PaginationRounded";
import { FetchQuestionListResponseData } from "../../api/FetchQuestionList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));

const buttonGroups = [
  ["isAsc", "true", "false"],
  ["difficultyLevel", "null", "Easy", "Medium", "Hard"],
  // ["isCorrect", "null", "true", "false"],
  // ["templateType", "NARRATIVE", "CONTRASTING", "PROBLEM_SOLVING"],
  // ["isCollected", "null", "true", "false"],
  ["isPracticed", "null", "true", "false"],
];

const SubQuestionTypeContent = ({ 
  submoduleId,
  // questionList, pages, count, 
  currentPage, setCurrentPage,
  filters, 
  setFilters,
  getNameBySubmoduleId
 }) => {
  const [questions, setQuestions] = useState([]);
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to remove "null" values from filters
  const cleanFilters = (filters) => {
    const cleanedFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "null") {
        cleanedFilters[key] = value;
      }
    });
    return cleanedFilters;
  };

  // get data from backend
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const cleanedFilters = cleanFilters(filters);
        const postData = {
          ...cleanedFilters,
          submoduleId,
          page: currentPage,
          size: 10,
        };
        const result = await FetchQuestionListResponseData(postData);
        setQuestions(result.content);
        setPages(result.totalPages);
        setCount(result.totalElements);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [filters, currentPage, submoduleId]);

  const handlePageChange = (newPage) => {
    // console.log('Attempting to set new page: ', newPage);
    setCurrentPage(newPage);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);  // Reset to the first page when filters change
  };

  if (loading) {return <div></div>;}
  if (error) {return <div>Error: {error}</div>;}

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stack spacing={3}>
        <Item>
          <QuestionFilterMenu
            buttonGroups={buttonGroups}
            count={count}
            currentPage={currentPage}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            
          />
        </Item>
        <Item>
          <QuestionList questionsArr={questions} 
          getNameBySubmoduleId={getNameBySubmoduleId} 
          count={count}
          filters={filters}
          />
        </Item>
        <Item sx={{width: "100%", display: 'flex', justifyContent: 'center' ,p:2}}>
          <PaginationRounded pages={pages} onPageChange={handlePageChange} currentPage={currentPage} />
        </Item>
      </Stack>
    </Box>
  );
};

SubQuestionTypeContent.propTypes = {
  questionList: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setFilters: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  submoduleId: PropTypes.number.isRequired,
  getNameBySubmoduleId:PropTypes.func.isRequired,
};


export default SubQuestionTypeContent;

