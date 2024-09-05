import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled } from '@mui/system';

const borderRadiusValue = '30px';  // Adjust based on your design requirements

// 创建 styled components，包括强制覆盖样式的 CSS
const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  backgroundColor: '#EFEDEA',  // Assuming a white background
  borderRadius: borderRadiusValue,
  overflow: 'hidden',  // Ensures the borderRadius is completely visible
  // boxShadow: '0 3px 5px rgba(0,0,0,0.2)',  // Adds some elevation shadow
  border: 'none !important',  // Ensures no border
});

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: 1,
  fontSize: '18px',  // Adjust font size as needed
  margin: '4px',  // Adds small space between buttons to visually separate them
  borderRadius: borderRadiusValue,  // Ensures all sides are rounded
  border: 'none !important',  // Ensures no borders
  '&.Mui-selected': {
    color: theme.palette.primary.main, // 使用主题中定义的主要颜色
    backgroundColor: '#ffffff',  // Background color for the selected button
    borderRadius: borderRadiusValue,  // Keeps border radius on all sides when selected
    "&:hover, &:active": {
      backgroundColor: '#ffffff'  // Ensures the background color stays the same on hover and active
    }
  },
  '&:not(.Mui-selected)': {
    backgroundColor: '#EFEDEA',  // Background color for non-selected buttons
    "&:hover, &:active": {
      backgroundColor: '#EFEDEA'  // Ensures the background color stays the same on hover and active
    }
  },
  transition: 'none',  // Removes transition effects

  // transition: 'background-color 300ms',  // Smooth transition for background color
  textTransform: 'none',  // Removes uppercase transformation
}));


function CourseTypeSelector({ onChange }) {
  const [alignment, setAlignment] = React.useState('Video Courses'); // Initial state

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      onChange(newAlignment);  // 调用传入的 onChange 回调函数

    }
  };

  return (
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      fullWidth
      disableRipple  // Disables ripple effect to remove visual effects
    >
      <StyledToggleButton value="Video Courses" aria-label="left aligned" disableRipple>
      Video Courses
      </StyledToggleButton>
      <StyledToggleButton value="1-on-1 Live Teaching" aria-label="centered" disableRipple>
      1-on-1 Live Teaching
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}

export default CourseTypeSelector;
