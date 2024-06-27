import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card, CardContent, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { grey, amber, green, red } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import AnswerButton from "../../common/question-card-components/AnswerButton";

const HighlightedText = styled("span")({
  "::selection": {
    backgroundColor: amber[200],
  },
});

const HighlightTheAnswerCard = ({ sequence, handleNextSequence, currentAnswer }) => {
  const { t } = useTranslation();
  const [highlightedText, setHighlightedText] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);

  useEffect(() => {
    if (currentAnswer) {
      setHighlightedText(currentAnswer);
      setShowCorrection(true);
    } else {
      setHighlightedText("");
      setShowCorrection(false);
    }
  }, [sequence, currentAnswer]);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      setHighlightedText(selectedText);
    } else {
      setHighlightedText("");
    }
  };

  const handleSubmit = () => {
    handleNextSequence(highlightedText);
  };

  const isCorrect = highlightedText.includes(sequence.blankList.answer);

  const styles = {
    box: {
      width: "100%",
      marginTop: 2,
      border: "1px solid lightgray",
      borderRadius: "8px",
      padding: 2,
      overflow: "auto",
      minHeight: "50px",
      backgroundColor: highlightedText ? 'white' : '#f5f5f5',
      ...(showCorrection && {
        backgroundColor: isCorrect ? green[50] : red[50],
        borderColor: isCorrect ? green[500] : red[500],
      })
    },
    correctAnswer: {
      color: grey[700],
      mt: 0.5,
      ...(showCorrection && !isCorrect && {
        display: 'block'
      })
    },
    rectangle: {
      display: "inline-block",
      width: "100%",
      minHeight: "80px",
      border: "2px dashed lightgrey",
      borderRadius: "8px",
      textAlign: "left",
      margin: "12px 0",
      padding: "10px",
      lineHeight: "1.5",
      color: grey[700],
      overflow: "hidden",
      wordWrap: "break-word",
      backgroundColor: grey[200],
      ...(showCorrection && highlightedText && {
        backgroundColor: isCorrect ? green[100] : red[100]
      })
    }
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
          }}
          onMouseUp={handleMouseUp}
        >
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
              <HighlightedText>{sequence.sentenceTemplate}</HighlightedText>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Options */}
      <Grid item xs={5} sx={{ textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
          {t('Click and drag to highlight the answer to the question below.')}
        </Typography>
        <Typography sx={{ lineHeight: 1.6, color: grey[800] }}>{sequence.blankList.question}</Typography>
        <Box sx={styles.box}>
          <Typography variant="body1" sx={{ color: grey[800], minHeight: '200px' }}>
            {highlightedText}
          </Typography>
        </Box>
        {showCorrection && !isCorrect && (
          <Typography sx={styles.correctAnswer}>
            Correct Answer: {sequence.blankList.answer}
          </Typography>
        )}
        {/* Answer button */}
        <Box gutterBottom sx={{ display: 'flex', justifyContent: 'end', pt: 4 }}>
          <AnswerButton text='Next Step' onClick={handleSubmit} />
        </Box>
      </Grid>
    </Grid>
  );
};

HighlightTheAnswerCard.propTypes = {
  handleNextSequence: PropTypes.func.isRequired,
  sequence: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    sequenceOrder: PropTypes.number.isRequired,
    sentenceTemplate: PropTypes.string.isRequired,
    blankList: PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  currentAnswer: PropTypes.string,
};

export default HighlightTheAnswerCard;


