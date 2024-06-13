import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import DifficultyButton from "../../common/common-card-components/CardHeaderComponents/DifficultyButton";

export default function QuestionList({ questionsArr ,
  getNameBySubmoduleId
}) {
  const { t } = useTranslation();
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
            {questionsArr.map((question, index) => (
              <React.Fragment key={question.questionId}>
                <ListItem
                  sx={{
                    mx: "auto",
                    width: "96%",
                    // border: "1px solid black",
                    // px:0,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  component={Link}
                  // href={`/question/${question.type}`}
                  href={`/questions/list`}
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
                    <Grid
                      item
                      md={6}
                      sx={
                        {
                          // border: "1px solid blue",
                        }
                      }
                    >
                      <Typography variant="body1" color="text.primary">
                      {t(getNameBySubmoduleId(question.submoduleId))} - {question.questionId}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                      
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          pr:2
                        }}
                      >
                        <DifficultyButton difficulty={question.difficultyLevel}/>
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
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

QuestionList.propTypes = {
  questionsArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  count: PropTypes.number.isRequired,
  getNameBySubmoduleId:PropTypes.func.isRequired,
};
