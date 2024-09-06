// import React from 'react';
// import { Container, Grid, Box, Typography } from '@mui/material';

// function VideoCourseOverview() {

// }

// export default VideoCourseOverview;
import React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { useTheme } from '@mui/material/styles';

function VideoCourseOverview() {
    const theme = useTheme();  // 获取主题
    // 创建带有主题颜色的图标样式
    const iconStyles = {
        fontSize: 65,
        color: theme.palette.primary.main  // 使用主题中的 primary 颜色
    };


    const TitleTypography = ({ children, sx }) => (
        <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
                color: '#212833',
                fontFamily: 'Suisse Works, Georgia, PingFang TC, serif',
                fontWeight: 'bold',  // 加粗
                fontSize: '40px',  // 字体大小为36px
                ...sx  // 合并外部传入的sx属性
            }}
        >
            {children}
        </Typography>
    );

    const SubTitleTypography = ({ children, sx }) => (
        <Box sx={{ paddingTop: '20px', paddingBottom: '10px', ...sx }}> {/* 包裹Typography并设置间距 */}
            <Typography
                variant="h6"
                component="subtitle1"
                gutterBottom
                sx={{
                    color: '#212833',
                    fontFamily: '"Suisse Int\'l", "Helvetica Neue", "Arial", sans-serif',
                    fontWeight: 'bold',
                    fontSize: '24px',
                }}
            >
                {children}
            </Typography>
        </Box>

    );

    const ContentTypography = ({ children, sx }) => (
        <Typography
            variant="body1"
            // paragraph
            sx={{
                fontFamily: '"Suisse Int\'l", "Helvetica Neue", "Arial", sans-serif',
                fontSize: '16px',
                color: '#212833',
                wordWrap: 'break-word',
                lineHeight: '1.3',  // 调整行高
                marginBottom: '8px',
                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );

    return (
        <Box sx={{}}>
            <Box sx={{ textAlign: 'center', mb: '50px', }}>
                <TitleTypography>
                    Video Course Overview
                </TitleTypography>
            </Box>
            <Grid container spacing={10} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sm={6}>
                    {/* <SchoolIcon style={iconStyles} /> */}
                    <VideoLibraryIcon sx={{color:'#7ADFB0',fontSize:'65px'}} />
                    <SubTitleTypography>
                    Complete Exam Prep Video Series
                    </SubTitleTypography>
                    <ContentTypography>
                    Enhance your scores with 20 hours of comprehensive video lessons covering all question types and test sections.                    
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <AccessTimeIcon style={iconStyles}  /> */}
                    {/* <ChatIcon style={iconStyles}  /> */}
                    <RateReviewIcon sx={{color:'#EE8A6F',fontSize:'65px'}} />

                    <SubTitleTypography>
                    Writing and Speaking Templates
                    </SubTitleTypography>
                    <ContentTypography>
                    Access a range of writing and speaking templates, along with universal viewpoints and advanced vocabulary to elevate your expressions.
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <EventIcon style={iconStyles}  /> */}
                    <LibraryBooksIcon sx={{color:'#A7ADF1',fontSize:'65px'}} />
                    <SubTitleTypography>
                    Essential Resources and Pitfall Guide
                    </SubTitleTypography>
                    <ContentTypography>
                    Equip yourself with crucial materials including vocabulary lists and our exclusive guide to avoid common mistakes.
                    </ContentTypography>

                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <EventIcon style={iconStyles}  /> */}
                    {/* <AccessAlarmsIcon style={iconStyles}  /> */}
                    <AccessAlarmsIcon sx={{color:'#DD5E89',fontSize:'65px'}} />
                    <SubTitleTypography>
                    12-Month Unlimited Course Access
                    </SubTitleTypography>
                    <ContentTypography>
                    Enjoy unrestricted access to all current and updated video courses for 12 months, ensuring you stay ahead with the latest learning resources.
                    </ContentTypography>

                </Grid>
            </Grid>
        </Box>
    );
}

export default VideoCourseOverview;