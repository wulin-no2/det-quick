import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./question-card-components/TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SuperQuestionTypeContent = ({ indexSubType, questionList, pages, count,
  currentPage,
  setCurrentPage,
  filters,
  setFilters,
  submoduleId, setSubmoduleId,subTypesArr 
 }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const currentTypes = subTypesArr[indexSubType];
  // when submoduleId changes, update value
  useEffect(() => {
    const index = currentTypes.findIndex((type) => type.submodule_id === submoduleId);
    if (index !== -1) {
      setValue(index);
    }
  }, [submoduleId, currentTypes]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log('super question type content updated current page :', page);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // update submoduleId
    const selectedSubmoduleId = currentTypes[newValue].submodule_id;
    setSubmoduleId(selectedSubmoduleId);
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
          <SubQuestionTypeContent type={type} questionList={questionList} pages={pages} count={count}
          setCurrentPage={handlePageChange}
          currentPage={currentPage}
          setFilters={setFilters}
          filters={filters}
            />
        </TabPanel>
      ))}
    </Box>
  );
};
SuperQuestionTypeContent.propTypes = {
  indexSubType: PropTypes.number.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  subTypesArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    pages: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    setCurrentPage:PropTypes.func.isRequired,
    filters:PropTypes.object.isRequired,
    setFilters:PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,

    moduleId: PropTypes.number.isRequired,
    submoduleId: PropTypes.number.isRequired,
    setSubmoduleId: PropTypes.func.isRequired,
};

export default SuperQuestionTypeContent;
