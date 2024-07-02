import PropTypes from "prop-types";
import { Box, Typography, Divider, TextField } from "@mui/material";
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useEffect } from "react";

const ListenAndTypeCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const { t } = useTranslation();

  const audioRef = useRef(null); // Create a reference for the audio element

  useEffect(() => {
    console.log("question detail is", questionDetail);
    // console.log("questionImageUrl:", questionDetail.questionImageUrl);
  }, [questionDetail]);
  if (!questionDetail) {
    return <div></div>;
  }

  // Handle reference answer button click
  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
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
          <img
            src="/ListenThenSpeak.png"
            onClick={handleImageClick}
            style={{ width: "160px", margin: "16px" }}
          />
          <audio ref={audioRef} src={questionDetail.questionAudioUrl} />
          <TextField
            multiline
            rows={6}
            placeholder={t("Your response")}
            sx={{ px: 2, width: "450px" }}
          ></TextField>
        </Box>
        <Typography
          variant="h7"
          gutterBottom
          sx={{ opacity: 0.88, maxWidth: "500px", pt: 2 }}
        >
          {t("You can listen to the question 3 times.")}
        </Typography>
      </Box>
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
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

ListenAndTypeCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ListenAndTypeCard;
