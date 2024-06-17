import PropTypes from "prop-types";
import React,{ useRef, useState} from 'react';
import { useTranslation} from "react-i18next";
import { Box,Divider,Typography} from '@mui/material';
import CardHeader from '../common/common-card-components/CardHeader';
import AnswerButton from '../common/common-card-components/AnswerButton';
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import { green, red,grey} from '@mui/material/colors';

const ReadAndCompleteCard = ({
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
  const parts = questionDetail.sentenceTemplate.split("{}");
  const clues = questionDetail.clues[0];
  const [answers, setAnswers] = useState(Array(clues.length).fill(''));
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const inputRefs = useRef([]);
  

  // const [parsedSentence, setParsedSentence] = useState([]);
  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const { t } = useTranslation();

  // The remaining code for event handlers 
  const handleInputChange = (index, event) => {
    event.preventDefault();
    const latestChar = event.nativeEvent.data || '';
    if (latestChar) {
        const newAnswers = [...answers];
        newAnswers[index] = latestChar;
        setAnswers(newAnswers);
        const inputElement = inputRefs.current[index];
        inputElement.value = latestChar;
        if (index < clues.length - 1) {
            setTimeout(() => {
                inputRefs.current[index + 1].focus();
            }, 0);
        }
    }
};

const handleKeyDown = (index, event) => {
  if (event.key === 'ArrowRight' && index < clues.length - 1) {
      inputRefs.current[index + 1].focus();
  } else if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
  } else if ((event.key === 'Backspace' || event.key === 'Delete')) {
      if (answers[index] !== '') {
          const newAnswers = [...answers];
          newAnswers[index] = '';
          setAnswers(newAnswers);
          event.preventDefault();
      }
      if (index > 0) {
          inputRefs.current[index - 1].focus();
      }
  }
};


  // useEffect(() => {
  //   const parts = questionDetail.sentenceTemplate.split(/(\{.*?\})/g).map((part, index) => {
  //     if (part.startsWith('{') && part.endsWith('}')) {
  //       const word = part.slice(1, -1);
  //       return { type: 'input', length: word.length, index };
  //     } else {
  //       return { type: 'text', text: part, index };
  //     }
  //   });
  //   setParsedSentence(parts);
  // }, []);

  // const handleKeyDown = (e, index, subIndex) => {
  //   if (e.key === 'Backspace') {
  //     if (
  //       inputsRef.current[index][subIndex].value === '' &&
  //       subIndex === 0 &&
  //       index > 0
  //     ) {
  //       let prevIndex = index - 1;
  //       while (prevIndex >= 0 && parsedSentence[prevIndex].type === 'text') {
  //         prevIndex--;
  //       }
  //       if (prevIndex >= 0) {
  //         inputsRef.current[prevIndex][
  //           inputsRef.current[prevIndex].length - 1
  //         ].focus();
  //       }
  //     } else if (
  //       inputsRef.current[index][subIndex].value === '' &&
  //       subIndex > 0
  //     ) {
  //       inputsRef.current[index][subIndex - 1].focus();
  //     }
  //   }
  // };

  // const handleChange = (e, index, subIndex) => {
  //   if (e.target.value.length === 1) {
  //     if (subIndex < inputsRef.current[index].length - 1) {
  //       inputsRef.current[index][subIndex + 1].focus();
  //     } else {
  //       let nextIndex = index + 1;
  //       while (
  //         nextIndex < parsedSentence.length &&
  //         parsedSentence[nextIndex].type === 'text'
  //       ) {
  //         nextIndex++;
  //       }
  //       if (nextIndex < parsedSentence.length) {
  //         inputsRef.current[nextIndex][0].focus();
  //       }
  //     }
  //   }
  // };
  if (!questionDetail) {
    return <div></div>;
  }
      // Handle reference answer button click
      const handleReferenceAnswerClick = () => {
        setShowReferenceAnswer(!showReferenceAnswer);
    };

  // handle answer button
const handleSubmit = (answer) => {
  setShowCorrectAnswer(true)

  // Update practice status
  updatePracticeStatus(questionDetail.id, true);

  // Set practice status to true
  setIsPracticed(true);
  console.log(`Answered: ${answer}`);
};

// const getButtonSx = (answer) => {
//   if (selectedAnswer === answer) {
//     return {
//       backgroundColor: isCorrect ? green[100] : red[100],  // green.100 or red.100
//       borderColor: isCorrect ? green[500] : red[500],      // green.500 or red.500
//       borderWidth: '1px',
//       borderStyle: 'solid',
//       color: grey[800],
//       '&:hover': {
//           backgroundColor: isCorrect ? green[100] : red[100],  // Same as backgroundColor to override hover effect
//           borderColor: isCorrect ? green[500] : red[500],      // Same as borderColor to override hover effect
//         },
//         '&:focus': {
//           outline: 'none',  // Remove the blue outline on focus
//           boxShadow: 'none', // Remove the box shadow on focus
//         },
//     };
//   }
//   return {};
// };

  return (
    
    <Box
      sx={{
        p: 2,
        width: '1200px',
        margin: 'auto',
        textAlign: 'center',
        pb:10,

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
        isPracticed={isPracticed}
      />
      {/* question */}
      <Box sx={{m: 4,}}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Complete the sentence with the correct word.')}
        </Typography>
      </Box>
      
      {/* Card content */}
      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        mb='120px'
      >
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
              <span>{parts[0]}</span>
              {clues.map((clue, index) => (
                  <React.Fragment key={index}>
                      <input
                          ref={el => inputRefs.current[index] = el}
                          type="text"
                          value={answers[index] || clue || ''}
                          onInput={(event) => handleInputChange(index, event)}
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          style={{ width: '20px', marginRight: '5px', textAlign: 'center' }}
                          disabled={clue !== null}
                      />
                      {index === clues.length - 1 && showCorrectAnswer && (
                          <span style={{ color: 'green', marginLeft: '10px', fontWeight: 'bold' }}>
                              ({questionDetail.referenceAnswer})
                          </span>
                      )}
                  </React.Fragment>
              ))}
              <span>{parts[1]}</span>
          </Box>
          {/* <button onClick={() => setShowCorrectAnswer(true)} style={{ marginTop: '10px' }}>Show Correct Answer</button> */}
        </Box>
      {/* answer button */}
      <Box gutterBottom sx={{display: 'flex',pb: 4,justifyContent: 'space-evenly',}}>
          <AnswerButton text='Submit' onClick={handleSubmit} />
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


ReadAndCompleteCard.propTypes = {
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

export default ReadAndCompleteCard;

