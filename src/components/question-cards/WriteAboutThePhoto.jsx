import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReferenceButton from "../common/ReferenceButton";
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
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { t } = useTranslation();
  const textFieldRef = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
    console.log("questionImageUrl:", questionDetail?.questionImageUrl);
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

  const countWords = (text) => {
    text = text.trim();
    if (!text) return 0;
    const wordArray = text.match(/[\w\d\p{L}]+/gu);
    return wordArray ? wordArray.length : 0;
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setUserAnswer(inputText);
    setWordCount(countWords(inputText));
  };

  if (!questionDetail) {
    return null;
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
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 4, // 间距设为4，可根据需要调整
          mt: 4, // 上边距
          mx: "auto", // 水平居中
          maxWidth: "900px", // 控制最大宽度
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {t("Write a description of the image below for 1 minute.")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // 在小屏幕下列布局，大屏幕下行布局
            gap: 4, // 项间距
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
            {questionDetail.questionImageUrl ? (
              <img
                src={questionDetail.questionImageUrl}
                style={{ maxWidth: "80%", height: "auto" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg";
                }}
                alt="Question"
              />
            ) : (
              <Typography variant="h6" color="error">
                {t("Image not available")}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: { xs: "100%", md: "100%" }, textAlign: "left" }}>
            <TextField
              label={t("Write your answer")}
              multiline
              rows={8}
              variant="outlined"
              value={userAnswer}
              onChange={handleInputChange}
              sx={{ width: "100%", mb: 2 }}
              inputRef={textFieldRef}
              error={!!error}
              helperText={error}
            />
            <Typography variant="body2">
              {t("Word count")}: {wordCount}
            </Typography>
            <Typography variant="body2" sx={{ color: "green" }}>
              {t("Recommended minimum word count")}: 30
            </Typography>
            <Button
              variant="contained"
              onClick={handleSubmitAnswer}
              sx={{ mt: 2 }}
            >
              {t("Submit Answer")}
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto", mt: 4 }} />
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
