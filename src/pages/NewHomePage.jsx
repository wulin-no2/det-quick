
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../components/common/RoundedButton';
import FeatureList from '../components/common/FeatureList';
import HoverButton from '../components/common/HoverButton';
import { useTheme } from '@mui/material/styles';

function NewHomePage() {
    const theme = useTheme();  // 获取主题
 

    const practiceFeatures = [
        "The Largest Question Bank, 18,000+ Practice Questions",
        "Continuously updated every day",
        "Provide high-scoring answers and detailed explanations",
        "AI Scoring for Read Aloud",
    ];
    const mockFeatures = [
        'The Most Powerful Mock Test, Close to Real DET Exam',
        'Adaptive Exams, and AI Scoring',
        'Accurate Assessment Scores, Detailed Evaluation Report',
        'Results will be available within 5-30 minutes',
    ];
    const writeAIFeatures = [
        'Support "Write about the Photo","Interactice Writing","Writing Sample"',
        'AI Scoring, AI Correction, Teacher Guidance',
        'Accurate Assessment Scores, Detailed Evaluation Report',
        'Results will be available within 1-5 minutes',
    ];
    const speakAIFeatures = [
        'Support "Listen,Then Speak","Speak About the Photo","Read,then Speak","Speaking Sample"',
        'AI Scoring, AI Evaluation Results, Teacher Guidance',
        'Accurate Assessment Scores, Detailed Evaluation Report',
        'Results will be available within 1-5 minutes'
    ];
    
    const stats = [
        { number: '18,000+', description: 'Questions' },
        { number: '10,000+', description: 'Mock Test' }
    ];

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
                                sx={{ mt: '5px', }} // Example of overriding width
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
                 <Box sx={{
            width: '100%',
            // p: 3, // padding
            display: 'flex',
            flexDirection: 'column', // 设置为垂直布局
            alignItems: 'center', // 垂直居中对齐
            // bgcolor: '#ffffff' // assuming a light background
        }}>
            <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                The Best Platform for Boosting Your Duolingo English Test Scores
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} key={index} sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" component="p" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                            {stat.number}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
                            {stat.description}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>

            </Box>

            <Box sx={{
                background: 'linear-gradient(to right, #F1F1FD, #FFFFFF)',
                paddingY: '70px',
            }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingX: '0px',
                }}>

                    <Grid container alignItems="center" spacing={6}>

                        {/* 第1个部分：Continuous Improvement */}
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    height: 400,
                                    backgroundImage: 'url("/images/home/home1.png")',  // 更改为适当的图片路径
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // 添加自定义的阴影

                                    // marginTop: '40px'


                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ textAlign: 'left' }}>
                            <TitleTypography sx={{ fontSize: '32px', }}>
                                Duolingo English Test Practice                            </TitleTypography>

                            <FeatureList
                                features={practiceFeatures}
                                iconColor='#C9B8F5'
                                sx={{
                                    justifyContent: 'left',
                                    marginY: '15px'
                                }} />
                            {/* <HoverButton onClick={handleClick} /> */}
                            <HoverButton
                                onClick={handleClick}
                                // color="#8d67e9"  // 传入你想要的颜色
                                color="#a182ed"
                                text="Discover more"  // 传入你想显示的文本
                            />

                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{
                background: 'linear-gradient(to right, #FFFFFF, #F0F9F9)',
                paddingY: '70px',

            }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingX: '0px',
                }}>

                    <Grid container alignItems="center" spacing={6}>

                        <Grid item xs={12} md={5} sx={{ textAlign: 'left', }}>
                            <TitleTypography sx={{ fontSize: '32px' }}>
                                DET Full-Length Mock Test
                            </TitleTypography>
                            <FeatureList
                                features={mockFeatures}
                                iconColor='#72cab7'
                                sx={{
                                    justifyContent: 'left',
                                    marginY: '15px'
                                }} />

                            <HoverButton
                                onClick={handleClick}
                                // color="#8d67e9"  // 传入你想要的颜色
                                color="#63c4af"
                                text="Find out more"  // 传入你想显示的文本
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    height: 400,
                                    backgroundImage: 'url("/images/home/home2.png")',  // 更改为适当的图片路径
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // 添加自定义的阴影
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{
                background: 'linear-gradient(to right, #FDF1E4, #FFFFFF)',
                paddingY: '70px',
            }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingX: '0px',
                }}>

                    <Grid container alignItems="center" spacing={6}>

                        {/* 第1个部分：Continuous Improvement */}
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    height: 400,
                                    backgroundImage: 'url("/images/home/home3.png")',  // 更改为适当的图片路径
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // 添加自定义的阴影


                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ textAlign: 'left' }}>
                            <TitleTypography sx={{ fontSize: '32px', }}>
                                DET Writing AI Correction
                            </TitleTypography>
                            <FeatureList
                                features={writeAIFeatures}
                                iconColor='#eccb73'
                                sx={{
                                    justifyContent: 'left',
                                    marginY: '15px'
                                }} />

                            <HoverButton
                                onClick={handleClick}
                                // color="#8d67e9"  // 传入你想要的颜色
                                color="#e6b63d"
                                text="Learn more"  // 传入你想显示的文本
                            />

                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{
                background: 'linear-gradient(to right, #FFFFFF, #e3ecfe)',
                paddingY: '70px',

            }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingX: '0px',
                    marginBottom: '70px',
                }}>

                    <Grid container alignItems="center" spacing={6}>

                        <Grid item xs={12} md={5} sx={{ textAlign: 'left', }}>
                            <TitleTypography sx={{ fontSize: '32px' }}>
                            DET Speaking AI Correction
                            </TitleTypography>
                            <FeatureList
                                features={speakAIFeatures}
                                iconColor='#8cb3f9'
                                sx={{
                                    justifyContent: 'left',
                                    marginY: '15px'
                                }} />

                            <HoverButton
                                onClick={handleClick}
                                // color="#8d67e9"  // 传入你想要的颜色
                                color="#357af5"
                                text="Learn more"  // 传入你想显示的文本
                            />

                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    height: 400,
                                    backgroundImage: 'url("/images/home/home4.png")',  // 更改为适当的图片路径
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // 添加自定义的阴影
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default NewHomePage;