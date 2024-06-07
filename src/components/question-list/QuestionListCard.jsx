import  { useState } from "react";
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

const QuestionListCard = ({ questionList, pages, count,
  currentPage,
  setCurrentPage, 
  setFilters}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {types.map((type, index) => (
          <Tab key={type.module_id} label={t(type.name)} {...a11yProps(index)} />
        ))}
      </Tabs>
      {types.map((type, index) => (
        <TabPanel value={value} index={index} key={type.module_id}>
          <SuperQuestionTypeContent
            indexSubType={index}
            questionList={questionList}
            pages={pages}
            count={count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setFilters={setFilters}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

QuestionListCard.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  pages: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage:PropTypes.func.isRequired,
  setFilters:PropTypes.func.isRequired,
};

export default QuestionListCard;
