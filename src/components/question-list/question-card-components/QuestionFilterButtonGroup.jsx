import PropTypes from "prop-types";
import { Button, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const displayMapping = {
  isAsc: {
    label: "Order",
    true: "Question Number",
    false: "Latest"
  },
  difficultyLevel: {
    label: "Difficulty",
    Easy: "Easy (95-)",
    Medium: "Medium (100~125)",
    Hard: "Hard (130+)"
  },
  isPracticed: {
    label: "Practice",
    true: "Practiced",
    false: "Unpracticed"
  }
};

const QuestionFilterButtonGroup = ({
  label,
  buttons,
  selected,
  onSelectionChange,
}) => {
  const { t } = useTranslation();
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
      {t(displayMapping[label].label)}
       {/*Display the label*/}
      </Typography>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={
            String(selected) === String(button) ? "contained" : "outlined"
          }
          sx={{ mr: 1, height: "32px" , textTransform:"none"}} // Margin right for spacing, height set for uniformity
          onClick={() => onSelectionChange(button)} // Use the provided onSelectionChange prop
        >
          {t(displayMapping[label][button]) || t(button)} {/* Use the display mapping */}
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
