import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function RoundedButton({ text, onClick, showArrow = false, sx = {} }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'left', ...sx }}>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          borderRadius: 28, // Adjust based on your design requirements
          textTransform: 'none', // Keeps the text as provided without uppercase
          fontSize: '1rem', // Adjust font size as needed
          ...sx
        }}
        endIcon={showArrow ? <ArrowForwardIosIcon /> : null}
      >
        {text}
      </Button>
    </Box>
  );
}

export default RoundedButton;
