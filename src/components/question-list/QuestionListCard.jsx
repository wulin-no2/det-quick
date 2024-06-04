import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./question-card-components/TabPanel";
import SuperQuestionTypeContent from "./SuperQuestionTypeContent";

const types = [
  { module_id: 1, name: "Vocabulary" },
  { module_id: 2, name: "Speaking" },
  { module_id: 3, name: "Listening" },
  { module_id: 4, name: "Reading" },
  { module_id: 5, name: "Writing" },
  { module_id: 6, name: "Sample" },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuestionListCard = ({ questionList, pages, count }) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

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
          mb: 1,
          // border:'1px solid blue',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {types.map((type) => (
            <Tab
              key={type.module_id}
              label={t(type.name)}
              {...a11yProps(type.module_id)}
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
        <TabPanel
          value={value}
          index={type.module_id - 1}
          key={type.module_id - 1}
        >
          <SuperQuestionTypeContent
            type={type}
            indexSubType={type.module_id - 1}
            questionList={questionList}
            pages={pages} 
            count={count}
          />
        </TabPanel>
      ))}
      {/* </Box> */}
    </Box>
  );
};
QuestionListCard.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
    pages: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default QuestionListCard;
