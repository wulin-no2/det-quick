// handle moduleId change,
// and pass moduleId and submoduleId to SuperQuestionTypeContent
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../common/tab-filter-components/TabPanel";
import SuperQuestionTypeContent from "./QuestionSubmoduleTab";
// import { ShowLocalStorage } from "../../utils/ShowLocalStorage";
import {
  types,
  subTypesArr,
} from "../../utils/practice/questionListConstantAndFunc";
import useQuestionStateContext from "../../context/useQuestionStateContext";

const getInitialValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const QuestionListCard = () => {
  const {
    moduleId,
    setModuleId,
    setSubmoduleId,
    setGlobalIndex,
    setCurrentPage,
  } = useQuestionStateContext();
  const { t } = useTranslation();

  const [value, setValue] = useState(() => getInitialValue("tabIndex", 0));

  // when moduleId changes, update value
  useEffect(() => {
    const index = types.findIndex((type) => type.module_id === moduleId);
    if (index !== -1) {
      setValue(index);
      localStorage.setItem("tabIndex", JSON.stringify(index));
      localStorage.setItem("moduleId", JSON.stringify(moduleId));
    }
  }, [moduleId]);

  const handleChange = (event, newValue) => {
    const selectedModuleId = types[newValue].module_id;
    const defaultSubmoduleId =
      subTypesArr[selectedModuleId - 1][0].submodule_id;
    setValue(newValue);
    setModuleId(selectedModuleId);
    setSubmoduleId(defaultSubmoduleId);
    setCurrentPage(1);
    setGlobalIndex(1);

    localStorage.setItem("tabIndex", JSON.stringify(newValue));
    localStorage.setItem("moduleId", JSON.stringify(selectedModuleId));
    localStorage.setItem("submoduleId", JSON.stringify(defaultSubmoduleId));
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
              textTransform: "none",
              "&:focus": { outline: "none" },
            }}
          />
        ))}
      </Tabs>
      {types.map((type, index) => (
        <TabPanel value={value} index={index} key={type.module_id}>
          <SuperQuestionTypeContent />
        </TabPanel>
      ))}
      {/* <ShowLocalStorage componentName="QuestionListCard" /> */}
    </Box>
  );
};

export default QuestionListCard;
