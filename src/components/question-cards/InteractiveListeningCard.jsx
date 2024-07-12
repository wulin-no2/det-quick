import PropTypes from "prop-types";
import { Box,Divider,Grid,Typography } from "@mui/material";
import {useEffect,} from "react";
import CardHeader from "../common/question-card-components/CardHeader";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";


const InteractiveListeningCard = ({
  count,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("question detail is", questionDetail);
    // console.log("questionImageUrl:", questionDetail.questionImageUrl);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  // handle answer buttons
  const handleStart = () => {
  };

  return (
    <Box
      sx={{
        width: "1200px",
        margin: "auto",
        textAlign: "center",
        pb: 2,
        minHeight:'700px',
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
      />
      {/* question */}
      <Grid container>
          {/* image */}
          <Grid item xs={4} 
          sx={{
            // border:'1px solid blue',
            display:'flex',justifyContent:'end',alignItems:'start'}}
          >
              <img
                src="/interactiveListening.png"
                style={{ width: "300px", margin: "16px" }}
              />
              {/* <audio ref={audioRef} src={questionDetail.questionAudioUrl} /> */}
          </Grid>
          {/* question text */}
          <Grid item xs={8} sx={{display:'flex', flexDirection:'column', justifyContent:'center',
          textAlign:'center',
            // border:'1px solid blue',
            px:2
          }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", opacity: 0.92 }}
            >
              {t("You will participate in a conversation about the scenario below.")}
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              sx={{ opacity: 0.88, minWidth: "500px",pt: 1,pl:2,pr:8 }}
            >
              {t(questionDetail.bgInfo)}
            </Typography>
            {/* answer button */}
            <Box
              gutterBottom
              sx={{
                display: "flex",
                pt:6,
                justifyContent: "center",
              }}>
              <AnswerButton text="Start" onClick={handleStart} />
            </Box>
          </Grid>
      </Grid>
      

      {/* Divider */}
      <Divider sx={{ bgcolor: "grey.100", width: "96%", mx: "auto" }} />
    </Box>
  );
};

InteractiveListeningCard.propTypes = {
  count: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveListeningCard;
