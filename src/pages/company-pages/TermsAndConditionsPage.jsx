import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import globalSettingsConfig from '../../globalSettingsConfig';

function TermsAndConditionsPage() {

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
                    Terms  and  Conditions
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
                    Please read these Terms of Service (“Terms”, “TOS”) carefully before using the https://www.detquick.com website (the “Service”) operated by DETQuick  (“us”, “we”, or “our”).
                </ContentTypography>
                <ContentTypography>
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </ContentTypography>
                <ContentTypography>
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </ContentTypography>

                <SubTitleTypography >
                Accounts
                </SubTitleTypography>
                <ContentTypography>
                When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </ContentTypography>
                <ContentTypography>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                </ContentTypography>
                <ContentTypography>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </ContentTypography>

                <SubTitleTypography>
                Links To Other Web Sites
                </SubTitleTypography>
                <ContentTypography>
                Our Service may contain links to third-party websites or services that are not owned or controlled by DETQuick.
                </ContentTypography>
                <ContentTypography>
                DETQuick has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that DETQuick shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.                </ContentTypography>
                <ContentTypography>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </ContentTypography>

                <SubTitleTypography>
                Termination
                </SubTitleTypography>
                <ContentTypography>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </ContentTypography>
                <ContentTypography>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                </ContentTypography>
                <ContentTypography>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </ContentTypography>

                <SubTitleTypography>
                Disclaimer
                </SubTitleTypography>
                <ContentTypography>
                Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </ContentTypography>
              
                <SubTitleTypography>
                Governing Law
                </SubTitleTypography>
                <ContentTypography>
                These Terms shall be governed and construed in accordance with the laws of the Republic of Ireland without regard to its conflict of law provisions.
                </ContentTypography>
                <ContentTypography>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.                
                </ContentTypography>
               

                <SubTitleTypography>
                Changes                
                </SubTitleTypography>
                <ContentTypography>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </ContentTypography>
                <ContentTypography>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </ContentTypography>

                <SubTitleTypography>
                Contact Us
                </SubTitleTypography>
                <ContentTypography>
                If you have any questions about these Terms, please contact us.
                </ContentTypography>
                
            </Box>
        </Box>
    );

}

export default TermsAndConditionsPage;
