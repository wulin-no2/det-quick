import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const AnswerButton = ({ text, onClick ,sx}) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        fontWeight:'bold',
        bgcolor:"#357af5",
        minWidth: "180px",
        py: 1,
        fontSize: "16px",
        margin: "2px",
        borderRadius: 1,
        textTransform: "none",
        height:"46px",
        ...sx, // Apply additional styles
      }}
      //sx={{bgcolor:'#3b5d87', border:'none', color:'white'} // another color
    >
      {t(text)}
    </Button>
  );
};

AnswerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.object, // Add sx prop type
};

export default AnswerButton;
