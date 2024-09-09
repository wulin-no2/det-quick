// import React from 'react';
// import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import DoneIcon from '@mui/icons-material/Done';

// const FeatureList = () => {
//   const features = [
//     "Unlimited for Practice Sessions",
//     "Access 18000+ Practice Questions",
//     "Browse High-scoring Sample Answers",
//     "In-depth Question Analysis",
//     "High-Frequency Exam Word Book",
//     "Tailored Study Plan with Smart Question Selection",
//     "AI-Powered Speaking Evaluations"
//   ];

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'red' }}>
//       <List>
//         {features.map((feature, index) => (
//           <ListItem key={index} sx={{ alignItems: 'center' }}> 
//             <ListItemIcon sx={{ minWidth: 'auto', marginRight: 2 }}> 
//               <DoneIcon color="success" /> 
//             </ListItemIcon>
//             <ListItemText primary={feature} sx={{ color: '#1a237e' }}/>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default FeatureList;

import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const FeatureList = () => {
  const features = [
    "Unlimited for Practice Sessions",
    "Access 18000+ Practice Questions",
    "Browse High-scoring Sample Answers",
    "In-depth Question Analysis",
    "High-Frequency Exam Word Book",
    "Tailored Study Plan with Smart Question Selection",
    "AI-Powered Speaking Evaluations"
  ];

  return (
    <Box sx={{
        display: 'flex',      // 设置为flex布局
        justifyContent: 'center', // 主轴对齐方式，使其子元素水平居中
        width: '100%',        // 宽度100%
        // bgcolor: 'background.paper'
      }}>
      <List sx={{ width: 'auto' }}> // 设置List的宽度为auto，适应内容宽度
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ alignItems: 'center' }}>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: 2 }}>
              <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={feature} sx={{ color: '#1a237e' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeatureList;
