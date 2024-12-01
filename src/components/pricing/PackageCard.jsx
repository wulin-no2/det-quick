
import React, { useState, useEffect,useRef } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const PackageCard = ({
    id,
    title,
    description,
    price,
    color,
    imagePathSelected,
    imagePathUnselected,
    isSelected,
    onSelect,
    onPurchase,
    isProcessing // 从父组件接收的处理状态

}) => {
    const imagePath = isSelected ? imagePathSelected : imagePathUnselected;
    const textColor = isSelected ? color : '#D9D9D9';

    const isButtonClicked = useRef(false); // 使用 useRef 跟踪按钮点击状态
    // const [isProcessing, setIsProcessing] = useState(false);


    const handleButtonClick = async (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        if (isButtonClicked.current || isProcessing) return; // 如果已点击或正在处理，直接返回
        isButtonClicked.current = true; // 设置为已点击

        if (!isSelected) {
            onSelect(); // 如果未选中，则先选中卡片
            isButtonClicked.current = false; // 重置点击状态

        } else {
            if (!isSelected) {
                onSelect();
                isButtonClicked.current = false; // 重置点击状态
              } else {
                onPurchase(id).finally(() => {
                  isButtonClicked.current = false; // 请求完成后重置点击状态
                });
              }
        }

    };

    return (
        <Card
            sx={{
                minWidth: 240,
                maxWidth: 240,
                margin: 2,
                boxShadow: 3,
                borderColor: isSelected ? color : '#D9D9D9',
                borderWidth: 2,
                borderRadius: '16px',
                cursor: 'pointer'
            }}
            onClick={onSelect}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '20px' }}>
                    <img src={imagePath} alt="VIP Icon" style={{ width: '60px', height: '60px' }} />
                </Box>
                <Typography variant="h3" component="h3" gutterBottom sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: textColor,
                    marginTop: '8px'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <Typography variant="h4" component="div" sx={{ mt: 2, color: textColor }}>
                    ${price}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Button variant="contained"
                    disabled={isProcessing}
                    sx={{
                        textTransform: 'none',
                        fontSize: '18px',
                        borderRadius: '24px',
                        backgroundColor: isSelected ? color : '#D9D9D9',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: isSelected ? color : '#D9D9D9',
                            opacity: isProcessing ? 0.7 : 1
                        }
                    }}
                    onClick={handleButtonClick}
                >
                    Purchase
                </Button>
            </Box>
        </Card>
    );
};

export default PackageCard;
