


import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';
import { useNavigate } from 'react-router-dom';

function CareersPage() {
  const navigate = useNavigate();

  const jobs = [
    { title: 'Fullstack Software Engineer', location: 'Cork, Ireland' },
    { title: 'Frontend Software Engineer', location: 'Cork, Ireland' },
    { title: 'Backend Software Engineer', location: 'Cork, Ireland' },
    { title: 'UI Designer', location: 'Cork, Ireland' },
    { title: 'Digital Marketing Specialist', location: 'Cork, Ireland' }

  ];

  const handleJobClick = (job) => {
    // history.push(`/job-details/${job.title}`);
    navigate(`/job-details/${job.title}`);
  };


  return (
    <Box>
      <Box sx={{ margin: globalSettingsConfig.layoutMargins.horizontalWindowMargin, pb: "40px", pt: "0px" }}> {/* 设置外边距 */}

        {/* <Box  sx={{ pb: "120px", pt: "60px" }}> */}
        <Typography
          variant="h6"
          component="h6"
          gutterBottom
          sx={{
            color: '#212833',
            fontFamily: 'system-ui',
            fontWeight: 'bold',  // 加粗
            fontSize: '36px',  // 字体大小为36px

          }}>
          Featured jobs
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: 'system-ui',
            fontSize: '20px',
            color: '#212833',
            wordWrap: 'break-word',
            pb: "20px",
          }}>
          We’re always seeking talented individuals to join our team.
        </Typography>

        {jobs.map((job, index) => (
          <Box key={index}
          onClick={() => handleJobClick(job)}

            sx={{
              marginTop: 2,
              padding: 2,
              boxShadow: 1,
              backgroundColor: 'background.paper',
              borderRadius: 2, // 添加圆角效果
              '&:hover': {
                backgroundColor: 'action.hover', // MUI 提供的 hover 背景色
              }
            }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'left' }}>
              {job.title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              {job.location}
            </Typography>
            {/* <Divider sx={{ marginTop: 2 }} />  */}
          </Box>
        ))}
      </Box>
      <Box sx={{ bgcolor: '#FFFDFA', }}>
        <Box sx={{
          marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
          paddingY: '60px',
          // paddingX: '100px',
        }}>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'left' }} >
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                sx={{
                  color: '#212833',
                  fontFamily: 'system-ui',
                  fontWeight: 'bold',  // 加粗
                  fontSize: '36px',  // 字体大小为36px

                }}>               
                Ready to join DET Quick?
              </Typography>
              <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: 'system-ui',
            fontSize: '20px',
            color: '#212833',
            wordWrap: 'break-word',
            pb: "20px",
          }}>
              Reach out at info@detquick.com to discover more about our career opportunities and help shape the future of English learning.
              </Typography>
             
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
                  src="/images/carrer.png"  // 更改为你的图片路径
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
    </Box>



  );
}

export default CareersPage;
