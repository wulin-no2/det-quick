

// import React, { useState } from 'react';
// import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const PackageCard = ({ title, description, price, color, imagePath, isSelected, onSelect }) => {
//     // 根据是否选中设置文字和价格的颜色
//     const textColor = isSelected ? color : '#e0e0e0';  // 选中则显示设定的颜色，否则显示浅灰色

//     return (
//         <Card 
//             sx={{ 
//                 minWidth: 240,
//                 maxWidth: 240,
//                 margin: 2,
//                 boxShadow: 3,
//                 borderColor: isSelected ? color : '#e0e0e0',
//                 borderWidth: 2,
//                 borderRadius: '16px',
//                 cursor: 'pointer'
//             }}
//             onClick={onSelect}
//         >
//             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <Typography variant="h5" component="div" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: textColor }}>
//                     <img src={imagePath} alt="VIP Icon" style={{ verticalAlign: 'middle', width: '24px', height: '24px', marginRight: '8px' }} />{title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//                     <CheckCircleOutlineIcon sx={{ verticalAlign: 'middle', color: 'green' }} /> {description}
//                 </Typography>
//                 <Typography variant="h4" component="div" sx={{ mt: 2, color: textColor }}>
//                     ${price}
//                 </Typography>
//             </CardContent>
//             <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
//                 <Button variant="contained" sx={{ backgroundColor: isSelected ? color : '#e0e0e0', color: isSelected ? '#ffffff' : '#000000', '&:hover': { backgroundColor: isSelected ? color : '#e0e0e0' } }}>
//                     Purchase
//                 </Button>
//             </Box>
//         </Card>
//     );
// };

// const VIPSubscriptions = () => {
//     const [selectedId, setSelectedId] = useState(1); // 默认第一个被选中

//     const packages = [
//         {
//             id: 1,
//             title: "30天VIP",
//             description: "包含AI-powered Correction Service 60次",
//             price: 100,
//             color: "#72BCC7",
//             imagePath: '/images/pricing/vip-crown.png'
//         },
//         {
//             id: 2,
//             title: "15天VIP",
//             description: "包含AI-powered Correction Service 30次",
//             price: 60,
//             color: "#7637F1",
//             imagePath: '/images/pricing/vip-rocket.png'
//         },
//         {
//             id: 3,
//             title: "7天VIP",
//             description: "包含AI-powered Correction Service 10次",
//             price: 30,
//             color: "#E4943B",
//             imagePath: '/images/pricing/vip-tag.png'
//         }
//     ];

//     return (
//         <Container>
//             <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//                 {packages.map((packageItem) => (
//                     <PackageCard 
//                         key={packageItem.id}
//                         {...packageItem}
//                         isSelected={selectedId === packageItem.id}
//                         onSelect={() => setSelectedId(packageItem.id)}
//                     />
//                 ))}
//             </Box>
//         </Container>
//     );
// };

// export default VIPSubscriptions;


import React, { useState } from 'react';
import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PackageCard = ({
    title,
    description,
    price,
    color,
    imagePathSelected,
    imagePathUnselected,
    isSelected,
    onSelect
}) => {
    // 根据选中状态选择图片路径
    const imagePath = isSelected ? imagePathSelected : imagePathUnselected;
    const textColor = isSelected ? color : '#D9D9D9';  // 选中则显示设定的颜色，否则显示浅灰色
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
                {/* 标题容器 */}
                <Typography variant="h3" component="h3" gutterBottom sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: textColor,
                    marginTop: '8px'  // 根据需要调整
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {/* <CheckCircleOutlineIcon sx={{ verticalAlign: 'middle', color: 'green' }} />  */}
                    {description}
                </Typography>
                <Typography variant="h4" component="div" sx={{ mt: 2, color: textColor }}>
                    ${price}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Button variant="contained" sx={{ 
                    textTransform: 'none',
                    fontSize: '18px',
                    borderRadius: '24px',

                    backgroundColor: isSelected ? color : '#D9D9D9', 
                    color: isSelected ? '#ffffff' : '#ffffff', 
                    '&:hover': { backgroundColor: isSelected ? color : '#D9D9D9' } }}>
                    Purchase
                </Button>
            </Box>
        </Card>
    );
};

const VIPSubscriptions = () => {
    const [selectedId, setSelectedId] = useState(1); // 默认第一个被选中

    const packages = [
        {
            id: 1,
            title: "30-Day VIP",
            description: "Includes 60 AI-powered Correction Services",
            price: 30,
            color: "#357AF5",
            imagePathSelected: '/images/pricing/vip-crown.png',
            imagePathUnselected: '/images/pricing/vip-crown-unselected.png'
        },
        {
            id: 2,
            title: "15-Day VIP",
            description: "Includes 30 AI-powered Correction Services",
            price: 20,
            color: "#72BCC7",
            imagePathSelected: '/images/pricing/vip-rocket.png',
            imagePathUnselected: '/images/pricing/vip-rocket-unselected.png'
        },
        {
            id: 3,
            title: "7-Day VIP",
            description: "Includes 10 AI-powered Correction Services",
            price: 10,
            color: "#E4943B",
            imagePathSelected: '/images/pricing/vip-tag.png',
            imagePathUnselected: '/images/pricing/vip-tag-unselected.png'
        }
    ];

    return (
       
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {packages.map((packageItem) => (
                    <PackageCard
                        key={packageItem.id}
                        {...packageItem}
                        isSelected={selectedId === packageItem.id}
                        onSelect={() => setSelectedId(packageItem.id)}
                    />
                ))}
            </Box>
        
    );
};

export default VIPSubscriptions;
