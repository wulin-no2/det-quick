import React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import SpeedIcon from '@mui/icons-material/Speed'; // 导入 Speed 图标
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useTheme } from '@mui/material/styles';

function LiveSessionsAudienceSection() {
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
                    Who Should Take This Course?
                </TitleTypography>
            </Box>
            <Grid container spacing={4} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sm={3}>
                    <TrendingUpIcon style={iconStyles} />
                    <SubTitleTypography>
                    High Aspirations with Basic Skills
                    </SubTitleTypography>
                    <ContentTypography>
                    Ideal for learners starting with fundamental English skills but aiming for high scores, offering personalized coaching to bridge the gap.
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <BarChartIcon style={iconStyles}  />
                    <SubTitleTypography>
                    Breaking the Score Plateau
                    </SubTitleTypography>
                    <ContentTypography>
                    Designed for students who have taken the test multiple times but struggle to surpass their scoring barriers, providing targeted strategies for improvement.
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SpeedIcon style={iconStyles}  />
                    <SubTitleTypography>
                    Fast-Track Exam Preparation
                    </SubTitleTypography>
                    <ContentTypography>
                    Perfect for learners under tight preparation schedules needing focused and rapid guidance to achieve their exam goals efficiently.
                    </ContentTypography>

                </Grid>
                <Grid item xs={12} sm={3}>
                    <ScheduleIcon style={iconStyles}  />
                    <SubTitleTypography>
                    Flexible Scheduling for Optimal Results                    </SubTitleTypography>
                    <ContentTypography>
                    Suited for students who demand flexibility in scheduling their learning sessions while seeking effective strategies to quickly boost their scores.                    </ContentTypography>

                </Grid>
            </Grid>
        </Box>
    );
}

export default LiveSessionsAudienceSection;