import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';

function AboutUsPage() {

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

    return (
        <Box>
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                    paddingX: '100px',
                }}>
                    <Grid container spacing={10} alignItems="center">
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }} >
                            <TitleTypography>
                                Who We Are
                            </TitleTypography>
                            <ContentTypography>
                            We lead in revolutionizing English education with AI. Our company develops apps offering extensive practice for the Duolingo English Test, innovative memory aids, personalized speaking practice, and video courses to enhance global English proficiency.                             </ContentTypography>
                            <ContentTypography>
                            Our team is driven and innovative, committed to improving educational experiences and promoting growth among our users and colleagues. Together, we strive to make mastering English accessible, engaging, and transformative.                            </ContentTypography>
                        </Grid>
                        <Grid item xs={12} md={6}>
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
                                    height: 480,  // 指定高度
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                }}
                            >
                                <img
                                    src="/images/about-us-who.png"  // 更改为你的图片路径
                                    alt="Who We Are"
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                        objectFit: 'cover',  // 确保图片覆盖但不变形
                                        borderRadius: '12px',

                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin ,
                marginBottom: '70px',
                paddingX: '0px',
                paddingTop: '80px',
            }}>
                <Box sx={{
                }}>
                    <TitleTypography>
                    What Drives Us
                    </TitleTypography>
                    <ContentTypography sx={{fontSize:'22px',marginBottom:'60px'}}>
                    Discover the values, vision, and mission that guide every step we take.                    </ContentTypography>
                </Box>
                <Grid container alignItems="center" spacing={6}>
                    {/* 第一个部分：Care */}
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                    <TitleTypography sx={{ fontSize: '32px'}}>
                    Our Mission
                        </TitleTypography>
                        <ContentTypography>
                        Our mission is to leverage advanced AI technology to make English learning more efficient and faster, ensuring that learners around the world can achieve proficiency with unprecedented ease and speed.                        </ContentTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("/images/about-us-part2-01.jpg")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'
                            }}
                        />
                    </Grid>

                    {/* 第二个部分：Continuous Improvement */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("/images/about-us-part2-02.jpg")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <TitleTypography sx={{ fontSize: '32px',}}>
                    Our Vision
                        </TitleTypography>
                        <ContentTypography>
                        We envision a world where anyone, anywhere can access top-quality English education that bridges communication barriers and opens up global opportunities.                        </ContentTypography>
                    </Grid>

                        {/* 第一个部分：Care */}
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <TitleTypography sx={{ fontSize: '32px',}}>
                        Our Values
                        </TitleTypography>
                        <ContentTypography>
                        We value integrity, collaboration, and the pursuit of excellence. We are committed to fostering an inclusive environment that encourages innovation and supports the growth of our clients and team.                    
                        </ContentTypography>

                        </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("/images/about-us-part2-03.jpg")',  // 更改为适当的图片路径
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

export default AboutUsPage;
