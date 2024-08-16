import React from 'react';
import Snackbar from "@mui/material/Snackbar";
import globalSettingsConfig from '../globalSettingsConfig';
import { pubSub } from '../utils/pubSub';

const MySnackBarMessage = ({ open, message }) => {
  // 确保onClose被正确调用，这里假设onClose是从父组件传递下来的
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // 发布隐藏Toast的事件
    pubSub.publish(globalSettingsConfig.event.HIDE_TOAST);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      ContentProps={{
        style: {
          backgroundColor: "black",
          color: "white",
          maxWidth: "60%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      message={<span style={{ textAlign: "center" }}>{message}</span>}
      sx={{
        marginBottom: "calc(50vh - 36px)",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default MySnackBarMessage;
