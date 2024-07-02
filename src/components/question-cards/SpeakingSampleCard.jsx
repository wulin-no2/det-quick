import PropTypes from "prop-types";
import { Box, Typography, Divider, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";

const SpeakingSampleCard = ({
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
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  // Handle reference answer button click
  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  // handle answer buttons
  const handleRecord = () => {
    console.log("Recording..");
  };

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        mb: 2,
      }}
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
      />
      {/* question */}
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
          {t("Speak about the topic below for 3 minutes.")}
        </Typography>
      </Box>
      {/* question text */}
      <Box
        sx={{
          my: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper variant="outlined" sx={{ py: 2, px: 6, maxWidth: "600px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              opacity: 0.88,
              textAlign: "left",
            }}
          >
            {questionDetail.questionText}
          </Typography>
        </Paper>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 4,
        }}
      >
        <AnswerButton text={t("Record Now")} onClick={handleRecord} />
        <Typography sx={{ mt: 1, color: grey[700] ,fontSize:'14px'}}>
          {t("Recommended minimum word count: 250")}
        </Typography>
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

SpeakingSampleCard.propTypes = {
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

export default SpeakingSampleCard;
