import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./qustion-card-components/TabPanel";
import SuperQuestionTypeContent from "./SuperQuestionTypeContent";

const types = [
  { id: 0, title: "All" },
  { id: 1, title: "Vocabulary" },
  { id: 2, title: "Speaking" },
  { id: 3, title: "Listening" },
  { id: 4, title: "Writing" },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuestionListCard = ({questionList}) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderColor: "divider", mb: 1 }}>
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
          <SuperQuestionTypeContent type={type} indexSubType={type.id} questionList={questionList}/>
        </TabPanel>
      ))}
      {/* </Box> */}
    </Box>
  );
};
QuestionListCard.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
};

export default QuestionListCard;
