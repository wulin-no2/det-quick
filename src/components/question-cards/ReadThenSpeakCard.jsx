import PropTypes from "prop-types";
import { Box, Typography, Divider, List, ListItem, Paper, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import ReferenceButton from "../common/ReferenceButton";
import CardHeader from "../common/question-card-components/CardHeader";
import { useState, useRef, useCallback, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import AudioButton from "../common/AudioButton";
import { submitUserAnswerWithFileUrl } from "../../api/api-fetchQuestionDetail";

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
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const stopRecordingRef = useRef(null);
  const [isPracticed, setIsPracticed] = useState(
    questionDetail.isPracticed || false
  );// add isPracticed state

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
    if (!recording && mediaBlobUrl) {
      console.log("Recording stopped, mediaBlobUrl available");
      submitUserAnswerWithFileUrl(questionDetail.questionId, questionDetail.submoduleId, mediaBlobUrl);
      setIsPracticed(true);
    }
  }, [mediaBlobUrl, questionDetail.questionId,questionDetail.submoduleId,recording]);

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

  const handleReferenceAnswerClick = () => {
    setShowReferenceAnswer(!showReferenceAnswer);
  };

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
      <Box sx={{ m: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t("Speak about the topic below for 90 seconds.")}
        </Typography>
      </Box>
      <Box sx={{ my: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper variant="outlined" sx={{ py: 2, px: 6, maxWidth: "600px" }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", opacity: 0.88, textAlign: "left" }}>
            {mainQuestion}
          </Typography>
          <List sx={{ textAlign: "left" }}>
            {subQuestions.map((line, index) => (
              <ListItem key={index} sx={{ px: 1, py: 0.6 }}>
                <Typography variant="h8" sx={{ fontWeight: "medium", opacity: 1 }}>
                  • {line}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
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
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto" }} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "end", m: 2, p: 2, bgcolor: "grey.100", width: "96%", mx: "auto", borderRadius: 1 }}>
        <Box sx={{ display: 'flex',alignItems:'center' }}>
          <ReferenceButton
            text="Reference Answer"
            onClick={handleReferenceAnswerClick}
          />
          <Box>
            {mediaBlobUrl && (
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <AudioButton
                  text={t("Your Recording")}
                  audioSrc={mediaBlobUrl}
                />
              </Box>
            )}
          </Box>
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

ReadThenSpeakCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadThenSpeakCard;

