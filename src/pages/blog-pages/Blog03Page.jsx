

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ReusableTable from '../../components/common/ReusableTable';
const Blog03Page = () => {


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
                    What is Duolingo English Test Score?
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
                        Duolingo tests use a scoring system that ranges from 10 to 160 points, with scores being whole numbers and multiples of 5, with the maximum score being 160 points. This article will explore the intricacies of the DET's scoring mechanism, clarifying the structure of the scores and their implications.
                    </ContentTypography>


                    <SubTitleTypography>
                        DET Scoring System Overview
                    </SubTitleTypography>
                    <ContentTypography>
                        The DET employs a scoring scale that spans from 10 to 160, with intervals of 5 points. The test report features an aggregate score along with four distinct subscores, each highlighting a unique aspect of linguistic competence.
                    </ContentTypography>
                    <SubTitleTypography>
                        Individual Subscores
                    </SubTitleTypography>
                    <ContentTypography>
                        In the latest DET score report, the individual subscores cover four key areas: listening, speaking, reading, and writing. These are the well-known competencies of listening, speaking, reading, and writing, respectively.

                    </ContentTypography>
                    <ContentTypography>
                        For a long time, in traditional language teaching and testing systems, the individual abilities of listening, speaking, reading, and writing have often been mentioned and emphasized. Displaying these individual scores not only helps examinees to understand their learning status intuitively and in detail but also assists universities in integrating the DET score standards into their existing assessment systems. By comparing the DET scores with traditional exam score lines, they can measure the language proficiency levels of applicants comprehensively and accurately.
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
                            src="https://detcdn.zixuekeji.cn/20240827/bb52826ddb4ba962bf38d2bbcc0fb8da.png"
                            alt="Duolingo English Test Certificate"
                            style={{
                                width: '60%', // Makes the image responsive
                                height: '60%', // Limits the height of the image
                                objectFit: 'contain' // Keeps the aspect ratio of the image
                            }}
                        />
                    </Box>
                    <SubTitleTypography>
                    Integrated Subscores                  
                    </SubTitleTypography>
                    <ContentTypography>
                    The DET comprises four subscores, defined as follows:
                    </ContentTypography>
                    <ContentTypography>
                    Literacy: Assesses the candidate's ability to read and write in English.
                    </ContentTypography>
                    <ContentTypography>
                    Comprehension: Evaluates the candidate's listening and reading comprehension skills.
                    </ContentTypography>
                    <ContentTypography>
                    Conversation: Examines the candidate's speaking and listening abilities.
                    </ContentTypography>
                    <ContentTypography>
                    Production: Measures the candidate's writing and speaking skills.
                    </ContentTypography>
                    <ContentTypography>
                    Each subscore mirrors the overall scoring range, and the aggregate score is calculated as the mean of these four components.
                    </ContentTypography>
                    <SubTitleTypography>
                    Understanding Score Levels                  
                    </SubTitleTypography>
                    <ContentTypography>
                    Grasping the significance of your score is essential for assessing your English proficiency level. Here is a guide to the score bands and what they generally convey:
                    </ContentTypography>
                    <ContentTypography>
                    10-55: Represents a basic proficiency where the candidate can comprehend and use elementary phrases and sentences.
                    </ContentTypography>
                    <ContentTypography>
                    60-85: Indicates an intermediate level, allowing the candidate to manage basic interactions in familiar contexts.
                    </ContentTypography>
                    <ContentTypography>
                    90-115: Suggests an upper-intermediate proficiency, enabling the candidate to communicate effectively in professional and academic settings.
                    </ContentTypography>
                    <ContentTypography>
                    120-160: Reflects an advanced level, where the candidate can fluently and adeptly use English across various situations.
                    </ContentTypography>


                    <SubTitleTypography>
                    Interpretation of the Exam Score Report
                    </SubTitleTypography>
                    <ContentTypography>
                    After the exam reform on July 1st, the overall examination process and question types remained unchanged, but the official has made changes to the exam score report and scoring rules.
Currently, the score report includes 8 sub-scores and 1 total score.
                    </ContentTypography>
                    <ContentTypography>
                    Each comprehensive ability sub-score is the average of the two corresponding individual ability sub-scores:
                    </ContentTypography>
                    <ContentTypography>
                    - Production = (Speaking + Writing) / 2
                    </ContentTypography>
                    <ContentTypography>
                    - Literacy = (Reading + Writing) / 2
                    </ContentTypography>
                    <ContentTypography>
                    - Comprehension = (Listening + Reading) / 2
                    </ContentTypography>
                    <ContentTypography>
                    - Conversation = (Listening + Speaking) / 2
                    </ContentTypography>
                    <ContentTypography>
                    The total score is the average of the four individual scores for listening, speaking, reading, and writing: Total Score = (Listening + Speaking + Reading + Writing) / 4
                    </ContentTypography>
                    <ContentTypography>
                    This represents that the weight of (listening, speaking, reading, and writing) in the total score is completely the same, and the official has given more importance to the originally less weighted speaking and writing, making them equal to the proportion of objective question scores.
                    </ContentTypography>

                    <SubTitleTypography>
                    Comparative Analysis with Other English Tests
                    </SubTitleTypography>
                    <ContentTypography>
                    As the Duolingo scores gain widespread recognition, more and more students are switching from IELTS and TOEFL to Duolingo. The official website has adjusted the score conversion between Duolingo English Test scores and IELTS, TOEFL iBT scores.
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
                            src="https://detcdn.zixuekeji.cn/20240827/95df6da9e6fd648a44d512e3fa82838c.png"
                            alt="Duolingo English Test Certificate"
                            style={{
                                width: '60%', // Makes the image responsive
                                height: '60%', // Limits the height of the image
                                objectFit: 'contain' // Keeps the aspect ratio of the image
                            }}
                        />
                    </Box>
                    <SubTitleTypography>
                    Unique Attributes of the DET
                    </SubTitleTypography>
                    <ContentTypography>
                    Duration: The test, including an introductory segment, an adaptive test, and a video interview, takes approximately one hour.
                    </ContentTypography>
                    <ContentTypography>
                    Validity: The validity period for DET scores is two years.
                    </ContentTypography>
                    <ContentTypography>
                    Rapid Results: Results are typically accessible within two days post-examination.
                    </ContentTypography>
                    <ContentTypography>
                    The DET is favored for its convenience, swift result processing, and affordability. Unlike traditional tests, the DET can be taken from the comfort of home, and the expedited results make it an excellent choice for those with tight schedules.
                    </ContentTypography>
                    <ContentTypography>
                    In summary, the Duolingo English Test presents a comprehensive and efficient avenue for English proficiency certification. Understanding the exam's scoring system can significantly improve your performance.
                    </ContentTypography>
                </Box>
            </Box>

        </Box >
    );
};

export default Blog03Page;
