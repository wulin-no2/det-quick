import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CloseButton = ({ onClick }) => {
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
      close
    </Button>
  );
};

CloseButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
