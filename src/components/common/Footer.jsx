import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        bottom: 0,
        width: '100%',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" component="div" gutterBottom>
          About
        </Typography>
        <Link href="/about-us" color="textPrimary" underline="none" sx={{ display: 'block', padding: '5px 0' }}>
          About Us
        </Link>
        <Link href="/contact" color="textPrimary" underline="none" sx={{ display: 'block', padding: '5px 0' }}>
          Contact
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" component="div" gutterBottom>
          Support
        </Typography>
        <Link href="/faq" color="textPrimary" underline="none" sx={{ display: 'block', padding: '5px 0' }}>
          FAQ
        </Link>
        <Link href="/customer-support" color="textPrimary" underline="none" sx={{ display: 'block', padding: '5px 0' }}>
          Customer Support
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" component="div" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" component="p" sx={{ margin: '5px 0' }}>
          123 Street, City
        </Typography>
        <Typography variant="body1" component="p" sx={{ margin: '5px 0' }}>
          Email: support@example.com
        </Typography>
        <Typography variant="body1" component="p" sx={{ margin: '5px 0' }}>
          Phone: +123-456-7890
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
