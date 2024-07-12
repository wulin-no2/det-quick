import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField } from "@mui/material";
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
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const { t } = useTranslation();
  const textFieldRef = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

  const handleUserAnswerClick = () => {
    setShowUserAnswer(!showUserAnswer);
  };

  const handleSubmit = () => {
    if (textFieldRef.current) {
      setUserAnswer(textFieldRef.current.value);
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
      {/* question */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: 4,
          my: 2
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
        >
          {t("Write about the topic below for 5 minutes.")}
        </Typography>
      </Box>
      {/* question text */}
      <Box sx={{ display: 'flex', justifyContent: 'center', px: 4, pt: 2, pb: 4 }}>
        <Typography variant='h7' sx={{ width: "400px", textAlign: 'left', my: 2, fontWeight: 'medium', lineHeight: 1.8 }}>
          {questionDetail.questionText}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', px: 2, }}>
          <TextField
            multiline
            rows={10}
            placeholder={t("Your response")}
            sx={{ width: "500px" }}
            inputRef={textFieldRef}
          />
          <Typography sx={{ mt: 1, color: grey[700], fontSize: '14px' }}>
            {t("At least 50 words. Recommended word count: 120+.")}
          </Typography>
        </Box>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          pr: 18,
          pb: 3,
          justifyContent: "end",
        }}
      >
        <AnswerButton text="Submit" onClick={handleSubmit} sx={{ minWidth: '280px' }} />
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

InteractiveWritingCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveWritingCard;

