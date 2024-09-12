

// // import React from 'react';
// // import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// // import DoneIcon from '@mui/icons-material/Done';
// // import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// // // 添加 props 参数以接收外部数据
// // const FeatureList = ({ features, textColor, iconColor }) => {
// //   return (
// //     <Box sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         width: '100%',
// //       }}>
// //       <List sx={{ width: 'auto' }}>
// //         {features.map((feature, index) => (
// //           <ListItem key={index} sx={{ alignItems: 'center' }}>
// //             <ListItemIcon sx={{ minWidth: 'auto', marginRight: 2 }}>
// //               <CheckCircleOutlineIcon color={iconColor || 'success'} /> {/* 使用传入的 iconColor，如果未传入则默认为 'success' */}
// //             </ListItemIcon>
// //             <ListItemText primary={feature} sx={{ color: textColor || '#000000' }} /> {/* 使用传入的 textColor，如果未传入则默认为 '#1a237e' */}
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Box>
// //   );
// // };

// // export default FeatureList;

// import React from 'react';
// import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const FeatureList = ({ features, textColor, iconColor, sx }) => {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', ...sx }}>
//       <List sx={{ width: 'auto' }}>
//         {features.map((feature, index) => (
//           <ListItem key={index} sx={{ alignItems: 'center' }}>
//             <ListItemIcon sx={{ minWidth: 'auto', marginRight: 2, }}>
//               <CheckCircleOutlineIcon color={iconColor || 'success'} />
//             </ListItemIcon>
//             <ListItemText primary={feature} sx={{ color: textColor || '#000000' }} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default FeatureList;

import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FeatureList = ({ features, textColor, iconColor, sx }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', ...sx }}>
      <List sx={{ width: 'auto', padding: 0 }}>  
        {features.map((feature, index) => (
          // <ListItem key={index} sx={{ alignItems: 'center', padding: 0 }}>  
          <ListItem key={index} sx={{ 
            alignItems: 'center', 
            padding: 0,
            // paddingTop: '10px',  // 增加顶部内边距
            paddingBottom: '10px',  // 增加底部内边距
            marginLeft: 0,  // 确保左边距为0
            marginRight: 2  // 调整右边距
          }}>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '10px', marginLeft: 0 }}>  
            <CheckCircleOutlineIcon sx={{ color: iconColor || 'success' }} />
            </ListItemIcon>
            <ListItemText primary={feature} sx={{ color: textColor || '#000000' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeatureList;

