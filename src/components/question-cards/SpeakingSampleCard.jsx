import PropTypes from "prop-types";
import { Box, Typography, Divider, Paper, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useCallback, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import AudioButton from "../common/AudioButton";
import { grey } from "@mui/material/colors";

const SpeakingSampleCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const { t } = useTranslation();
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const stopRecordingRef = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  const handleStartRecording = useCallback((startRecording) => {
    startRecording();
    setRecording(true);
  }, []);

  const handleStopRecording = useCallback((stopRecording) => {
    stopRecording();
    setRecording(false);
  }, []);

  useEffect(() => {
    if (!recording && mediaBlobUrl) {
      console.log("Recording stopped, mediaBlobUrl available");
    }
  }, [recording, mediaBlobUrl]);

  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
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
        <Paper variant="outlined" sx={{ py: 2, px: 6, width: "660px" ,textAlign: "left"}}>
          <Typography
            variant="h7"
            gutterBottom
            sx={{
              fontWeight: "medium",
              opacity: 0.88,
              fontSize:'16px',lineHeight:2
            }}
          >
            {questionDetail.questionText}
          </Typography>
        </Paper>
      </Box>
      {/* answer button */}
      <ReactMediaRecorder
        audio
        onStop={(blobUrl) => {
          console.log("Recording stopped, blobUrl:", blobUrl);
          setMediaBlobUrl(blobUrl);
        }}
        render={({ status, startRecording, stopRecording }) => {
          stopRecordingRef.current = () => {
            stopRecording();
            setRecording(false);
          };
          return (
            <>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 8, mb: 4, alignItems: "center", position: "relative" }}>
                {status === "recording" && (
                  <CircularProgress size={24} sx={{ position: "absolute", bottom: "88px" }} />
                )}
                <AnswerButton
                  text={status === "recording" ? "Stop Recording" : t("Record Now")}
                  onClick={() => {
                    if (status === "recording") {
                      handleStopRecording(stopRecording);
                    } else {
                      handleStartRecording(startRecording);
                    }}}/>
              
                <Typography sx={{ mt: 1, color: grey[700], fontSize: '14px' }}>
                  {t("Recommended minimum word count: 250")}
                </Typography>
              </Box>
            </>
          );
        }}
      />
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
          {mediaBlobUrl && (
            <Box sx={{ ml: 2 }}>
              <AudioButton
                text={t("Your Recording")}
                audioSrc={mediaBlobUrl}
              />
            </Box>
          )}
        </Box>
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
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default SpeakingSampleCard;
