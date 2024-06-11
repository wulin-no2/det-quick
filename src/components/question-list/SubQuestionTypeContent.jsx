// import  { useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";


import QuestionFilterMenu from "./question-card-components/QuestionFilterMenu";
import QuestionList from "./question-card-components/QuestionList";
import PaginationRounded from "../common/PaginationRounded";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));

const buttonGroups = [
  ["isAsc", "true", "false"],
  ["difficultyLevel", "Easy", "Medium", "Hard"],
  // ["isCorrect", "true", "false"],
  // ["templateType", "NARRATIVE", "CONTRASTING", "PROBLEM_SOLVING"],
  // ["isCollected", "true", "false"],
  ["isPracticed", "true", "false"],
];

const SubQuestionTypeContent = ({ questionList, pages, count, 
  currentPage, setCurrentPage,
  filters, 
  setFilters }) => {
  // useEffect(() => {
  //   console.log('currentPage has been updated in effect: ', currentPage);
  // }, [currentPage]);  

  const handlePageChange = (newPage) => {
    // console.log('Attempting to set new page: ', newPage);
    setCurrentPage(newPage);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);  // Reset to the first page when filters change
  };

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
          <QuestionList questionsArr={questionList} />
        </Item>
        <Item>
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
};


export default SubQuestionTypeContent;

