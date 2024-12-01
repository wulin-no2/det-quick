// import React from 'react';
// import { Typography, Container, Button } from '@mui/material';

// const PayCancelPage = () => {
//     return (
//         <Container component="main" maxWidth="xs" style={{ marginTop: '20px' }}>
//             <Typography component="h1" variant="h5">
//                 Payment Canceled
//             </Typography>
//             <Typography variant="body1" style={{ marginTop: '20px' }}>
//                 You have canceled the payment process.
//             </Typography>
//             <Button variant="contained" color="primary" href="/" style={{ marginTop: '20px' }}>
//                 Go to Home
//             </Button>
//         </Container>
//     );
// };

// export default PayCancelPage;


import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const PayCancelPage = () => {
    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: 4 }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 2 }}>
                <CancelIcon sx={{ fontSize: 100, color: 'error.main' }} />
                <Typography component="h1" variant="h4" sx={{ mt: 4 }}>
                    Payment Canceled
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    You have canceled the payment process.
                </Typography>
                <Button variant="contained" color="primary" href="/" sx={{ mt: 4 }}>
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
};

export default PayCancelPage;
