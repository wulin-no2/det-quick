import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";

export default function PaginationRounded({pages}) {
  return (
    <Stack spacing={2}>
      <Pagination count={pages} shape="rounded" />
    </Stack>
  );
}
PaginationRounded.propTypes = {
  pages: PropTypes.number.isRequired,
};