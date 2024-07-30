import PropTypes from "prop-types";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { blue } from '@mui/material/colors';

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  const { t } = useTranslation();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 260, height: 38, borderColor: blue[500], borderRadius: 6 }}
      onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1, color: blue[500]}}
        placeholder={t('Search')}
        value={searchInput}
        onChange={handleInputChange}
      />
      <IconButton type="button" sx={{ p: '10px', color: blue[500] }} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
SearchBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
