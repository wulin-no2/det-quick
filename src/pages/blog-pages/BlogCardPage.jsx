


import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
const BlogCardPage = () => {

    const TitleTypography = ({ children, sx }) => (
        <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
                color: 'rgb(44, 44, 44)',
                fontFamily: '"Adobe Clean", adobe-clean, "Trebuchet MS"',
                fontWeight: '700',  // 加粗
                fontSize: '44px',  // 字体大小为36px
                paddingBottom: '50px',
                ...sx  // 合并外部传入的sx属性
            }}
        >
            {children}
        </Typography>
    );

    const blogPosts = [
        {
            title: 'Is Duolingo English Test Harder than IELTS?',
            date: '09-06-2024',
            intro: 'The Duolingo English Test is often considered easier than IELTS. It\'s adaptive, typically shorter in duration, and can be taken online. This blog post offers a detailed comparison between IELTS and the Duolingo English Test.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/09/06/media_140fce60728863f907b6092ef2d50ab2a4e820538.jpeg?width=750&format=webply&optimize=medium',
            author: 'Sophie Wodzak'
        },
        {
            title: 'How many Questions in Duolingo English Test?',
            date: '09-06-2024',
            intro: 'Each exam typically has about 45 to 60 questions. The Duolingo English Test (DET) does not have a set number of questions. The test concludes based on the scoring system\'s assessment of your score. This blog introduces the frequency of each question type and the features of the exam structure.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/07/15/media_1bbc13a935de815ac5102260b51a583b614e747b0.jpeg?width=750&format=webply&optimize=medium',
            author: 'Vineet Sood'
        },
        {
            title: 'Where to Practice Duolingo English Test?',
            date: '09-05-2024',
            intro: 'Websites like Grimlingo DET and the official DET website provide customized practice questions and full-scale mock exams. It\'s vital to choose study materials that align with your current proficiency level to ensure your practice is productive.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/06/26/media_182b47c9fc6d56de0f020b05232591e629eaa65fa.jpeg?width=750&format=webply&optimize=medium',
            author: 'Jamie Kirkpatrick'
        }, 
        {
            title: 'What is Duolingo English Test Score?',
            date: '09-06-2024',
            intro: 'Duolingo tests use a scoring system that ranges from 10 to 160 points, with scores being whole numbers and multiples of 5, with the maximum score being 160 points. This article will explore the intricacies of the DET\'s scoring mechanism, clarifying the structure of the scores and their implications.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/07/30/media_131eddd1f6ae399f3f506c13f8850bb1cd04930f4.jpeg?width=750&format=webply&optimize=medium',
            author: 'Masha Kostromitina, Ph.D.'
        },
        {
            title: 'How much does Duolingo English test cost?',
            date: '09-06-2024',
            intro: 'The Duolingo English Test fee for the year 2024 is $65. If you purchase the discount package, the price for two tests is $110, which is equivalent to $55 per test. Additionally, if you wish to receive your test results within 12 hours, there is an additional charge of $39. This blog post introduces a comparison of the DET (Duolingo English Test) fees with those of other traditional exams.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/08/27/media_1b3befdb2f3204981025fb97c596ba01407e0ff72.jpeg?width=750&format=webply&optimize=medium',
            author: 'Julie Collins'
        },
        {
            title: 'How many times can I take Duolingo English Test?',
            date: '09-05-2024',
            intro: 'According to Duolingo\'s regulations, you can purchase and take the Duolingo English Test (DET) up to three times within a 21-day period. If your test results are not certified, you may be required to retake the test, and this does not count towards the three-test limit. Additionally, with each test purchase, you have three attempts, meaning you can retry twice without needing to repurchase.',
            imageUrl: 'https://blog.adobe.com/en/publish/2024/07/11/media_113e15d6bc3f720b28cba7192be08df9b3e0672ba.jpeg?width=750&format=webply&optimize=medium',
            author: 'Sophie Wodzak'
        }
    ];

    return (
        <Box sx={{ width: '100%' }} >
             
            <Box sx={{ bgcolor: '#FFFDFA', }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingTop: '80px',
                    paddingBottom: '80px',
                    // paddingX: '100px',
                }}>
                    <TitleTypography >
                Grimlingo DET Blog
                </TitleTypography>
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={4}>
                            {blogPosts.map((post, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card sx={{
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',  // 添加阴影效果
                                        borderRadius: '12px',  // 添加圆角效果
                                    }}>

                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: 200,  // 使用内联样式直接指定高度
                                                width: '100%', // 确保图片宽度自适应，保持响应式
                                                objectFit: 'cover'  // 确保图片内容以覆盖的方式填充容器，并裁剪多余部分
                                            }}
                                            image={post.imageUrl}
                                            alt={post.title}
                                        />

                                        <CardContent>
                                            <Typography variant="h6" component="div" sx={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                textAlign: 'left',  // 确保标题靠左对齐
                                                //"Adobe Clean", adobe-clean, "Trebuchet MS", sans-serif
                                                fontFamily: '"Adobe Clean", adobe-clean, "Trebuchet MS", sans-serif',
                                                fontWeight: 700,
                                                fontSize: '20px',
                                                lineHeight: '23.4px',  // 调整行高
                                                color: 'rgb(44, 44, 44)',
                                                marginBottom: '8px'

                                            }}>
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                textAlign: 'left',  // 确保标题靠左对齐
                                                color: 'rgb(68, 68, 68)',
                                                fontFamily: '"Adobe Clean", adobe-clean, "Trebuchet MS", sans-serif',
                                                lineHeight: '20px',  // 调整行高
                                                fontSize: '16px',
                                                marginTop: '12px'

                                            }}>
                                                {post.intro}
                                            </Typography>
                                            <Typography variant="caption" display="block" sx={{
                                                 pt: "15px",
                                                display: 'flex', 
                                                justifyContent: 'space-between', 
                                                alignItems: 'center',
                                                color:'rgb(104, 104, 104)' }}>
                                                <span>{post.date}</span>
                                                <span>{post.author}</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </Box>
            </Box>

            <Box sx={{ paddingY: '120px', mx: 0, flex: 1 }}>
            <TitleTypography sx={{mx:'150px'}}>
            Embark on your journey to high scores on Duolingo English Test !
                </TitleTypography>

            </Box>
            
        </Box>

    );
};

export default BlogCardPage;
