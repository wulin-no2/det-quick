import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import { grey, green, red } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import AnswerButton from "../../common/AnswerButton";

const IdentifyTheIdeaCard = ({
  sequence,
  handleNextSequence,
  currentAnswer,
  handlePrevious,
  currentSequenceIndex,
}) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);

  useEffect(() => {
    if (currentAnswer) {
      setSelectedOption(currentAnswer);
      setShowCorrection(true);
    } else {
      setSelectedOption("");
      setShowCorrection(false);
    }
  }, [sequence, currentAnswer]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    handleNextSequence(selectedOption);
  };

  const styles = {
    radio: {
      width: "100%",
      border: "1px solid",
      borderRadius: "8px",
      padding: "10px",
      mx: "auto",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: grey[700],
    },
    unSelectedRadio: {
      borderColor: grey[300],
    },
    selectedRadio: {
      borderColor: "#357af5",
      backgroundColor: "#e3f2fd", // Light blue background
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
    correctRadio: {
      backgroundColor: green[50],
      borderColor: green[500],
    },
    incorrectRadio: {
      backgroundColor: red[50],
      borderColor: red[500],
    },
    correctAnswerText: {
      color: grey[700],
      mt: 0.5,
    },
  };

  const renderOptions = () => {
    return sequence.blankList.options.map((option, index) => {
      const isCorrect = option === sequence.blankList.answer;
      const isSelected = selectedOption === option;
      const showIncorrect = showCorrection && !isCorrect && isSelected;
      const showCorrect = showCorrection && isCorrect;

      return (
        <Box key={index} sx={{ mb: 1 }}>
          <FormControlLabel
            value={option}
            control={<Radio sx={styles.radioControl} />}
            label={option}
            sx={{
              ...styles.radio,
              ...(isSelected ? styles.selectedRadio : styles.unSelectedRadio),
              ...(showCorrect && styles.correctRadio),
              ...(showIncorrect && styles.incorrectRadio),
            }}
          />
        </Box>
      );
    });
  };

  return (
    <Grid container spacing={4} sx={{ pb: 2, px: 4 }}>
      {/* Passage */}
      <Grid item xs={7}>
        <Card
          sx={{
            minWidth: "320px",
            backgroundColor: grey[100],
            border: "1px solid lightgrey",
            boxShadow: "none",
            height: "100%",
          }}
        >
          <CardContent sx={{ px: 0, py: 0, textAlign: "left" }}>
            <Typography
              sx={{ color: grey[700], px: 3, py: 1.5, fontSize: "14px" }}
            >
              {t("PASSAGE")} #{sequence.questionId}-{sequence.sequenceOrder}
            </Typography>
            <Divider />
            <Typography
              variant="body1"
              sx={{
                px: 3,
                py: 0,
                lineHeight: 2,
                mt: 2,
                color: grey[700],
              }}
            >
              {sequence.sentenceTemplate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Options */}
      <Grid item xs={5} sx={{ textAlign: "left" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
          {t("Select the idea that is expressed in the passage.")}
        </Typography>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {renderOptions()}
        </RadioGroup>
        {/* Answer button */}
        <Box
          gutterBottom
          sx={{ display: "flex", justifyContent: "space-between", pt: 4 }}
        >
          {showCorrection && currentSequenceIndex > 1 && (
            <AnswerButton text="Previous" onClick={handlePrevious} />
          )}
          <AnswerButton text="Next Step" onClick={handleSubmit} />
        </Box>
      </Grid>
    </Grid>
  );
};

IdentifyTheIdeaCard.propTypes = {
  handleNextSequence: PropTypes.func.isRequired,
  sequence: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    sequenceOrder: PropTypes.number.isRequired,
    sentenceTemplate: PropTypes.string.isRequired,
    blankList: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  currentAnswer: PropTypes.string,
  handlePrevious: PropTypes.func.isRequired,
  currentSequenceIndex: PropTypes.number.isRequired,
};

export default IdentifyTheIdeaCard;
