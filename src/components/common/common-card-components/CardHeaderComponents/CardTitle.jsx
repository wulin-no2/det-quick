import { Typography } from "@mui/material";
import PropTypes from "prop-types";
const CardTitle = ({ id, name }) => {
  return (
    <Typography
      sx={{ p: 2, fontSize: "20px", fontWeight: "bold", opacity: 0.78 }}
    >
      {name}#{id}
    </Typography>
  );
};
CardTitle.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default CardTitle;
