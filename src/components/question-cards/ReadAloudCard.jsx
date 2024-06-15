import PropTypes from "prop-types";
import { Box, Typography, Divider } from '@mui/material';

import { useTranslation } from "react-i18next";
import AnswerButton from '../common/common-card-components/AnswerButton';
import CardHeader from '../common/common-card-components/CardHeader';

const ReadAloudCard = ({
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
  const { t } = useTranslation();
  if (!questionDetail) {
    return <div></div>;
  }
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
        // mb:10
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
          {t('Record yourself saying the statement below: ')}
        </Typography>
      </Box>
      {/* question text */}
      <Box sx={{mt:6, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src="/ReadAloud.png" style={{ width: '200px', mr:4}} />
        <Typography
          variant='h5'
          gutterBottom
          sx={{ fontWeight:"bold", opacity: 0.88,maxWidth:"500px" }}
        >
          {`"${questionDetail.questionText}"`}
        </Typography>
      </Box>
      {/* answer buttons */}
      <Box
        gutterBottom
        sx={{
          display: 'flex',
          p: 4,
          justifyContent: 'space-evenly',
        }}
      >
        <AnswerButton text='Record Now' onClick={handleRecord} />
      </Box>
      {/* Divider */}
      <Divider sx={{ bgcolor: 'grey.100',width:'96%', mx:'auto'}} />
      {/* reference audio */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          m: 2,
        //   border:'1px black solid'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 2 }}>
          {t('Reference Audio')}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton> */}
          <audio controls>
            <source src={questionDetail.referenceAudioLink} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      </Box>
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
  getNameBySubmoduleId:PropTypes.func.isRequired,
  handleBack:PropTypes.func.isRequired,
  globalIndex:PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadAloudCard;