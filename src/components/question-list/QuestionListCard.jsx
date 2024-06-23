// handle moduleId change,
// and pass moduleId and submoduleId to SuperQuestionTypeContent

import  { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./question-list-components/TabPanel";
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
    { id: 1, submodule_id: 3, name: "Read Then Speak" },
    { id: 2, submodule_id: 4, name: "Listen Then Speak" },
    { id: 3, submodule_id: 5, name: "Speak About the Photo" },
  ],
  [
    { id: 0, submodule_id: 6, name: "Listen & Type" },
    { id: 1, submodule_id: 7, name: "Interactive Listening" },
  ],
  [
    { id: 0, submodule_id: 8, name: "Read & Complete" },
    { id: 1, submodule_id: 9, name: "Interactive Reading" },
    { id: 2, submodule_id: 10, name: "Fill In the Blanks" },
  ],
  [
    { id: 0, submodule_id: 11, name: "Write About the Photo" },
    { id: 1, submodule_id: 12, name: "Interactive Writing" },
  ],
  [
    { id: 0, submodule_id: 13, name: "Speaking Sample" },
    { id: 1, submodule_id: 14, name: "Writing Sample" },
  ],
];

// Convert subTypesArr to a flat object map
const submoduleMap = subTypesArr.flat().reduce((acc, submodule) => {
  acc[submodule.submodule_id] = submodule.name;
  return acc;
}, {});

// get Name By SubmoduleId
const getNameBySubmoduleId = function(submoduleId) {
  return submoduleMap[submoduleId] || "Unknown Submodule"; // Default case if submoduleId is not found
};

const QuestionListCard = ({ 
  moduleId,
  submoduleId,
  setModuleId,
  setSubmoduleId,
  globalIndex,
  setGlobalIndex,
}) => {
  // get moduleId value from localStorage first
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("tabIndex");
    return saved ? JSON.parse(saved) : 0;
  });

  const { t } = useTranslation();

   // handle currentPage
   const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPage");
    return saved ? JSON.parse(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  // when moduleId changes, update value
  useEffect(() => {
    const index = types.findIndex((type) => type.module_id === moduleId);
    if (index !== -1) {
      setValue(index);
      // store tabIndex
      localStorage.setItem("tabIndex", JSON.stringify(index));
    }
  }, [moduleId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Update the module_id in filters when a new tab is selected
    const selectedModuleId = types[newValue].module_id;
    setModuleId(selectedModuleId);
    // Update the moduleId based on default submoduleId
    const defaultSubmoduleId = subTypesArr[selectedModuleId - 1][0].submodule_id;
    setSubmoduleId(defaultSubmoduleId);
    setCurrentPage(1);  // Reset to the first page when moduleId change
    setGlobalIndex(1); // Reset globalIndex when moduleId changes
  };

  return (
    <Box sx={{ borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {types.map((type) => (
          <Tab key={type.module_id} label={t(type.name)} 
          sx={{fontSize:'18px',
          textTransform: "none", // Ensure the text remains in its original case
          "&:focus": {
            outline: "none", // Remove the default focus outline
          },
            
          }}/>
        ))}
      </Tabs>
      {types.map((type, index) => (
        <TabPanel value={value} index={index} key={type.module_id}>
          <SuperQuestionTypeContent
            // indexSubType={index}
            moduleId={moduleId} //  moduleId
            submoduleId={submoduleId} //  submoduleId
            setSubmoduleId={setSubmoduleId} //  setSubmoduleId
            subTypesArr={subTypesArr}
            getNameBySubmoduleId={getNameBySubmoduleId} 
            currentPage={currentPage} // pass currentPage
            setCurrentPage={setCurrentPage} // pass setCurrentPage 
            globalIndex={globalIndex}
            setGlobalIndex={setGlobalIndex}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

QuestionListCard.propTypes = {
  moduleId: PropTypes.number.isRequired,
  setModuleId: PropTypes.func.isRequired,
  submoduleId: PropTypes.number.isRequired,
  setSubmoduleId: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  setGlobalIndex: PropTypes.func.isRequired,
};

export default QuestionListCard;
