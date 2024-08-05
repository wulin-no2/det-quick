import PropTypes from "prop-types";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactMediaRecorder } from "react-media-recorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import styles from "../common/Record.module.css";
import {  submitUserAnswerWithFileUrl } from "../../api/api-fetchQuestionDetail";

const ReadAloudCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const { t } = useTranslation();
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState({ reference: false, recorded: false });
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const audioRef = useRef(null);
  const recordedAudioRef = useRef(null);
  const stopRecordingRef = useRef(null);
  const [isPracticed, setIsPracticed] = useState(
    questionDetail.isPracticed || false
  );

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

  const handlePlayAudio = (audioElement, type) => {
    if (audioElement.current) {
      audioElement.current.play();
      setPlaying((prev) => ({ ...prev, [type]: true }));
      audioElement.current.onended = () =>
        setPlaying((prev) => ({ ...prev, [type]: false }));
    }
  };

  useEffect(() => {
    if (!recording && mediaBlobUrl) {
      console.log("Recording stopped, mediaBlobUrl available");
      submitUserAnswerWithFileUrl(questionDetail.questionId,questionDetail.submoduleId,mediaBlobUrl)
      setIsPracticed(true);
    }
  }, [mediaBlobUrl,questionDetail.questionId,questionDetail.submoduleId,recording]);

  if (!questionDetail) {
    return <div></div>;
  }

  return (
    <Box sx={{ width: "1200px", margin: "auto", textAlign: "center",pb: 2,
      minHeight:'700px', }}>
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
      <Box sx={{ m: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}
        >
          {t("Record yourself saying the statement below: ")}
        </Typography>
      </Box>
      {/* question text */}
      <Box
        sx={{
          m: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/ReadAloud.png"
          style={{ width: "200px", marginRight: "20px" }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.88, maxWidth: "500px" }}
        >
          {`"${questionDetail.questionText}"`}
        </Typography>
      </Box>
      {/* answer buttons */}
      <ReactMediaRecorder
        audio
        onStop={(blobUrl) => {
          console.log("Recording stopped, blobUrl:", blobUrl);
          setMediaBlobUrl(blobUrl);
        }}
        render={({ status, startRecording, stopRecording }) => {
          // stop record
          stopRecordingRef.current = () => {
            stopRecording();
            setRecording(false);
          };

          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mt: 4,
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {status === "recording" && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                      bottom: "68px",
                      // left: 'calc(50% + 110px)', // Position it to the right of the button with spacing
                    }}
                  />
                )}
                <AnswerButton
                  text={
                    status === "recording" ? "Stop Recording" : t("Record Now")
                  }
                  onClick={() => {
                    if (status === "recording") {
                      handleStopRecording(stopRecording);
                    } else {
                      handleStartRecording(startRecording);
                    }
                  }}
                />
              </Box>
              {/* Divider */}
              <Divider
                sx={{ bgcolor: "grey.100", width: "96%", mx: "auto", mt: 4 }}
              />
              {/* playback recorded and reference audio */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 2,
                }}
              >
                {/* your recording */}
                {mediaBlobUrl && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems:'center',
                      mr: 26,
                      position: "relative",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2 }}>
                      {t("Your Recording")}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        position: "absolute",
                        ml:24
                      }}
                    >
                      <IconButton
                        onClick={() =>
                          handlePlayAudio(recordedAudioRef, "recorded")
                        }
                        color="primary"
                        sx={{ "&:focus": { outline: "none" }, mr: 4 }}
                      >
                        {playing.recorded ? (
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <div className={styles.waveform}>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                            </div>
                          </Box>
                        ) : (
                          <PlayCircleIcon />
                        )}
                      </IconButton>
                      <audio ref={recordedAudioRef} src={mediaBlobUrl} />
                    </Box>
                  </Box>
                )}
                {/* Reference Audio */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems:'center',
                    position: "relative",
                  }}
                >
                  <Box sx={{mr:1}}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2 }}>
                      {t("Reference Audio")}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      position: "absolute",
                      ml:20,
                    }}>
                    <IconButton
                      onClick={() => handlePlayAudio(audioRef, "reference")}
                      color="primary"
                      sx={{ "&:focus": { outline: "none" } }}
                    >
                      {playing.reference ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <div className={styles.waveform}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                          </div>
                        </Box>
                      ) : (
                        <PlayCircleIcon />
                      )}
                    </IconButton>
                    <audio ref={audioRef}>
                      <source
                        src={questionDetail.referenceAudioLink}
                        type="audio/mp3"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </Box>
                </Box>
              </Box>
            </>
          );
        }}
      />
    </Box>
  );
};

ReadAloudCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadAloudCard;
