

import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import ReusableTable from '../../components/common/ReusableTable';
const Blog02Page = () => {


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

    const readingQuestionData = {
        columns: ['Question Types', 'Frequency'],
        rows: [
          ['Read and Select', '15-18'],
          ['Fill in the Blanks', '6-9'],
          ['Read and Complete', '3-6'],
          ['Interactive Reading', '2 sets of 5-6 questions']
        ]
      };
      

      const speakingQuestionData = {
        columns: ['Question Types', 'Frequency'],
        rows: [
          ['Read Aloud', '3-6'],
          ['Listen, Then Speak', '2'],
          ['Speak About the Photo', '1'],
          ['Read, Then Speak', '1'],
          ['Speaking Sample', '1']
        ]
      };
      

      const listeningQuestionData = {
        columns: ['Question Types', 'Frequency'],
        rows: [
          ['Listen and Type', '6-9'],
          ['Interactive Listening', '2 sets of 5-6 questions']
        ]
      };
      

      const writingQuestionData = {
        columns: ['Question Types', 'Frequency'],
        rows: [
          ['Write About the Photo', '3'],
          ['Interactive Writing', '1 set of 2 questions'],
          ['Writing Sample', '1']
        ]
      };
      
      

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <Box sx={{ bgcolor: '#ffffff', paddingY: '100px', mx: 0, flex: 1 }}>
                <TitleTypography >
                How many Questions in Duolingo English Test?
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
                    Each exam typically has about 45 to 60 questions. The Duolingo English Test (DET) does not have a set number of questions. The test concludes based on the scoring system's assessment of your score. This blog introduces the frequency of each question type and the features of the exam structure.

                    </ContentTypography>
                

                    <SubTitleTypography>
                    Question Types and Frequencies                    </SubTitleTypography>
                    <ContentTypography>
                    The frequency of different question types in the test varies. The number of questions for each type is not fixed for each test and for each individual test taker. Therefore, the experience of each test is unique. However, all questions are designed to assess the four main language skills: listening, speaking, reading, and writing.                    </ContentTypography>
                    <ContentTypography>
                    Reading: In the reading section, there are four major types of questions.
                    </ContentTypography>
                    <ReusableTable {...readingQuestionData} />

                
                    <ContentTypography>
                    Speaking: The speaking section consists of five major types of questions, including the Speaking Sample. It primarily assesses the test-taker's oral expression and pronunciation abilities. During the oral response section, test-takers should aim to answer as much as possible within the limited time, utilizing a rich variety of grammatical structures and vocabulary.                    
                    </ContentTypography>
                    <ReusableTable {...speakingQuestionData} />
                    <ContentTypography>
                    Listening: The listening section comprises two main types of questions. This part can be quite challenging for first-time DET test-takers, requiring you to prepare in advance and manage your time effectively during the test. You can participate in practice sessions and mock exams on the DET practice platform, which can significantly enhance your performance.                    
                    </ContentTypography>
                    <ReusableTable {...listeningQuestionData} />

                    <ContentTypography>

                    Writing: The writing section includes three main types of questions, one of which is the Writing Sample. Similar to the speaking section, this part requires you to use a rich variety of grammar and vocabulary. Also, do not limit yourself to the prescribed word count; express your thoughts more expansively.                    
                    </ContentTypography>
                    <ReusableTable {...writingQuestionData} />


                  
                    <ContentTypography>
                    Because it is an adaptive test, the questions for each individual are different. If you want to achieve a higher test score, it's not only important to have control over the various types of questions and timing, but also to practice more frequently.
                    </ContentTypography>
                    

                  
                   
                    <SubTitleTypography>
                    Test Structure and Features
                    </SubTitleTypography>
                    <ContentTypography>
                    The Duolingo English Test is an adaptive exam that typically lasts around 45 minutes. Unlike traditional in-person tests, it is conducted on an efficient online platform, allowing candidates to take it from the comfort of their own homes or any location with a reliable internet connection. The test consists of several key components:
                    </ContentTypography>
                    <ContentTypography>
                    Adaptive Test: This graded section covers a variety of question types, such as reading, writing, listening, and speaking exercises. These questions are carefully designed to provide a comprehensive evaluation of a candidate's language skills within the limited test duration.
                    </ContentTypography>
                    <ContentTypography>
                    Writing Sample: Candidates complete a 10-minute writing task. Although this section is ungraded, the written response is included alongside the overall score report and shared with the schools or institutions to which the candidate applies.                    </ContentTypography>
                    <ContentTypography>
                    Speaking Sample: Candidates respond to a prompt, and their recorded spoken response is also provided to the institutions.                    </ContentTypography>
                    <ContentTypography>
                    The adaptive nature of the test means the difficulty of the questions adjusts based on the candidate's performance, ensuring an accurate assessment of their language proficiency. This design not only enhances the test's efficiency but also helps to reduce the stress typically associated with traditional exams.
                    </ContentTypography>

                    <ContentTypography>
                    In summary, the Duolingo test doesn't have a fixed number of questions, but you can take some practice tests in advance to familiarize yourself with the exam structure and question types, allowing you to better manage your time.                    
                    </ContentTypography>
                </Box>
            </Box>

        </Box>
    );
};

export default Blog02Page;
