import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import VIPSubscriptions from '../components/pricing/VIPSubscriptions';
function PricingPage() {

    return(
        <Box sx={{width: '100%'}} >
              <Box sx={{ bgcolor: '#FFFDFA', }}>
              {/* <Box sx={{ bgcolor: 'red', }}> */}

                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    // paddingX: '100px',
                }}>
            <VIPSubscriptions/>

                </Box>
                </Box>
        </Box>
    );

}

export default PricingPage;
