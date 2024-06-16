import PropTypes from 'prop-types';
import { Snackbar, SnackbarContent} from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { useEffect ,useState} from 'react';

const Toast = ({ message, open, duration = 400 }) => {
    const [isOpen, setIsOpen] = useState(open);
    useEffect(() => {
        if (open) {
          setIsOpen(true);
          const timer = setTimeout(() => {
            setIsOpen(false);
          }, duration);
    
          return () => clearTimeout(timer);
        }
      }, [open,duration]);
  return (
    <Snackbar
      open={isOpen}
    //   autoHideDuration={400} // Toast will auto-hide after 500ms
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ top: '150px !important', boxShadow: 'none' }} // Move the Snackbar 150px down from the top and remove shadow
    >
      <SnackbarContent
        message={message}
        sx={{
            backgroundColor: green[100],
            borderColor: green[300],
            borderWidth: '1px',
            borderRadius: 4,
            borderStyle: 'solid',
            color: grey[600],
            justifyContent: 'center',
            fontSize:'16px',
            padding:'0px',     // Set the padding
          }}
      />
    </Snackbar>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  duration:PropTypes.number.isRequired,
};

export default Toast;
