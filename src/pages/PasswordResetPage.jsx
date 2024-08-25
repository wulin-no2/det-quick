import React, { useState } from 'react';
import { Container, Box, TextField, Button, Stepper, Step, StepLabel, Typography, StepConnector, InputAdornment, FormControl, OutlinedInput, InputLabel, IconButton } from '@mui/material';

import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CountdownButton from '../components/common/CountdownButton';
import globalSettingsConfig from '../globalSettingsConfig';
import { pubSub } from '../utils/pubSub';
import { requestCheckUserExist, requestResetPasswordSendCode, requestResetPasswordVerifyCode } from "../api/Profile/userApiService";
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
        otp: ''  // 添加验证码状态

    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleGetOtpClick = async () => {
        try {
            pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

            const response = await requestResetPasswordSendCode(values.email);
            if (!response.success) {
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
            }

        } catch (error) {

            // 检查 error 对象以确保它包含响应体
            if (error.response) {
                // 访问具体的错误信息和数据
                console.log("Error response data:", error.response.data);
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.response.data.message);
            } else {
                // 处理无响应体的其他错误（网络问题等）
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.message || "An unknown error occurred");
            }

        } finally {
            pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);

        }

    }

    const handleClickShowPassword = (prop) => () => {
        setValues({ ...values, [prop]: !values[prop] });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();  // Prevent the button from being focused after the click
    };

    const steps = ['Enter Email', 'Set Password', 'Confirmation'];



    const handleNext = async () => {
        if (activeStep === steps.length - 1) {
            // 假设步骤索引从0开始，最后一步的处理逻辑
            // 完成所有处理后
            resetForm();  // 重置表单
            navigate('/login');  // 导航到登录页
            // setActiveStep(0);  // 可选：自动返回到第一步
        } else {
            if (activeStep === 0) {
                // email 不能是空
                if (!values.email) {
                    pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, "Email cannot be empty.");

                    return;
                }
                try {
                    pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

                    const response = await requestCheckUserExist(values.email);
                    if (response.success) {

                        setActiveStep((prevActiveStep) => prevActiveStep + 1);

                    } else {

                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
                    }

                } catch (error) {

                    // 检查 error 对象以确保它包含响应体
                    if (error.response) {
                        // 访问具体的错误信息和数据
                        console.log("Error response data:", error.response.data);
                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.response.data.message);
                    } else {
                        // 处理无响应体的其他错误（网络问题等）
                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.message || "An unknown error occurred");
                    }

                } finally {
                    pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);

                }

            } else if (activeStep === 1) {
                if (!values.password || !values.confirmPassword || values.password !== values.confirmPassword) {
                    pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, "Password and confirm password must match.");
                    return;
                }

                try {
                    pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);
                    const response = await requestResetPasswordVerifyCode(values.email, values.otp, values.password);
                    if (response.success) {
                        // 可以在这里添加检查验证码正确性的API调用逻辑
                        setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    } else {
                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);

                    }

                } catch (error) {
                    // 检查 error 对象以确保它包含响应体
                    if (error.response) {
                        // 访问具体的错误信息和数据
                        console.log("Error response data:", error.response.data);
                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.response.data.message);
                    } else {
                        // 处理无响应体的其他错误（网络问题等）
                        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.message || "An unknown error occurred");
                    }
                } finally {
                    pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);

                }

            }
        }

    };

    const handleEdit = () => {
        setActiveStep(0);  // 返回第一步
    };

    const resetForm = () => {
        setValues({
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            showConfirmPassword: false,
            otp: ''
        });
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
                                    outline: 'none',  // 尝试在这里直接添加
                                    border: 'none',
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
                            value={values.otp}
                            onChange={handleChange('otp')}

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
                                                    border: 'none', // 移除边框
                                                    '&:hover': { backgroundColor: 'transparent' },
                                                    '&:active': { backgroundColor: 'transparent !important' },
                                                    '&:focus': { outline: 'none' }
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
                    <Box>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            {/* 密码成功重置！ */}
                            Password reset successfully!
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            {/* 你的账户将退出登录，请使用新密码重新登录。 */}
                            Your account will be logged out, please log in again with the new password.
                        </Typography>
                    </Box>

                );
            default:
                // return '未知步骤';
                return 'Unknown step';
        }
    };

    const isNextDisabled = () => {
        if (activeStep === 0) {
            return !values.email;  // 第一步要求有 Email
        } else if (activeStep === 1) {
            return !values.password || !values.confirmPassword || !values.otp;
            // 第二步要求密码、确认密码存在且相同，且OTP非空
        } else {
            return false;  // 最后一步，默认不禁用
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ bgcolor: 'white', p: "40px", borderRadius: 2, boxShadow: 3, margin: "30px 0 50px 0" }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
                Reset Password
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
                {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                    >
                        {activeStep === steps.length - 1 ? '完成' : '下一步'}
                    </Button>
                    
                </Box> */}
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleNext}
                    disabled={isNextDisabled()}

                    style={{
                        height: "55px",
                        width: '100%',
                        borderRadius: "6px",
                        outline: 'none',  // 尝试在这里直接添加
                        border: 'none',
                        marginTop: "40px"
                    }} // Adjust these values to fine-tune the spacing
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Container>
    );
}

export default PasswordResetPage;
