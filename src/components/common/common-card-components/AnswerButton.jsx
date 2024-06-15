import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const AnswerButton = ({ text, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        width: "180px",
        padding: 1,
        fontSize: "16px",
        margin: "2px",
        borderRadius: 1,
        textTransform: "none",
      }}
    >
      {t(text)}
    </Button>
  );
};

AnswerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnswerButton;
