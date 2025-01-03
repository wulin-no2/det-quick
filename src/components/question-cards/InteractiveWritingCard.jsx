import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useEffect } from "react";
import { grey } from "@mui/material/colors";

const InteractiveWritingCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showPart1ReferenceAnswer, setShowPart1ReferenceAnswer] = useState(false);
  const [showPart2ReferenceAnswer, setShowPart2ReferenceAnswer] = useState(false);
  const [userAnswer1, setUserAnswer1] = useState("");
  const [userAnswer2, setUserAnswer2] = useState("");
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const [showPartTwo, setShowPartTwo] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const { t } = useTranslation();
  const textFieldRef1 = useRef(null);
  const textFieldRef2 = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  useEffect(() => {
    if (questionDetail && questionDetail.partTwoData) {
      const randomIndex = Math.floor(Math.random() * questionDetail.partTwoData.length);
      setRandomQuestion(questionDetail.partTwoData[randomIndex]);
    }
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  const handlePart1ReferenceAnswerClick = () => {
    setShowPart1ReferenceAnswer(!showPart1ReferenceAnswer);
  };

  const handlePart2ReferenceAnswerClick = () => {
    setShowPart2ReferenceAnswer(!showPart2ReferenceAnswer);
  };

  const handleUserAnswerClick = () => {
    setShowUserAnswer(!showUserAnswer);
  };

  const handleSubmitPartOne = () => {
    if (textFieldRef1.current) {
      setUserAnswer1(textFieldRef1.current.value);
      setShowPartTwo(true);
    }
  };

  const handleSubmitPartTwo = () => {
    if (textFieldRef2.current) {
      setUserAnswer2(textFieldRef2.current.value);
    }
  };

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        pb: 2,
        minHeight: '700px',
      }}
    >
      {/* CardHeader */}
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
      />
      {/* question area */}
      <Grid container sx={{ px: 6 }}>
        {/* question1 */}
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: 'start',
              my: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'start' }}>
              <Typography variant="h6" sx={{ display: 'flex', backgroundColor: "#357af5", color: 'white', width: 28, height: 28, borderRadius: 15, textAlign: 'center', alignItems: 'center', justifyContent: 'center', mx: 1, fontWeight: "bold" }}>1</Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", opacity: 0.92 }}
              >
                {t("Write about the topic below for 5 minutes.")}
              </Typography>
            </Box>
            {/* question1 data */}
            <Typography variant='h7' sx={{ width: "92%", textAlign: 'left', pt: 2, fontWeight: 'medium', lineHeight: 1.5, px: 1 }}>
              {questionDetail.partOneData.question}
            </Typography>
            {/* question1 textField */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: "98%", pt: 2 }}>
              <TextField
                multiline
                rows={12}
                placeholder={t("Your response")}
                sx={{ width: "100%" }}
                inputRef={textFieldRef1}
                disabled={showPartTwo}
              />
              <Typography sx={{ mt: 1, color: grey[700], fontSize: '14px' }}>
                {t("Recommended word count: 120+")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* question2 */}
        {randomQuestion && (
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'end',
                my: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'start', px: 1, opacity: showPartTwo ? 0.9 : 0.6 }}>
                <Typography variant="h6" sx={{ display: 'flex', backgroundColor: "#357af5", color: 'white', width: 28, height: 28, borderRadius: 15, textAlign: 'center', alignItems: 'center', justifyContent: 'center', mx: 1, fontWeight: "bold", opacity: showPartTwo ? 0.9 : 0.6 }}>2</Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", opacity: 0.92 }}
                >
                  {t("Write a follow-up response for 3 minutes.")}
                </Typography>
              </Box>
              {/* question2 data */}
              {showPartTwo && (
                <Typography variant='h7' sx={{ width: "92%", textAlign: 'left', pt: 2, fontWeight: 'medium', lineHeight: 1.5, alignSelf: 'start', px: 2 }}>
                  {randomQuestion.question}
                </Typography>)
              }
              {/* question2 textField */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: "98%", pt: 2 }}>
                <TextField
                  multiline
                  rows={12}
                  placeholder={t("Your response")}
                  sx={{ width: "100%" }}
                  inputRef={textFieldRef2}
                  disabled={!showPartTwo}
                />
                <Typography sx={{ mt: 1, color: grey[700], fontSize: '14px', opacity: showPartTwo ? 0.9 : 0.6 }}>
                  {t("Recommended word count: 90+")}
                </Typography>
              </Box>
              {!showPartTwo && (
                <Box
                  gutterBottom
                  sx={{
                    display: "flex",
                    pt: 6,
                    justifyContent: "end",
                  }}
                >
                  <AnswerButton text="Next" onClick={handleSubmitPartOne} sx={{ minWidth: '280px' }} />
                </Box>
              )}
              {showPartTwo && (
                <Box
                  gutterBottom
                  sx={{
                    display: "flex",
                    pt: 6,
                    justifyContent: "end",
                  }}
                >
                  <AnswerButton text="Submit" onClick={handleSubmitPartTwo} sx={{ minWidth: '280px' }} />
                </Box>
              )}
            </Box>
          </Grid>
        )}
      </Grid>
      {/* Divider */}
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto" }} />
      {/* reference answer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "end",
          m: 2,
          p: 2,
          bgcolor: "grey.100",
          width: "96%",
          mx: "auto",
          borderRadius: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ReferenceButton
            text="Part1 Reference Answer"
            onClick={handlePart1ReferenceAnswerClick}
          />
          <ReferenceButton
            text="Part2 Reference Answer"
            onClick={handlePart2ReferenceAnswerClick}
          />
          {userAnswer1 && userAnswer2 && (
            <ReferenceButton
              text="Your Answer"
              onClick={handleUserAnswerClick}
            />
          )}
        </Box>
        {showPart1ReferenceAnswer && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              m: 2,
            }}
          >
            <Typography
              variant="h7"
              sx={{ textAlign: "left", p: 2, fontWeight: "bold" }}
            >
              {" - "}
              {t("Part1 Reference Answer")}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' }}>
              {'- Question: '}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 }}>
              {questionDetail.partOneData.question}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' ,pt:2}}>
              {'- Answer: '}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 }}>
              {questionDetail.partOneData.answer}
            </Typography>
          </Box>
        )}
        {showPart2ReferenceAnswer && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              m: 2,
            }}
          >
            <Typography
              variant="h7"
              sx={{ textAlign: "left", p: 2, fontWeight: "bold" }}
            >
              {" - "}
              {t("Part2 Reference Answer")}
            </Typography>
            {questionDetail.partTwoData.map((item, index) => (
              <Box key={index} sx={{ my: 2 }}>
                <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' }}>
                    {'- Question: '}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 }}>
                  {item.question}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' ,pt:2}}>
                 {'- Answer: '}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 }}>
                  {item.answer}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        {showUserAnswer && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              m: 2,
            }}
          >
            <Typography
              variant="h7"
              sx={{ textAlign: "left", p: 2, fontWeight: "bold" }}
            >
              {" - "}
              {t("Your Answer")}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' }}>
                    {'- Part1: '}
                </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10}}>
              {questionDetail.partOneData.question}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10,fontWeight:'bold' }}>
            {'Answer: '}{userAnswer1}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 ,fontWeight:'bold' ,pt:2}}>
                    {'- Part2: '}
                </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 }}>
              {randomQuestion && randomQuestion.question}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 10 ,fontWeight:'bold'}}>
            {'Answer: '}{userAnswer2}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

InteractiveWritingCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveWritingCard;




