// handle moduleId change,
// and pass moduleId and submoduleId to SuperQuestionTypeContent

import  { useState,useEffect } from "react";
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

const QuestionListCard = ({ 
  moduleId,
  submoduleId,
  setModuleId,
  setSubmoduleId
}) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  // when moduleId changes, update value
  useEffect(() => {
    const index = types.findIndex((type) => type.module_id === moduleId);
    if (index !== -1) {
      setValue(index);
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
};

export default QuestionListCard;
