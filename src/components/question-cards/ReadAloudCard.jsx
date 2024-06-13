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
}) => {
  const { t } = useTranslation();
  if (!questionDetail) {
    return <div>Loading...</div>;
  }
  // handle answer buttons
  const handleRecord = () => {
    console.log('record..');
  };
  // handle jump buttons
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const word = questionDetail.word;

  const handleNext = () => {
    if (currentIndex < count - 1) {
      // setCurrentQuestionId(/* 下一个问题的ID，根据需要进行修改 */);
      // setCurrentSubmoduleId(/* 下一个问题的submoduleId，根据需要进行修改 */);
    }
  };

  const handleLast = () => {
    if (currentIndex > 0) {
      // setCurrentQuestionId(/* 上一个问题的ID，根据需要进行修改 */);
      // setCurrentSubmoduleId(/* 上一个问题的submoduleId，根据需要进行修改 */);
    }
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
        onNext={handleNext}
        onLast={handleLast}
        currentIndex={currentIndex}
        totalWords={count}
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
};

export default ReadAloudCard;