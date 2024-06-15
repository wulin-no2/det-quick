/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box} from "@mui/material";
import ProgressBar from "./CardHeaderComponents/ProgressBar";
import Timer from "./CardHeaderComponents/Timer";
import JumpButton from "./CardHeaderComponents/JumpButton";
import TitleBar from "./CardHeaderComponents/TitleBar";

const timeLimit = (submoduleId)=>{
  switch(submoduleId){
    case 1: return 10;
    case 2: return 20;
    case 3: return 30;
    case 4: return 15;
    case 5: return 10;
    case 6: return 15;
    default: return 10;
  }
}
const CardHeader = ({ questionDetail, totalWords,
  handleBack,
  globalIndex,
  handleLast, handleNext,
  // getNameBySubmoduleId
}) => {
  const time_limit = timeLimit(questionDetail.submoduleId);

  // set timer and progressBar based on time_limit
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(0); // Reset timer when word changes
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev < time_limit) {
          return prev + 1;
        } else {
          clearInterval(timerInterval);
          handleNext();
          return time_limit;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [time_limit, handleNext]);

  const progress = (timer / time_limit) * 100;

  return (
    <>
      {/* title bar */}
      <TitleBar
        
        id={questionDetail.questionId}
        // type={word.type}
        difficulty={questionDetail.difficultyLevel}
        onClick={handleBack}
        name={questionDetail.submoduleId}
      />
      {/* Timer, JumpButton and ProgressBar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 2,
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Timer timer={timer} />
          <JumpButton
            onLast={handleLast}
            onNext={handleNext}
            globalIndex={globalIndex}
            totalWords={totalWords}
          />
        </Box>
        <ProgressBar progress={progress} />
      </Box>
    </>
  );
};
export default CardHeader;
