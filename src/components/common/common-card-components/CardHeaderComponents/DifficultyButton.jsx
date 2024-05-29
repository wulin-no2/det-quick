import PropTypes from "prop-types";
import { Box } from "@mui/material";

const DifficultyButton = ({ difficulty }) => {
  let boxProps = {};

  if (difficulty === 3) {
    boxProps = {
      border: "1px solid #ef5350",
      color: "#ef5350",
      text: "hard(130+)",
      backgroundColor: "#ffcdd2",
    };
  } else if (difficulty === 2) {
    boxProps = {
      border: "1px solid #ffa726",
      color: "#ffa726",
      text: "medium(100~125)",
      backgroundColor: "#ffe0b2",
    };
  } else {
    boxProps = {
      border: "1px solid #66bb6a",
      color: "#66bb6a",
      text: "easy(-95)",
      backgroundColor: "#c8e6c9",
    };
  }

  return (
    <Box
      sx={{
        border: boxProps.border,
        minWidth: "140px",
        fontSize: "14px",
        margin: "16px 0px",
        textTransform: "none",
        alignContent: "center",
        color: boxProps.color,
        opacity: 0.58,
        backgroundColor: boxProps.backgroundColor, // Apply background color
      }}
    >
      {boxProps.text}
    </Box>
  );
};

DifficultyButton.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default DifficultyButton;
