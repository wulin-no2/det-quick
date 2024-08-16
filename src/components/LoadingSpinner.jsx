// LoadingSpinner.js
import React from 'react';
import { useGlobalUIState } from '../hooks/useGlobalUIState'; // 确保正确引入钩子
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import globalSettingsConfig from '../globalSettingsConfig';

const LoadingSpinner = () => {
  const { loading } = useGlobalUIState(); // 使用钩子获取当前的加载状态

  console.log('999000loading:', loading);
  // 如果不在加载中，不渲染任何内容
  if (!loading) return null;

  // 如果在加载中，渲染加载指示器
  return (
    <Box
      sx={{
        // 样式设置
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: globalSettingsConfig.zIndex.loadingSpinner, // 足够高的层级以确保在其他内容之上
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        padding: '16px',
        boxShadow: 3,
      }}
    >
    
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
