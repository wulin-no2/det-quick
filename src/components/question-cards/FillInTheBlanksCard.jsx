import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Paper, Grid } from "@mui/material";
import CardHeader from "../common/question-card-components/CardHeader";
import AnswerButton from "../common/AnswerButton";
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";
import { grey, green, red } from "@mui/material/colors";

const FillInTheBlanksCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const parts = questionDetail.sentenceTemplate.split("{}");
  const clues = questionDetail.clues[0];
  const [answers, setAnswers] = useState(Array(clues.length).fill(""));
  const [backgroundColors, setBackgroundColors] = useState(
    Array(clues.length).fill("white")
  );
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const inputRefs = useRef([]);

  const [isPracticed, setIsPracticed] = useState(
    questionDetail.isPracticed || false
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (questionDetail.isPracticed) {
      setIsPracticed(true);
    }
  }, [questionDetail]);

  const getNextEnabledInput = (index) => {
    for (let i = index + 1; i < inputRefs.current.length; i++) {
      if (inputRefs.current[i] && !inputRefs.current[i].disabled) {
        return inputRefs.current[i];
      }
    }
    return null;
  };

  const getPreviousEnabledInput = (index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (inputRefs.current[i] && !inputRefs.current[i].disabled) {
        return inputRefs.current[i];
      }
    }
    return null;
  };

  const handleInputChange = (index, event) => {
    const latestChar = event.nativeEvent.data || "";
    if (latestChar) {
      const newAnswers = [...answers];
      newAnswers[index] = latestChar;
      setAnswers(newAnswers);
      if (index < clues.length - 1) {
        const nextInput = getNextEnabledInput(index);
        if (nextInput) {
          setTimeout(() => nextInput.focus(), 0);
        }
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "ArrowRight" && index < clues.length - 1) {
      const nextInput = getNextEnabledInput(index);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (event.key === "ArrowLeft" && index > 0) {
      const prevInput = getPreviousEnabledInput(index);
      if (prevInput) {
        prevInput.focus();
      }
    } else if (event.key === "Backspace" || event.key === "Delete") {
      const newAnswers = [...answers];
      newAnswers[index] = "";
      setAnswers(newAnswers);
      if (index > 0) {
        const prevInput = getPreviousEnabledInput(index);
        if (prevInput) {
          prevInput.focus();
        }
      }
      event.preventDefault();
    }
  };

  const handleSubmit = () => {
    if (buttonText === "Submit") {
      setShowCorrectAnswer(true);

      // Update practice status
      updatePracticeStatus(questionDetail.id, true);
      setIsPracticed(true);

      // Compare user input with correct answer and update background colors
      const newBackgroundColors = answers.map((answer, index) =>
        clues[index] !== null
          ? grey[100]
          : answer === questionDetail.referenceAnswer[index]
          ? green[100]
          : red[100]
      );
      setBackgroundColors(newBackgroundColors);
      setButtonText("Solve Again");
    } else {
      // Reset the state to initial state
      setShowCorrectAnswer(false);
      setAnswers(Array(clues.length).fill(""));
      setBackgroundColors(Array(clues.length).fill("white"));
      setButtonText("Submit");
    }
  };

  const renderWords = (text) => {
    return text.split(" ").map((word, index) => (
      <Typography
        variant="h7"
        key={index}
        component="span"
        sx={{ mr: 0.5, fontWeight: "medium", color: grey[800] }}
      >
        {word}
      </Typography>
    ));
  };

  if (!questionDetail) {
    return <div></div>;
  }

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        pb: 2,
        minHeight:'700px',
      }}
    >
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
        isPracticed={isPracticed}
      />
      <Box sx={{ m: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}
        >
          {t("Complete the sentence with the correct word.")}
        </Typography>
      </Box>
      <Paper variant="outlined" sx={{ mx: 16, my: 6, px: 6, py: 8 }}>
        <Box
          sx={{
            wordBreak: "break-word",
            display: "flex",
            flexWrap: "wrap",
            lineHeight: 2.2,
          }}
        >
          {renderWords(parts[0])}
          <Box
            sx={{
              pr: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Grid
              item
              sx={{ mb: showCorrectAnswer ? 4 : 0, position: "relative" }}
            >
              {clues.map((clue, index) => (
                <React.Fragment key={index}>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={answers[index] || clue || ""}
                    onInput={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    style={{
                      width: "24px",
                      height: "28px",
                      textAlign: "center",
                      marginRight: "-1px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      backgroundColor:
                        clue !== null ? grey[100] : backgroundColors[index],
                      borderRadius:
                        index === 0
                          ? "4px 0 0 4px"
                          : index === clues.length - 1
                          ? "0 4px 4px 0"
                          : "0",
                      color: clue !== null ? "black" : "inherit",
                      pointerEvents: clue !== null ? "none" : "auto",
                    }}
                    disabled={clue !== null}
                  />
                  {index === clues.length - 1 && showCorrectAnswer && (
                    <Box
                      sx={{ position: "absolute", ml: "6px", width: "100%" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "green",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          letterSpacing: "12px",
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
      <Box
        gutterBottom
        sx={{ display: "flex", pb: 4, justifyContent: "space-evenly" }}
      >
        <AnswerButton text={t(buttonText)} onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

FillInTheBlanksCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default FillInTheBlanksCard;
