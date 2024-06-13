import PropTypes from "prop-types";
import { Container, Typography, Grid } from "@mui/material";
import QuestionFilterButtonGroup from "./QuestionFilterButtonGroup";
import { useTranslation } from "react-i18next";

const QuestionFilterMenu = ({ buttonGroups, count, filters, onFiltersChange }) => {
  
  const handleSelectionChange = (category, selection) => {
    const newValue = convertToBoolean(selection); 
    const newFilters = { ...filters, [category]: newValue };
    onFiltersChange(newFilters);
  };
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" 
    sx={{ pt: 2 ,pb:2, 
      // border:'1px solid black'
    }}
    >
      <Grid container spacing={2}>
        {buttonGroups.map((group, index) => (
          <Grid item 
          xs={6} 
          key={index}
          sx={{
            // border:'1px solid black',
            // pr:8
          }} 
          > 
            <QuestionFilterButtonGroup
              label={group[0]}
              buttons={group.slice(1)}
              selected={filters[group[0]]}
              onSelectionChange={(
                selection) => handleSelectionChange(group[0], selection)}
            />
          </Grid>
        ))}
        <Grid item xs={6} 
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" ,
          // border:'1px solid red'
        }}>
          <Typography>{t('Total Result: ')}</Typography>
          <Typography sx={{ color: "primary.main", pl: 1, pr: 2 }}>{count}</Typography>
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
