import PropTypes from "prop-types";
import React,{ useRef, useState, useEffect} from 'react';
import { useTranslation} from "react-i18next";
import { Box,Paper,Typography,Grid} from '@mui/material';
import CardHeader from '../common/common-card-components/CardHeader';
import AnswerButton from '../common/common-card-components/AnswerButton';
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";
import { grey} from '@mui/material/colors';

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
    const parts = questionDetail.sentenceTemplate.split('{}');
    const [answers, setAnswers] = useState(questionDetail.blankList.map(blank =>
        blank.clues.map(clue => clue || '')
    ));
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const inputRefs = useRef(questionDetail.blankList.map(blank => Array(blank.clues.length).fill(null)));
  
    const handleInputChange = (placeholderIndex, charIndex, event) => {
        const newAnswers = answers.map((answerGroup, idx) => 
            idx === placeholderIndex
                ? answerGroup.map((char, i) =>
                    i === charIndex ? event.target.value.slice(-1) : char
                  )
                : answerGroup
        );
    
        setAnswers(newAnswers);
    
        // 自动移动到下一个输入框
        if (charIndex < questionDetail.blankList[placeholderIndex].clues.length - 1) {
            const nextInput = inputRefs.current[placeholderIndex][charIndex + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
  
  const [isPracticed, setIsPracticed] = useState(questionDetail.isPracticed || false);
  const { t } = useTranslation();

  // initialize practiced
  useEffect(() => {
    if (questionDetail.isPracticed) {
      setIsPracticed(true);
    }
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  // handle answer button
  const handleSubmit = (answer) => {
    setShowCorrectAnswer(!showCorrectAnswer)

    // Update practice status
    updatePracticeStatus(questionDetail.id, true);

    // Set practice status to true
    setIsPracticed(true);
    console.log(`Answered: ${answer}`);
  };

  return (
    <Box
      sx={{p: 2, width: '1200px', margin: 'auto', textAlign: 'center', pb:10,
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
        <Typography variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t('Complete the sentence with the correct word.')}
        </Typography>
      </Box>
      
       {/* Card content */}
      <Paper variant="outlined" 
        sx={{ wordBreak: "break-word" ,
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"start",
          alignItems:"center",
          mx:16,my:6,px:6,py:8,
        }}
      >
         {/* blanks */}
         <Box sx={{pr:1, 
         }}>
          <Box sx={{lineHeight:2.2}}>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    <Typography variant='h7' key={index} component="span" sx={{ mr: 0.5, fontWeight:'medium', color:grey[800] }}>
                      {part}
                    </Typography>
                  <Grid item key={index} sx={{display:'inline-block', mr:0.5}}>
                    {index < parts.length - 1 && 
                        questionDetail.blankList[index].clues.map((clue, clueIndex) => (
                            <input
                                key={clueIndex}
                                ref={el => {
                                    if (el) inputRefs.current[index][clueIndex] = el;
                                }}
                                type="text"
                                value={answers[index][clueIndex]}
                                onChange={(event) => handleInputChange(index, clueIndex, event)}
                                // onKeyDown={(event) => handleKeyDown(index, clueIndex, event)}
                                style={{
                                  width: "24px",
                                  height:'28px',
                                  textAlign: "center",
                                  marginRight: "-1px",
                                  fontSize: "16px",
                                  border: "1px solid #ccc",
                                  backgroundColor: clue !== null ? grey[100] : "white",
                                  borderRadius:
                                    clueIndex === 0
                                      ? "4px 0 0 4px" // first 
                                      : clueIndex === questionDetail.blankList[index].clues.length - 1
                                      ? "0 4px 4px 0" // last
                                      : "0", // others
                                  color: clue !== null ? "black" : "inherit",
                                  pointerEvents: clue !== null ? "none" : "auto", // disable the input
                                  }}
                                disabled={clue !== null}
                            />
                  ))}
                    {index < parts.length - 1 && showCorrectAnswer && (
                        <span style={{ color: 'green', marginLeft: '10px', fontWeight: 'bold' }}>
                            {questionDetail.blankList[index].answer}
                        </span>
                    )}
                  </Grid>
                </React.Fragment>
             
            ))}
            </Box>
        </Box>
        {/* {renderWords(parts[1])} */}
      </Paper>
      {/* answer button */}
      <Box gutterBottom sx={{display: 'flex',pb: 4,justifyContent: 'space-evenly',}}>
          <AnswerButton text='Submit' onClick={handleSubmit} />
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

