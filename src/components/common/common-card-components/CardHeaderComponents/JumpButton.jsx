import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";

const JumpButton = ({ onLast, onNext, globalIndex, totalWords }) => {
  
  return (
    <Box
      sx={{
        // p: 1,
        display: "flex",
        // border: "1px solid #1976d2",
        borderRadius: "8px",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Button
        onClick={onLast}
        disabled={globalIndex === 1}
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", fontSize: "16px",}}
        
      >
        Last
      </Button>
      <Typography sx={{ mx: 2, fontSize: "16px", color: "#1976d2" }}>
        {globalIndex}/{totalWords}
      </Typography>
      <Button
        onClick={onNext}
        disabled={globalIndex === totalWords}
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
  globalIndex:PropTypes.number.isRequired,
};

export default JumpButton;
