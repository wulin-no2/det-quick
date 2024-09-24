
import React from 'react';
import { Container, Grid, Box, Typography,Button } from '@mui/material';
import globalSettingsConfig from '../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../components/common/RoundedButton';
import FeatureList from '../components/common/FeatureList';
import HoverButton from '../components/common/HoverButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function NewHomePage() {
    const theme = useTheme();  // 获取主题
    const navigate = useNavigate();

 

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
    const handlPracticeClick = () => {
        navigate('/practice');
    }
    const handlMockTestClick = () => {
        navigate('/products/mock-test');
    }
    const handleWriteAIClick = () => {
        navigate('/products/writing-ai');
    }
    const handleSpeakAIClick = () => {
        navigate('/products/speaking-ai');
    }
    const handleStartClick = () => {
        navigate('/practice');

    }


    return (
        <Box>
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '60px',
                    // paddingX: '100px',
                }}>
                     <Box sx={{
            width: '100%',
            textAlign: 'center', // center align the text
            color: 'black'  // text color
        }}>
            {/* Powered by AI */}
            <Typography variant="caption" 
            sx={{ 
                display: 'block',fontSize:'18px', color: theme.palette.primary.main, mb: 1 
            }}
            >
                Powered by AI
            </Typography>

            {/* Main title */}
            <Typography variant="h2" sx={{ fontWeight: 'bold',fontSize:'66px', mb: 2 }}>
                Get a Higher Score Easily on the Duolingo English Test With
            </Typography>

            {/* Subtitle */}
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: "#6fa0f8",fontSize:'66px' }}>
                Grimlingo DET
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    marginTop: '30px', // 上下外边距
                    color: theme.palette.primary.main, // 字体颜色
                    borderColor: theme.palette.primary.main, // 边框颜色
                    backgroundColor: 'transparent', // 背景透明
                    borderWidth: 1, // 初始边框宽度
                    borderRadius: '40px', // 圆角
                    textTransform: 'none', // 防止大写
                    fontSize: '20px', // 字体大小
                    padding: '10px 20px', // 内边距
                    boxShadow: 'none', // 初始无阴影
                    '&:hover': {
                        boxShadow: '0 0 0 2px #357af5', // 鼠标悬浮时显示黑色阴影模拟边框
                        backgroundColor: 'transparent' // 保持背景透明
                    }
                }}
                onClick={handleStartClick} // Add the onClick event here
            >
                Get Started 
            </Button>
            </Box>
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
                        <Typography variant="h3" component="p" sx={{ color: "#6fa0f8", fontWeight: 'bold' }}>
                            {stat.number}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: "#6fa0f8"}}>
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
                                onClick={handlPracticeClick}
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
                                onClick={handlMockTestClick}
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
                                onClick={handleWriteAIClick}
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
                                onClick={handleSpeakAIClick}
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