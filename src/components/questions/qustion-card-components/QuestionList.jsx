import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const questions = [
  {
    id: 0,
    question: "Question 0",
    detail: "Detail 0",
    additionalInfo: "Additional Info 0",
  },
  {
    id: 1,
    question: "Question 1",
    detail: "Detail 1",
    additionalInfo: "Additional Info 1",
  },
  {
    id: 2,
    question: "Question 2",
    detail: "Detail 2",
    additionalInfo: "Additional Info 2",
  },
  {
    id: 3,
    question: "Question 3",
    detail: "Detail 3",
    additionalInfo: "Additional Info 3",
  },
  {
    id: 4,
    question: "Question 4",
    detail: "Detail 4",
    additionalInfo: "Additional Info 4",
  },
  {
    id: 5,
    question: "Question 5",
    detail: "Detail 5",
    additionalInfo: "Additional Info 5",
  },
  {
    id: 6,
    question: "Question 6",
    detail: "Detail 6",
    additionalInfo: "Additional Info 6",
  },
  {
    id: 7,
    question: "Question 7",
    detail: "Detail 7",
    additionalInfo: "Additional Info 7",
  },
  {
    id: 8,
    question: "Question 8",
    detail: "Detail 8",
    additionalInfo: "Additional Info 8",
  },
  {
    id: 9,
    question: "Question 9",
    detail: "Detail 9",
    additionalInfo: "Additional Info 9",
  },
];

export default function QuestionList() {
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
        spacing={2}
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
            {questions.map((question, index) => (
              <React.Fragment key={question.id}>
                <ListItem
                  sx={{
                    width: "100%",
                    // border: "1px solid black",
                  }}
                >
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    // md={12}
                    sx={{
                      p: 1.5,
                      pl: 2,
                      pr: 2,
                      // border: "1px solid black",
                    }}
                  >
                    <Grid
                      item
                      md={6}
                      sx={{
                        // width: "100%",
                        // border: "1px solid blue",
                        // display: "flex",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Typography variant="body1" color="text.primary">
                        {question.question}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sx={{
                        // width: "100%",
                        // border: "1px solid magenta",
                        // display: "flex",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Box
                        sx={{
                          // width: "100%",
                          // border: "1px solid red",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {question.detail}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {question.additionalInfo}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                {index < questions.length - 1 && (
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
