import PropTypes from "prop-types";
import { Box, Typography , Divider} from '@mui/material';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import AnswerButton from '../common/question-card-components/AnswerButton';
import CardHeader from '../common/question-card-components/CardHeader';
import React,{useState, useEffect} from "react";
import {
    Grid,
    Select,
    MenuItem,
    FormControl,
    Card,
    CardContent,
  } from "@mui/material";
  
  import { useTheme } from "@mui/material/styles";

  const question = {
    id: 4233,
    text: "Sarah loves reading books. Every weekend, she goes to the local library to find new books to read. Last week, she {} a novel by her favorite author. She couldn't {} reading it until she finished.",
    difficulty: 3,
    time_limit: 120,
    type: "Complete the Sentences",
    options: [
      ["borrowed", "bought", "lost"],
      ["stop", "enjoy", "avoid"],
    ],
  };

const InteractiveReadingCard = ({
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
    const theme = useTheme();
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        // Initialize the selectedOptions state based on the number of options
        const initialSelectedOptions = question.options.map(() => "");
        setSelectedOptions(initialSelectedOptions);
      }, []);

    useEffect(()=>{
      console.log("question detail is", questionDetail)
      // console.log("questionImageUrl:", questionDetail.questionImageUrl);
    },[questionDetail])
    if (!questionDetail) {
        return <div></div>;
      }
   
    // handle answer buttons
    const handleAnswer = () => {
      console.log('answer..');
    };


    
      const handleOptionChange = (index) => (event) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = event.target.value;
        setSelectedOptions(newSelectedOptions);
      };
    
      const rectangleStyle = {
        display: "inline-flex",
        alignItems: "center",
        width: "120px",
        height: "40px",
        border: "2px dashed lightgrey",
        borderRadius: "8px",
        textAlign: "center",
        verticalAlign: "middle",
        marginRight: "4px",
        backgroundColor: "transparent",
        paddingBlock: "16px",
        paddingInline: "6px",
      };
    
      const numberStyle = {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "2px solid lightgrey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "4px",
        backgroundColor: "transparent",
      };
    
      const selectStyle = {
        border: "1px solid lightgrey",
        borderRadius: "4px",
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
            {t('Select the best option for each missing word.')}
          </Typography>
        </Box>
        {/* question text */}

      {/* Card content */}
      <Grid container spacing={4} sx={{ padding: 4 }}>
        {/* Passage */}
        <Grid item xs={6}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#f5f5f5",
              border: "1px solid lightgrey",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ position: "relative", paddingInline: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.grey[700] }}
              >
                PASSAGE
              </Typography>
              <Divider
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "56px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 3,
                  marginTop: 4,
                  color: theme.palette.grey[700],
                }}
              >
                {question.text.split("{}").map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < selectedOptions.length && (
                      <span style={rectangleStyle}>
                        <span style={numberStyle}>{index + 1}</span>
                        {selectedOptions[index] || " "}
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Select the best option for each missing word.
          </Typography>
          {question.options.map((optionList, index) => (
            <FormControl key={index} fullWidth margin="normal">
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
                          display: "flex",
                          alignItems: "center",
                          color: "darkgrey",
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
                        display: "flex",
                        alignItems: "center",
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

        {/* answer button */}
        <Box
          gutterBottom
          sx={{
            display: 'flex',
            pb: 4,
            justifyContent: 'space-evenly',
          }}
        >
          <AnswerButton text='Next' onClick={handleAnswer} />
        </Box>
        {/* Divider */}
        {/* <Divider sx={{ bgcolor: 'grey.100',width:'96%', mx:'auto'}} /> */}

      </Box>
    );
  };

  InteractiveReadingCard.propTypes = {
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

export default InteractiveReadingCard;