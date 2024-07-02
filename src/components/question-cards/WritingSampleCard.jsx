import PropTypes from "prop-types";
import { Box, Typography, Divider,TextField } from "@mui/material";
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";

const WritingSampleCard = ({
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
    console.log("questionImageUrl:", questionDetail.questionImageUrl);
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
          mx: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
        >
          {t("Write about the topic below for 5 minutes.")}
        </Typography>
      </Box >
      {/* question text */}
      <Box sx={{display:'flex', justifyContent:'center',px:4,pt:2,pb:6}}>
        <Typography sx={{width:"400px", textAlign:'left'}}>{questionDetail.questionText}</Typography>
        <Box sx={{display:'flex',flexDirection:'column', alignItems:'start',px: 2, }}>
            <TextField
                multiline
                rows={12}
                placeholder={t("Your response")}
                sx={{ width: "500px" }}/>
            <Typography sx={{ mt: 1, color: grey[700],fontSize:'14px'}}>
            {t("At least 50 words. Recommended word count: 120+.")}
            </Typography>
        </Box>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          pr:18,
          pb: 4,
          justifyContent: "end",
        }}
      >
        <AnswerButton text="CONTINUE AFTER 3 MINUTES" onClick={handleRecord} sx={{minWidth:'280px'}}/>
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

WritingSampleCard.propTypes = {
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

export default WritingSampleCard;
