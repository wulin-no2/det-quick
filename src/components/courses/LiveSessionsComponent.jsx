

import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
// import globalSettingsConfig from '../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../common/RoundedButton';

function LiveSessionsComponent() {

    const TitleTypography = ({ children, sx }) => (
        <Typography
            variant="h6"
            component="h6"
            gutterBottom
            sx={{
                color: '#212833',
                fontFamily: 'system-ui',
                fontWeight: 'bold',  // 加粗
                fontSize: '36px',  // 字体大小为36px
                ...sx  // 合并外部传入的sx属性
            }}
        >
            {children}
        </Typography>
    );

    const ContentTypography = ({ children, sx }) => (
        <Typography
            variant="body1"
            paragraph
            sx={{
                fontFamily: 'system-ui',
                fontSize: '18px',
                color: '#212833',
                wordWrap: 'break-word',
                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );

    const handleClick = () => {
        console.log('Button clicked!');
        // 在这里可以添加更多的逻辑处理，如导航到另一个页面或打开一个模态框等
    };

    const HoverButton = ({ onClick }) => (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',

                '&:hover': {
                    '& p': {
                        position: 'relative',  // 设置相对定位以便添加伪元素
                        '&:after': {
                            content: '""',  // 伪元素的内容为空
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: '-1px',  // 控制下划线与文字之间的距离
                            height: '1px',
                            backgroundColor: 'primary.main',  // 使用主题中的主要颜色
                            width: '100%',
                        }
                    },
                    '& svg': {
                        transform: 'translateX(4px)',
                        color: 'primary.main'  // 确保箭头使用主题颜色
                    }
                }
            }}
            onClick={onClick}
        >
            <Typography component="p" color="primary" sx={{ fontSize: '20px', }}>
                Start experiencing
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: '22px', ml: '8px', color: 'primary.main' }} />
        </Box>
    );

    return (
        <Box sx={{}}>
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={5.5} sx={{ textAlign: 'left' }} >
                    <TitleTypography sx={{ fontSize: '48px' }}>
                        1-on-1 Live Teaching
                    </TitleTypography>
                    <ContentTypography>
                    Perfect for students seeking individualized learning plans, our live courses offer targeted strategies, performance assessments, and dedicated tutoring to help you reach your exam goals.
                    </ContentTypography>
                    <RoundedButton
                        text="Get Started"
                        onClick={() => console.log("Button clicked!")}
                        showArrow={true}
                        sx={{ mt: '5px' }} // Example of overriding width
                    />
                </Grid>

                <Grid item xs={12} md={6.5}>

                    <Box
                        sx={{
                            height: '400px',  // 指定高度
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            borderRadius: '12px',
                        }}
                    >
                        <img
                            src="https://ik.imagekit.io/mepl/wp-content/uploads/2021/08/Feature-Image-1.png"  // 更改为你的图片路径
                            alt="speaking ai"
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',  // 确保图片覆盖但不变形
                                borderRadius: '20px',

                            }}
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default LiveSessionsComponent;