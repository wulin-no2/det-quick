import PropTypes from "prop-types";
import { Box, Typography, Divider, List, ListItem, Paper } from "@mui/material";
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState } from "react";

const ReadThenSpeakCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const { t } = useTranslation();

  // Split the question text by the first bullet point
  const firstBulletIndex = questionDetail.questionText.indexOf("•");
  const mainQuestion = questionDetail.questionText
    .slice(0, firstBulletIndex)
    .trim();
  const subQuestions = questionDetail.questionText
    .slice(firstBulletIndex)
    .split("•")
    .map((item) => item.trim())
    .filter((item) => item);

  if (!questionDetail) {
    return <div></div>;
  }

  // Handle reference answer button click
  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  // handle answer buttons
  const handleRecord = () => {
    console.log("record..");
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
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
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
          {t("Speak about the topic below for 90 seconds.")}
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
            {mainQuestion}
          </Typography>
          <List sx={{ textAlign: "left" }}>
            {subQuestions.map((line, index) => (
              <ListItem key={index} sx={{ px: 1, py: 0.6 }}>
                <Typography
                  variant="h8"
                  sx={{
                    fontWeight: "medium",
                    opacity: 1,
                  }}
                >
                  • {line}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          pt: 2,
          pb: 4,
          justifyContent: "space-evenly",
        }}
      >
        <AnswerButton text="Record Now" onClick={handleRecord} />
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

ReadThenSpeakCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadThenSpeakCard;
