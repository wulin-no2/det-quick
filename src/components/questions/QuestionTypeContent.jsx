import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import QuestionFilterMenu from './QuestionFilterMenu';
import QuestionList from './QuestionList';
import PaginationRounded from '../common/PaginationRounded';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const buttonGroups = [
  ["Button 1-1", "Button 1-2", "Button 1-3", "Button 1-4"],
  ["Button 2-1", "Button 2-2", "Button 2-3", "Button 2-4"],
  ["Button 3-1", "Button 3-2", "Button 3-3", "Button 3-4"],
  ["Button 4-1", "Button 4-2", "Button 4-3"],
  ["Button 5-1", "Button 5-2", "Button 5-3"],
];
const count = 500;

const QuestionTypeContent = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={3}>
        <Item>
          <QuestionFilterMenu buttonGroups={buttonGroups} count={count}/>
        </Item>
        <Item>
          <QuestionList />
        </Item>
        <Item sx={{ display: 'flex', justifyContent: 'center' }}>
          <PaginationRounded />
        </Item>
      </Stack>
    </Box>
  );
};

export default QuestionTypeContent;
