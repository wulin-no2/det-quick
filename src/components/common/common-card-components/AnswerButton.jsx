import PropTypes from "prop-types";
import { Button } from "@mui/material";

const AnswerButton = ({ text, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        minWidth: "180px",
        padding: "8px",
        fontSize: "20px",
        margin: "2px",
        borderRadius: "8px",
        textTransform: "none",
        border: "2px solid",
      }}
    >
      {text}
    </Button>
  );
};

AnswerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnswerButton;
