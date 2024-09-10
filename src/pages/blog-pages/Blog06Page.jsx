

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ReusableTable from '../../components/common/ReusableTable';

const Blog06Page = () => {


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

    const listeningQuestionData = {
        columns: ['Question Types', 'Time'],
        rows: [
            ['Listen and Type', '7 minutes'],
            ['Interactive Listening', '13 minutes']
        ]
    };
    const readingQuestionData = {
        columns: ['Question Types', 'Time'],
        rows: [
            ['Read and Select', '1 minute, 30 seconds'],
            ['Fill in the Blanks', '1 minute, 30 seconds'],
            ['Read and Complete', '15 minutes'],
            ['Interactive Reading', '15 minutes']
        ]
    };
    const writingQuestionData = {
        columns: ['Question Types', 'Time'],
        rows: [
            ['Write About the Photo', '3 minutes'],
            ['Interactive Writing', '8 minutes'],
            ['Writing Sample', '5 minutes']
        ]
    };
    const speakingQuestionData = {
        columns: ['Question Types', 'Time'],
        rows: [
            ['Read Aloud', '1 minute'],
            ['Listen, Then Speak', '3 minutes'],
            ['Speak About the Photo', '1 minute, 30 seconds'],
            ['Read, Then Speak', '1 minute, 30 seconds'],
            ['Speaking Sample', '3 minutes']
        ]
    };
    
    
    
    


    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <Box sx={{ bgcolor: '#ffffff', paddingY: '100px', mx: 0, flex: 1 }}>
                <TitleTypography >
                How Long is the Duolingo English Test?
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
                    The Duolingo English Test is approximately 1 hour long, and you will receive the results within 48 hours. It includes a variety of sections that assess different language skills, such as reading, writing, speaking, and listening. The test is designed to be flexible and can be taken online at your convenience.
                    </ContentTypography>


                    <SubTitleTypography>
                    Introduction to Duolingo English Test
                    </SubTitleTypography>
                    <ContentTypography>
                    The Duolingo English Test is designed to assess English proficiency in a flexible and accessible manner. It aims to help students demonstrate their language skills for educational and professional opportunities. The test emphasizes real-world language use, making it a practical choice for non-native speakers. By providing a convenient online format, it ensures that learners can showcase their abilities in a way that suits their schedules and preferences. 
                    </ContentTypography>
                  

                   

                    <SubTitleTypography>
                    Test Components
                    </SubTitleTypography>
                    <ContentTypography>
                    Once you begin the test, you’ll be guided through three different sections.
                    </ContentTypography>
                    <ContentTypography>
                    1. The Introduction and onboarding take approximately 5 minutes. Ensure your computer’s camera, speakers, and microphone are functioning properly. Submit your government-issued photo ID. Review the test rules and requirements.
                    </ContentTypography>
                    <ContentTypography>
                    2. The Adaptive test takes approximately 45 minutes. Measures your English skills through a series of different question types. The difficulty of some questions changes based on your performance.
                    </ContentTypography>
                    <ContentTypography>
                    3. The Writing Sample and Speaking Sample take approximately 10 minutes. You will be given a prompt and asked to respond at length. The Speaking Sample allows for a 1–3 minute response, and the Writing Sample provides for a 3–5 minute response. You will be able to review your responses to these samples after the test has concluded. Institutions that receive your results will also receive these samples.
                    </ContentTypography>

                 
                    <SubTitleTypography>
                    Time Allocation for Each Section
                    </SubTitleTypography>
                    <ContentTypography>
                    Listening Section: Candidates typically have about 19-22 minutes to complete the listening tasks. This section assesses the ability to understand spoken English in various contexts, such as conversations and lectures. Interactive listening is included twice.
                    </ContentTypography>
                    <ReusableTable {...listeningQuestionData} />

                    <ContentTypography>
                    Reading Section: The reading section lasts around 30-35 minutes. It evaluates comprehension skills through various reading exercises, helping to gauge how well candidates can interpret written English. Interactive reading is included twice, for a total of 15 minutes.
                    </ContentTypography>
                    <ReusableTable {...readingQuestionData} />

                    <ContentTypography>
                    Writing Section: The writing tasks generally take another 14-16 minutes. Here, candidates must express their thoughts clearly and coherently in written form, showcasing their ability to construct sentences and convey ideas effectively.
                    </ContentTypography>
                    <ReusableTable {...writingQuestionData} />

                    <ContentTypography>
                    Speaking Section: Finally, the speaking portion requires about 10-12 minutes, allowing candidates to demonstrate their verbal communication skills. This part is crucial for evaluating pronunciation, fluency, and the ability to respond to prompts in real time.
                    </ContentTypography>
                    <ReusableTable {...speakingQuestionData} />

                    <SubTitleTypography>
                    Strategies for Managing Test Duration
                    </SubTitleTypography>
                    <ContentTypography>
                    Effectively managing time during the Duolingo English Test is essential for maximizing performance. The strict time limits can create pressure, but with the right strategies, candidates can navigate the test more confidently.
                    </ContentTypography>
                    <ContentTypography>
                    Time management plays a critical role in test performance. Candidates should be aware of the time constraints for each section and practice pacing themselves accordingly. This awareness can help reduce anxiety and improve overall test-taking efficiency.
                    </ContentTypography>

                    <SubTitleTypography>
                    Conclusion
                    </SubTitleTypography>
                    <ContentTypography>
                    In summary, the duration of the Duolingo English Test is a crucial aspect that candidates must consider during their preparation. Lasting about 60 minutes and divided among listening, reading, writing, and speaking, understanding this structure can significantly impact performance. Candidates are encouraged to practice regularly, utilize effective time management techniques, and approach the test with confidence. With adequate preparation and awareness of the test duration, success on the Duolingo English Test is well within reach.
                    </ContentTypography>

                </Box>
            </Box>

        </Box >
    );
};

export default Blog06Page;
