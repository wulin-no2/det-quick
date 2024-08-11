import React, { useState } from 'react';
import { Container, Box, TextField, Button, Stepper, Step, StepLabel, Typography, StepConnector, InputAdornment, FormControl, OutlinedInput, InputLabel, IconButton } from '@mui/material';

import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CountdownButton from '../components/common/CountdownButton';

// 自定义Stepper连接线组件
const ColorlibConnector = styled(StepConnector)(({ theme, ownerState }) => {
    const { activeStep } = ownerState;
    // 设置每一步连接线的默认颜色
    const defaultColor = theme.palette.divider;
    // 根据活跃步骤决定连接线的颜色
    const themeColor = theme.palette.primary.main
    const color1 = activeStep > 0 ? themeColor : defaultColor; // 第一条线，第二阶段变红
    const color2 = activeStep > 1 ? themeColor : defaultColor; // 第二条线，第三阶段变红

    return {
        [`& .MuiStepConnector-line`]: {
            borderColor: defaultColor, // 默认颜色
        },
        [`&.Mui-active .MuiStepConnector-line`]: {
            borderColor: color1, // 活跃状态下第一条线的颜色
        },
        [`&.Mui-completed .MuiStepConnector-line`]: {
            borderColor: color2, // 完成状态下第一条线的颜色
        },
    };
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '13px 14px',
    border: `1px solid #C4C4C4`,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
}));

function PasswordResetPage() {
    const [activeStep, setActiveStep] = useState(0);

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleGetOtpClick = () => {

    }

    const handleClickShowPassword = (prop) => () => {
        setValues({ ...values, [prop]: !values[prop] });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();  // Prevent the button from being focused after the click
    };

    const steps = ['输入邮箱', '设置新密码', '验证成功'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleEdit = () => {
        setActiveStep(0);  // 返回第一步
    };


    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <TextField
                        label="Enter your email" 
                        name="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange('email')}
                        margin="normal"
                    />
                );
            case 1:
                return (
                    <Box>
                        <StyledBox>
                            {/* <Typography variant="body1">{formData.email}</Typography> */}
                            <Typography variant="body1">{values.email}</Typography>
                            <Button
                                sx={{
                                    color: 'primary.main', // 使用主题中的颜色
                                    textTransform: 'none', // 移除大写字母样式
                                    fontSize: 'inherit', // 继承字体大小
                                    padding: 0, // 移除内边距
                                    minWidth: 0, // 移除最小宽度限制
                                    backgroundColor: 'transparent', // 确保背景透明
                                    '&:hover': {
                                        backgroundColor: 'transparent' // 鼠标悬停时也保持透明背景
                                    }
                                }}
                                onClick={handleEdit}
                            >
                                Change
                            </Button>
                        </StyledBox>

                        <TextField
                            type={values.showPassword ? 'text' : 'password'}
                            label="Password"
                            style={{ marginTop: "20px" }}
                            value={values.password}
                            onChange={handleChange('password')}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword('showPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            label="Confirm Password"
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: "20px" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword('showConfirmPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Enter OTP"
                            variant="outlined"
                            style={{ marginTop: "20px" }}

                            InputProps={{
                                // readOnly: false, // 设置为只读，如果需要修改这一行为，可以适当调整
                                endAdornment: (
                                    <InputAdornment position="end">
                                      
                                        <CountdownButton
                                            buttonText={"Get OTP"}
                                            onClick={handleGetOtpClick}
                                            disabled={false}
                                            buttonProps={{


                                                sx: {
                                                    color: 'primary.main', // 使用主题中的颜色
                                                textTransform: 'none', // 移除大写字母样式
                                                fontSize: 'inherit', // 继承字体大小
                                                padding: 0, // 移除内边距
                                                minWidth: 0, // 移除最小宽度限制
                                                backgroundColor: 'transparent', // 确保背景透明
                                                '&:hover': {
                                                    backgroundColor: 'transparent' // 鼠标悬停时也保持透明背景
                                                }

                                                },
                                            }}
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />


                    </Box>
                );
            case 2:
                return (
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        您的密码已成功重置！
                    </Typography>
                );
            default:
                return '未知步骤';
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ bgcolor: 'white', p: "40px", borderRadius: 2, boxShadow: 3, margin: "30px 0 50px 0" }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
                重置密码
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector ownerState={{ activeStep }} />}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ margin: "50px" }}>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                    >
                        {activeStep === steps.length - 1 ? '完成' : '下一步'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default PasswordResetPage;
