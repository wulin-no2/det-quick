import * as React from "react";
import PropTypes from "prop-types";

import { Box, Typography,Grid,List,ListItem,Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const WordBookList = ({words,currentPage})=>{
  const { t } = useTranslation();
  const itemsPerPage = 10;

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
            {words.map((word, index) => {
              const newGlobalIndex = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <React.Fragment key={word.id}>
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
                        {/* word and id */}
                      <Grid item md={6}>
                        <Typography variant="body1" color="text.primary">
                        {newGlobalIndex}
                          {"  "}
                          <Box component="span" sx={{ fontWeight: "bold" }}>
                            {t(word.word)}
                          </Box>
                          {" - "}
                          {word.id}
                        </Typography>
                        <Typography>{word.translationCNList}</Typography>
                      </Grid>
                      {/* difficulty Level */}
                      <Grid item md={4}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            pr: 2,
                          }}
                        >
                          {word.difficultyLevel}
                        </Box>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {index < words.length - 1 && (
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

WordBookList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};
export default WordBookList;