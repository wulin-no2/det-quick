import { Box, } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import TabPanel from "../common/TabPanel";
// import { wordbookButtonGroups } from "../../utils/practice/questionListConstantAndFunc";

const WordBookListCard = () => {
    // const questionTypes = wordbookButtonGroups;
    // const { t } = useTranslation();
    // const [currentType, setCurrentType] = useState();


  
    // Initialize state from localStorage or defaults
    // const [value, setValue] = useState(() => getInitialValue("subTabIndex", 0));
  
    // // Update value and store in localStorage when submoduleId changes
    // useEffect(() => {
    //   const index = currentTypes.findIndex(
    //     (type) => type.submodule_id === submoduleId
    //   );
    //   if (index !== -1) {
    //     setValue(index);
    //     localStorage.setItem("subTabIndex", JSON.stringify(index));
    //   }
    // }, [submoduleId, currentTypes]);
  
    // // Handle submoduleId changes by clicking tab
    // const handleChange = (event, newValue) => {
    //   const selectedSubmoduleId = currentTypes[newValue].submodule_id;
    //   setValue(newValue);
    //   setSubmoduleId(selectedSubmoduleId);
    //   setCurrentPage(1); // Reset to the first page when submoduleId changes
    //   setGlobalIndex(1); // Reset globalIndex when submoduleId changes
  
    //   localStorage.setItem("subTabIndex", JSON.stringify(newValue));
    //   localStorage.setItem("submoduleId", JSON.stringify(selectedSubmoduleId));
    // };
  
    return (
      <Box>
        {/* <Box
          sx={{
            borderColor: "divider",
            backgroundColor: "#ffffff",
            p: 1,
            minWidth: "1220px",
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
            <WordBookFilterList questionType={questionType} />
          </TabPanel>
        ))} */}
      </Box>
    );
  };
export default WordBookListCard;