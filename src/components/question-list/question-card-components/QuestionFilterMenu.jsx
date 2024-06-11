import PropTypes from "prop-types";
import { Container, Typography, Grid } from "@mui/material";
import QuestionFilterButtonGroup from "./QuestionFilterButtonGroup";

const QuestionFilterMenu = ({ buttonGroups, count, filters, onFiltersChange }) => {
  const handleSelectionChange = (category, selection) => {
    const newValue = convertToBoolean(selection); 
    const newFilters = { ...filters, [category]: newValue };
    onFiltersChange(newFilters);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {buttonGroups.map((group, index) => (
          <Grid item xs={6} key={index}>
            <QuestionFilterButtonGroup
              label={group[0]}
              buttons={group.slice(1)}
              selected={filters[group[0]]}
              onSelectionChange={(
                selection) => handleSelectionChange(group[0], selection)}
            />
          </Grid>
        ))}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Typography>total:</Typography>
          <Typography sx={{ color: "primary.main", pl: 1, pr: 1 }}>{count}</Typography>
          <Typography>results</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

QuestionFilterMenu.propTypes = {
  buttonGroups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
};

export default QuestionFilterMenu;

// convert false & true to boolean 
function convertToBoolean(value) {
  if(value === "true") return true;
  else if(value === "false") return false;
  else return value;
}
