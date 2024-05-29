import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./TabPanel";
import SuperQuestionTypeContent from "./SuperQuestionTypeContent";

const types = [
  { id: 0, title: "All" },
  { id: 1, title: "Vocabulary" },
  { id: 2, title: "Speaking" },
  { id: 3, title: "Listening" },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuestionListCard = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderColor: "divider" ,mb:1}}>
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
      {/* <Box sx={{ borderColor: "red", border: "1px solid", p: 0 }}> */}
      {types.map((type) => (
        <TabPanel value={value} index={type.id} key={type.id}>
          <SuperQuestionTypeContent type={type} />
        </TabPanel>
      ))}
      {/* </Box> */}
    </Box>
  );
};

export default QuestionListCard;
