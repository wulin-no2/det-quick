import React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@mui/material/styles';

function VideoCourseAudienceSection() {
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
                <Grid item xs={12} sm={4}>
                    <SchoolIcon style={iconStyles} />
                    <SubTitleTypography>
                        Beginners in the DET
                    </SubTitleTypography>
                    <ContentTypography>
                        Tailored for newcomers to the Duolingo English Test, our courses provide clear, structured tutorials to help you start your DET preparation with confidence.
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <AccessTimeIcon style={iconStyles}  />
                    <SubTitleTypography>
                        Flexible Learning Schedule
                    </SubTitleTypography>
                    <ContentTypography>
                        Perfect for those with irregular schedules, our courses allow you to learn anytime, anywhere, without compromising on quality.
                    </ContentTypography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <EventIcon style={iconStyles}  />
                    <SubTitleTypography>
                        Self-Study Enthusiasts
                    </SubTitleTypography>
                    <ContentTypography>
                        Designed for self-motivated learners looking to take control of their educational journey through comprehensive video materials.
                    </ContentTypography>

                </Grid>
            </Grid>
        </Box>
    );
}

export default VideoCourseAudienceSection;