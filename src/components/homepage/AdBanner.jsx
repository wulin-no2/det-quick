import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AdBanner.css';

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

  return (
    <div className="ad-banner">
      <img src={images[currentImageIndex]} alt={`banner ${currentImageIndex + 1}`} />
      <div className="indicators">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(idx)}
            role="button"
            aria-label={`Show banner ${idx + 1}`}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? handleIndicatorClick(idx) : null)}
          ></span>
        ))}
      </div>
    </div>
  );
}

AdBanner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdBanner;

