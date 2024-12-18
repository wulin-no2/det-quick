
import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqList = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ padding: '0px',  }}>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            mt: 2,
            mb: 2,
            // my:'10px',
            borderRadius: '10px !important', // 使用!important确保样式生效
            boxShadow: 'none', // 去掉默认的box shadow
            '&:before': {
              display: 'none' // 去掉Accordion默认的下划线效果
            },
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', // 添加阴影效果

            // '&.Mui-expanded': {
            //    margin: 0 // 防止展开时margin导致的视觉差异
            // }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            IconButtonProps={{
              edge: "start"
            }}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            sx={{ 
              backgroundColor: expanded === `panel${index}` ? 'white' : '#FFFEFB', 
              flexDirection: 'row-reverse',
              paddingLeft: '12px', // 增加expandIcon和右边文字之间的空隙
              py: '3px', // 增加上下padding
              borderRadius: '10px !important', // 统一设置圆角
            }}
          >
            <Typography sx={{ 
              flexGrow: 1, 
              textAlign: 'left',
              fontSize:'20px',
              ml:'12px' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ 
            backgroundColor: 'white', 
            pl: '48px', 
            textAlign: 'left',
            borderRadius: '10px !important', // 统一设置圆角
          }}>
            <Typography sx={{
              fontSize:'18px',
              fontWeight:'lighter',
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const faqData = [
  {
    question: 'How does DET Quick’s plans and pricing work?',
    answer: 'We provide transparent plans and pricing for our users, with no hidden fees. Additionally, we offer add-on subscription packages so that you can choose services according to your needs.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! You can view 20 questions for free. Help you understand us before you buy more services.'
  },
  {
    question:'My payment was successful, but the upgrade failed.',
    answer:'Please contact us via chat or email: info@detquick.com. This is the simplest and fastest way to address your concerns.'
  },
  {
    question:'Where do I send my feedback?',
    answer:'You can send feedback through the support chat in the bottom right corner, or contact us via email at info@detquick.com. Alternatively, you can leave a message directly in the "Contact Us" section.'
  },
  {
    question:'What is your refund policy?',
    answer:'For information and instructions on how to get a refund, you can refer to the "Refund Policy" link at the bottom of the page as a matter of priority, or contact us at info@detquick.com .'
  }
];

export default FaqList;

