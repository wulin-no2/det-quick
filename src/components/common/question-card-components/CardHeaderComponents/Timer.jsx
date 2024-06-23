import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Timer = ({ timer }) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      {`${minutes}:${seconds.toString().padStart(2, "0")}`}
    </Typography>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default Timer;
