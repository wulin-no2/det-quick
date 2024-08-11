import React, { useState } from 'react';
import { Container, Box, TextField, Button, Stepper, Step, StepLabel, Typography, StepConnector } from '@mui/material';
import { styled } from '@mui/system';

// 自定义Stepper连接线组件
const ColorlibConnector = styled(StepConnector)(({ theme, ownerState }) => {
  const { activeStep } = ownerState;
  // 设置每一步连接线的默认颜色
  const defaultColor = theme.palette.divider;
  // 根据活跃步骤决定连接线的颜色
 const themeColor =  theme.palette.primary.main
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

function PasswordResetPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const steps = ['输入邮箱', '设置新密码', '验证成功'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <TextField
            label="请输入您的邮箱"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
        );
      case 1:
        return (
          <Box>
            <TextField
              label="请输入新密码"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="确认新密码"
              name="confirmPassword"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
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
    <Container component="main" maxWidth="sm" sx={{ bgcolor: 'white', p: 3, mt: 3, borderRadius: 2, boxShadow: 3 }}>
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
      <Box sx={{ mt: 2 }}>
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
