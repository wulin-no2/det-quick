import * as React from "react";
import PropTypes from "prop-types";
import { Box, List, Divider } from "@mui/material";
import { green, red, blue} from "@mui/material/colors";
import WordItem from "./WordItem"; // Import the new WordItem component

const WordBookList = ({ words }) => {
  const getColorByDifficulty = (difficulty) => {
    switch (difficulty) {
      case "CEFR-C":
        return red[900];
      case "CEFR-B1":
        return blue[500];
      case "CEFR-B2":
        return blue[900];
      case "CEFR-A1":
        return green[500];
      case "CEFR-A2":
        return green[900];
      default:
        return "inherit"; // Default color if none of the cases match
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <List>
        {words.map((word, index) => {
          // Ensure translationCNList is parsed as an array
          let translations = [];
          try {
            translations = JSON.parse(word.translationCNList);
          } catch (e) {
            console.error("Failed to parse translationCNList", e);
          }
          return (
            <React.Fragment key={word.id}>
              <WordItem
                word={word}
                translations={translations}
                getColorByDifficulty={getColorByDifficulty}
              />
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
    </Box>
  );
};

WordBookList.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired,
      difficultyLevel: PropTypes.string.isRequired,
      translationCNList: PropTypes.string.isRequired,
      britishPhoneticSymbols: PropTypes.string.isRequired,
      britishAudioSrc: PropTypes.string.isRequired,
      americanPhoneticSymbols: PropTypes.string.isRequired,
      americanAudioSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};

export default WordBookList;
