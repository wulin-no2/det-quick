import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef,useEffect} from "react";
import { submitUserAnswer } from "../../api/api-fetchQuestionDetail";

const ListenAndTypeCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const { t } = useTranslation();
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(questionDetail.userAnswer || "");
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);

  const audioRef = useRef(null); // Create a reference for the audio element
  const textFieldRef = useRef(null);

  useEffect(() => {
    // If the question has already been practiced, immediately display the user's answer
    if (isPracticed && userAnswer) {
      setShowUserAnswer(true);
    }
  }, [isPracticed, userAnswer]);

  if (!questionDetail) {
    return <div></div>;
  }

  // Handle reference answer button click
  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  const handleUserAnswerClick = () => {
    setShowUserAnswer(!showUserAnswer);
  };

  // Handle image click to play/pause audio
  const handleImageClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

 // Handle answer submission
 const handleSubmit = async () => {
  const answer = textFieldRef.current ? textFieldRef.current.value : "";
  setUserAnswer(answer);

  // Submit the user's answer to the backend
  await submitUserAnswer(questionDetail.questionId, questionDetail.submoduleId, answer);

  // Mark the question as practiced
  setIsPracticed(true);
  setShowUserAnswer(true); // Display the user's answer after submission
};

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
      {/* CardHeader */}
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
        isPracticed={isPracticed}
      />
      {/* question */}
      <Box
        sx={{
          m: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}
        >
          {t("Type the statement that you hear.")}
        </Typography>
      </Box>
      {/* question text */}
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box>
            <img
              src="/ListenThenSpeak.png"
              onClick={handleImageClick}
              style={{ width: "160px", margin: "16px" }}
            />
            <audio ref={audioRef} src={questionDetail.questionAudioUrl} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <TextField
              multiline
              rows={6}
              placeholder={t("Your response")}
              sx={{ px: 2, width: "600px" }}
              inputRef={textFieldRef}
            />
            <Typography
              variant="h7"
              gutterBottom
              sx={{ opacity: 0.88, maxWidth: "500px", px: 2, pt: 1 }}
            >
              {t("You can listen to the question 3 times.")}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          pb: 4,
          pr: 27,
          justifyContent: "end",
        }}
      >
        <AnswerButton text="Submit" onClick={handleSubmit} />
      </Box>
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
            text="Reference Answer"
            onClick={handleReferenceAnswerClick}
          />
          {userAnswer && (
            <ReferenceButton
              text="Your Answer"
              onClick={handleUserAnswerClick}
            />
          )}
        </Box>
        {showReferenceAnswer && (
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
              {t("Reference Answer")}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 }}>
              {questionDetail.referenceAnswer}
            </Typography>
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
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 }}>
              {userAnswer}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

ListenAndTypeCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ListenAndTypeCard;

