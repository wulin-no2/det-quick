import { Typography } from "@mui/material";
import PropTypes from "prop-types";
const CardTitle = ({ id, type }) => {
  return (
    <Typography
      sx={{ p: 2, fontSize: "20px", fontWeight: "bold", opacity: 0.78 }}
    >
      {type}#{id}
    </Typography>
  );
};
CardTitle.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default CardTitle;
