import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";

const JumpButton = ({ onLast, onNext, currentIndex, totalWords }) => {
  
  return (
    <Box
      sx={{
        // p: 1,
        display: "flex",
        border: "1px solid #1976d2",
        borderRadius: "8px",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Button
        onClick={onLast}
        disabled={currentIndex === 0}
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", fontSize: "16px" }}
      >
        Last
      </Button>
      <Typography sx={{ mx: 2, fontSize: "16px", color: "#1976d2" }}>
        {currentIndex + 1}/{totalWords}
      </Typography>
      <Button
        onClick={onNext}
        disabled={currentIndex === totalWords - 1}
        endIcon={<ArrowForwardIcon />}
        sx={{ textTransform: "none", fontSize: "16px" }}
      >
        Next
      </Button>
    </Box>
  );
};
JumpButton.propTypes = {
  number: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  totalWords: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onLast: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default JumpButton;
