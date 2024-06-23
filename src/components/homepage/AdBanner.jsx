import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AdBanner({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 1,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        width: '1200px',
        height: '400px',
      }}>
      <Box
        component="img"
        src={images[currentImageIndex]}
        alt={`banner ${currentImageIndex + 1}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}/>
      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          opacity: 0.6,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          opacity: 0.6,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
        }}
      >
        {images.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => handleIndicatorClick(idx)}
            role="button"
            aria-label={`Show banner ${idx + 1}`}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? handleIndicatorClick(idx) : null)}
            sx={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: idx === currentImageIndex ? '#fff' : '#ccc',
              margin: '0 5px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

AdBanner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdBanner;




