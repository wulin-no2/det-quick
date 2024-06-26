import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Select, MenuItem, FormControl, Card, CardContent, Divider, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";
import { grey } from '@mui/material/colors';
import AnswerButton from '../../common/question-card-components/AnswerButton';

const CompleteTheSentencesCard = ({ sequence,handleNextSequence }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const initialSelectedOptions = sequence.blankList.map(() => "");
    setSelectedOptions(initialSelectedOptions);
  }, [sequence]);

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
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
    },
    rectangleUnselected: {
      border: "2px dashed lightgrey",
      backgroundColor: grey[200],
    },
    rectangleSelected: {
      border: "1px solid lightgrey",
      backgroundColor: 'white',
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
    select: {
      border: "0.5px solid lightgrey",
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
        return (
          <Typography key={index} style={{
            ...styles.rectangle,
            ...(selected ? styles.rectangleSelected : styles.rectangleUnselected),
          }}>
            <Typography style={{
              ...styles.number,
              ...(selected ? styles.numberSelected : styles.numberUnselected),
              marginLeft: "2px"
            }}>{match[1]}</Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', px: 0.5 }}>{selected || " "}</Typography>
          </Typography>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Grid container spacing={4} sx={{pb: 2, px: 4,}}>
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

      <Grid item xs={5}>
        <Typography variant="h6" sx={{ fontWeight: "bold", pb: 2 }}>
          {t('Select the best option for each missing word.')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {sequence.blankList.map((blank, index) => (
            <FormControl key={index} sx={{ width: '100%', mb: 1 }}>
              <Select
                displayEmpty
                value={selectedOptions[index]}
                onChange={handleOptionChange(index)}
                sx={styles.select}
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
                        color: grey[700],
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
          ))}
        </Box>
        {/* Answer button */}
        <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 4}}>
          <AnswerButton text='Next Step' onClick={handleNextSequence} />
        </Box>
      </Grid>
    </Grid>
  );
};

CompleteTheSentencesCard.propTypes = {
  handleNextSequence:PropTypes.func.isRequired,
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
  }).isRequired
};

export default CompleteTheSentencesCard;


