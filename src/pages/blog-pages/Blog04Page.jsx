

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ReusableTable from '../../components/common/ReusableTable';
const Blog04Page = () => {


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
        <Box sx={{ paddingTop: '30px', paddingBottom: '10px', ...sx }}> {/* 包裹Typography并设置间距 */}
            <Typography
                variant="h6"
                component="subtitle1"
                gutterBottom
                sx={{
                    color: '#212833',
                    fontFamily: '"Suisse Int\'l", "Helvetica Neue", "Arial", sans-serif',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'left',
                    ...sx  // 合并外部传入的sx属性
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
                textAlign: 'left',

                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );


    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <Box sx={{ bgcolor: '#ffffff', paddingY: '100px', mx: 0, flex: 1 }}>
                <TitleTypography >
                How much does Duolingo English test cost?
                </TitleTypography>

            </Box>

            <Box sx={{
                paddingY: '60px',
                textAlign: 'left',
                marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
            }}>
                <Box sx={{ paddingY: '40px' }}>
                    <SubTitleTypography>
                        Overview

                    </SubTitleTypography>

                    <ContentTypography>
                    The Duolingo English Test fee for the year 2024 is $65. If you purchase the discount package, the price for two tests is $110, which is equivalent to $55 per test. Additionally, if you wish to receive your test results within 12 hours, there is an additional charge of $39. This blog post introduces a comparison of the DET (Duolingo English Test) fees with those of other traditional exams.
                    </ContentTypography>


                    <SubTitleTypography>
                    Cost of the Duolingo English Test
                    </SubTitleTypography>
                    <ContentTypography>
                    The cost of the Duolingo English Test (DET) varies by region but is generally consistent worldwide. Here is some specific cost information:
Globally, the cost of the Duolingo English Test is $65.
                    </ContentTypography>
                    <ContentTypography>
                    Purchase Method: You can directly purchase the test and pay the fee through your account on the Duolingo English Test website. All major credit cards are accepted, and in China, Alipay payments are also available.
After you purchase the test, you can take it within 21 days. 
                    </ContentTypography>
                    <Box
                        sx={{
                            display: 'flex', // Use flexbox to center the image
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically if needed
                            width: '100%', // Full width to ensure the centering context is the whole row
                            my: 2 // Margin top and bottom for spacing
                        }}
                    >
                        <img
                            src="https://detcdn.zixuekeji.cn/20240827/0fda010756d4935f58709d53ecda01c7.png"
                            alt="Duolingo English Test Certificate"
                            style={{
                                width: '60%', // Makes the image responsive
                                height: '60%', // Limits the height of the image
                                objectFit: 'contain' // Keeps the aspect ratio of the image
                            }}
                        />
                    </Box>

                    <SubTitleTypography>
                    Comparing Costs with Other English Proficiency Tests
                    </SubTitleTypography>
                    <ContentTypography>
                    One of the primary reasons for the growing popularity of the Duolingo English Test is its affordability. Let's compare the costs of DET with other widely recognized English proficiency tests:
                    </ContentTypography>
                    <ContentTypography>
                    IELTS: The cost of the IELTS test ranges between $110 to $310, depending on the country. On average, it costs around $200.
                    </ContentTypography>
                    <ContentTypography>
                    TOEFL: The TOEFL test costs approximately $200. Additionally, the cost of sending scores to each institution is around 20 US dollars.                   
                    </ContentTypography>
                    <ContentTypography>
                    DET: The examination fee for the DET is usually $65. If you purchase a discount package, the price for two tests is $110, which is equivalent to $55 per test, and sharing is free of charge.                    </ContentTypography>
                   
                    <SubTitleTypography>
                    Additional Benefits of the Duolingo English Test                
                    </SubTitleTypography>
                    <ContentTypography>
                    Beyond its cost-effectiveness, the Duolingo English Test offers several other advantages:
                    </ContentTypography>
                    <ContentTypography>
                    Convenience: The test can be taken online from the comfort of your home, eliminating the need to visit a test center.
                    </ContentTypography>
                    <ContentTypography>
                    Flexibility: You can schedule the test at any time that suits you, providing greater flexibility compared to other tests that have fixed dates.
                    </ContentTypography>
                    <ContentTypography>
                    Free Score Reporting: Unlike other tests that charge additional fees for sending scores to multiple institutions, the DET allows you to send your scores to an unlimited number of institutions for free.
                    </ContentTypography>

                    <SubTitleTypography>
                    Conclusion
                    </SubTitleTypography>
                    <ContentTypography>
                    The Duolingo English Test stands out not only for its affordability but also for its convenience and flexibility. At a cost of $65, it is significantly cheaper than both the IELTS and TOEFL, making it an attractive option for students and professionals alike. Additionally, the ability to take the test from home and send scores to multiple institutions at no extra cost further enhances its appeal.
If you're considering taking an English proficiency test, the Duolingo English Test offers a compelling combination of cost savings and convenience. 
                    </ContentTypography>
                   
                </Box>
            </Box>

        </Box >
    );
};

export default Blog04Page;
