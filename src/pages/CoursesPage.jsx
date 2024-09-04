
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../components/common/RoundedButton';
import CourseTypeSelector from '../components/common/CourseTypeSelector';
import VideoCoursesComponentPartOne from '../components/courses/VideoCoursesComponentPartOne';
import LiveSessionsComponent from '../components/courses/LiveSessionsComponent';
function CoursesPage() {

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
        <Box>
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '60px',
                    // paddingX: '100px',
                }}>
                    <Box sx={{
                        mb:'40px',
                        width: '61.8%', // 调整宽度为容器的50%，可以根据需要调整
                        mx: 'auto'  // 使用左右自动边距实现水平居中
                    }}>
                    <CourseTypeSelector />
                    </Box>


                    {/* <VideoCoursesComponentPartOne>

                    </VideoCoursesComponentPartOne> */}
                   
                        <LiveSessionsComponent />


                    {/* <Grid container spacing={10} alignItems="center">
                        <Grid item xs={12} md={5} sx={{ textAlign: 'left' }} >
                            <TitleTypography sx={{ fontSize: '48px' }}>
                                Video Courses
                            </TitleTypography>
                            <ContentTypography>
                                DET Speaking AI Correction service provided by powerful AI. Support all speaking question types, and provides professional guidance to help you easily improve your DET speaking score.
                            </ContentTypography>
                            <RoundedButton
                                text="Get Started"
                                onClick={() => console.log("Button clicked!")}
                                showArrow={true}
                                sx={{mt:'5px'}} // Example of overriding width
                            />

                        </Grid>
                        <Grid item xs={12} md={7}>
                          
                            <Box
                                sx={{
                                    height: '400px',  
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                }}
                            >
                                <img
                                    src="https://www.scholarhat.com/images/video-course.png"  // 更改为你的图片路径
                                    alt="speaking ai"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',  
                                        borderRadius: '20px',

                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid> */}
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
                                backgroundImage: 'url("/images/products/speaking_ai_part2_01.jpg")',  // 更改为适当的图片路径
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
                            Submit your essay by inputting or from the question bank, and you can receive a clear and detailed report and score immediately.
                        </ContentTypography>

                        <HoverButton onClick={handleClick} />

                    </Grid>

                    {/* 第2个部分：Care */}
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                        <TitleTypography sx={{ fontSize: '32px' }}>
                            Speaking Evaluation
                        </TitleTypography>
                        <ContentTypography>
                            You can immediately see your pronunciation error, unexpected interruption, missing pause,suspected reading aloud, suspected repetition, and learn how to avoid them.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 350,
                                backgroundImage: 'url("/images/products/speaking_ai_part2_02.jpg")',  // 更改为适当的图片路径
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
                                backgroundImage: 'url("/images/products/speaking_ai_part2_03.jpg")',  // 更改为适当的图片路径
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
                            According to the DET scoring elements, we provide professional guidance to help you identify the weaknesses in your speaking and make it perfect.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default CoursesPage;