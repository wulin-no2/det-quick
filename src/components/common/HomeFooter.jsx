

import React from 'react';
import { Box, Grid, Link, Typography, IconButton, Select, MenuItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import globalSettingsConfig from '../../globalSettingsConfig';

const StyledLink = ({ children, href }) => (
    <Link href={href} 
    variant="body2" 
    display="block"
    sx={{
            marginTop: '10px',
            textDecoration: children === 'show more' ? 'underline' : 'none', // 根据内容决定是否加下划线
            color: 'black', // 默认颜色
            '&:hover': {
                color: 'primary.main', // 使用主题中的颜色
            },
            textAlign: 'left' // 左对齐


        }}>
        {children}
    </Link>
);

const StyledTypography = ({ children }) => (
    <Typography variant="h6" gutterBottom sx={{
        textAlign: 'left',
        marginTop: '50px',
        marginBottom: '20px',
    }}>
        {children}
    </Typography>
);

const HomeFooter = () => {



    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', m: 0, p: 0, px:  globalSettingsConfig.layoutMargins.horizontalWindowMargin }}> {/* px is padding on the left and right */}
            <Grid container spacing={10} sx={{ justifyContent: 'flex-start' }}>
                {/* Products Section */}
                <Grid item style={{ flexGrow: 1 }}>
                    <StyledTypography>Products</StyledTypography>
                    <StyledLink href="#" >DET Practice</StyledLink>
                    <StyledLink href="#">DET Writing AI Correction</StyledLink>
                    <StyledLink href="#">DET Speaking AI Correction</StyledLink>
                    <StyledLink href="#">DET Mock</StyledLink>
                    <StyledLink href="#">DET Vocabulary</StyledLink>
                </Grid>
                {/* Learn Section */}
                <Grid item style={{ flexGrow: 1 }}>
                    <StyledTypography>Course</StyledTypography>
                    <StyledLink href="#">Recorded Video Course</StyledLink>
                    <StyledLink href="#">Live One-on-One Course</StyledLink>
                    <StyledLink href="#">Group Interactive Live Course</StyledLink>
                </Grid>
                {/* Blog Section */}
                <Grid item style={{ flexGrow: 1 }}>
                    <StyledTypography>Blog</StyledTypography>
                    <StyledLink href="#">How many Questions in Duolingo English Test?</StyledLink>
                    <StyledLink href="#">Where to Practice Duolingo English Test?</StyledLink>
                    <StyledLink href="#">What is Duolingo English Test Score?</StyledLink>
                    <StyledLink href="#">How much does Duolingo English test cost?</StyledLink>
                    <StyledLink href="#" style={{ textDecoration: 'underline' }}>
                        show more
                    </StyledLink>
                </Grid>
                {/* Company Section */}
                <Grid item style={{ flexGrow: 1 }}>
                    <StyledTypography>Company</StyledTypography>
                    <StyledLink href="#">About us</StyledLink>
                    <StyledLink href="contact-us">Contact us</StyledLink>
                    <StyledLink href="#">Privacy Policy</StyledLink>
                    <StyledLink href="#">Terms and Conditions</StyledLink>
                </Grid>
            </Grid>

            {/*  add a sepreate line in ligth gray color */}
            <Box sx={{
                width: '100%',
                height: '1px',
                backgroundColor: "#ccc",
                marginTop: '60px',
                marginBottom: '25px'
            }}></Box>

            {/* Footer Bottom */}


            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start', // 从左侧开始布局
                alignItems: 'center', // 垂直居中对齐
                mt: 2, // 上边距
                mb: 2 // 下边距
            }}>
                <img src="/images/Grimlingo-logo.png" alt="Grimlingo Logo" style={{ height: '80px', marginRight: '20px' }} />
                <Select defaultValue="English" size="small">
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                </Select>
                <Typography variant="body2" sx={{ mr: 'auto', ml: '30px' }}>
                    Copyright © 2024 Grimlingo Limited, Ireland.
                </Typography>
                <Box>
                    <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
                    <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
                    <IconButton href="#" color="inherit"><LinkedInIcon /></IconButton>
                    <IconButton href="#" color="inherit"><YouTubeIcon /></IconButton>
                    <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
                </Box>
            </Box>

            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,m:'30px 0px'}}>
                <Typography variant="body2">
                    Copyright © 2018–2024 Osome Ltd., Hong Kong. All rights reserved
                </Typography>
                <Box>
                    <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
                    <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
                    <IconButton href="#" color="inherit"><LinkedInIcon /></IconButton>
                    <IconButton href="#" color="inherit"><YouTubeIcon /></IconButton>
                    <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
                   
                </Box>
            </Box> */}
        </Box>
    );
};

export default HomeFooter;

