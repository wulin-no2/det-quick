import PropTypes from "prop-types";
import { Box } from "@mui/material";
import CloseButton from "./CloseButton";
import DifficultyButton from "./DifficultyButton";
import CardTitle from "./CardTitle";
const TitleBar = ({ id, type, onClick, difficulty }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "8px",
        backgroundColor: "#fff3e0",
        justifyContent: "flex-start",
        alignContent: "center",
        m: 2,
      }}
    >
      <CloseButton onClick={onClick} />
      <CardTitle id={id} type={type} />
      <DifficultyButton difficulty={difficulty} />
    </Box>
  );
};
TitleBar.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TitleBar;
