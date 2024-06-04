import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import QuestionFilterMenu from "./question-card-components/QuestionFilterMenu";
import QuestionList from "./question-card-components/QuestionList";
import PaginationRounded from "../common/PaginationRounded";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const buttonGroups = [
  ["isAsc", "true", "false"],
  ["difficultyLevel", "Easy", "Medium", "Hard"],
  ["isCorrect", "true", "false"],
  ["templateType", "NARRATIVE", "CONTRASTING", "PROBLEM_SOLVING"],
  ["isCollected", "true", "false"],
  ["isPracticed", "true", "false"],
];
// const count = 500;

const SubQuestionTypeContent = ({ questionList, pages, count }) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 4,
        // border:'1px solid blue',
      }}
    >
      <Stack spacing={3}>
        <Item sx={{ boxShadow: "none" }}>
          <QuestionFilterMenu buttonGroups={buttonGroups} count={count} />
        </Item>
        <Item sx={{ boxShadow: "none" }}>
          <QuestionList questionsArr={questionList} />
        </Item>
        <Item
          sx={{ display: "flex", justifyContent: "center", boxShadow: "none" }}
        >
          <PaginationRounded pages={pages}/>
        </Item>
      </Stack>
    </Box>
  );
};
SubQuestionTypeContent.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
  pages: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default SubQuestionTypeContent;
