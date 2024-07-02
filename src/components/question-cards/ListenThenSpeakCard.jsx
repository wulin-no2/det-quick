import PropTypes from "prop-types";
import { Box, Typography, Divider, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useCallback, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import AudioButton from "../common/AudioButton";

const ListenThenSpeakCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const [showReferenceQuestion, setShowReferenceQuestion] = useState(false);
  const { t } = useTranslation();
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const stopRecordingRef = useRef(null);

  const audioRef = useRef(null); // Create a reference for the audio element

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

  const handleReferenceQuestionClick = () => {
    setShowReferenceQuestion(!showReferenceQuestion);
  };

  const handleImageClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
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
      />
      {/* question */}
      <Box sx={{ m: 4 }}>
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/ListenThenSpeak.png"
          onClick={handleImageClick}
          style={{ width: "160px", margin: 16 }}
        />
        <audio ref={audioRef} src={questionDetail.questionAudioUrl} />
        <Typography
          variant="h7"
          gutterBottom
          sx={{ opacity: 0.88, maxWidth: "500px" }}
        >
          {t(
            "You can listen to the question 3 times in 20 seconds before start."
          )}
        </Typography>
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

      {/* reference area */}
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
            text="Reference Question"
            onClick={handleReferenceQuestionClick}
          />
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
        {/* reference question */}
        {showReferenceQuestion && (
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
              {t("Reference Question")}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "left", px: 6 }}>
              {questionDetail.questionReference}
            </Typography>
          </Box>
        )}
        {/* reference answer */}
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
      </Box>
    </Box>
  );
};

ListenThenSpeakCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ListenThenSpeakCard;
