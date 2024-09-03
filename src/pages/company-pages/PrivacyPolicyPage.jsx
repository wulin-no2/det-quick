import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';

function PrivacyPolicyPage() {

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
                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%',  }}>
            <Box sx={{ bgcolor: '#ffffff', paddingY: '100px', mx: 0, flex: 1 }}>
                <TitleTypography >
                Privacy Policy
                </TitleTypography>

            </Box>

            <Box sx={{
                paddingY: '60px',
                textAlign: 'left',
                marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
            }}>
                <SubTitleTypography >
                    Introduction
                </SubTitleTypography>
                <ContentTypography>
                Grimlingo  (“us”, “we”, or “our”) operates the Grimlingo website (the “Service”).
                </ContentTypography>
                <ContentTypography>
                This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
                </ContentTypography>
                <ContentTypography>
                We will not use or share your information with anyone except as described in this Privacy Policy.
                </ContentTypography>
                <ContentTypography>
                Information Collection And Use
                </ContentTypography>
                <ContentTypography>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:
                </ContentTypography>
                <ContentTypography>
                • Name                
                </ContentTypography>
                <ContentTypography>
                • Email address                
                </ContentTypography>

                <SubTitleTypography >
                Log Data
                </SubTitleTypography>
                <ContentTypography>
                We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.                </ContentTypography>
                

                <SubTitleTypography>
                Cookies                
                </SubTitleTypography>
                <ContentTypography>
                Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive.            
                </ContentTypography>
                <ContentTypography>
                We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </ContentTypography>
               

                <SubTitleTypography>
                Service Providers
                </SubTitleTypography>
                <ContentTypography>
                We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.                </ContentTypography>
                <ContentTypography>
                These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </ContentTypography>
                

                <SubTitleTypography>
                Security
                </SubTitleTypography>
                <ContentTypography>
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.                </ContentTypography>
              
                <SubTitleTypography>
                Payment Info & Security
                </SubTitleTypography>
                <ContentTypography>
                In order to collect payments on your behalf from your customers, and provide payments to you, we, using Stripe as a third-party payment processor, collect payment information from you, your attendees and customers, your vendors, and other parties to whom we provide payments on your behalf and from whom we collect payments on your behalf. This information is used solely to collect and provide payments related to the Services and is only stored by Stripe. You should review the terms of service and privacy policies of Stripe, available at https://stripe.com/us/legal & https://stripe.com/us/privacy.                
                </ContentTypography>
            
               

                <SubTitleTypography>
                Links To Other Sites                
                </SubTitleTypography>
                <ContentTypography>
                Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party’s site. We strongly advise you to review the Privacy Policy of every site you visit.                </ContentTypography>
                <ContentTypography>
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </ContentTypography>

           
                
            </Box>
        </Box>
    );

}

export default PrivacyPolicyPage;
