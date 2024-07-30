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
import { fetchWordBookListResponseData, fetchWordBookSearchData } from "../../api/api-fetchWordBookList";

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
const initialFilters = {
  difficultyLevel: "null", // Assuming "null" is a string based on your component usage
  isPracticed: "null", // Default value for isPracticed
};

const WordBookFilter= ({questionTypeObject}) => {
  const questionType = questionTypeObject.name;
  const [words, setWords] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [hideVocabulary, setHideVocabulary] = useState(false);
  const [hideMeanings, setHideMeanings] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [finalQuery, setFinalQuery] = useState('');

  // record if the list came from search
  const [isSearch, setIsSearch] = useState(false);

  const fetchData = async (page, filters, questionType, isSearch, finalQuery) => {
    try {
      setLoading(true);
      let result;

      if (isSearch) {
        result = await fetchWordBookSearchData({ query: finalQuery, page, size: 10 });
      } else {
        const cleanedFilters = cleanFilters(filters);
        const postData = {
          ...cleanedFilters,
          questionType,
          page,
          size: 10,
        };
        result = await fetchWordBookListResponseData(postData);
        console.log('list result is: ',result)
      }

      setWords(result.content);
      setPages(result.totalPages);
      setCount(result.totalElements);
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, filters, questionType, isSearch, finalQuery);
  }, [currentPage, filters, questionType, isSearch, finalQuery]);

  const handleSearch = () => {
    setIsSearch(true);
    setCurrentPage(1);
    setFinalQuery(searchInput);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setSearchInput('');
    setIsSearch(false);
    setCurrentPage(1);  // Reset to the first page when filters change
  };
  

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stack spacing={3}>
        <Item>
          <FilterMenu
              originFilter={buttonGroupsForWordBookFilter}
              displayedFilter={displayedWordBookFilter}
              count={count}
              currentPage={currentPage}
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
        </Item>
        <Item>
          <WordBookList
            words={words}
            currentPage={currentPage}
            hideVocabulary={hideVocabulary}
            setHideVocabulary={setHideVocabulary}
            hideMeanings={hideMeanings}
            setHideMeanings={setHideMeanings}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
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

    </Box>
  );
};

WordBookFilter.propTypes = {
  questionTypeObject: PropTypes.object.isRequired,
};

export default WordBookFilter;
