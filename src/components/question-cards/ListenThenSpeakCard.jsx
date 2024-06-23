import PropTypes from "prop-types";
import { Box, Typography , Divider} from '@mui/material';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from '../common/question-card-components/AnswerButton';
import CardHeader from '../common/question-card-components/CardHeader';
import {useState, useRef} from "react";

const ListenThenSpeakCard = ({
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
    const [showReferenceQuestion, setShowReferenceQuestion] = useState(false);
    const { t } = useTranslation();

    const audioRef = useRef(null); // Create a reference for the audio element 

    if (!questionDetail) {
        return <div></div>;
      }
    
    // Handle reference answer button click
    const handleReferenceAnswerClick = () => {
        setShowReferenceAnswer(!showReferenceAnswer);
    };

    // Handle reference question button click
    const handleReferenceQuestionClick = () => {
      setShowReferenceQuestion(!showReferenceQuestion);
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
      console.log('record..');
    };

    return (
      <Box
        sx={{
          width: '1200px',
          margin: 'auto',
          textAlign: 'center',
          mb:2
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
            m: 4,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", opacity: 0.92 }}
          >
            {t('Speak about the topic below for 90 seconds.')}
          </Typography>
        </Box>
        {/* question text */}
        <Box sx={{ my: 4, display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/ListenThenSpeak.png" 
                onClick={handleImageClick} 
                style={{ width: '160px', margin:16}} />
                <audio ref={audioRef} src={questionDetail.questionAudioUrl} />
                <Typography
                  variant='h7'
                  gutterBottom
                  sx={{ opacity: 0.88,maxWidth:"500px" }}
                >
                  {t('You can listen to the question 3 times in 20 seconds before start.')}
                </Typography>
            </Box>
        {/* answer button */}
        <Box
          gutterBottom
          sx={{
            display: 'flex',
            pt: 2,
            pb: 4,
            justifyContent: 'space-evenly',
          }}
        >
          <AnswerButton text='Record Now' onClick={handleRecord} />
        </Box>
        {/* Divider */}
        <Divider sx={{ bgcolor: 'grey.100',width:'96%', mx:'auto'}} />

        {/* reference area */}
        <Box
                sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'start',
                justifyContent: 'end',
                m: 2, p: 2,
                bgcolor: 'grey.100', width: '96%', mx: 'auto', borderRadius: 1
                }}>
                  <Box>
                    <AnswerButton text='Reference Question' onClick={handleReferenceQuestionClick}/>
                    <AnswerButton text='Reference Answer' onClick={handleReferenceAnswerClick}/>
                  </Box>
                  {/* reference question */}
                {showReferenceQuestion && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection:'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                            m: 2,
                        }}
                    >
                      <Typography variant="h7" 
                      sx={{textAlign:'left', p:2, fontWeight:'bold'
                      }}>
                            {' - '}{t('Reference Question')}
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:'left', px:6}}>
                            {questionDetail.questionReference}
                        </Typography>
                    </Box>
                )}
                {/* reference answer */}
                {showReferenceAnswer && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection:'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                            m: 2,
                        }}
                    >
                        <Typography variant="h7" 
                      sx={{textAlign:'left', p:2, fontWeight:'bold'
                      }}>
                            {' - '}{t('Reference Answer')}
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:'left', px:6}}>
                            {questionDetail.referenceAnswer}
                        </Typography>
                    </Box>
            )} 
        </Box>
      </Box>
    );
  };

  ListenThenSpeakCard.propTypes = {
  questionId: PropTypes.number.isRequired,
  setCurrentQuestionId: PropTypes.func.isRequired,
  setCurrentSubmoduleId: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object, 
  handleBack:PropTypes.func.isRequired,
  globalIndex:PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ListenThenSpeakCard;