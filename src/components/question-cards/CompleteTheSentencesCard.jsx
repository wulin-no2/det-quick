import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Card,
  CardContent,
  Box,
  Divider,
} from '@mui/material';
import styled from '@mui/system/styled';
import { useTheme } from '@mui/material/styles';

import CardHeader from '../common/common-card-components/CardHeader';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const question = {
  id: 4233,
  text: "Sarah loves reading books. Every weekend, she goes to the local library to find new books to read. Last week, she {} a novel by her favorite author. She couldn't {} reading it until she finished.",
  difficulty: 3,
  time_limit: 120,
  type: 'Complete the Sentences',
  options: [
    ['borrowed', 'bought', 'lost'],
    ['stop', 'enjoy', 'avoid'],
  ],
};

const CompleteTheSentencesCard = () => {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    // Initialize the selectedOptions state based on the number of options
    const initialSelectedOptions = question.options.map(() => '');
    setSelectedOptions(initialSelectedOptions);
  }, []);

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const rectangleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    width: '120px',
    height: '40px',
    border: '2px dashed lightgrey',
    borderRadius: '8px',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginRight: '4px',
    backgroundColor: 'transparent',
    paddingBlock: '16px',
    paddingInline: '6px',
  };

  const numberStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4px',
    backgroundColor: 'transparent',
  };

  const selectStyle = {
    border: '1px solid lightgrey',
    borderRadius: '4px',
  };

  return (
    <Box
      sx={{
        width: '1100px',
        margin: 'auto',
        textAlign: 'left',
        border: '1px solid lightgray',
        borderRadius: '8px',
        backgroundColor:'white',
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
      <Grid container spacing={4} sx={{ padding: 4 }}>
        {/* Passage */}
        <Grid item xs={6}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: '#f5f5f5',
              border: '1px solid lightgrey',
              boxShadow: 'none',
            }}
          >
            <CardContent sx={{ position: 'relative', paddingInline: 4 }}>
              <Typography
                variant='subtitle1'
                sx={{ color: theme.palette.grey[700] }}
              >
                PASSAGE
              </Typography>
              <Divider
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '56px',
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  lineHeight: 3,
                  marginTop: 4,
                  color: theme.palette.grey[700],
                }}
              >
                {question.text.split('{}').map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < selectedOptions.length && (
                      <span style={rectangleStyle}>
                        <span style={numberStyle}>{index + 1}</span>
                        {selectedOptions[index] || ' '}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Options */}
        <Grid item xs={6}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Select the best option for each missing word.
          </Typography>
          {question.options.map((optionList, index) => (
            <FormControl key={index} fullWidth margin='normal'>
              <Select
                displayEmpty
                value={selectedOptions[index]}
                onChange={handleOptionChange(index)}
                sx={selectStyle}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'darkgrey',
                        }}
                      >
                        <span style={numberStyle}>{index + 1}</span> Select a
                        word
                      </Box>
                    );
                  }

                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: theme.palette.grey[700],
                      }}
                    >
                      <span style={numberStyle}>{index + 1}</span> {selected}
                    </Box>
                  );
                }}
              >
                {optionList.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompleteTheSentencesCard;
