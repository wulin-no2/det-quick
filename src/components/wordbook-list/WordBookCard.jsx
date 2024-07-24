import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../common/tab-filter-components/TabPanel";
import { questionTypes } from "../../utils/practice/questionListConstantAndFunc";
import WordBookFilter from "./WordBookFilter";

const WordBookListCard = () => {
  const { t } = useTranslation();
  const [currentType, setCurrentType] = useState(questionTypes[0]);
  useEffect(() => {
    console.log("currentType is ",currentType)},[currentType]
  )
  // Handle currentType changes by clicking tab
  const handleChange = (event, newValue) => {
    setCurrentType(questionTypes[newValue]);
    console.log("newValue in currentType is", newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          borderColor: "divider",
          backgroundColor: "#ffffff",
          p: 1,
          width: "1220px",
        }}
      >
        <Box>
          <Tabs
            value={currentType.id - 1}
            onChange={handleChange}
            aria-label="change question type"
          >
            {questionTypes.map((type) => (
              <Tab
                key={type.id}
                label={t(type.submoduleName)}
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
      </Box>
      {questionTypes.map((type) => (
        <Box key={type.id} sx={{width:'100%'}}>
          <TabPanel value={currentType.id} index={type.id}>
            <WordBookFilter questionTypeObject={type} />
          </TabPanel>
        </Box>
      ))}
    </Box>
  );
};

export default WordBookListCard;
