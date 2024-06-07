import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";
import  { useEffect } from "react";

const PaginationRounded = ({ pages, onPageChange, currentPage }) => {
  useEffect(() => {
    console.log('currentPage has been updated in pagination rounded: ', currentPage);
  }, [currentPage]);
  return (
    <Stack spacing={2}>
      <Pagination 
      count={pages} 
      shape="rounded" 
      variant="outlined"
      // onChange={onPageChange} 
      onChange={(event, page) => {
        console.log('PaginationRounded onChange triggered, new value: ', page);
        onPageChange(page)}}
      page={currentPage}/>
    </Stack>
  );
};

PaginationRounded.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired, // Ensure to pass this prop in propTypes
};

export default PaginationRounded;