import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const QuestionFilterButtonGroup = ({ buttons }) => {
  const [selectedButton, setSelectedButton] = useState(buttons[0]);

  const handleButtonClick = button => {
    setSelectedButton(button);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={selectedButton === button ? 'contained' : 'outlined'}
          sx={{ mr: 1 }}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </Button>
      ))}
    </Box>
  );
};

QuestionFilterButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionFilterButtonGroup;
