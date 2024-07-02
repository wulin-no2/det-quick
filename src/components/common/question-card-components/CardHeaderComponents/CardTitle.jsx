import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
const CardTitle = ({ id, name }) => {
  const {t} = useTranslation();
  return (
    <Typography
      sx={{ px: 1.5, fontSize: "16px", fontWeight: "bold", opacity: 0.78 }}
    >
      {t(name)}{' '}#{id}
    </Typography>
  );
};
CardTitle.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default CardTitle;
