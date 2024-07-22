import PropTypes from "prop-types";
import { Container, Typography, Grid } from "@mui/material";
import FilterButtonGroup from "./FilterButtonGroup";
import { useTranslation } from "react-i18next";

const FilterMenu = ({ originFilter, displayedFilter, count, filters, onFiltersChange }) => {
  const handleSelectionChange = (category, selection) => {
    const newValue = convertToBoolean(selection);
    const newFilters = { ...filters, [category]: newValue };
    onFiltersChange(newFilters);
  };
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: 2,
        pb: 2,
        // border:'1px solid black'
      }}
    >
      <Grid container spacing={2}>
        {originFilter.map((group, index) => (
          <Grid
            item
            // xs={6}
            key={index}
            sx={{
              // border:'1px solid black',
              pr: 12,
            }}
          >
            <FilterButtonGroup
              label={group[0]}
              buttons={group.slice(1)}
              displayedFilter={displayedFilter}
              selected={filters[group[0]]}
              onSelectionChange={(selection) =>
                handleSelectionChange(group[0], selection)
              }
            />
          </Grid>
        ))}
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            // border:'1px solid red'
          }}
        >
          <Typography>{t("Total Result: ")}</Typography>
          <Typography sx={{ color: "primary.main", pl: 1, pr: 2 }}>
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

FilterMenu.propTypes = {
  originFilter: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  displayedFilter: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
};

export default FilterMenu;

// convert false & true to boolean
function convertToBoolean(value) {
  if (value === "true") return true;
  else if (value === "false") return false;
  else return value;
}
