import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const DifficultyButton = ({ difficulty }) => {
  const {t} = useTranslation();
  let boxProps = {};

  if (difficulty === 'Hard') {
    boxProps = {
      border: "1px solid #ef5350",
      color: "#ef5350",
      text: "Hard (130+)",
      backgroundColor: "#ffcdd2",
    };
  } else if (difficulty === 'Medium') {
    boxProps = {
      border: "1px solid #ffa726",
      color: "#ffa726",
      text: "Medium (100~125)",
      backgroundColor: "#ffe0b2",
    };
  } else {
    boxProps = {
      border: "1px solid #66bb6a",
      color: "#66bb6a",
      text: "Easy (95-)",
      backgroundColor: "#c8e6c9",
    };
  }

  return (
    <Box
      sx={{
        border: boxProps.border,
        minWidth: "100px",
        minHeight:'32px',
        fontSize: "14px",
        display:"flex",        
        textTransform: "none",
        justifyContent:'center',
        alignItems: "center",
        color: boxProps.color,
        opacity: 0.68,
        backgroundColor: boxProps.backgroundColor, // Apply background color
        borderRadius:'4px'
      }}
    >
      {t(boxProps.text)}
    </Box>
  );
};

DifficultyButton.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default DifficultyButton;
