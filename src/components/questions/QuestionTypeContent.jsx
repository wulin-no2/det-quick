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

const QuestionTypeContent = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <QuestionFilterMenu />
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
