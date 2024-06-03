import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import QuestionFilterMenu from "./qustion-card-components/QuestionFilterMenu";
import QuestionList from "./qustion-card-components/QuestionList";
import PaginationRounded from "../common/PaginationRounded";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const buttonGroups = [
  ["Button 1-1", "Button 1-2", "Button 1-3", "Button 1-4"],
  ["Button 2-1", "Button 2-2", "Button 2-3", "Button 2-4"],
  ["Button 3-1", "Button 3-2", "Button 3-3", "Button 3-4"],
  ["Button 4-1", "Button 4-2", "Button 4-3"],
  ["Button 5-1", "Button 5-2", "Button 5-3"],
];
const count = 500;

const SubQuestionTypeContent = ({questionList}) => {
  return (
    <Box sx={{ width: "100%", mb: 4 ,
      // border:'1px solid blue',
    }}>
      <Stack spacing={3}>
        <Item sx={{ boxShadow: "none" }}>
          <QuestionFilterMenu buttonGroups={buttonGroups} count={count} />
        </Item>
        <Item sx={{ boxShadow: "none" }}>
          <QuestionList questionsArr={questionList}/>
        </Item>
        <Item
          sx={{ display: "flex", justifyContent: "center", boxShadow: "none" }}
        >
          <PaginationRounded />
        </Item>
      </Stack>
    </Box>
  );
};
SubQuestionTypeContent.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
};

export default SubQuestionTypeContent;
