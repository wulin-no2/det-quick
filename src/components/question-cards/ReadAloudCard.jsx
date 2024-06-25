import PropTypes from "prop-types";
import { useState, useCallback, useRef, useEffect } from "react";
import { Box, Typography, Divider, IconButton, CircularProgress } from '@mui/material';
import { useTranslation } from "react-i18next";
import { ReactMediaRecorder } from "react-media-recorder";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AnswerButton from '../common/question-card-components/AnswerButton';
import CardHeader from '../common/question-card-components/CardHeader';
import styles from './ReadAloudCard.module.css';

const ReadAloudCard = ({
  count,
  currentIndex,
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
      audioElement.current.onended = () => setPlaying((prev) => ({ ...prev, [type]: false }));
    }
  };

  useEffect(() => {
    if (!recording && mediaBlobUrl) {
      console.log("Recording stopped, mediaBlobUrl available");
    }
  }, [recording, mediaBlobUrl]);

  if (!questionDetail) {
    return <div></div>;
  }

  return (
    <Box sx={{ width: '1200px', margin: 'auto', textAlign: 'center' }}>
      {/* CardHeader */}
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        currentIndex={currentIndex}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
        onTimeUp={handleTimeUp} 
      />
      {/* question */}
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Record yourself saying the statement below: ')}
        </Typography>
      </Box>
      {/* question text */}
      <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/ReadAloud.png" style={{ width: '200px', marginRight: '20px' }} />
        <Typography variant='h5' gutterBottom sx={{ fontWeight: "bold", opacity: 0.88, maxWidth: "500px" }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, alignItems:'center', position: 'relative'}}>
                <AnswerButton 
                  text={status === "recording" ? 'Stop Recording' : t('Record Now')}
                  onClick={() => {
                    if (status === "recording") {
                      handleStopRecording(stopRecording);
                    } else {
                      handleStartRecording(startRecording);
                    }
                  }} 
                />
                {status === "recording" && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: 'absolute',
                      left: 'calc(50% + 110px)', // Position it to the right of the button with spacing
                    }}
                  />
                )}
              </Box>
              {/* Divider */}
              <Divider sx={{ bgcolor: 'grey.100', width: '96%', mx: 'auto', mt: 4 }} />
              {/* playback recorded and reference audio */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
                {mediaBlobUrl && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 10 , position: 'relative'}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 2 }}>
                      {t('Your Recording')}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'start', position: 'absolute', ml: 19 }}>
                      <IconButton
                        onClick={() => handlePlayAudio(recordedAudioRef, 'recorded')}
                        color="primary"
                        sx={{ '&:focus': { outline: 'none' }, mr: 4 }}
                      >
                        {playing.recorded ? (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <div className={styles.waveform}>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                              <span className={styles.bar}></span>
                            </div>
                          </Box>
                        ) : <PlayCircleIcon />}
                      </IconButton>
                      <audio ref={recordedAudioRef} src={mediaBlobUrl} />
                    </Box>
                  </Box>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center' , position: 'relative' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 2 }}>
                    {t('Reference Audio')}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'start', position: 'absolute', ml: 20 }}>
                    <IconButton
                      onClick={() => handlePlayAudio(audioRef, 'reference')}
                      color="primary"
                      sx={{ '&:focus': { outline: 'none' } }}
                    >
                      {playing.reference ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <div className={styles.waveform}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                          </div>
                        </Box>
                      ) : <PlayCircleIcon />}
                    </IconButton>
                    <audio ref={audioRef}>
                      <source src={questionDetail.referenceAudioLink} type="audio/mp3" />
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
  questionId: PropTypes.number.isRequired,
  setCurrentQuestionId: PropTypes.func.isRequired,
  setCurrentSubmoduleId: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  getNameBySubmoduleId: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadAloudCard;






