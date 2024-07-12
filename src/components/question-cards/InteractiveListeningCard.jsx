import PropTypes from "prop-types";
import { Box, Paper,Grid,Typography } from "@mui/material";
import {useEffect,} from "react";
import CardHeader from "../common/question-card-components/CardHeader";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import { grey } from "@mui/material/colors";

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
      <Paper elevation={0}
      variant="outlined"
      sx={{my:2,mx:3,bgcolor:grey[50],borderRadius:2}}
      >
      <Grid container>
          {/* image */}
          <Grid item xs={4} 
          sx={{
            // border:'1px solid blue',
            display:'flex',justifyContent:'end',alignItems:'start'}}
          >
              <img
                src="/interactiveListening.png"
                style={{ 
                  height: "100%", 
                  borderRight:'1px solid',
                  borderColor:grey[300],
                  borderRadius:"8px 0 0 8px"
                }}
              />
              {/* <audio ref={audioRef} src={questionDetail.questionAudioUrl} /> */}
          </Grid>
          {/* question text */}
          <Grid item xs={8} sx={{display:'flex', flexDirection:'column', justifyContent:'center',
          textAlign:'center',
            // border:'1px solid blue',
            pl:4,
            pr:8 
          }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", opacity: 0.92}}>
              {t("You will participate in a conversation about the scenario below.")}
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              sx={{ fontWeight:'medium', textAlign:'start',
                minWidth: "500px",lineHeight:1.8,
                bgcolor:'white', p:4, border:"1px solid", borderColor:grey[300],borderRadius:2}}>
              {t(questionDetail.bgInfo)}
            </Typography>
            {/* answer button */}
            <Box
              gutterBottom
              sx={{
                display: "flex",
                pt:6,
                justifyContent: "end",
              }}>
              <AnswerButton text="Start" onClick={handleStart} />
            </Box>
          </Grid>
      </Grid>
      </Paper>
      
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
