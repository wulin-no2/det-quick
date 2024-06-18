import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import CardHeader from '../common/common-card-components/CardHeader';
import AnswerButton from '../common/common-card-components/AnswerButton';
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";

const ReadAndCompleteCard = ({
  count,
  currentIndex,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const parts = questionDetail.sentenceTemplate.split('{}');
  const [answers, setAnswers] = useState(questionDetail.blankList.map(blank =>
    blank.clues.map(clue => clue || '')
  ));
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const inputRefs = useRef(questionDetail.blankList.map(blank => Array(blank.clues.length).fill(null)));
  const nextFocusRef = useRef(null);

  useEffect(() => {
    if (nextFocusRef.current) {
      // Use requestAnimationFrame to ensure focus is set after state updates
      requestAnimationFrame(() => {
        nextFocusRef.current.focus();
        nextFocusRef.current = null;
      });
    }
  }, [answers]);

  // Function to get the next enabled input field
  const getNextEnabledInput = (placeholderIndex, charIndex) => {
    for (let i = placeholderIndex; i < inputRefs.current.length; i++) {
      for (let j = (i === placeholderIndex ? charIndex : 0); j < inputRefs.current[i].length; j++) {
        if (inputRefs.current[i][j] && !inputRefs.current[i][j].disabled) {
          return inputRefs.current[i][j];
        }
      }
    }
    return null;
  };

  // Function to get the previous enabled input field
  const getPreviousEnabledInput = (placeholderIndex, charIndex) => {
    for (let i = placeholderIndex; i >= 0; i--) {
      for (let j = (i === placeholderIndex ? charIndex : inputRefs.current[i].length - 1); j >= 0; j--) {
        if (inputRefs.current[i][j] && !inputRefs.current[i][j].disabled) {
          return inputRefs.current[i][j];
        }
      }
    }
    return null;
  };

  const handleInputChange = (placeholderIndex, charIndex, event) => {
    const newAnswers = answers.map((answerGroup, idx) =>
      idx === placeholderIndex
        ? answerGroup.map((char, i) =>
          i === charIndex ? event.target.value.slice(-1) : char
        )
        : answerGroup
    );
    setAnswers(newAnswers);

    if (event.target.value) {
      nextFocusRef.current = getNextEnabledInput(placeholderIndex, charIndex + 1);
    }
  };

  const handleKeyDown = (placeholderIndex, charIndex, event) => {
    if (event.key === 'ArrowRight') {
      nextFocusRef.current = getNextEnabledInput(placeholderIndex, charIndex + 1);
      if (nextFocusRef.current) {
        requestAnimationFrame(() => nextFocusRef.current.focus());
      }
    } else if (event.key === 'ArrowLeft') {
      nextFocusRef.current = getPreviousEnabledInput(placeholderIndex, charIndex - 1);
      if (nextFocusRef.current) {
        requestAnimationFrame(() => nextFocusRef.current.focus());
      }
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      const newAnswers = answers.map((answerGroup, idx) =>
        idx === placeholderIndex
          ? answerGroup.map((char, i) => (i === charIndex ? '' : char))
          : answerGroup
      );
      setAnswers(newAnswers);

      nextFocusRef.current = getPreviousEnabledInput(placeholderIndex, charIndex - 1);
      if (nextFocusRef.current) {
        requestAnimationFrame(() => nextFocusRef.current.focus());
      }
      event.preventDefault(); // Prevent default behavior
    }
  };

  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);
  const { t } = useTranslation();

  // Initialize practice status
  useEffect(() => {
    if (questionDetail.isPracticed) {
      setIsPracticed(true);
    }
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  // Handle submit button click
  const handleSubmit = (answer) => {
    setShowCorrectAnswer(!showCorrectAnswer);

    // Update practice status
    updatePracticeStatus(questionDetail.id, true);

    // Set practice status to true
    setIsPracticed(true);
  };

  return (
    <Box
      sx={{ p: 2, width: '1200px', margin: 'auto', textAlign: 'center', pb: 10 }}
    >
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
      {/* Question section */}
      <Box sx={{ m: 4 }}>
        <Typography variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Type the missing letters to complete the text below.')}
        </Typography>
      </Box>

      {/* Card content */}
      <Paper variant="outlined"
        sx={{
          wordBreak: "break-word",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "center",
          mx: 16, my: 4, px: 4, py: 2,
          textAlign: 'left'
        }}
      >
        {/* Blanks section */}
        <Box sx={{
          lineHeight: 2.2,
          position: 'relative',
        }}>
          {parts.map((part, index) => (
            <React.Fragment key={`part-${index}`}>
              <Typography variant='h7' component="span" sx={{ mr: 0.5, fontWeight: 'medium', color: grey[800] }}>
                {part}
              </Typography>
              <Grid item sx={{ display: 'inline-block', mr: 0.5, mb: showCorrectAnswer ? 4 : 0 }}>
                {/* Input fields */}
                {index < parts.length - 1 &&
                  questionDetail.blankList[index].clues.map((clue, clueIndex) => (
                    <input
                      key={`input-${index}-${clueIndex}`}
                      ref={el => {
                        if (el) inputRefs.current[index][clueIndex] = el;
                      }}
                      type="text"
                      value={answers[index][clueIndex]}
                      onChange={(event) => handleInputChange(index, clueIndex, event)}
                      onKeyDown={(event) => handleKeyDown(index, clueIndex, event)}
                      style={{
                        width: "24px",
                        height: '28px',
                        textAlign: "center",
                        marginRight: "-1px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        backgroundColor: clue !== null ? grey[100] : "white",
                        borderRadius:
                          clueIndex === 0
                            ? "4px 0 0 4px" // First character
                            : clueIndex === questionDetail.blankList[index].clues.length - 1
                              ? "0 4px 4px 0" // Last character
                              : "0", // Other characters
                        color: clue !== null ? "black" : "inherit",
                        pointerEvents: clue !== null ? "none" : "auto", // Disable input field
                      }}
                      disabled={clue !== null}
                    />
                  ))}
                {/* Display correct answers */}
                {index < parts.length - 1 && showCorrectAnswer && (
                  <Box
                    sx={{
                      position: 'absolute',
                      ml: '-10px',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "green", ml: 2,
                        fontWeight: "bold",
                        whiteSpace: 'nowrap',
                        letterSpacing: "15px", // Adjust letter spacing
                      }}>
                      {questionDetail.blankList[index].answer}
                    </Typography>
                  </Box>
                )}
              </Grid>
            </React.Fragment>
          ))}
        </Box>
      </Paper>
      {/* Submit button */}
      <Box gutterBottom sx={{ display: 'flex', pb: 4, justifyContent: 'space-evenly', }}>
        <AnswerButton text={t('Submit')} onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

ReadAndCompleteCard.propTypes = {
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

export default ReadAndCompleteCard;









