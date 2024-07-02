// handle page change, handle submoduleId change
// Manages the state of filters and currentPage and passes them to SubQuestionTypeContent

import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./question-list-components/TabPanel";
import { ShowLocalStorage } from "../../utils/ShowLocalStorage";


const SuperQuestionTypeContent = ({ 
  moduleId,
  submoduleId, setSubmoduleId,
  subTypesArr,
  currentPage,
  setCurrentPage,
  globalIndex,
  setGlobalIndex,

 }) => {
  const { t } = useTranslation();
  const currentTypes = subTypesArr[moduleId - 1];

  // get submoduleId value from localStorage first
    const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("subTabIndex");
    // const saved = localStorage.getItem("submoduleId") - 1;
    return saved ? JSON.parse(saved) : 0;
  });

  // handle filters change
  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : { isAsc: false, difficultyLevel: "null" };
  });

  // store filters 
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // when submoduleId changes, update value
  useEffect(() => {
    const index = currentTypes.findIndex((type) => type.submodule_id === submoduleId);
    if (index !== -1) {
      setValue(index);
      // store subTabIndex
      localStorage.setItem("subTabIndex", JSON.stringify(index));
    }
  }, [submoduleId, currentTypes]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // handle submoduleId changes by clicking tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // update submoduleId
    const selectedSubmoduleId = currentTypes[newValue].submodule_id;
    setSubmoduleId(selectedSubmoduleId);
    localStorage.setItem("submoduleId", JSON.stringify(selectedSubmoduleId));
    setCurrentPage(1);  // Reset to the first page when submoduleId change
    setGlobalIndex(1); // Reset globalIndex when submoduleId changes
  };
  return (
    <Box>
      <Box
      sx={{ borderColor: "divider", backgroundColor: "#ffffff", p: 1, minWidth: '1220px' }}      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {currentTypes.map((type) => (
            <Tab
              key={type.id}
              label={t(type.name)}
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
          <SubQuestionTypeContent 
          type={type} 
          submoduleId={submoduleId}
          setCurrentPage={handlePageChange}
          currentPage={currentPage}
          setFilters={setFilters}
          filters={filters}
          globalIndex={globalIndex}
          setGlobalIndex={setGlobalIndex}
            />
        </TabPanel>
      ))}
      <ShowLocalStorage componentName='SuperQuestionTypeContent'/>
    </Box>
  );
};
SuperQuestionTypeContent.propTypes = {
  subTypesArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  moduleId: PropTypes.number.isRequired,
  submoduleId: PropTypes.number.isRequired,
  setSubmoduleId: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  setGlobalIndex: PropTypes.func.isRequired,
};

export default SuperQuestionTypeContent;
