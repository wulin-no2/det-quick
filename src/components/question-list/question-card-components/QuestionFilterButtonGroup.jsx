import PropTypes from "prop-types";
import { Button, Box, Typography } from "@mui/material";

const getDisplayLabel = (label) => {
  switch (label) {
    case "isAsc":
      return "Sort";
    case "isCollected":
      return "Collection";
    case "isPractice":
      return "Practice";
    case "difficultyLevel":
      return "Difficulty";
    default:
      return label;
  }
};

const QuestionFilterButtonGroup = ({
  label,
  buttons,
  selected,
  onSelectionChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Ensure layout direction is row for side-by-side arrangement
        alignItems: "center", // Vertically center align the items
        mb: 1,
      }}
    >
      <Typography variant="subtitle1" sx={{ mr: 2 }}>
        {getDisplayLabel(label)} {/* Display the label */}
      </Typography>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={
            String(selected) === String(button) ? "contained" : "outlined"
          }
          sx={{ mr: 1, height: "32px" }} // Margin right for spacing, height set for uniformity
          onClick={() => onSelectionChange(button)} // Use the provided onSelectionChange prop
        >
          {button}
        </Button>
      ))}
    </Box>
  );
};

QuestionFilterButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default QuestionFilterButtonGroup;
