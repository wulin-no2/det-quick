import React from 'react';
import { Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ mt: 2, mb: 2 }} // 在这里添加上下间距
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              IconButtonProps={{
                edge: "start"
              }}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{ backgroundColor: expanded === `panel${index}` ? 'white' : 'lightgrey', flexDirection: 'row-reverse' }}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'white' }}>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

// 示例数据
const faqData = [
  {
    question: 'How does DETPractice’s plans and pricing work?',
    answer: 'We provide transparent plans and pricing for our users, with no hidden fees. Additionally, we offer add-on subscription packages so that you can choose services according to your needs.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial for new users to explore our features.'
  },
  // 可以添加更多的FAQ数据
];

export default FaqList;
