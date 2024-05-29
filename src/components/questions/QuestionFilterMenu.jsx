import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import QuestionFilterButtonGroup from './QuestionFilterButtonGroup';

const buttonGroups = [
  ['Button 1-1', 'Button 1-2', 'Button 1-3', 'Button 1-4'],
  ['Button 2-1', 'Button 2-2', 'Button 2-3', 'Button 2-4'],
  ['Button 3-1', 'Button 3-2', 'Button 3-3', 'Button 3-4'],
  ['Button 4-1', 'Button 4-2', 'Button 4-3'],
];

const QuestionFilterMenu = () => (
  <Container maxWidth="lg" sx={{ mb: 3 }}>
    <Grid container spacing={2}>
      {buttonGroups.map((group, index) => (
        <Grid xs={6} key={index}>
          <QuestionFilterButtonGroup buttons={group} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default QuestionFilterMenu;
