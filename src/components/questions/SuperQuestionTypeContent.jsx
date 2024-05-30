import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./qustion-card-components/TabPanel";

const subTypesArr = [
        [
        { id: 0, title: "Read And Select" },
        { id: 1, title: "Fill In The Blanks" },
        ],
        [
            { id: 0, title: "Complete The Passage" },
            { id: 1, title: "Complete The Sentences" },
            ],
        [
            { id: 0, title: "Title The Passage" },
            { id: 1, title: "Identify The Idea" },
            ],
        [
            { id: 0, title: "HighlightTheAnswer" },
            ],
            [
                { id: 0, title: "Fill In The Blanks" },
                ],
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SuperQuestionTypeContent = ({indexSubType, questionList}) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const currentTypes = subTypesArr[indexSubType];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderColor: "divider", backgroundColor: "#ffffff", p: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {currentTypes.map((type) => (
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
      {currentTypes.map((type) => (
        <TabPanel value={value} index={type.id} key={type.id}>
          <SubQuestionTypeContent type={type} questionList={questionList}/>
        </TabPanel>
      ))}
    </Box>
  );
};
SuperQuestionTypeContent.propTypes = {
    indexSubType: PropTypes.number.isRequired,
    questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};


export default SuperQuestionTypeContent;
