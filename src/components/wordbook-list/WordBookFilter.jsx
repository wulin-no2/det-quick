// Get data based on filters and currentPage, 
// refresh wordBookList when the data changes
import { useEffect, useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import FilterMenu from "../common/tab-filter-components/FilterMenu";
import { buttonGroupsForWordBookFilter, displayedWordBookFilter } from "../../utils/practice/questionListConstantAndFunc";
import WordBookList from "./WordBookList";
import PaginationRounded from "../common/PaginationRounded";
import { fetchWordBookListResponseData } from "../../api/api-fetchWordBookList";

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

const WordBookFilterAndList= ({questionType}) => {
    const questionTypeName = questionType.name;

  const [words, setWords] = useState([]);
  const [filters, setFilters] = useState([]);//??????????? should i add it or used a default filter?
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const question_type = questionType;
      try {
        setLoading(true);
        const cleanedFilters = cleanFilters(filters);
        const postData = {
          ...cleanedFilters,
          question_type,
          page: currentPage,
          size: 10,
        };
        const result = await fetchWordBookListResponseData(postData);
        setWords(result.content);
        setPages(result.totalPages);
        setCount(result.totalElements);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
        <Item>{questionTypeName}
          <FilterMenu
              originFilter={buttonGroupsForWordBookFilter}
              displayedFilter={displayedWordBookFilter}
              count={count}
              currentPage={currentPage}
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
        </Item>
        <Item>2
          <WordBookList
            words={words}
            count={count}
            filters={filters}
          />
        </Item>
        <Item sx={{ width: "100%", display: 'flex', justifyContent: 'center', p: 2 }}>
            3
          <PaginationRounded
            pages={pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
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
