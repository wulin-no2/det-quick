import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";

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
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    console.log("question detail is", questionDetail);
    console.log("questionImageUrl:", questionDetail.questionImageUrl);
  }, [questionDetail]);

  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      setError(t("Answer cannot be empty, Please write the answer."));
      return;
    }
    console.log("User answer submitted:", userAnswer);
    setError("");
    handleNext();
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
          flexDirection: "column",
          m: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
        >
          {t("Write about the image below.")}
        </Typography>
        {questionDetail.questionImageUrl ? (
          <img
            src={questionDetail.questionImageUrl}
            style={{ width: "300px", margin: "auto" }}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pb: 4,
        }}
      >
        <TextField
          label={t("Write your answer")}
          multiline
          rows={4}
          variant="outlined"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          sx={{ width: "80%", mb: 2 }}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" onClick={handleSubmitAnswer}>
          {t("Submit Answer")}
        </Button>
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
        <AnswerButton
          text="Reference Answer"
          onClick={handleReferenceAnswerClick}
        />
        {showReferenceAnswer && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 }}>
              {questionDetail.referenceAnswer}
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
