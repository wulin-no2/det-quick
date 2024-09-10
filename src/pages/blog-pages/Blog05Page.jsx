

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
const Blog05Page = () => {


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
                How many times can I take Duolingo English Test?
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
                    According to Duolingo's regulations, you can purchase and take the Duolingo English Test (DET) up to three times within a 21-day period. If your test results are not certified, you may be required to retake the test, and this does not count towards the three-test limit. Additionally, with each test purchase, you have three attempts, meaning you can retry twice without needing to repurchase.
                    </ContentTypography>


                    <SubTitleTypography>
                    Can I Retake the Duolingo English Test for Free?
                    </SubTitleTypography>
                    <ContentTypography>
                    Yes, candidates are entitled to take the Duolingo English Test at no cost. Upon Duolingo English Test, candidates will be credited with one credit. Candidates may utilize this point for up to three attempts to complete the test. Once an exam is started, regardless of whether it is completed or not, it is considered as one attempt, with a maximum of three attempts allowed.
                    </ContentTypography>
                    <ContentTypography>
                    In the event of technical issues that prevent test submission or test verification, you may apply to customer service for a complimentary exam opportunity, provided that the number of attempts for this exam opportunity has not yet reached the maximum limit.
                    </ContentTypography>

                   

                    <SubTitleTypography>
                    Purchase of the number of exam attempts
                    </SubTitleTypography>
                    <ContentTypography>
                    Candidates are limited to purchasing a maximum of 3 exams within any 30-day period. After completing an exam, they must wait for the results before they can register for another.
                    </ContentTypography>

                 
                    <SubTitleTypography>
                    Examination Time Constraints
                    </SubTitleTypography>
                    <ContentTypography>
                    From the day of purchasing the exam, you can take the test within 21 days; after 21 days, the exam opportunity will expire. For example, if you purchase the exam today, it will be invalid after 21 days.
                    </ContentTypography>
                    <ContentTypography>
                    After purchasing a 2-test discount package, the first test must be taken within 21 days from the date of purchase; the second test must be taken within 21 days after receiving the results of the first test.
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
                            src="https://detcdn.zixuekeji.cn/20240826/39e523d605ceb4d0b4d647a45bedacaf.png"
                            alt="Duolingo English Test Certificate"
                            style={{
                                width: '60%', // Makes the image responsive
                                height: '60%', // Limits the height of the image
                                objectFit: 'contain' // Keeps the aspect ratio of the image
                            }}
                        />
                    </Box>

                    <SubTitleTypography>
                    Three attempts for one exam
                    </SubTitleTypography>
                    <ContentTypography>
                    Since the Duolingo English Test is conducted online, it is inevitable that some candidates may encounter issues during the exam due to factors such as internet connection, computer equipment, and external environment. These 'three attempts' are a form of compensation provided to everyone.
                    </ContentTypography>
                    <ContentTypography>
                    After taking the exam, there are mainly three outcomes:
                    </ContentTypography>
                    <ContentTypography>
                    · release of scores: Successful certification with a score obtained.
                    </ContentTypography>
                    <ContentTypography>
                    · No submission, no certification: Attempts that are not submitted due to network issues or voluntarily exiting the exam during the process can be made up to three times.
                    </ContentTypography>
                    <ContentTypography>
                    · Submission without certification: After submitting the score and the exam, if the result shows no certification, and the second submission still shows no certification, the exam opportunity is invalidated.
                    </ContentTypography>

                    <SubTitleTypography>
                    How to Effectively Utilize Test Opportunities
                    </SubTitleTypography>
                    <ContentTypography>
                    Once you've purchased the test, it's time to move on to the intensive preparation phase. It is necessary to create an optimal testing environment that will help you get the best results. This means securing a space that is free from distractions and noise, bathed in ample natural or artificial light, and equipped with a high-speed, stable internet connection to prevent any technical hiccups during the test.
                    </ContentTypography>
                    <ContentTypography>
                    Additionally, you will also need some tips for exams and practice. Before the test, you can visit some practice websites to familiarize yourself with the types of exams and gain a sense of your abilities through mock exams.
                    </ContentTypography>
                   
                </Box>
            </Box>

        </Box >
    );
};

export default Blog05Page;
