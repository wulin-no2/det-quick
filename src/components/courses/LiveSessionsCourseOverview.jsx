import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

function LiveSessionsCourseOverview() {

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
        <Typography
            variant="h6"
            component="h6"
            gutterBottom
            sx={{
                color: '#212833',
                fontFamily: 'system-ui',
                fontWeight: 'bold',  // 加粗
                fontSize: '32px',  // 字体大小为36px
                ...sx  // 合并外部传入的sx属性
            }}
        >
            {children}
        </Typography>
    );

    // const SubTitleTypography = ({ children, sx }) => (
    //     <Box sx={{ paddingTop: '20px', paddingBottom: '10px', ...sx }}> {/* 包裹Typography并设置间距 */}
    //         <Typography
    //             variant="h6"
    //             component="subtitle1"
    //             gutterBottom
    //             sx={{
    //                 color: '#212833',
    //                 fontFamily: '"Suisse Int\'l", "Helvetica Neue", "Arial", sans-serif',
    //                 fontWeight: 'bold',
    //                 fontSize: '24px',
    //             }}
    //         >
    //             {children}
    //         </Typography>
    //     </Box>

    // );

    const ContentTypography = ({ children, sx }) => (
        <Typography
            variant="body1"
            paragraph
            sx={{
                fontFamily: 'system-ui',
                fontSize: '20px',
                color: '#212833',
                wordWrap: 'break-word',
                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );
    // const ContentTypography = ({ children, sx }) => (
    //     <Typography
    //         variant="body1"
    //         // paragraph
    //         sx={{
    //             fontFamily: '"Suisse Int\'l", "Helvetica Neue", "Arial", sans-serif',
    //             fontSize: '16px',
    //             color: '#212833',
    //             wordWrap: 'break-word',
    //             lineHeight: '1.3',  // 调整行高
    //             marginBottom: '8px',
    //             ...sx  // 合并外部传入的sx属性
    //         }}>
    //         {children}
    //     </Typography>
    // );
    return (
        <Box>
           <Box sx={{
                }}>
                    <TitleTypography sx={{marginBottom:'60px'}}>
                    One-on-One Live Course Overview
                    </TitleTypography>
                    {/* <ContentTypography sx={{fontSize:'22px',marginBottom:'60px'}}>
                    Discover the values, vision, and mission that guide every step we take.                    
                    </ContentTypography> */}
                </Box>
                <Grid container alignItems="center" spacing={6}>
                    {/* 第一个部分：Care */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("https://ichef.bbci.co.uk/news/976/cpsprodpb/1839E/production/_111203299_gettyimages-1146240359.jpg")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', }}>
                    <SubTitleTypography >
                    Performance Assessment
                                            </SubTitleTypography>
                        <ContentTypography>
                        Evaluate students' capabilities through mock or actual test scores, pinpointing areas needing improvement for targeted enhancement.                          </ContentTypography>
                    </Grid>
                 

                    {/* 第二个部分：Continuous Improvement */}
                  
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <SubTitleTypography >
                    Customized Teaching
                    </SubTitleTypography>
                        <ContentTypography>
                        Deliver personalized instruction based on individual student profiles and score goals, integrated with a tailored learning plan.                        </ContentTypography>
                    </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("https://stories.uq.edu.au/medicine/2023/changes-to-uq-academic-titles-for-health-professionals/assets/sKyDCJzptP/adobestock_512024851-750x563.webp")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'


                            }}
                        />
                    </Grid>

                        {/* 第3个部分：Care */}
                        <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundImage: 'url("https://www.schooliseasy.com/wp-content/uploads/jpeg-optimizer_Tutor-01-1-1536x1024-1.jpg")',  // 更改为适当的图片路径
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                // marginTop: '40px'
                            }}
                        />
                    </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <SubTitleTypography sx={{ fontSize: '32px',}}>
                        Dedicated Tutoring and Support
                    </SubTitleTypography>
                        <ContentTypography>
                        Offer one-on-one tutoring for queries and assignment corrections, including last-minute exam guidance, ensuring thorough preparation.                        </ContentTypography>

                        </Grid>
                   

                </Grid>  
        </Box>
    );
}
export default LiveSessionsCourseOverview;