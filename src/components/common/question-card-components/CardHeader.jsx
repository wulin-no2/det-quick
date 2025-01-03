/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo} from "react";
import { Box } from "@mui/material";
import ProgressBar from "./CardHeaderComponents/ProgressBar";
import Timer from "./CardHeaderComponents/Timer";
import JumpButton from "./CardHeaderComponents/JumpButton";
import TitleBar from "./CardHeaderComponents/TitleBar";
import { getNameBySubmoduleId,timeLimitBySubmoduleId } from "../../../utils/practice/questionListConstantAndFunc";

const CardHeader = ({
  questionDetail,
  totalWords,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
  isPracticed,
  onTimeUp
}) => {
  // const time_limit = timeLimitBySubmoduleId(questionDetail.submoduleId);
  const time_limit = useMemo(() => timeLimitBySubmoduleId(questionDetail.submoduleId), [questionDetail.submoduleId]);

  // set timer and progressBar based on time_limit
  const [timer, setTimer] = useState(time_limit);

  useEffect(() => {
    setTimer(time_limit); // Reset timer when word changes
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timerInterval);
          console.log("globalIndex ", globalIndex);
          if (onTimeUp) {
            onTimeUp(); // Call onTimeUp when timer ends if it's passed as a prop
          }
          return time_limit;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [
    time_limit,
    onTimeUp,
    globalIndex,
  ]);

  // const progress = ((time_limit - timer) / time_limit) * 100;
  const progress = useMemo(() => ((time_limit - timer) / time_limit) * 100, [time_limit, timer]);


  return (
    <Box
      sx={{
        px: 1,
      }}
    >
      {/* title bar */}
      <TitleBar
        id={questionDetail.questionId}
        difficulty={questionDetail.difficultyLevel}
        onClick={handleBack}
        name={getNameBySubmoduleId(questionDetail.submoduleId)}
        isPracticed={isPracticed}
      />
      {/* Timer, JumpButton and ProgressBar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: 2,mt: 1}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
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
    </Box>
  );
};
export default CardHeader;
