import PropTypes from "prop-types";
import { Box, Paper, Grid, Typography, Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CardHeader from "../common/question-card-components/CardHeader";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import AudioButton from "../common/AudioButton";
import { grey, green, red } from "@mui/material/colors";

const InteractiveListeningCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const { t } = useTranslation();
  const [currentSequence, setCurrentSequence] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  const handleStart = () => {
    setCurrentSequence(1); // Start from the first sequence
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuestion.blankList.answer;
    setAnswers([...answers, { question: currentQuestion, answer: selectedAnswer, correct: isCorrect }]);
    setSelectedAnswer(null); // Reset selected answer for next question
    setAudioPlayed(false); // Reset audio played status for next question
    setCurrentSequence(prev => prev + 1);
  };

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleAudioEnd = () => {
    setAudioPlayed(true); // Set audio played status to true when audio ends
  };

  const handleSubmit = () => {
    // Submit logic here
  };

  const currentQuestion = questionDetail.sequences[currentSequence - 1];
  const isLastQuestion = currentSequence === questionDetail.sequences.length;

  const styles = {
    radio: {
      width: "100%",
      border: "1px solid",
      borderRadius: 1,
      padding: 1,
      mx: "auto",
      mb: 1,
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: grey[700],
    },
    unSelectedRadio: {
      borderColor: grey[300],
      backgroundColor: "white",
    },
    selectedRadio: {
      borderColor: "#357af5",
      backgroundColor: "#e3f2fd", // Light blue background
    },
    radioControl: {
      "&.MuiRadio-root": {
        color: grey[300],
      },
      "&.MuiRadio-root.Mui-checked": {
        color: "#357af5", // Match border color
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1.2rem",
      },
    },
    correctAnswer: {
      backgroundColor: green[100],
      borderColor: green[500],
      padding: "10px",
      borderRadius: "8px",
      border: "2px solid",
      marginTop: "12px",
      textAlign: "left",
    },
    incorrectAnswer: {
      backgroundColor: red[100],
      borderColor: red[500],
      padding: "10px",
      borderRadius: "8px",
      border: "2px solid",
      marginTop: "12px",
      textAlign: "left",
    },
    strikeThrough: {
      textDecoration: "line-through",
    },
  };

  const renderQuestionAudio = (audioSrc) => (
    <Box sx={{ alignSelf: 'self-start', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
      <img
        src="/listeningAvatar.png"
        style={{
          width: "64px",
          borderRadius: 1,
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', color: grey[500] }}>
        <Typography sx={{ px: 1, pb: 1, color: grey[600], fontSize: '14px' }}>
          {t('Listen closely! You can only play the audio clips once.')}
        </Typography>
        <AudioButton
          audioSrc={audioSrc}
          onEnded={handleAudioEnd}
          sx={{ borderColor: '#3b5d87', color: '#3b5d87' }}
        />
      </Box>
    </Box>
  );

  const renderAnswerOptions = () => (
    <Box
      sx={{
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: grey[300],
        borderRadius: 2,
        p: 2,
        minWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
      }}
    >
      <Typography sx={{ alignSelf: 'self-start', fontSize: '14px', opacity: 0.58, pb: 0.5 }}>
        {t('Question ')}{currentSequence}{t(' of ')}{questionDetail.sequences.length}
      </Typography>
      <Typography variant="h7" sx={{ alignSelf: 'self-start', fontWeight: 'bold', opacity: 0.78 }}>
        {t('Select the best response.')}
      </Typography>
      <RadioGroup value={selectedAnswer} onChange={handleOptionChange} sx={{ my: 2, width: '100%' }}>
        {currentQuestion.blankList.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio sx={styles.radioControl} />}
            label={option}
            sx={{
              ...styles.radio,
              ...(selectedAnswer === option ? styles.selectedRadio : styles.unSelectedRadio),
            }}
          />
        ))}
      </RadioGroup>
      <Button
        variant="contained"
        onClick={isLastQuestion ? handleSubmit : handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {isLastQuestion ? t("Submit") : t("Next")}
      </Button>
    </Box>
  );

  const renderAnswerResult = (answer) => (
    <Box
      sx={{
        mb: 2,
        justifyContent: 'end',
        width: '600px',
        backgroundColor: answer.correct ? green[50] : red[50],
        border: `1px solid ${answer.correct ? green[500] : red[500]}`,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        py: 2,
        px: 3,
        fontWeight: 'medium',
      }}
    >
      {/* your answer */}
      <Typography variant="body1">
        <span style={answer.correct ? {} : styles.strikeThrough}>{answer.answer}</span>
      </Typography>
      {/* correct answer */}
      {!answer.correct && (
        <Box>
          <Typography sx={{ fontSize: '12px', py: 1 }}>{t('Best Answer:')}</Typography>
          <Typography variant="body1">
            {answer.question.blankList.answer}
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        pb: 2,
        minHeight: '700px',
      }}>
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
      />
      {currentSequence === 0 ? (
        <Paper elevation={0} variant="outlined" sx={{ my: 2, mx: 3, bgcolor: grey[50], borderRadius: 2 }}>
          <Grid container>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
              <img
                src="/interactiveListening.png"
                style={{
                  width: "100%",
                  borderRight: '1px solid',
                  borderColor: grey[300],
                  borderRadius: "8px 0 0 8px"
                }}
              />
            </Grid>
            <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', pl: 4, pr: 8 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", opacity: 0.92 }}>
                {t("You will participate in a conversation about the scenario below.")}
              </Typography>
              <Typography variant="h7" gutterBottom sx={{ fontWeight: 'medium', textAlign: 'start', minWidth: "500px", lineHeight: 1.8, bgcolor: 'white', p: 4, border: "1px solid", borderColor: grey[300], borderRadius: 2, mt: 2 }}>
                {t(questionDetail.bgInfo)}
              </Typography>
              <Box gutterBottom sx={{ display: "flex", pt: 6, justifyContent: "end" }}>
                <AnswerButton text="Start" onClick={handleStart} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Paper elevation={0} variant="outlined" sx={{ my: 2, mx: 3, bgcolor: grey[50], borderRadius: 2, display: 'flex' }}>
          <Grid container>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
              <img
                src="/interactiveListening.png"
                style={{
                  width: "100%",
                  borderRight: '1px solid',
                  borderColor: grey[300],
                  borderRadius: "8px 0 0 8px"
                }}
              />
            </Grid>
            <Grid item xs={8} sx={{ height: '100%', overflowY: 'auto' }}>
              {/* background area */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', pt: 3 }}>
                <Typography variant="h7" gutterBottom sx={{ fontWeight: "bold", opacity: 0.92, pb: 1 }}>
                  {t("You will participate in a conversation about the scenario below.")}
                </Typography>
                <Typography gutterBottom sx={{
                  fontSize: '16px', fontWeight: 'medium', textAlign: 'start', minWidth: "500px", lineHeight: 1.5, px: 4,
                }}>
                  {t(questionDetail.bgInfo)}
                </Typography>
              </Box>
              {/* answers */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'end', p: 2 }}>
                {answers.map((answer, index) => (
                  <Box key={index} sx={{ mb: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                    {/* question area */}
                    {answer.question.questionAudioUrl && (
                      <Box sx={{ alignSelf: 'self-start', display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                        <img
                          src="/listeningAvatar.png"
                          style={{
                            width: "64px",
                            borderRadius: 1,
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', color: grey[500] }}>
                          <AudioButton
                            disabled
                            sx={{ borderColor: grey[500], color: grey[500] }}
                          />
                        </Box>
                      </Box>
                    )}
                    {/* answer area */}
                    {renderAnswerResult(answer)}
                  </Box>
                ))}
                {/* current question */}
                {currentQuestion && (
                  <>
                    {currentQuestion.questionAudioUrl && !audioPlayed && renderQuestionAudio(currentQuestion.questionAudioUrl)}
                    {audioPlayed && (
                      <Box sx={{ alignSelf: 'self-start', display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                        <img
                          src="/listeningAvatar.png"
                          style={{
                            width: "64px",
                            borderRadius: 1,
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', color: grey[500] }}>
                          <AudioButton
                            disabled
                            sx={{ borderColor: grey[500], color: grey[500] }}
                          />
                        </Box>
                      </Box>
                    )}
                    {(audioPlayed || !currentQuestion.questionAudioUrl) && renderAnswerOptions()}
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

InteractiveListeningCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveListeningCard;



