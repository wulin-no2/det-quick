// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Typography, Container,Box, Button } from '@mui/material';

// const PaySuccessPage = () => {

//     const [searchParams] = useSearchParams();
//     const sessionId = searchParams.get('session_id')

//     return (
//         <Box component="main" maxWidth="xs" style={{ marginTop: '20px' }}>
//             <Typography component="h1" variant="h5">
//                 Payment Successful!
//             </Typography>
//             <Typography variant="body1" style={{ marginTop: '20px' }}>
//                 Your payment was successful. Your session ID is: {sessionId}
//             </Typography>
//             <Button variant="contained" color="primary" href="/" style={{ marginTop: '20px' }}>
//                 Go to Home
//             </Button>
//         </Box>
//     );

// }

// export default PaySuccessPage;

// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Typography, Container, Box, Button } from '@mui/material';
// import { SvgIcon } from '@mui/material';

// function CircleCheckIcon(props) {
//     return (
//       <SvgIcon {...props}>
//         <circle cx="12" cy="12" r="10" fill="white" stroke="green"
//         strokeWidth="2" 
     

//         />
//         <path d="M9 12l2 2 4-4" fill="none" stroke="green" strokeWidth="2" />
//       </SvgIcon>
//     );
//   }



// const PaySuccessPage = () => {
//   const [searchParams] = useSearchParams();
//   const sessionId = searchParams.get('session_id');

//   return (
//     <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: 4 }}>
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 2 }}>
//         <CircleCheckIcon sx={{ fontSize: 64, color: 'success.main' }} />
//         <Typography component="h1" variant="h4" sx={{ mt: 2 }}>
//           Payment Successful!
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           Your payment was successful. Your session ID is: {sessionId}
//         </Typography>
//         <Button variant="contained" color="primary" href="/" sx={{ mt: 4 }}>
//           Go to Home
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default PaySuccessPage;


// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Typography, Container, Box, Button } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const PaySuccessPage = () => {
//   const [searchParams] = useSearchParams();
//   const sessionId = searchParams.get('session_id');

//   return (
//     <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: 4 }}>
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 2 }}>
//         <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'success.main' }} />
//         <Typography component="h1" variant="h4" sx={{ mt: 4 }}>
//           Payment Successful!
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           Your payment was successful. Your session ID is: {sessionId}
//         </Typography>
//         <Button variant="contained" color="primary" href="/" sx={{ mt: 4 }}>
//           Go to Home
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default PaySuccessPage;


import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PaySuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: 4 }}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 2 }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'success.main' }} />
        <Typography component="h1" variant="h4" sx={{ mt: 4 }}>
          Payment Successful!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your payment was successful. Your session ID is: {sessionId}
        </Typography>
        <Box sx={{ mt: 4, p: 2, border: 1, borderRadius: 2, width: '100%', maxWidth: 400 ,bgcolor:'white'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', typography: 'body2' }}>
            <span>Amount Paid:</span>
            <Typography fontWeight="medium">$100.00</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', typography: 'body2', mt: 2 }}>
            <span>Date & Time:</span>
            <Typography fontWeight="medium">January 22, 2024, 10:30 AM</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', typography: 'body2', mt: 2 }}>
            <span>Reference Number:</span>
            <Typography fontWeight="medium">1234567890</Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary" href="/" sx={{ mt: 4 }}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default PaySuccessPage;
