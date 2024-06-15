import PropTypes from "prop-types";
import { Box, Typography } from '@mui/material';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from '../common/common-card-components/AnswerButton';
import CardHeader from '../common/common-card-components/CardHeader';

const ReadAndSelectCard = ({
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
    return <div>Loading...</div>;
  }
  // handle answer buttons
  const handleAnswer = (isReal) => {
    console.log(`Answered: ${isReal}`);
  };
  // handle jump buttons
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const word = questionDetail.word;

  // const handleNext = () => {
  //   if (currentIndex < count - 1) {
  //     // setCurrentQuestionId(/* 下一个问题的ID，根据需要进行修改 */);
  //     // setCurrentSubmoduleId(/* 下一个问题的submoduleId，根据需要进行修改 */);
  //   }
  // };

  // const handleLast = () => {
  //   if (currentIndex > 0) {
  //     // setCurrentQuestionId(/* 上一个问题的ID，根据需要进行修改 */);
  //     // setCurrentSubmoduleId(/* 上一个问题的submoduleId，根据需要进行修改 */);
  //   }
  // };

  return (
    <Box
      sx={{
        // p: 2,
        width: '1200px',
        margin: 'auto',
        textAlign: 'center',
        // border: '1px solid lightgray',
        // borderRadius: '8px',
        // backgroundColor:'white',
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
          {t('Is this a real English word?')}
        </Typography>
      </Box>
      {/* word */}
      <Box sx={{m:8}}>
        <Typography
          variant='h3'
          gutterBottom
          sx={{ fontWeight: 'bold', opacity: 0.78 }}
        >
          {questionDetail.word}
        </Typography>
      </Box>
      {/* answer buttons */}
      <Box
        gutterBottom
        sx={{
          display: 'flex',
          p: 8,
          justifyContent: 'space-evenly',
        }}
      >
        <AnswerButton text='Yes' onClick={() => handleAnswer(true)} />
        <AnswerButton text='No' onClick={() => handleAnswer(false)} />
      </Box>
    </Box>
  );
};

ReadAndSelectCard.propTypes = {
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

export default ReadAndSelectCard;
