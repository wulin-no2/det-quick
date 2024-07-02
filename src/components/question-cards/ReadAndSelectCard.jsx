import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import CardHeader from "../common/question-card-components/CardHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { green, red, grey } from "@mui/material/colors";
// import Toast from "../common/Toast";
import { updatePracticeStatus } from "../../api/api-fetchQuestionDetail";

const ReadAndSelectCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  // const [openToast, setOpenToast] = useState(false);
  const [isPracticed, setIsPracticed] = useState(
    questionDetail.isPracticed || false
  );
  const { t } = useTranslation();

  if (!questionDetail) {
    return <div></div>;
  }
  // handle answer buttons
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === questionDetail.correct);
    // setOpenToast(true);
    // Update practice status
    updatePracticeStatus(questionDetail.id, true);

    // Set practice status to true
    setIsPracticed(true);
    console.log(`Answered: ${answer}`);
  };

  const getButtonSx = (answer) => {
    if (selectedAnswer === answer) {
      return {
        backgroundColor: isCorrect ? green[100] : red[100], // green.100 or red.100
        borderColor: isCorrect ? green[500] : red[500], // green.500 or red.500
        borderWidth: "1px",
        borderStyle: "solid",
        color: grey[800],
        "&:hover": {
          backgroundColor: isCorrect ? green[100] : red[100], // Same as backgroundColor to override hover effect
          borderColor: isCorrect ? green[500] : red[500], // Same as borderColor to override hover effect
        },
        "&:focus": {
          outline: "none", // Remove the blue outline on focus
          boxShadow: "none", // Remove the box shadow on focus
        },
      };
    }
    return {};
  };

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        minHeight:'660px'
      }}
    >
      {/* CardHeader */}
      <CardHeader
        questionDetail={questionDetail}
        handleNext={handleNext}
        handleLast={handleLast}
        totalWords={count}
        handleBack={handleBack}
        globalIndex={globalIndex}
        isPracticed={isPracticed}
      />
      {/* question */}
      <Box
        sx={{m: 6,
        }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92 }}>
          {t("Is this a real English word?")}
        </Typography>
      </Box>
      {/* word */}
      <Box sx={{ m: 10 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.78 }}
        >
          {questionDetail.word}
        </Typography>
      </Box>
      <Box sx={{mt:2,mb:10}}>
        {/* answer buttons */}
        <Box
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mx: 2 }}>
            <AnswerButton
              text={t("Yes")}
              onClick={() => handleAnswer(true)}
              sx={getButtonSx(true)}
            />
          </Box>
          <Box sx={{ mx: 2 }}>
            <AnswerButton
              text={t("No")}
              onClick={() => handleAnswer(false)}
              sx={getButtonSx(false)}
            />
          </Box>
        </Box>
        {/* feedback */}
        {selectedAnswer !== null && (
          <Box
            sx={{
              mt: 4,
              color: isCorrect ? green[400] : red[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isCorrect ? (
              <CheckCircleIcon sx={{ mr: 1 }} />
            ) : (
              <CancelIcon sx={{ mr: 1 }} />
            )}
            <Typography variant="h6">
              {isCorrect ? t("Right Answer") : t("Sorry. It's wrong")}
            </Typography>
          </Box>
        )}
      </Box>

      {/* toast */}
      {/* <Toast
        message="Practiced + 1"
        open={openToast}
      /> */}
    </Box>
  );
};

ReadAndSelectCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default ReadAndSelectCard;
