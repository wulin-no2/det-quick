import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, RadioGroup, FormControlLabel, Radio, Card, CardContent, Box, Divider } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import AnswerButton from "../../common/question-card-components/AnswerButton";

const TitleThePassageCard = ({ sequence, handleNextSequence }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption("");
  }, [sequence]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const styles = {
    radio: {
      width: '100%',
      border: "1px solid",
      borderRadius: "8px",
      padding: "10px",
      mx: 'auto',
      marginBottom: "8px",
      display: "flex",
      // alignItems: "flex-start",
      alignItems:'center',
      gap: 1,
      color: grey[700],
    },
    unSelectedRadio: {
      borderColor: grey[300],
    },
    selectedRadio: {
      borderColor: '#357af5',
      backgroundColor: '#e3f2fd', // Light blue background
    },
    radioControl: {
      "&.MuiRadio-root": {
        color: grey[300],
      },
      "&.MuiRadio-root.Mui-checked": {
        color: "#357af5", // Match border color
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1.2rem",
      },
    },
  };

  return (
    <Grid container spacing={4} sx={{ pb: 2, px: 4 }}>
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
              {sequence.sentenceTemplate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Options */}
      <Grid item xs={5} sx={{ textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 2}}>
          {t('Select the best title for the passage.')}
        </Typography>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {sequence.blankList.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio sx={styles.radioControl} />}
              label={option}
              sx={{
                ...styles.radio,
                ...(selectedOption === option ? styles.selectedRadio : styles.unSelectedRadio),
              }}
            />
          ))}
        </RadioGroup>
        {/* Answer button */}
        <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 4 }}>
          <AnswerButton text='Submit' onClick={handleNextSequence} />
        </Box>
      </Grid>
    </Grid>
  );
};

TitleThePassageCard.propTypes = {
  handleNextSequence: PropTypes.func.isRequired,
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

export default TitleThePassageCard;
