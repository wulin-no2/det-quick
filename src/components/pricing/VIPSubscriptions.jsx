
import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import PackageCard from './PackageCard';
import { getSubscriptionPriceList, startStripeCheckout } from '../../api/order/product-order';
import globalSettingsConfig from '../../globalSettingsConfig';
import { pubSub } from '../../utils/pubSub';

const VIPSubscriptions = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [packages, setPackages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false); // 追踪请求的状态  

    const isPurchasing = useRef(false); // 使用 useRef 跟踪购买状态



    useEffect(() => {

        const fecthData = async () => {
            try {
                pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

                const response = await getSubscriptionPriceList();
                if (response.success && response.data) {
                    // console.log("=====0909090==");
                    // console.log(response.data);

                    // 定义颜色和图片数组，按照顺序与套餐对应
                    const colors = ["#357AF5", "#72BCC7", "#E4943B"];
                    const imagePathsSelected = [
                        '/images/pricing/vip-crown.png',
                        '/images/pricing/vip-rocket.png',
                        '/images/pricing/vip-tag.png'
                    ];
                    const imagePathsUnselected = [
                        '/images/pricing/vip-crown-unselected.png',
                        '/images/pricing/vip-rocket-unselected.png',
                        '/images/pricing/vip-tag-unselected.png'
                    ];

                    const formattedPackages = response.data.pricings.map((pricing, index) => ({
                        id: pricing.pricingId,
                        title: `${pricing.chargeValue}-Day VIP`,
                        description: `Includes ${pricing.includedAiCorrections} AI-powered Correction Services`,
                        price: pricing.price,
                        color: colors[index] || '#D9D9D9', // 防止索引超出范围
                        imagePathSelected: imagePathsSelected[index] || '/images/default-selected.png',
                        imagePathUnselected: imagePathsUnselected[index] || '/images/default-unselected.png',
                    }));

                    setPackages(formattedPackages);
                    // 默认选中第一个套餐
                    setSelectedId(formattedPackages[0]?.id || null);

                } else {
                    pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
                }
            } catch (error) {
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
        fecthData();

    }, []); // 

    const handlePurchase = async (priceId) => {
        if (isPurchasing.current) return; // 如果正在处理，直接返回
        isPurchasing.current = true; // 设置为正在处理

        try {
            setIsProcessing(true); // 更新状态以更新 UI

            pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);
            const response = await startStripeCheckout(priceId);
            if (response.success) {
                // 跳转到 Stripe 支付页面
                console.log("response.data.url=999==", response.data.url);
                
                window.location.href = response.data.url;


            } else {
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);

            }
        } catch (error) {
            if (error.response) {
                // 访问具体的错误信息和数据
                console.log("Error response data:", error.response.data);
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.response.data.message);
            } else {
                // 处理无响应体的其他错误（网络问题等）
                pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.message || "An unknown error occurred");
            }

        } finally {
            isPurchasing.current = false; // 重置购买状态
            setIsProcessing(false); // 更新状态以更新 UI

            pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);
        }

       
    };

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          

            {packages.map((packageItem) => (
               <PackageCard
               key={packageItem.id}
               {...packageItem}
               isSelected={selectedId === packageItem.id}
               onSelect={() => setSelectedId(packageItem.id)}
               onPurchase={() => handlePurchase(packageItem.id)}
               isProcessing={isProcessing} // 将 isProcessing 状态传递给子组件
             />
            ))}

        </Box>

    );
};

export default VIPSubscriptions;
