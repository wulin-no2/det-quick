// handle page change, handle submoduleId change
// Manages the state of filters and currentPage and passes them to SubQuestionTypeContent

import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import SubQuestionTypeContent from "./SubQuestionTypeContent";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./question-card-components/TabPanel";


const SuperQuestionTypeContent = ({ 
  moduleId,
  submoduleId, setSubmoduleId,
  subTypesArr,
  getNameBySubmoduleId
 }) => {
  // get submoduleId value from localStorage first
    const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("subTabIndex");
    return saved ? JSON.parse(saved) : 0;
  });
  // const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const currentTypes = subTypesArr[moduleId-1];

  // handle filters and currentPage change
  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : { isAsc: false, difficultyLevel: "null" };
  });

  // handle currentPage
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPage");
    return saved ? JSON.parse(saved) : 1;
  });

  // store filters and currentPage
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // update submoduleId
    const selectedSubmoduleId = currentTypes[newValue].submodule_id;
    setSubmoduleId(selectedSubmoduleId);
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
          getNameBySubmoduleId={getNameBySubmoduleId} 
            />
        </TabPanel>
      ))}
    </Box>
  );
};
SuperQuestionTypeContent.propTypes = {
  subTypesArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  moduleId: PropTypes.number.isRequired,
  submoduleId: PropTypes.number.isRequired,
  setSubmoduleId: PropTypes.func.isRequired,
  getNameBySubmoduleId:PropTypes.func.isRequired,
};

export default SuperQuestionTypeContent;
