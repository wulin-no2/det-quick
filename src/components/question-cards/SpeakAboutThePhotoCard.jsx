import PropTypes from "prop-types";
import { Box, Typography , Divider} from '@mui/material';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from '../common/common-card-components/AnswerButton';
import CardHeader from '../common/common-card-components/CardHeader';
import {useState,useEffect} from "react";

const SpeakAboutThePhotoCard = ({
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
    useEffect(()=>{
      console.log("question detail is", questionDetail)
      console.log("questionImageUrl:", questionDetail.questionImageUrl);
    },[questionDetail])

    if (!questionDetail) {
        return <div></div>;
      }
    
    // Handle reference answer button click
    const handleReferenceAnswerClick = () => {
        setShowReferenceAnswer(!showReferenceAnswer);
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
            display:'flex',
            flexDirection:"column",
            m: 4,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", opacity: 0.92,mb:2 }}
          >
            {t('Speak about the image below for 90 seconds.')}
          </Typography>
          {questionDetail.questionImageUrl ? (
            <img src={questionDetail.questionImageUrl}
                  style={{ width: '300px', margin:'auto'}} 
                  onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop in case of broken image
                e.target.src = "/placeholder.svg"; // Fallback image
              }}
            />
          ) : (
            <Typography variant="h6" color="error">
              {t('Image not available')}
            </Typography>)}
        </Box>
        {/* answer button */}
        <Box
          gutterBottom
          sx={{
            display: 'flex',
            // pt: 2,
            pb: 4,
            justifyContent: 'space-evenly',
          }}
        >
          <AnswerButton text='Record Now' onClick={handleRecord} />
        </Box>
        {/* Divider */}
        <Divider sx={{ bgcolor: 'grey.100',width:'96%', mx:'auto'}} />

        {/* reference answer */}
        <Box
                sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'start',
                justifyContent: 'end',
                m: 2, p: 2,
                bgcolor: 'grey.100', width: '96%', mx: 'auto', borderRadius: 1
                }}>
                <AnswerButton text='Reference Answer' onClick={handleReferenceAnswerClick}/>
                {showReferenceAnswer && (
                    <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            m: 2,
                        }}>
                        <Typography variant="subtitle1" sx={{textAlign:'left', px:6}}>
                            {questionDetail.referenceAnswer}
                        </Typography>
                    </Box>
            )}
        </Box>
      </Box>
    );
  };

  SpeakAboutThePhotoCard.propTypes = {
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

export default SpeakAboutThePhotoCard;