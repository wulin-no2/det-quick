import * as React from "react";
import PropTypes from "prop-types";
import { Box, List, Divider, Switch,Typography } from "@mui/material";
import { green, red, blue} from "@mui/material/colors";
import WordItem from "./WordItem"; // Import the new WordItem component
import { useTranslation } from "react-i18next";
import { useState} from "react";

const WordBookList = ({ words,hideVocabulary, setHideVocabulary, hideMeanings, setHideMeanings}) => {
  const {t} = useTranslation();
  const [showWords, setShowWords] = useState({});
  const [showMeanings, setShowMeanings] = useState({});
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
  const handleHideVocabulary = (event) => {
    setHideVocabulary(event.target.checked);
    // Reset showWords state when hideVocabulary changes
    setShowWords({});
  };
  
  const handleHideMeanings = (event) => {
    setHideMeanings(event.target.checked);
    // Reset showMeanings state when hideVocabulary changes
    setShowMeanings({});
  };
  const handleShowWord = (id) => {
    setShowWords((prev) => ({ ...prev, [id]: true }));
  };

  const handleShowMeaning = (id) => {
    setShowMeanings((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
        {/* hide vocabulary & meaning button */}
        <Box sx={{display:'flex', mx:4,mt:2}}>
        <Box sx={{display:'flex', justifyContent:'start', alignItems:'center', mr:2,pr:1,pl:2,fontWeight:'bold',
            borderRadius:2,backgroundColor:blue[50]
        }}>
            <Typography sx={{fontSize:'16px', fontWeight:'bold', color:blue[500]}}>{t('Hide Vocabulary')}</Typography>
            <Switch onChange={handleHideVocabulary}/>
        </Box>
        <Box sx={{display:'flex', justifyContent:'start', alignItems:'center', pr:1,pl:2,fontWeight:'bold',
            borderRadius:2,backgroundColor:blue[50]
        }}>
            <Typography sx={{fontSize:'16px', fontWeight:'bold', color:blue[500]}}>{t('Hide Meanings')}</Typography>
            <Switch onChange={handleHideMeanings}/>
        </Box>
        </Box>
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
                hideMeanings={hideMeanings}
                hideVocabulary={hideVocabulary}
                showWord={showWords[word.id]}
                showMeanings={showMeanings[word.id]}
                onShowWord={handleShowWord}
                onShowMeaning={handleShowMeaning}
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
  hideVocabulary: PropTypes.bool.isRequired,
  setHideVocabulary: PropTypes.func.isRequired,
  hideMeanings: PropTypes.bool.isRequired,
  setHideMeanings: PropTypes.func.isRequired,
  showWords: PropTypes.object.isRequired,
  showMeanings: PropTypes.object.isRequired,
  onShowWord: PropTypes.func.isRequired,
  onShowMeaning: PropTypes.func.isRequired,
};

export default WordBookList;
