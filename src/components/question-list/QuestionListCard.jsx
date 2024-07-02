// handle moduleId change,
// and pass moduleId and submoduleId to SuperQuestionTypeContent
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./question-list-components/TabPanel";
import SuperQuestionTypeContent from "./SuperQuestionTypeContent";
import { ShowLocalStorage } from "../../utils/ShowLocalStorage";
import {
  types,
  subTypesArr,
} from "../../utils/practice/questionListConstantAndFunc";

const QuestionListCard = ({
  moduleId,
  submoduleId,
  setModuleId,
  setSubmoduleId,
  globalIndex,
  setGlobalIndex,
  currentPage,
  setCurrentPage,
}) => {
  // get moduleId value from localStorage first
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("tabIndex");
    // const saved = localStorage.getItem("moduleId") - 1;
    return saved ? JSON.parse(saved) : 0;
  });

  const { t } = useTranslation();

  // when moduleId changes, update value
  useEffect(() => {
    const index = types.findIndex((type) => type.module_id === moduleId);
    if (index !== -1) {
      setValue(index);
      // store tabIndex
      localStorage.setItem("tabIndex", JSON.stringify(index));
      localStorage.setItem("moduleId", JSON.stringify(index + 1));
    }
  }, [moduleId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Update the module_id in filters when a new tab is selected
    const selectedModuleId = types[newValue].module_id;
    setModuleId(selectedModuleId);
    // Update the moduleId based on default submoduleId
    const defaultSubmoduleId =
      subTypesArr[selectedModuleId - 1][0].submodule_id;
    setSubmoduleId(defaultSubmoduleId);
    localStorage.setItem("submoduleId", JSON.stringify(defaultSubmoduleId));
    setCurrentPage(1); // Reset to the first page when moduleId change
    setGlobalIndex(1); // Reset globalIndex when moduleId changes
  };

  return (
    <Box sx={{ borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {types.map((type) => (
          <Tab
            key={type.module_id}
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
      {types.map((type, index) => (
        <TabPanel value={value} index={index} key={type.module_id}>
          <SuperQuestionTypeContent
            moduleId={moduleId} //  moduleId
            submoduleId={submoduleId} //  submoduleId
            setSubmoduleId={setSubmoduleId} //  setSubmoduleId
            subTypesArr={subTypesArr}
            currentPage={currentPage} // pass currentPage
            setCurrentPage={setCurrentPage} // pass setCurrentPage
            globalIndex={globalIndex}
            setGlobalIndex={setGlobalIndex}
          />
        </TabPanel>
      ))}
      <ShowLocalStorage componentName="QuestionListCard" />
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default QuestionListCard;
