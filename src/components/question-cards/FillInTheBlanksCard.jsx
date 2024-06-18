import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Paper,Grid} from "@mui/material";
import CardHeader from "../common/common-card-components/CardHeader";
import AnswerButton from "../common/common-card-components/AnswerButton";
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";
import { grey} from '@mui/material/colors';

const FillInTheBlanksCard = ({
  // questionId,
  // setCurrentQuestionId,
  // setCurrentSubmoduleId,
  // filters,
  count,
  currentIndex,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
  }) => {
  const parts = questionDetail.sentenceTemplate.split("{}");
  const clues = questionDetail.clues[0];
  const [answers, setAnswers] = useState(Array(clues.length).fill(''));
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const inputRefs = useRef([]);
  
  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);
  const { t } = useTranslation();

  // initialize practiced
  useEffect(() => {
    if (questionDetail.isPracticed) {
      setIsPracticed(true);
    }
  }, [questionDetail]);

  // The remaining code for event handlers 
  const handleInputChange = (index, event) => {
    event.preventDefault();
    const latestChar = event.nativeEvent.data || '';
    if (latestChar) {
        const newAnswers = [...answers];
        newAnswers[index] = latestChar;
        setAnswers(newAnswers);
        const inputElement = inputRefs.current[index];
        inputElement.value = latestChar;
        if (index < clues.length - 1) {
            setTimeout(() => {
                inputRefs.current[index + 1].focus();
            }, 0);
        }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'ArrowRight' && index < clues.length - 1) {
        inputRefs.current[index + 1].focus();
    } else if (event.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1].focus();
    } else if ((event.key === 'Backspace' || event.key === 'Delete')) {
        if (answers[index] !== '') {
            const newAnswers = [...answers];
            newAnswers[index] = '';
            setAnswers(newAnswers);
            event.preventDefault();
        }
        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }
  };

  if (!questionDetail) {
    return <div></div>;
  }

  // handle answer button
  const handleSubmit = (answer) => {
    setShowCorrectAnswer(true)

    // Update practice status
    updatePracticeStatus(questionDetail.id, true);

    // Set practice status to true
    setIsPracticed(true);
    console.log(`Answered: ${answer}`);
  };
  // split string into words
  const renderWords = (text) => {
    return text.split(" ").map((word, index) => (
      <Typography variant='h7' key={index} component="span" sx={{ mr: 0.5, fontWeight:'medium', color:grey[800] }}>
        {word}
      </Typography>
    ));
  };

  return (
    <Box sx={{p: 2, width: '1200px', margin: 'auto', textAlign: 'center', pb:10,}}>
      {/* CardHeader */}
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        currentIndex={currentIndex}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
        isPracticed={isPracticed}
      />
      {/* question */}
      <Box sx={{m: 4,}}>
        <Typography variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Complete the sentence with the correct word.')}
        </Typography>
      </Box>
       {/* Card content */}
      <Paper variant="outlined" sx={{ mx:16,my:6,px:6,py:8,}}>
       <Box sx={{
        wordBreak: "break-word" ,
        display:"flex",
        flexWrap:"wrap",
         lineHeight:2.2,
         }}>
         {renderWords(parts[0])}
         {/* blanks */}
         <Box sx={{pr:1, 
            display:'flex',
            flexDirection:'column',
            justifyContent:'start', 
         }}>
            <Grid item sx={{
              // display:'inline-block',
            mb: showCorrectAnswer?4:0,
            position: 'relative',}}>
              {clues.map((clue, index) => (
                <React.Fragment key={index}>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={answers[index] || clue || ""}
                    onInput={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    style={{
                      width: "24px",
                      height:'28px',
                      textAlign: "center",
                      marginRight: "-1px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      backgroundColor: clue !== null ? grey[100] : "white",
                      borderRadius:
                        index === 0
                          ? "4px 0 0 4px" // first 
                          : index === clues.length - 1
                          ? "0 4px 4px 0" // last
                          : "0", // others
                      color: clue !== null ? "black" : "inherit",
                      pointerEvents: clue !== null ? "none" : "auto", // disable the input
                      
                    }}
                    disabled={clue !== null}
                  />
                  {/* answer */}
                  {index === clues.length - 1 && showCorrectAnswer && (
                    <Box
                    sx={{
                      position: "absolute",
                      ml:'6px',
                      width: "100%",
                    }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "green",  
                        fontWeight: "bold",
                        whiteSpace: 'nowrap',
                        letterSpacing: "14px", // Adjust the distance between letters
                      }}
                    >
                      {questionDetail.referenceAnswer}
                    </Typography>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Grid>
        </Box>
        {renderWords(parts[1])}
        </Box>
      </Paper>

      {/* answer button */}
      <Box gutterBottom sx={{display: 'flex',pb: 4,justifyContent: 'space-evenly',}}>
          <AnswerButton text='Submit' onClick={handleSubmit} />
      </Box>
    </Box>
  );
};


FillInTheBlanksCard.propTypes = {
  questionId: PropTypes.number.isRequired,
  setCurrentQuestionId: PropTypes.func.isRequired,
  setCurrentSubmoduleId: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default FillInTheBlanksCard;
