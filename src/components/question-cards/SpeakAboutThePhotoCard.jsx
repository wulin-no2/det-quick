import PropTypes from "prop-types";
import { Box, Typography, Divider, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useCallback, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import AudioButton from "../common/AudioButton";
import { submitUserAnswerWithFileUrl } from "../../api/api-fetchQuestionDetail";

const SpeakAboutThePhotoCard = ({
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
  const [isPracticed, setIsPracticed] = useState(
    questionDetail.isPracticed || false
  );

  useEffect(() => {
    // Load the previous recording if `isPracticed` is true and the recording URL is provided
    if (isPracticed && questionDetail.userRecordingUrl) {
      setMediaBlobUrl(questionDetail.userRecordingUrl);
    }
  }, [isPracticed, questionDetail.userRecordingUrl]);

  const handleStartRecording = useCallback((startRecording) => {
    startRecording();
    setRecording(true);
  }, []);

  const handleStopRecording = useCallback((stopRecording) => {
    stopRecording();
    setRecording(false);
  }, []);

  const handleTimeUp = useCallback(() => {
    console.log("Time is up, stopping recording");
    if (stopRecordingRef.current) {
      stopRecordingRef.current();
    }
  }, []);


  useEffect(() => {
    // Submit the answer only if recording is stopped and `isPracticed` was initially false
    if (!recording && mediaBlobUrl) {
      console.log("Recording stopped, mediaBlobUrl available");
      submitUserAnswerWithFileUrl(questionDetail.questionId, questionDetail.submoduleId, mediaBlobUrl);
      setIsPracticed(true);
    }
  }, [mediaBlobUrl, questionDetail.questionId, questionDetail.submoduleId, recording]);


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
        onTimeUp={handleTimeUp}
        isPracticed={isPracticed}
      />
      {/* question */}
      <Box sx={{ display: "flex", flexDirection: "column", m: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
        >
          {t("Speak about the image below for 90 seconds.")}
        </Typography>
        {questionDetail.questionImageUrl ? (
          <img
            src={questionDetail.questionImageUrl}
            style={{ width: "280px", margin: "auto" }}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop in case of broken image
              e.target.src = "/placeholder.svg"; // Fallback image
            }}
          />
        ) : (
          <Typography variant="h6" color="error">
            {t("Image not available")}
          </Typography>
        )}
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
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 6, mb: 4, alignItems: "center", position: "relative" }}>
                {status === "recording" && (
                  <CircularProgress size={24} sx={{ position: "absolute", bottom: "68px" }} />
                )}
                <AnswerButton
                  text={status === "recording" ? "Stop Recording" : t("Record Now")}
                  onClick={() => {
                    if (status === "recording") {
                      handleStopRecording(stopRecording);
                    } else {
                      handleStartRecording(startRecording);
                    }}}/>
              </Box>
            </>
          );
        }}
      />
      {/* Divider */}
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto" }} />

      {/* reference answer */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "end", m: 2, p: 2, bgcolor: "grey.100", width: "96%", mx: "auto", borderRadius: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ReferenceButton
            text="Reference Answer"
            onClick={handleReferenceAnswerClick}
          />
          {mediaBlobUrl && (
            <Box >
              <AudioButton
                text={t("Your Recording")}
                audioSrc={mediaBlobUrl}
              />
            </Box>
          )}
        </Box>
        {showReferenceAnswer && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", m: 2 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 }}>
              {questionDetail.referenceAnswer}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

SpeakAboutThePhotoCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default SpeakAboutThePhotoCard;
