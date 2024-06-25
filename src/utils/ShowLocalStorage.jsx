import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ShowLocalStorage = ({ componentName }) => {
  useEffect(() => {
    console.log(`Component ${componentName} is logging localStorage contents:`);

    // get localStorage 
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
    }
  }, [componentName]);

  return null;
};

ShowLocalStorage.propTypes = {
  componentName: PropTypes.string.isRequired,
};

