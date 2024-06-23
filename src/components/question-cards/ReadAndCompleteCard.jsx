import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography, Grid, CircularProgress } from '@mui/material';
import { grey, green, red } from '@mui/material/colors';
import CardHeader from '../common/question-card-components/CardHeader';
import AnswerButton from '../common/question-card-components/AnswerButton';
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
  const [loading, setLoading] = useState(true);
  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);
  const { t } = useTranslation();

  useEffect(() => {
    if (questionDetail.isPracticed) {
      setIsPracticed(true);
    }
  }, [questionDetail]);

  useEffect(() => {
    if (questionDetail) {
      setLoading(false);
    }
  }, [questionDetail]);


  const validBlankList = questionDetail.blankList.map(blank => ({
    clues: blank.clues || [],
    answer: blank.answer || '',
  }));

  const parts = questionDetail.sentenceTemplate.split('{}');
  const [answers, setAnswers] = useState(validBlankList.map(blank =>
    blank.clues.map(clue => clue || '')
  ));
  const [backgroundColors, setBackgroundColors] = useState(validBlankList.map(blank => Array(blank.clues.length).fill('white')));
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [buttonText, setButtonText] = useState('Submit');
  const inputRefs = useRef(validBlankList.map(blank => Array(blank.clues.length).fill(null)));
  const nextFocusRef = useRef(null);

  useEffect(() => {
    if (nextFocusRef.current) {
      requestAnimationFrame(() => {
        nextFocusRef.current.focus();
        nextFocusRef.current = null;
      });
    }
  }, [answers]);
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!questionDetail || !questionDetail.sentenceTemplate || !questionDetail.blankList) {
    return <div></div>;
  }

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



  const handleSubmit = () => {
    if (buttonText === 'Submit') {
      setShowCorrectAnswer(true);

      // Update practice status
      updatePracticeStatus(questionDetail.id, true);
      setIsPracticed(true);

      // Compare user input with correct answer and update background colors
      const newBackgroundColors = answers.map((answerGroup, i) =>
        answerGroup.map((answer, j) =>
          validBlankList[i].clues[j] !== null ? grey[100] :
          answer === validBlankList[i].answer[j] ? green[100] : red[100]
        )
      );
      setBackgroundColors(newBackgroundColors);
      setButtonText('Solve Again');
    } else {
      // Reset the state to initial state
      setShowCorrectAnswer(false);
      setAnswers(validBlankList.map(blank =>
        blank.clues.map(clue => clue || '')
      ));
      setBackgroundColors(validBlankList.map(blank => Array(blank.clues.length).fill('white')));
      setButtonText('Submit');
    }
  };

  return (
    <Box sx={{ p: 2, width: '1200px', margin: 'auto', textAlign: 'center', pb: 10 }}>
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
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Type the missing letters to complete the text below.')}
        </Typography>
      </Box>

      <Paper variant="outlined" sx={{ wordBreak: "break-word", display: "flex", flexWrap: "wrap", justifyContent: "start", alignItems: "center", mx: 16, my: 4, px: 4, py: 2, textAlign: 'left' }}>
        <Box sx={{ lineHeight: 2.2, position: 'relative' }}>
          {parts.map((part, index) => (
            <React.Fragment key={`part-${index}`}>
              <Typography variant='h7' component="span" sx={{ mr: 0.5, fontWeight: 'medium', color: grey[800] }}>
                {part}
              </Typography>
              <Grid item key={`grid-${index}`} sx={{ display: 'inline-block', mr: 0.5, mb: showCorrectAnswer ? 4 : 0 }}>
                {index < parts.length - 1 &&
                  validBlankList[index]?.clues?.map((clue, clueIndex) => {
                    if (!inputRefs.current[index]) {
                      inputRefs.current[index] = []; // Ensure the array exists
                    }
                    return (
                      <input
                        key={`input-${index}-${clueIndex}`}
                        ref={el => {
                          if (el) inputRefs.current[index][clueIndex] = el;
                        }}
                        type="text"
                        value={answers[index]?.[clueIndex] || ''}
                        onChange={(event) => handleInputChange(index, clueIndex, event)}
                        onKeyDown={(event) => handleKeyDown(index, clueIndex, event)}
                        style={{
                          width: "24px",
                          height: '28px',
                          textAlign: "center",
                          marginRight: "-1px",
                          fontSize: "16px",
                          border: "1px solid #ccc",
                          backgroundColor: validBlankList[index]?.clues?.[clueIndex] !== null ? grey[100] : backgroundColors[index]?.[clueIndex] || 'white', // Set background color based on state
                          borderRadius:
                            clueIndex === 0
                              ? "4px 0 0 4px" // First character
                              : clueIndex === validBlankList[index]?.clues?.length - 1
                                ? "0 4px 4px 0" // Last character
                                : "0", // Other characters
                          color: validBlankList[index]?.clues?.[clueIndex] !== null ? "black" : "inherit",
                          pointerEvents: validBlankList[index]?.clues?.[clueIndex] !== null ? "none" : "auto", // Disable input field
                        }}
                        disabled={validBlankList[index]?.clues?.[clueIndex] !== null}
                      />
                    );
                  })}
                {index < parts.length - 1 && showCorrectAnswer && (
                  <Box sx={{ position: 'absolute', ml: '-10px' }}>
                    <Typography variant="body1" sx={{ color: "green", ml: 2, fontWeight: "bold", whiteSpace: 'nowrap', letterSpacing: "15px" }}>
                      {validBlankList[index]?.answer}
                    </Typography>
                  </Box>
                )}
              </Grid>
            </React.Fragment>
          ))}
        </Box>
      </Paper>
      <Box gutterBottom sx={{ display: 'flex', pb: 4, justifyContent: 'space-evenly' }}>
        <AnswerButton text={t(buttonText)} onClick={handleSubmit} />
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
















