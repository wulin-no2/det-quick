/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box} from "@mui/material";
import ProgressBar from "./CardHeaderComponents/ProgressBar";
import Timer from "./CardHeaderComponents/Timer";
import JumpButton from "./CardHeaderComponents/JumpButton";
import TitleBar from "./CardHeaderComponents/TitleBar";
const CardHeader = ({ word, onLast, onNext, currentIndex, totalWords }) => {
  // set timer and progressBar based on word.time_limit
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(0); // Reset timer when word changes
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev < word.time_limit) {
          return prev + 1;
        } else {
          clearInterval(timerInterval);
          onNext();
          return word.time_limit;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [word.time_limit, onNext]);

  const progress = (timer / word.time_limit) * 100;

  const handleExit = () => {
    console.log("Exit test");
  };
  return (
    <>
      {/* title bar */}
      <TitleBar
        id={word.id}
        type={word.type}
        difficulty={word.difficulty}
        onClick={handleExit}
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
            number={word.type_id}
            total={word.type_total}
            onLast={onLast}
            onNext={onNext}
            currentIndex={currentIndex}
            totalWords={totalWords}
          />
        </Box>
        <ProgressBar progress={progress} />
      </Box>
    </>
  );
};
export default CardHeader;
