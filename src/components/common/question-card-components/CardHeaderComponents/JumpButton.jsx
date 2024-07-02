import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";


const JumpButton = ({ onLast, onNext, globalIndex, totalWords }) => {
  const {t} = useTranslation();
  
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 1,
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        onClick={onLast}
        disabled={globalIndex === 1}
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", fontSize: "14px",height:'36px' }}>
        {t('Last')}
      </Button>
      <Typography sx={{ mx: 2, fontSize: "16px", color: "#1976d2"}}>
        {globalIndex}/{totalWords}
      </Typography>
      <Button
        variant="outlined"
        onClick={onNext}
        disabled={globalIndex === totalWords}
        endIcon={<ArrowForwardIcon />}
        sx={{ textTransform: "none", fontSize: "14px", height:'36px'}}
      >
        {t('Next')}
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
