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
        minWidth: "60px",
        p: 0.5,
        fontSize: "16px",
        mx: 1,
        my:1,
        borderRadius: 1,
        textTransform: "none",
      }}
    >
      {t('Exit')}
    </Button>
  );
};

CloseButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
