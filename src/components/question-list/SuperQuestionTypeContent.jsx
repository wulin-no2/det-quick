// handle page change, handle submoduleId change
// Manages the state of filters and currentPage and passes them to SubQuestionTypeContent
import Box from "@mui/material/Box";
import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./question-list-components/TabPanel";
import { ShowLocalStorage } from "../../utils/ShowLocalStorage";
import useQuestionStateContext from "../../context/useQuestionStateContext";
import { subTypesArr } from "../../utils/practice/questionListConstantAndFunc";

const getInitialValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const SuperQuestionTypeContent = () => {
  const { t } = useTranslation();
  const {
    moduleId, 
    submoduleId, setSubmoduleId,
    currentPage, setCurrentPage,
    globalIndex, setGlobalIndex,
  } = useQuestionStateContext();
  const currentTypes = subTypesArr[moduleId - 1];

  // Initialize state from localStorage or defaults
  const [value, setValue] = useState(() => getInitialValue("subTabIndex", 0));
  const [filters, setFilters] = useState(() => getInitialValue("filters", { isAsc: false, difficultyLevel: "null" }));

  // Store filters in localStorage when they change
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // Update value and store in localStorage when submoduleId changes
  useEffect(() => {
    const index = currentTypes.findIndex((type) => type.submodule_id === submoduleId);
    if (index !== -1) {
      setValue(index);
      localStorage.setItem("subTabIndex", JSON.stringify(index));
    }
  }, [submoduleId, currentTypes]);

  // Handle submoduleId changes by clicking tab
  const handleChange = (event, newValue) => {
    const selectedSubmoduleId = currentTypes[newValue].submodule_id;

    setValue(newValue);
    setSubmoduleId(selectedSubmoduleId);
    setCurrentPage(1); // Reset to the first page when submoduleId changes
    setGlobalIndex(1); // Reset globalIndex when submoduleId changes

    localStorage.setItem("subTabIndex", JSON.stringify(newValue));
    localStorage.setItem("submoduleId", JSON.stringify(selectedSubmoduleId));
  };

  return (
    <Box>
      <Box
        sx={{
          borderColor: "divider",
          backgroundColor: "#ffffff",
          p: 1,
          minWidth: '1220px'
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {currentTypes.map((type) => (
            <Tab
              key={type.id}
              label={t(type.name)}
              sx={{
                fontSize: "18px",
                textTransform: "none",
                "&:focus": {
                  outline: "none",
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setFilters={setFilters}
            filters={filters}
            globalIndex={globalIndex}
            setGlobalIndex={setGlobalIndex}
          />
        </TabPanel>
      ))}
      <ShowLocalStorage componentName="SuperQuestionTypeContent" />
    </Box>
  );
};

export default SuperQuestionTypeContent;

