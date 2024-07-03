import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { grey } from "@mui/material/colors";

const WriteAboutThePhotoCard = ({
  count,
  currentIndex,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const textFieldRef = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
    console.log("questionImageUrl:", questionDetail.questionImageUrl);
  }, [questionDetail]);

  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  const handleUserAnswerClick = () => {
    setShowUserAnswer(!showUserAnswer);
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      setError(t("Answer cannot be empty, Please write the answer."));
      return;
    }
    console.log("User answer submitted:", userAnswer);
    setError("");
    setSubmittedAnswer(userAnswer);
    setUserAnswer("");
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
        mb: 2,
      }}
    >
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        currentIndex={currentIndex}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
          m: 4,
        }}
      >
        <Box sx={{ width: "45%" }}>
          {questionDetail.questionImageUrl ? (
            <img
              src={questionDetail.questionImageUrl}
              style={{ width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
              }}
            />
          ) : (
            <Typography variant="h6" color="error">
              {t("Image not available")}
            </Typography>
          )}
        </Box>
        <Box sx={{ width: "45%", textAlign: "left" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
          >
            {t("Write about the image below.")}
          </Typography>
          <TextField
            label={t("Write your answer")}
            multiline
            rows={8}
            variant="outlined"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            sx={{ width: "100%", mb: 2 }}
            inputRef={textFieldRef}
            error={!!error}
            helperText={error}
          />
          <Button variant="contained" onClick={handleSubmitAnswer}>
            {t("Submit Answer")}
          </Button>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto" }} />
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ReferenceButton
            text="Reference Answer"
            onClick={handleReferenceAnswerClick}
          />
          {submittedAnswer && (
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
              {submittedAnswer}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

WriteAboutThePhotoCard.propTypes = {
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default WriteAboutThePhotoCard;
