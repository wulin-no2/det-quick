import PropTypes from 'prop-types';
import { Container, Typography,Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import QuestionFilterButtonGroup from "./QuestionFilterButtonGroup";

const QuestionFilterMenu = ({ buttonGroups, count }) => (
  <Container maxWidth="lg" sx={{ p: 3 }}>
    <Box>
      
    </Box>
    <Grid container spacing={2}>
      {buttonGroups.map((group, index) => (
        <Grid xs={6} key={index}>
          <QuestionFilterButtonGroup buttons={group} />
        </Grid>
      ))}
      <Grid
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <Typography>total:</Typography>
        <Typography sx={{ color: theme => theme.palette.primary.main, pl: 1, pr: 1 }}>{count}</Typography>
        <Typography>results</Typography>
      </Grid>
    </Grid>
  </Container>
);

// Define prop types for validation
QuestionFilterMenu.propTypes = {
  buttonGroups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  count: PropTypes.number.isRequired,
};

export default QuestionFilterMenu;
