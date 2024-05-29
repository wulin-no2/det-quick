import Box from '@mui/material/Box';

import QuestionTypeContent from './QuestionTypeContent';
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


import TabPanel from "./TabPanel";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
{/* <Route path="/complete-the-passage" element={<CompleteThePassageCard />} />
<Route path="/complete-the-sentence" element={<CompleteTheSentencesCard />} />
<Route path="/fill-in-the-blanks" element={<FillInTheBlanksCard />} />
<Route path="/highlight-the-answer" element={<HighlightTheAnswerCard />} />
<Route path="/identify-the-idea" element={<IdentifyTheIdeaCard />} />
<Route path="/read-and-select" element={<ReadAndSelectCard />} />
<Route path="/title-the-passage" element={<TitleThePassageCard />} /> */}

const types = [
    { id: 0, title: "Read And Select" },
    { id: 1, title: "Fill In The Blanks" },
    { id: 2, title: "Complete The Passage" },
    { id: 3, title: "Complete The Sentences" },
  ];
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  
const SuperQuestionTypeContent = () => {
    const [value, setValue] = useState(0);
    const { t } = useTranslation();
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box>
    <Box sx={{ borderColor: "divider", backgroundColor:'#ffffff',p:1}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {types.map((type) => (
          <Tab
            key={type.id}
            label={t(type.title)}
            {...a11yProps(type.id)}
            sx={{
              fontSize: "18px",
              textTransform: "none", // Ensure the text remains in its original case
              "&:focus": {
                outline: "none", // Remove the default focus outline
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
    {types.map((type) => (
      <TabPanel value={value} index={type.id} key={type.id}>
        <QuestionTypeContent type={type} />
      </TabPanel>
    ))}
  </Box>
  );
};

export default SuperQuestionTypeContent;