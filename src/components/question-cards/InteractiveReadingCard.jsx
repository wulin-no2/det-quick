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
    backgroundColor: grey[200],
    paddingBlock: "8px",
    paddingInline: "4px",
  };
  const selectedRectangleStyle = {
    display: "inline-flex",
    alignItems: "center",
    minWidth: "120px",
    height: "36px",
    border: "1px solid lightgrey",
    borderRadius: "8px",
    textAlign: "center",
    verticalAlign: "middle",
    marginRight: "4px",
    backgroundColor: 'white',
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
  const selectedNumberStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#357af5",
    color:'white',
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
        const selected = selectedOptions[blankIndex];
        return (
          <Typography key={index} style={selected ? selectedRectangleStyle :rectangleStyle} >
            <Typography style={selected ? selectedNumberStyle : numberStyle} sx={{ml:"2px"}}>{match[1]}</Typography>
            <Typography sx={{display:'flex', alignItems:'center',px:0.5}}>{selected || " "}</Typography>
          </Typography>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Box sx={{ width: '1200px', margin: 'auto', textAlign: 'center', mb: 6, minHeight: '400px' }}>
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
              height:'100%'
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
                mt: 2,
                color: grey[700],
              }}>
                {currentSequence ? renderTextWithBlanks(currentSequence.sentenceTemplate) : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Options */}
        <Grid item xs={5} sx={{
            // border:'1px solid red'
        }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb:2}}>
            {t('Select the best option for each missing word.')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', 
            // border:'1px solid blue'
          }}>
            {currentSequence && currentSequence.blankList.map((blank, index) => (
              <FormControl key={index} sx={{ width: '100%', mb:1}}>
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
                          <Typography style={numberStyle}>{blank.indexNumber}</Typography> 
                          <Typography sx={{m:'auto'}}>{t('Select a word')}</Typography>
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
                        <Typography style={selectedNumberStyle}>{blank.indexNumber}</Typography> 
                        <Typography sx={{m:'auto'}}>{selected}</Typography>
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
          {/* answer button */}
            <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 2,
                // border:'1px solid red'
            }}>
                <AnswerButton text='Next Step' onClick={handleNextSequence} />
            </Box>
        </Grid>
      </Grid>
      
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

