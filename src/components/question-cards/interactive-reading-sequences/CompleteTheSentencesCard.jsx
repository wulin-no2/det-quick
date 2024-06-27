import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Select, MenuItem, FormControl, Card, CardContent, Divider, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";
import { grey, green, red } from '@mui/material/colors';
import AnswerButton from '../../common/question-card-components/AnswerButton';

const CompleteTheSentencesCard = ({ sequence, handleNextSequence, currentAnswer }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showCorrection, setShowCorrection] = useState(false);

  useEffect(() => {
    if (currentAnswer && currentAnswer.length > 0) {
      setSelectedOptions(currentAnswer);
      setShowCorrection(true);
    } else {
      const initialSelectedOptions = sequence.blankList.map(() => "");
      setSelectedOptions(initialSelectedOptions);
      setShowCorrection(false);
    }
  }, [sequence, currentAnswer]);

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    handleNextSequence(selectedOptions);
  };

  const styles = {
    rectangle: {
      display: "inline-flex",
      alignItems: "center",
      minWidth: "120px",
      height: "36px",
      borderRadius: "8px",
      textAlign: "center",
      verticalAlign: "middle",
      marginRight: "4px",
      paddingBlock: "8px",
      paddingInline: "4px",
      color: grey[800]
    },
    rectangleUnselected: {
      border: "2px dashed lightgrey",
      backgroundColor: grey[200],
    },
    rectangleSelected: {
      border: "1px solid lightgrey",
      backgroundColor: 'white',
    },
    rectangleCorrect: {
      backgroundColor: green[100],
      border: 'none',
    },
    rectangleIncorrect: {
      backgroundColor: red[100],
      border: 'none',
    },
    number: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    numberUnselected: {
      border: "1px solid lightgrey",
      backgroundColor: "white",
    },
    numberSelected: {
      backgroundColor: "#357af5",
      color: 'white',
    },
    numberCorrect: {
      color: 'white',
    },
    numberIncorrect: {
      color: 'white',
    },
    select: {
      // border: "0.5px solid",
      // borderColor:'lightgray',
      borderRadius: "4px",
      height: '50px',
    },
  };

  const renderTextWithBlanks = (template) => {
    const parts = template.split(/(\{\d+\})/);
    return parts.map((part, index) => {
      const match = part.match(/\{(\d+)\}/);
      if (match) {
        const blankIndex = parseInt(match[1], 10) - 1;
        const selected = selectedOptions[blankIndex];
        const correct = sequence.blankList[blankIndex].answer;
        const isCorrect = selected === correct;

        return (
          <Typography key={index} style={{
            ...styles.rectangle,
            ...(selected ? styles.rectangleSelected : styles.rectangleUnselected),
            ...(showCorrection && selected && (isCorrect ? styles.rectangleCorrect : styles.rectangleIncorrect)),
          }}>
            <Typography style={{
              ...styles.number,
              ...(selected ? styles.numberSelected : styles.numberUnselected),
              ...(showCorrection && selected && (isCorrect ? styles.numberCorrect : styles.numberIncorrect)),
              marginLeft: "2px"
            }}>{match[1]}</Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', px: 0.5 }}>{selected || " "}</Typography>
          </Typography>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const renderOptions = () => {
    return sequence.blankList.map((blank, index) => {
      const selected = selectedOptions[index] || "";
      const correct = blank.answer;
      const isCorrect = selected === correct;
      return (
        <Box key={index} sx={{ mb: 1 }}>
          <FormControl sx={{ width: '100%' }}>
            <Select
              displayEmpty
              value={selected}
              onChange={handleOptionChange(index)}
              sx={{
                ...styles.select,
                borderColor: showCorrection ? (isCorrect ? green[500] : red[500]) : 'lightgrey',
                backgroundColor: showCorrection ? (isCorrect ? green[100] : '#fde1e1') : 'white',
              }}
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
                      <Typography style={{ ...styles.number, ...styles.numberUnselected }}>{blank.indexNumber}</Typography>
                      <Typography sx={{ m: 'auto' }}>{t('Select a word')}</Typography>
                    </Box>
                  );
                }
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: grey[800],
                    }}
                  >
                    <Typography style={{ ...styles.number, ...styles.numberSelected }}>{blank.indexNumber}</Typography>
                    <Typography sx={{ m: 'auto' }}>{selected}</Typography>
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
          {showCorrection && !isCorrect && (
            <Typography sx={{ color: grey[800], mt: 0.5,mb:2 }}>
              {t('Correct Answer:')} {correct}
            </Typography>
          )}
        </Box>
      );
    });
  };

  return (
    <Grid container spacing={4} sx={{ pb: 2, px: 4 }}>
      <Grid item xs={7}>
        <Card
          sx={{
            minWidth: '320px',
            backgroundColor: grey[100],
            border: "1px solid lightgrey",
            boxShadow: "none",
            height: '100%'
          }}>
          <CardContent sx={{ px: 0, py: 0, textAlign: 'left' }}>
            <Typography
              sx={{ color: grey[700], px: 3, py: 1.5, fontSize: '14px' }}>
              {t('PASSAGE')} #{sequence.questionId}-{sequence.sequenceOrder}
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{
              px: 3, py: 0,
              lineHeight: 2.6,
              mt: 2,
              color: grey[700],
            }}>
              {renderTextWithBlanks(sequence.sentenceTemplate)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={5} sx={{ textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
          {t('Select the best option for each missing word.')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {renderOptions()}
        </Box>
        {/* Answer button */}
        <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 4 }}>
          <AnswerButton text='Next Step' onClick={handleSubmit} />
        </Box>
      </Grid>
    </Grid>
  );
};

CompleteTheSentencesCard.propTypes = {
  sequence: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    sequenceOrder: PropTypes.number.isRequired,
    sentenceTemplate: PropTypes.string.isRequired,
    blankList: PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        indexNumber: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  handleNextSequence: PropTypes.func.isRequired,
  currentAnswer: PropTypes.array,
};

export default CompleteTheSentencesCard;



