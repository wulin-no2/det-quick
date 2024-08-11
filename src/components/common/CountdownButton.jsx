import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const CountdownButton = ({
  onClick, // 传入的onClick函数
  disabled, // 是否禁用按钮的标志
  buttonText, // 按钮显示的文本
  buttonProps, // 从外部传入的sx样式
  countdownTime = 60 // 默认倒计时时间为60秒
}) => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(countdownTime);

  // 当按钮被点击时调用
  const handleButtonClick = () => {
    // 只有当按钮不是处于倒计时状态时才执行
    if (!isCountingDown) {
      setIsCountingDown(true);
      setTimeLeft(countdownTime);
      onClick && onClick(); // 如果提供了onClick函数，就调用它
    }
  };

  useEffect(() => {
    let interval = null;

    if (isCountingDown && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsCountingDown(false);
    }

    return () => clearInterval(interval);
  }, [isCountingDown, timeLeft]);

  return (
    <Button
      {...buttonProps} // 展开其他所有Button属性
      onClick={handleButtonClick}
      disabled={isCountingDown || disabled} // 如果正在倒计时或者外部已禁用，则禁用按钮
      sx={{
        // width: '100%', // 使用百分比宽度
        // height: '100%',
        // fontWeight: "bold",
        // fontSize: "1.3rem",
        // borderRadius: "0.5rem",
        // textTransform: "none",
        ...buttonProps.sx,
      }}
    >
      {isCountingDown ? `${timeLeft}s` : buttonText}
    </Button>
  
  );
};

export default CountdownButton;
