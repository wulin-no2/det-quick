import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function QuestionList({ questionsArr }) {
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
                    // alignItems="center"
                    justifyContent="space-between"
                    // md={12}
                    sx={{
                      pt: 1.5,
                      pb: 1.5,
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
                      questionId:{question.questionId}
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        sx={{
                          // width: "100%",
                          // border: "1px solid red",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {question.difficultyLevel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          moduleId:{question.moduleId}+submoduleId:{question.submoduleId}
                        </Typography>
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
  questionsArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
  count: PropTypes.number.isRequired,
};
