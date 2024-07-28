import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { blue } from '@mui/material/colors';

export default function SearchBar() {
  const {t} = useTranslation();
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, height:42,borderColor:blue[500] ,borderRadius:6}}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 ,color:blue[500]}}
        placeholder={t('Search')}
      />
      <IconButton type="button" sx={{ p: '10px',color:blue[500] }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
