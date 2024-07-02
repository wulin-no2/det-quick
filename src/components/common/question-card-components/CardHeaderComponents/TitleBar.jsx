import PropTypes from "prop-types";
import { Box } from "@mui/material";
import CloseButton from "./CloseButton";
import DifficultyButton from "./DifficultyButton";
import CardTitle from "./CardTitle";
import PracticedButton from "./PracticedButton";
const TitleBar = ({ id, name, onClick, difficulty ,isPracticed}) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 1,
        backgroundColor: "#fff3e0",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        mx: 2,
        mt:2
      }}
    >
      <CloseButton onClick={onClick} />
      <CardTitle id={id} name={name} />
      <DifficultyButton difficulty={difficulty} />
      {isPracticed===true && <PracticedButton/>}
    </Box>
  );
};
TitleBar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPracticed:PropTypes.bool.isRequired,
};

export default TitleBar;
