import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const CloseButton = ({ onClick }) => {
  const {t} = useTranslation();
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        minWidth: "80px",
        padding: "4px",
        fontSize: "18px",
        margin: "12px",
        borderRadius: "8px",
        textTransform: "none",
      }}
    >
      {t('close')}
    </Button>
  );
};

CloseButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
