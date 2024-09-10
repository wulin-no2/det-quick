

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ReusableTable from '../../components/common/ReusableTable';
const Blog01Page = () => {


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

    const examComparisonData = {
        columns: ['Structure', 'Duolingo English Test', 'IELTS'],
        rows: [
            ['Examination Method', 'Online', 'Specific Location (Test center)'],
            ['Test Time', '45 to 60 minutes', '2 hours and 45 minutes'],
            ['Test Scores Validity', '2 years', '2 years'],
            ['Release of Scores', '48 hours after the exam date', '13 days after the test date']
        ]
    };

    const requirementData = {
        columns: ['Requirement', 'Duolingo English Test', 'IELTS'],
        rows: [
            ['Where to Register', 'The candidate should log in, register, and sign up for the exam on the official DET website.', 'The candidate should register on the online IELTS exam registration platform.'],
            ['Equipment Requirement', 'Computer, speakers, camera, microphone, and a stable internet connection', 'None']
        ]
    };

    const scoreComparisonData = {
        title: 'Score Comparison',
        columns: ['Duolingo English Test', 'IELTS'],
        rows: [
          ['10-60', '0-4'],
          ['65-75', '4.5'],
          ['80-90', '5'],
          ['95-100', '5.5'],
          ['105-115', '6'],
          ['120-125', '6.5']
        ]
      };

      const feesComparisonData = {
        columns: ['Fees', 'Duolingo English Test', 'IELTS'],
        rows: [
          ['Exam Fee', 'Global standard: $65', 'Depending on the region, approximately $255.'],
          ['Sharing Fee', 'Free', 'Candidates can request up to 5 additional score reports for free within one month of the exam date. Requests beyond this number or made after one month will incur a fee of approximately $16']
        ]
      };
      

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <Box sx={{ bgcolor: '#ffffff', paddingY: '100px', mx: 0, flex: 1 }}>
                <TitleTypography >
                    Is Duolingo English Test Harder than IELTS?
                </TitleTypography>

            </Box>

            <Box sx={{
                paddingY: '60px',
                textAlign: 'left',
                marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
            }}>
                <Box sx={{ paddingY: '40px' }}>
                    <SubTitleTypography>
                        Overview of the Tests

                    </SubTitleTypography>

                    <ContentTypography>

                        The Duolingo English Test is an online assessment of English skills, evaluating listening, speaking, reading, and writing. It employs adaptive technology to adjust question difficulty based on performance. No appointment is necessary; the test can be taken at home with a computer and webcam. Affordable and providing quick results, it's recognized by many universities worldwide. With its diverse question types, it's an excellent option for those seeking rapid English proficiency certification.
                    </ContentTypography>
                    <ContentTypography>
                        IELTS, or the International English Language Testing System, is a widely recognized assessment of English language proficiency. It evaluates four essential skills: listening, reading, writing, and speaking. Available in two formats—Academic and General Training—IELTS is commonly required for educational and immigration purposes. Scores range from 0 to 9, reflecting varying levels of English fluency.
                    </ContentTypography>

                    <SubTitleTypography>
                        Comparison of Exam Frequency
                    </SubTitleTypography>
                    <ContentTypography>
                        The Duolingo English Test and IELTS differ significantly in terms of frequency and flexibility. The Duolingo test allows candidates to take the exam online anytime, offering the chance to test up to three times within a 30-day period from the comfort of their home. This high level of flexibility, along with results typically available within 48 hours, makes it an excellent choice for those seeking a quick assessment of their English proficiency.
                    </ContentTypography>
                    <ContentTypography>
                        In contrast, IELTS is conducted approximately 40 times a year, with 2 to 4 sessions each month. It requires candidates to take the test on specific dates and at designated locations, necessitating registration several weeks in advance. Results are released 13 days later. While IELTS boasts greater international recognition, making it a better fit for individuals planning long-term studies or immigration, the choice between the two exams ultimately depends on individual needs and goals.
                    </ContentTypography>

                    <SubTitleTypography>
                        Comparison of Exam Structure
                    </SubTitleTypography>
                    <ContentTypography>
                        The Duolingo English Test and IELTS exhibit significant structural differences.
                    </ContentTypography>
                    <ContentTypography>
                        First, regarding test duration, the Duolingo test is considerably shorter, lasting only 45 to 60 minutes online, whereas IELTS takes 2 hours and 45 minutes.                    </ContentTypography>
                    <ContentTypography>
                        Second, in terms of score reporting, you can receive your results for the Duolingo English Test within 48 hours after the exam. If you opt for expedited service, you can get your results in as little as 12 hours. In contrast, IELTS results are released 13 days after the test date. Both tests are valid for two years. Additionally, multiple times of sharing IELTS scores incurs an extra fee, while sharing Duolingo scores is free.
                    </ContentTypography>

                    <ReusableTable {...examComparisonData} />

                    <SubTitleTypography>
                        Comparison of Assessment Requirements                    </SubTitleTypography>
                    <ContentTypography>
                        These two language exams have different testing requirements. For example, if you choose to take the IELTS, you won’t have to provide any equipment, as the test is conducted at official testing centers. If you decide to take the Duolingo English Test, you'll need to have a computer at home equipped with speakers, a camera, a microphone, and a stable internet connection.
                    </ContentTypography>
                    <ReusableTable {...requirementData} />

                    <SubTitleTypography>
                    Comparison of Exam Scores
                    </SubTitleTypography>
                    <ContentTypography>
                    The scoring systems of DET and IELTS are different.
                    </ContentTypography>
                    <ReusableTable {...scoreComparisonData} />

                    <SubTitleTypography>
                    Comparison of exam Fees
                    </SubTitleTypography>
                    <ContentTypography>
                    An increasing number of people are opting for the Duolingo English Test, not just because it is convenient and quick, but also because it is significantly more affordable than IELTS. Each Duolingo test costs $65, and there’s a package option for two tests at $110. Furthermore, if you want to receive your results within 12 hours, you only need to pay an additional $39. In comparison, the IELTS exam costs approximately USD 245 to USD 255. And the cost of it varies per location or country where you will take it.
                    </ContentTypography>
                    <ReusableTable {...feesComparisonData} />

                    <SubTitleTypography>
                    Summary
                    </SubTitleTypography>
                    <ContentTypography>
                    In summary, the Duolingo English Test and IELTS each have their own strengths and weaknesses. Duolingo is more convenient, making it ideal for candidates with tight schedules, while IELTS offers a more comprehensive evaluation, suited for those who require a deeper assessment of their English proficiency. When it comes to difficulty, Duolingo’s adaptive testing format means the level of difficulty varies based on the individual, whereas IELTS maintains a consistent level of difficulty for all test-takers. Therefore, the Duolingo English Test is not inherently more difficult than IELTS.
                    </ContentTypography>

                </Box>
            </Box>

        </Box>
    );
};

export default Blog01Page;
