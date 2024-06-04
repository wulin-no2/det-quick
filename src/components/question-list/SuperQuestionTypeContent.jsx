import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./question-card-components/TabPanel";

const subTypesArr = [
  [{ id: 0, submodule_id: 1, name: "Read & Select" }],
  [
    { id: 0, submodule_id: 2, name: "Read Aloud" },
    { id: 1, submodule_id: 3, name: "Read, Then Speak" },
    { id: 2, submodule_id: 4, name: "Listen, Then Speak" },
    { id: 3, submodule_id: 5, name: "Speak About The Photo" },
  ],
  [
    { id: 0, submodule_id: 6, name: "Listen & Type" },
    { id: 1, submodule_id: 7, name: "Interactive Listening" },
  ],
  [
    { id: 0, submodule_id: 8, name: "Read & Complete" },
    { id: 1, submodule_id: 9, name: "Interactive Reading" },
    { id: 2, submodule_id: 10, name: "Fill In The Blanks" },
  ],
  [
    { id: 0, submodule_id: 11, name: "Write About The Photo" },
    { id: 1, submodule_id: 12, name: "Interactive Writing" },
  ],
  [
    { id: 0, submodule_id: 13, name: "Speaking Sample" },
    { id: 1, submodule_id: 14, name: "Writing Sample" },
  ],
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SuperQuestionTypeContent = ({ indexSubType, questionList, pages, count }) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const currentTypes = subTypesArr[indexSubType];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={
        {
          // border:'1px solid blue',
        }
      }
    >
      <Box
        sx={{
          borderColor: "divider",
          backgroundColor: "#ffffff",
          // border:'1px solid blue',
          p: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {currentTypes.map((type) => (
            <Tab
              key={type.id}
              label={t(type.name)}
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
          <SubQuestionTypeContent type={type} questionList={questionList} pages={pages} count={count}/>
        </TabPanel>
      ))}
    </Box>
  );
};
SuperQuestionTypeContent.propTypes = {
  indexSubType: PropTypes.number.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
    pages: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default SuperQuestionTypeContent;
