import React from 'react';
import { Container, Grid, Box, TextField, Button, Typography, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import globalSettingsConfig from '../../globalSettingsConfig';


function ContactUsPage() {
    const LabelTypography = ({ children }) => (
        <Typography gutterBottom sx={{ fontSize: '15px', color: '#909396' }}>
            {children}
        </Typography>
    );
    const ValueTypography = ({ children }) => (
        <Typography sx={{ fontSize: '18px', color: '#212833', wordWrap: 'break-word', marginBottom: 2 }}>
            {children}
        </Typography>
    );

    return (
        <Box sx={{
            // marginX:globalSettingsConfig.layoutMargins.horizontalWindowMargin,
            // marginBottom:'50px',

            // marginTop: '0',
        }}>
            {/* 上部分：联系表单 */}
            {/* <Box sx={{ bgcolor: '#ffffff', }}>
                <Box sx={{
                    marginTop: 0,
                    marginBottom: 8,
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    px: '290px',
                }}>
                    <Typography component="h1" variant="h2" sx={{ mb: 2, pt: '30px', Family:font 'Suisse Works, Georgia, PingFang TC, serif' }}>
                        Contact us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        Thank you for choosing to get in touch with us. Please send us an email and our staff will reach out to you as soon as possible to address your inquiries.                    </Typography>
                    <Box component="form" sx={{ mt: 1, }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your name"
                            name="name"
                            autoComplete="name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email address"
                            name="email"
                            autoComplete="email"
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="message"
                            label="How can we help?"
                            name="message"
                            multiline
                            rows={4}
                        />
                        <Button
                            type="submit"
                            maxWidth="sm"
                            variant="contained"
                            sx={{ mt: 3, mb: '40px' }}
                        >
                            Send your message
                        </Button>
                    </Box>
                </Box>
            </Box> */}
            <Box sx={{
                bgcolor: '#FFFDFA',
                // marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
            }}>
                <Box sx={{
                    marginTop: 0,
                    marginBottom: 8,
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                }}>
                        <Grid container spacing={2} alignItems="flex-end">
                    <Grid item xs={2.6}>
                        {/* 左侧图片 */}
                        <Box
                            sx={{
                                height: 280,
                                backgroundImage: 'url("/images/contactme-ask.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                marginBottom: '32px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6.8}>
                        {/* 中间表单 */}
                        <Box sx={{ bgcolor: '#FFFDFA', px: '55px', py: '20px'}}>
                            <Typography component="h1" variant="h2" sx={{ mt:'30px',mb: 2, color: '#212833' , fontFamily: 'Suisse Works, Georgia, PingFang TC, serif', }}>
                                Contact us
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 ,color: '#212833'}}>
                                Thank you for choosing to get in touch with us. Please send us an email and our staff will reach out to you as soon as possible to address your inquiries.
                            </Typography>
                            <Box component="form" sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Your name"
                                    name="name"
                                    autoComplete="name"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email address"
                                    name="email"
                                    autoComplete="email"
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="message"
                                    label="How can we help?"
                                    name="message"
                                    multiline
                                    rows={4}
                                />
                                <Button
                                    type="submit"
                                    maxWidth="md"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Send your message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2.6}>
                        {/* 右侧图片 */}
                        <Box
                            sx={{
                                height: 330,
                                backgroundImage: 'url("/images/contactme-answer.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                marginBottom: '32px',
                            }}
                        />
                    </Grid>
                </Grid>

                </Box>

            
            </Box>


            {/* 下部分：左边地图 + 右边联系信息 */}
            <Box sx={{ margin: globalSettingsConfig.layoutMargins.horizontalWindowMargin }}> {/* 设置外边距 */}

                <Grid container >
                    <Grid item xs={12} md={8} sx={{ pr: '30px', }}>
                        <Box sx={{ width: '100%', height: 400, overflow: 'hidden', borderRadius: '30px' }}>
                            <iframe
                                title="Company Location"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 'none', // 替代 frameBorder="0"
                                    overflow: 'hidden', // 替代 scrolling="no"
                                    margin: 0, // 替代 marginHeight="0" 和 marginWidth="0"
                                }}
                                src={`https://maps.google.com/maps?q=UNIT%203D%20NORTH%20POINT%20HOUSE,%20NORTH%20POINT%20BUSINESS%20PARK,%20NEW%20MALLOW%20ROAD,%20CORK%20T23%20AT2P%20IRELAND&output=embed`}
                            >
                            </iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ bgcolor: '#F3EDE6', borderRadius: '30px', textAlign: 'left', pt: '30px', pl: '30px', pr: '30px' }}>
                        <LabelTypography  >
                            Address
                        </LabelTypography>
                        <ValueTypography sx={{ wordWrap: 'break-word' }}>
                            UNIT 3D NORTH POINT HOUSE, NORTH POINT BUSINESS PARK, NEW MALLOW ROAD, CORK, IRELAND
                        </ValueTypography>
                        <LabelTypography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Email address
                        </LabelTypography>
                        <ValueTypography>info@grimlingo.com</ValueTypography>
                        <LabelTypography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Phone
                        </LabelTypography>
                        <ValueTypography>+353 874798137</ValueTypography>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    );
}

export default ContactUsPage;
