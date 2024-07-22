import PropTypes from "prop-types";
import { Button, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { grey } from '@mui/material/colors';

const FilterButtonGroup = ({
  label,
  buttons,
  selected,
  onSelectionChange,
  displayedFilter
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
      <Typography variant="subtitle1" 
      sx={{ mr: 1, height: "32px", pr: 2 , pl: 2, backgroundColor:grey[100], borderRadius:1, display:'flex',alignItems:'center'}}>
      {t(displayedFilter[label].label)}
       {/*Display the label*/}
      </Typography>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={
            String(selected) === String(button) ? "contained" : "outlined"
          }
          sx={{ 
            mr: 1, 
            fontSize:'14px',
            height: "32px" , textTransform:"none",
            borderRadius: 1
          }} // Margin right for spacing, height set for uniformity
          onClick={() => onSelectionChange(button)} // Use the provided onSelectionChange prop
        >
          {t(displayedFilter[label][button]) || t(button)} {/* Use the display mapping */}
        </Button>
      ))}
    </Box>
  );
};

FilterButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  displayedFilter: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  .isRequired,
};

export default FilterButtonGroup;
