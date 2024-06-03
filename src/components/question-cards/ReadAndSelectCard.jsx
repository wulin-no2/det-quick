import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import AnswerButton from '../common/common-card-components/AnswerButton';
import CardHeader from '../common/common-card-components/CardHeader';
const words = [
  {
    id: 4233,
    // type_id: 2,
    text: 'somether',
    isReal: 0,
    difficulty: 3,
    time_limit: 10,
    type: 'Read and Select',
    type_question: 'Is this a real English word?',
  },
  {
    id: 4234,
    // type_id: 3,
    text: 'diversity',
    isReal: 1,
    difficulty: 1,
    time_limit: 10,
    type: 'Read and Select',
    type_question: 'Is this a real English word?',
  },
  {
    id: 4235,
    // type_id: 4,
    text: 'simultaneously',
    isReal: 1,
    difficulty: 2,
    time_limit: 10,
    type: 'Read and Select',
    type_question: 'Is this a real English word?',
  },
  // Add more words as needed
];

const ReadAndSelectCard = () => {
  // handle answer buttons
  const handleAnswer = (isReal) => {
    console.log(`Answered: ${isReal}`);
  };
  // handle jump buttons
  const [currentIndex, setCurrentIndex] = useState(0);
  const word = words[currentIndex];
  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleLast = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

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
        word={word}
        onNext={handleNext}
        onLast={handleLast}
        currentIndex={currentIndex}
        totalWords={words.length}
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
          {word.type_question}
        </Typography>
      </Box>
      {/* word */}
      <Box sx={{m:8}}>
        <Typography
          variant='h3'
          gutterBottom
          sx={{ fontWeight: 'bold', opacity: 0.78 }}
        >
          {word.text}
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

export default ReadAndSelectCard;
