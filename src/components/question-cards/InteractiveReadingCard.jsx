import PropTypes from "prop-types";
import { Box, Typography, Divider, Grid, Select, MenuItem, FormControl, Card, CardContent } from '@mui/material';
import { useTranslation } from "react-i18next";
import AnswerButton from '../common/question-card-components/AnswerButton';
import CardHeader from '../common/question-card-components/CardHeader';
import { useState, useEffect } from "react";
import { grey } from '@mui/material/colors';

const InteractiveReadingCard = ({
  count,
  currentIndex,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentSequence, setCurrentSequence] = useState(null);

  useEffect(() => {
    if (questionDetail && questionDetail.sequences) {
      setCurrentSequence(questionDetail.sequences[0]);
      const initialSelectedOptions = questionDetail.sequences[0].blankList.map(() => "");
      setSelectedOptions(initialSelectedOptions);
    }
  }, [questionDetail]);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextSequence = () => {
    if (currentSequence) {
      const nextIndex = currentSequence.sequenceOrder;
      if (nextIndex < questionDetail.sequences.length) {
        setCurrentSequence(questionDetail.sequences[nextIndex]);
        const initialSelectedOptions = questionDetail.sequences[nextIndex].blankList.map(() => "");
        setSelectedOptions(initialSelectedOptions);
      } else {
        handleNext();
      }
    }
  };

  const rectangleStyle = {
    display: "inline-flex",
    alignItems: "center",
    minWidth: "120px",
    height: "36px",
    border: "2px dashed lightgrey",
    borderRadius: "8px",
    textAlign: "center",
    verticalAlign: "middle",
    marginRight: "4px",
    backgroundColor: "transparent",
    paddingBlock: "8px",
    paddingInline: "4px",
  };

  const numberStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid lightgrey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  };

  const selectStyle = {
    border: "0.5px solid lightgrey",
    borderRadius: "4px",
    height:'50px',
  };

  const renderTextWithBlanks = (template) => {
    const parts = template.split(/(\{\d+\})/);
    return parts.map((part, index) => {
      const match = part.match(/\{(\d+)\}/);
      if (match) {
        const blankIndex = parseInt(match[1], 10) - 1;
        return (
          <span key={index} style={rectangleStyle}>
            <span style={numberStyle}>{match[1]}</span>
            {selectedOptions[blankIndex] || " "}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Box sx={{ width: '1200px', margin: 'auto', textAlign: 'center', mb: 2, minHeight: '400px' }}>
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
      {/* Card content */}
      <Grid container spacing={4} sx={{ px: 6 }}>
        {/* Passage */}
        <Grid item xs={7}>
          <Card
            sx={{
              minWidth: '320px',
              backgroundColor: grey[100],
              border: "1px solid lightgrey",
              boxShadow: "none",
            }}>
            <CardContent sx={{ px: 0, py: 0, textAlign: 'left' }}>
              <Typography
                sx={{ color: grey[700], px: 3, py: 1.5, fontSize: '14px' }}>
                {t('PASSAGE')} #{questionDetail.questionId}-{currentSequence ? currentSequence.sequenceOrder : ""}
              </Typography>
              <Divider />
              <Typography variant="body1" sx={{
                px: 3, py: 0,
                lineHeight: 2.6,
                mt: 4,
                color: grey[700],
              }}>
                {currentSequence ? renderTextWithBlanks(currentSequence.sentenceTemplate) : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Options */}
        <Grid item xs={5}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb:2}}>
            {t('Select the best option for each missing word.')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:'end',
            // border:'1px solid red'
          }}>
            {currentSequence && currentSequence.blankList.map((blank, index) => (
              <FormControl key={index} sx={{ width: '100%', m:0.5}}>
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
                          <span style={numberStyle}>{blank.indexNumber}</span> Select a word
                        </Box>
                      );
                    }

                    return (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: grey[700],
                        }}
                      >
                        <span style={numberStyle}>{blank.indexNumber}</span> {selected}
                      </Box>
                    );
                  }}
                >
                  {blank.options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* answer button */}
      <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', py: 4, pr: 6, }}>
        <AnswerButton text='Next' onClick={handleNextSequence} />
      </Box>
    </Box>
  );
};

InteractiveReadingCard.propTypes = {
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveReadingCard;

