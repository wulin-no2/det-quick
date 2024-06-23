import PropTypes from 'prop-types';
import { LinearProgress } from '@mui/material';

const ProgressBar = ({ progress }) => {
  return <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />;
};
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
  };

export default ProgressBar;