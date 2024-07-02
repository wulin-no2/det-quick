import * as React from "react";
import PropTypes from "prop-types";

import { Box, Typography, List, ListItem, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DifficultyButton from "../../common/question-card-components/CardHeaderComponents/DifficultyButton";
import { getNameBySubmoduleId } from "../../../utils/practice/questionListConstantAndFunc";

const baseQuestionsDetailURL = "questions/detail";

export default function QuestionList({
  questionsArr,
  filters,
  count,
  currentPage,
  globalIndex,
  setGlobalIndex,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const itemsPerPage = 10;

  // remember the state with React Router for later use in QuestionPage
  const handleItemClick = (question, index) => {
    globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
    setGlobalIndex(globalIndex);
    localStorage.setItem("globalIndex", globalIndex);

    navigate(baseQuestionsDetailURL, {
      state: {
        questionId: question.questionId,
        submoduleId: question.submoduleId,
        filters,
        count,
        currentIndex: index,
        moduleId: question.moduleId,
        currentPage: currentPage,
        globalIndex: globalIndex,
      },
    });
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: "100vw",
        width: "100%",
        // border: "1px solid blue",
      }}
    >
      <Grid
        container
        // spacing={2}
        sx={{
          width: "100%",
          // border: "1px solid magenta"
        }}
      >
        <Grid
          item
          xs={6}
          md={12}
          sx={{
            width: "100%",
            // border: "1px solid green"
          }}
        >
          <List
            sx={{
              width: "100%",
              // border: "1px solid red"
            }}
          >
            {questionsArr.map((question, index) => {
              globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <React.Fragment key={question.questionId}>
                  <ListItem
                    sx={{
                      mx: "auto",
                      width: "96%",
                      // border: "1px solid black",
                      cursor: "pointer", // Set mouse hover effect
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      },
                    }}
                    component="div"
                    onClick={() => handleItemClick(question, index)}
                  >
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        pt: 0.8,
                        pb: 0.8,
                        // border: "1px solid blue",
                      }}
                    >
                      <Grid item md={6}>
                        <Typography variant="body1" color="text.primary">
                          {globalIndex}
                          {"  "}
                          <Box component="span" sx={{ fontWeight: "bold" }}>
                            {t(getNameBySubmoduleId(question.submoduleId))}
                          </Box>
                          {" - "}
                          {question.questionId}
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            pr: 2,
                          }}
                        >
                          <DifficultyButton
                            difficulty={question.difficultyLevel}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {index < questionsArr.length - 1 && (
                    <Divider
                      variant="middle"
                      component="li"
                      sx={{
                        mx: "auto",
                        width: "96%",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

QuestionList.propTypes = {
  questionsArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  globalIndex: PropTypes.number.isRequired,
  setGlobalIndex: PropTypes.func.isRequired,
};
