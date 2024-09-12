import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoundedButton from '../../components/common/RoundedButton';
function PracticeTestPage() {

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
                            backgroundColor: '#EE8335',  // 使用主题中的主要颜色
                            width: '100%',
                        }
                    },
                    '& svg': {
                        transform: 'translateX(4px)',
                        color: '#EE8335'  // 确保箭头使用主题颜色
                    }
                }
            }}
            onClick={onClick}
        >
            <Typography component="p" color='#EE8335' sx={{ fontSize: '20px', }}>
                Mock Now
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: '22px', ml: '8px', color: '#EE8335' }} />
        </Box>
    );

    return (
        <Box >
            <Box sx={{ bgcolor: '#FFFDFA',}}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    // paddingX: '100px',
                }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={5} sx={{ textAlign: 'left' }} >
                            <TitleTypography sx={{ fontSize: '48px' }}>
                            DET Full-Length Mock Test
                            </TitleTypography>
                            <ContentTypography>
                            Immerse yourself in a true-to-life examination experience with our full-scale mock exams. Get a taste of the actual testing process before the real deal and quickly receive scores and detailed diagnostic reports to pinpoint areas for improvement.
                            </ContentTypography>
                            <RoundedButton
                                text="Get Started"
                                onClick={() => console.log("Button clicked!")}
                                showArrow={true}
                                sx={{mt:'5px',}} // Example of overriding width
                            />

                        </Grid>
                        <Grid item xs={12} md={7}>
                          
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
                                    src="https://www.mentallyhealthyschools.org.uk/media/2511/academic-and-exam-stress.jpg?width=930&quality=70&rnd=133388910431570000"  // 更改为你的图片路径
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
                paddingY: '70px',
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
                                height: 400,
                                backgroundImage: 'url("https://cdn.detpractice.com/store/portal/products/mock_picture1.png")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <TitleTypography sx={{ fontSize: '32px', }}>
                        Close To Real Exam
                        </TitleTypography>
                        <ContentTypography>
                        Experience real exam conditions with our advanced adaptive testing algorithm. Quickly master various question types and gain precise assessments.
                        </ContentTypography>

                        <HoverButton onClick={handleClick} />

                    </Grid>

                    {/* 第2个部分：Care */}
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                        <TitleTypography sx={{ fontSize: '32px' }}>
                        Precise Scoring & In-Depth Reports
                        </TitleTypography>
                        <ContentTypography>
                        Detailed mock exam reports provide precise diagnosis and analysis of current strengths and weaknesses, automatically updating study plans to enhance exam preparation efficiency.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 400,
                                backgroundImage: 'url("https://cdn.detpractice.com/store/portal/products/mock_picture2.png")',  // 更改为适当的图片路径
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
                                height: 400,
                                backgroundImage: 'url("https://cdn.detpractice.com/store/portal/products/mock_picture3.png")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <TitleTypography sx={{ fontSize: '32px', }}>
                        Convenient Exam Experience
                        </TitleTypography>
                        <ContentTypography>
                        Enjoy flexible test-taking on your schedule, no appointments needed. Start your mock exam immediately after purchase and have the freedom to pause or resume anytime.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>

                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                        <TitleTypography sx={{ fontSize: '32px' }}>
                        Rapid Score Reporting
                        </TitleTypography>
                        <ContentTypography>
                        Get your mock exam results delivered within 5-30 minutes, fast-tracking your progress review.
                        </ContentTypography>
                        <HoverButton onClick={handleClick} />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 400,
                                backgroundImage: 'url("https://cdn.detpractice.com/store/portal/products/mock_picture4.png")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'
                            }}
                        />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default PracticeTestPage;