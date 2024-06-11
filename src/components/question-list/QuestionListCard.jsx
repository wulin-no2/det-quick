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

const QuestionListCard = ({ questionList, pages, count,
  currentPage,
  setCurrentPage, 
  filters,
  setFilters}) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Update the module_id in filters when a new tab is selected
    const selectedModuleId = types[newValue].module_id;
    setFilters({
      ...filters,
      submoduleId: selectedModuleId === 1 ? 1 : subTypesArr[selectedModuleId - 1][0].submodule_id
    });
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
            filters={filters}
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
  filters:PropTypes.object.isRequired,
  setFilters:PropTypes.func.isRequired,
};

export default QuestionListCard;
