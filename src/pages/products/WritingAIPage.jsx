import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../../components/common/RoundedButton';
function WritingAIPage() {

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
                            backgroundColor: '#E56D4D',  // 使用主题中的主要颜色
                            width: '100%',
                        }
                    },
                    '& svg': {
                        transform: 'translateX(4px)',
                        color: '#E56D4D'  // 确保箭头使用主题颜色
                    }
                }
            }}
            onClick={onClick}
        >
            <Typography component="p" color='#E56D4D' sx={{ fontSize: '20px', }}>
                Start experiencing
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: '22px', ml: '8px', color: '#E56D4D' }} />
        </Box>
    );

    return (
        <Box>
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    // paddingX: '100px',
                }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={5} sx={{ textAlign: 'left' }} >
                            <TitleTypography sx={{ fontSize: '48px' }}>
                                DET Writing AI
                            </TitleTypography>
                            <ContentTypography>
                            DET Writing AI  service provided by AI comparable to professional teachers. Your essay will be corrected based on DET scoring rules, and you will receive detailed feedback within 1-5 mins.                            </ContentTypography>
                            <RoundedButton
                                text="Get Started"
                                onClick={() => console.log("Button clicked!")}
                                showArrow={true}
                                sx={{mt:'5px',}} // Example of overriding width
                            />

                        </Grid>
                        <Grid item xs={12} md={7}>
                            {/* <Box
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundImage: 'url("/images/about-us-who.png")',  // 换成你的图片路径
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '12px',
                                    paddingY:'20px'
                                }}
                            /> */}
                            <Box
                                sx={{
                                    height: '430px',  // 指定高度
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                }}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/63a94e0560216a80439d30cc_AI-Automatic-Writing-Tools.jpg"  // 更改为你的图片路径
                                    alt="writing ai"
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
            </Box>
            <Box sx={{
                marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                marginBottom: '70px',
                paddingX: '0px',
                paddingTop: '80px',
            }}>
                {/* <Box sx={{
                }}>
                    <TitleTypography>
                        What Drives Us
                    </TitleTypography>
                    <ContentTypography sx={{ fontSize: '22px', marginBottom: '60px' }}>
                        Discover the values, vision, and mission that guide every step we take.                    </ContentTypography>
                </Box> */}
                <Grid container alignItems="center" spacing={6}>

                    {/* 第1个部分：Continuous Improvement */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 350,
                                backgroundImage: 'url("/images/products/writing_ai_part2_01.webp")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <TitleTypography sx={{ fontSize: '32px', }}>
                            Accurate score
                        </TitleTypography>
                        <ContentTypography>
                        Submit your essay from the question bank, and you can receive a clear and detailed report and score within 1-5 mins.
                        </ContentTypography>

                        <HoverButton onClick={handleClick} />

                    </Grid>

                    {/* 第2个部分：Care */}
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                        <TitleTypography sx={{ fontSize: '32px' }}>
                        Writing correction
                        </TitleTypography>
                        <ContentTypography>
                        You can immediately see your vocabulary mistakes, grammar errors, and learn how to avoid them.                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 350,
                                backgroundImage: 'url("/images/products/writing_ai_part2_02.webp")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'
                            }}
                        />
                    </Grid>




                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 350,
                                backgroundImage: 'url("/images/products/writing_ai_part2_03.webp")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <TitleTypography sx={{ fontSize: '32px', }}>
                            Professional guidance
                        </TitleTypography>
                        <ContentTypography>
                        According to the DET scoring elements, we provide professional guidance to help you identify the weaknesses in your paper and make it perfect.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default WritingAIPage;