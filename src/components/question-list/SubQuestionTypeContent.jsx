// Get data based on filters and currentPage, 
// refresh QuestionList when the data changes
import { useEffect, useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import QuestionFilterMenu from "./question-list-components/QuestionFilterMenu";
import QuestionList from "./question-list-components/QuestionList";
import PaginationRounded from "../common/PaginationRounded";
import { fetchQuestionListResponseData } from "../../api/api-fetchQuestionList";
import { ShowLocalStorage } from "../../utils/ShowLocalStorage";
import { buttonGroups } from "../../utils/practice/questionListConstantAndFunc";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));

const cleanFilters = (filters) => {
  const cleanedFilters = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== "null") {
      cleanedFilters[key] = value;
    }
  });
  return cleanedFilters;
};

const SubQuestionTypeContent = ({
  submoduleId,
  currentPage, setCurrentPage,
  filters, setFilters,
  globalIndex, setGlobalIndex,
}) => {
  const [questions, setQuestions] = useState([]);
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cleanedFilters = cleanFilters(filters);
        const postData = {
          ...cleanedFilters,
          submoduleId,
          page: currentPage,
          size: 10,
        };
        const result = await fetchQuestionListResponseData(postData);
        setQuestions(result.content);
        setPages(result.totalPages);
        setCount(result.totalElements);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters, currentPage, submoduleId]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);  // Reset to the first page when filters change
    setGlobalIndex(1); // Reset globalIndex when filters change
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <QuestionList
            questionsArr={questions}
            count={count}
            filters={filters}
            currentPage={currentPage}
            globalIndex={globalIndex}
            setGlobalIndex={setGlobalIndex}
          />
        </Item>
        <Item sx={{ width: "100%", display: 'flex', justifyContent: 'center', p: 2 }}>
          <PaginationRounded
            pages={pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Item>
      </Stack>
      <ShowLocalStorage componentName="SubQuestionTypeContent" />
    </Box>
  );
};

SubQuestionTypeContent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setFilters: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  submoduleId: PropTypes.number.isRequired,
  globalIndex: PropTypes.number.isRequired,
  setGlobalIndex: PropTypes.func.isRequired,
};

export default SubQuestionTypeContent;

