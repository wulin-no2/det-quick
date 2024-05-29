import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardHeader from '../common/common-card-components/CardHeader';
import { Divider } from '@mui/material';

const question = {
  id: 4233,
  text: 'The quick {brown} fox {jumps} over the lazy {dog}.',
  difficulty: 3,
  time_limit: 120,
  type: 'Fill in the Blanks',
  type_question: 'Complete the sentence with the right word.',
};

const FillInTheBlanksCard = () => {
  const inputsRef = useRef([]);
  const [parsedSentence, setParsedSentence] = useState([]);

  useEffect(() => {
    const parts = question.text.split(/(\{.*?\})/g).map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const word = part.slice(1, -1);
        return { type: 'input', length: word.length, index };
      } else {
        return { type: 'text', text: part, index };
      }
    });
    setParsedSentence(parts);
  }, []);

  const handleKeyDown = (e, index, subIndex) => {
    if (e.key === 'Backspace') {
      if (
        inputsRef.current[index][subIndex].value === '' &&
        subIndex === 0 &&
        index > 0
      ) {
        let prevIndex = index - 1;
        while (prevIndex >= 0 && parsedSentence[prevIndex].type === 'text') {
          prevIndex--;
        }
        if (prevIndex >= 0) {
          inputsRef.current[prevIndex][
            inputsRef.current[prevIndex].length - 1
          ].focus();
        }
      } else if (
        inputsRef.current[index][subIndex].value === '' &&
        subIndex > 0
      ) {
        inputsRef.current[index][subIndex - 1].focus();
      }
    }
  };

  const handleChange = (e, index, subIndex) => {
    if (e.target.value.length === 1) {
      if (subIndex < inputsRef.current[index].length - 1) {
        inputsRef.current[index][subIndex + 1].focus();
      } else {
        let nextIndex = index + 1;
        while (
          nextIndex < parsedSentence.length &&
          parsedSentence[nextIndex].type === 'text'
        ) {
          nextIndex++;
        }
        if (nextIndex < parsedSentence.length) {
          inputsRef.current[nextIndex][0].focus();
        }
      }
    }
  };

  return (
    <Box
      sx={{
        width: '1100px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {/* CardHeader */}
      <CardHeader
        word={question}
        onNext={0}
        onLast={0}
        currentIndex={1}
        totalWords={3}
      />

      {/* Card content */}
      <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        {question.type_question}
      </Typography>
      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        mb='200px'
      >
        {parsedSentence.map((part) =>
          part.type === 'text' ? (
            <Typography
              key={part.index}
              variant='body1'
              component='span'
              mx={0.5}
            >
              {part.text}
            </Typography>
          ) : (
            Array.from({ length: part.length }).map((_, subIndex) => (
              <TextField
                key={`${part.index}-${subIndex}`}
                variant='outlined'
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: 'center',
                    borderRadius:
                      subIndex === 0
                        ? '8px 0 0 8px'
                        : subIndex === part.length - 1
                          ? '0 8px 8px 0'
                          : '0',
                  },
                }}
                inputRef={(el) => {
                  if (!inputsRef.current[part.index]) {
                    inputsRef.current[part.index] = [];
                  }
                  inputsRef.current[part.index][subIndex] = el;
                }}
                onChange={(e) => handleChange(e, part.index, subIndex)}
                onKeyDown={(e) => handleKeyDown(e, part.index, subIndex)}
                autoFocus={part.index === 0 && subIndex === 0}
                sx={{ width: 56, height: 56, margin: 0 }}
              />
            ))
          ),
        )}
      </Box>
      <Divider sx={{ mb: '120px' }} />
    </Box>
  );
};

export default FillInTheBlanksCard;
