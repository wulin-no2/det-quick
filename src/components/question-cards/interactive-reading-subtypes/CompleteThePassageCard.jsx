import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { grey } from '@mui/material/colors';
import AnswerButton from '../../common/question-card-components/AnswerButton';
import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Divider,
  Box
} from "@mui/material";
import { useTranslation } from "react-i18next";


const CompleteThePassageCard = ({ sequence,handleNextSequence}) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption("");
  }, [sequence]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const styles = {
    rectangle: {
      display: "inline-block",
      width: "100%",
      height: "70px",
      border: "2px dashed lightgrey",
      borderRadius: "8px",
      textAlign: "left",
      margin: "16px 0",
      backgroundColor: "transparent",
      padding: "10px",
      lineHeight: "1.5",
      color: grey[700],
      overflow: "hidden",
      wordWrap: "break-word",
    },
    radio: {
      with:'100%',
      border: "1px solid",
      borderColor: grey[300],
      borderRadius: "8px",
      padding: "10px",
      mx:'auto',
      marginBottom: "8px",
      display: "flex",
      alignItems: "flex-start",
      gap: 1,
      color: grey[700],
    },
    radioControl: {
      "&.MuiRadio-root": {
        color: grey[300],
      },
      "&.MuiRadio-root.Mui-checked": {
        color: "rgb(240,174,63)",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1.2rem",
      },
    },
  };

  return (
    <Grid container spacing={4} sx={{ pb: 2, px: 4, }}>
      {/* Passage */}
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
              lineHeight: 2,
              mt: 2,
              color: grey[700],
            }}>
              {sequence.sentenceTemplate.split("{}").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < 1 && (
                    <span style={styles.rectangle}>{selectedOption}</span>
                  )}
                </React.Fragment>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Options */}
      <Grid item xs={5} sx={{textAlign: 'left',}}>
        <Typography variant="h6" sx={{ fontWeight: "bold", pb: 4 }}>
          {t('Select the best sentence to fill in the blank in the passage.')}
        </Typography>
        <RadioGroup value={selectedOption} onChange={handleOptionChange} >
          {sequence.blankList.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio sx={styles.radioControl} />}
              label={option}
              sx={styles.radio}/>
          ))}
        </RadioGroup>
         {/* Answer button */}
          <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 4}}>
          <AnswerButton text='Next Step' onClick={handleNextSequence} />
        </Box>
      </Grid>
    </Grid>
  );
};

CompleteThePassageCard.propTypes = {
  handleNextSequence:PropTypes.func.isRequired,
  sequence: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    sequenceOrder: PropTypes.number.isRequired,
    sentenceTemplate: PropTypes.string.isRequired,
    blankList: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

export default CompleteThePassageCard;
