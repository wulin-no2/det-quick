import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import VIPSubscriptions from '../components/pricing/VIPSubscriptions';
import FaqList from '../components/pricing/FaqList';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FeatureList from '../components/pricing/FeatureList';
function PricingPage() {

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    // paddingX: '100px',
                }}>
                    <Typography variant="h1" component="h1" gutterBottom sx={{
                        color: '#212833',
                        fontFamily: 'Suisse Works, Georgia, PingFang TC, serif',
                        fontWeight: 'bold',  // 加粗
                        fontSize: '40px',  // 字体大小为36px
                        mb: '40px'
                    }}>
                        Subscription Plans
                    </Typography>
                    <VIPSubscriptions />
                    <FeatureList />

                </Box>
            </Box>
            <Box sx={{ }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    // paddingX: '100px',
                }}>
                    <Typography variant="h1" component="h1" gutterBottom sx={{
                        color: '#212833',
                        fontFamily: 'Suisse Works, Georgia, PingFang TC, serif',
                        fontWeight: 'bold',  // 加粗
                        fontSize: '36px',  // 字体大小为36px
                        mb: '30px'
                    }}>
                        Frequently Asked Questions
                    </Typography>
                    <FaqList />

                </Box>
            </Box>
        </Box>
    );

}

export default PricingPage;
