import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HoverButton = ({ onClick, color, text }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
                '& p': {
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: '-1px',
                        height: '1px',
                        backgroundColor: color,  // 使用外部传入的颜色
                        width: '100%',
                    }
                },
                '& svg': {
                    transform: 'translateX(4px)',
                    color: color  // 使用外部传入的颜色
                }
            }
        }}
        onClick={onClick}
    >
        <Typography component="p" color={color} sx={{ fontSize: '20px' }}>
            {text} 
        </Typography>
        <ArrowForwardIcon sx={{ fontSize: '22px', ml: '8px', color: color }} />
    </Box>
);

export default HoverButton;
