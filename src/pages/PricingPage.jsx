import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import VIPSubscriptions from '../components/pricing/VIPSubscriptions';
import FaqList from '../components/pricing/FaqList';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FeatureList from '../components/common/FeatureList';
function PricingPage() {
    const features = [
        "Unlimited for Practice Sessions",
        "Access 18000+ Practice Questions",
        "Browse High-scoring Sample Answers",
        "In-depth Question Analysis",
        "High-Frequency Exam Word Book",
        "Tailored Study Plan with Smart Question Selection",
        "AI-Powered Speaking Evaluations"
    ];

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
                    {/* <FeatureList /> */}
                    <FeatureList
                        features={features}
                        // textColor="blue" // 设置文本颜色为蓝色
                        // iconColor="primary" // 设置对勾图标颜色为主题的 primary 色
                    />

                </Box>
            </Box>
            <Box sx={{}}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '100px',
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
