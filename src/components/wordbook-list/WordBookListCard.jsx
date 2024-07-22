import PropTypes from "prop-types";
import { Box, } from "@mui/material";
import { useState} from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../common/TabPanel";
import { questionTypes } from "../../utils/practice/questionListConstantAndFunc";
import WordBookFilterAndList from "./WordBookFilterAndList";


const WordBookListCard = () => {
    const { t } = useTranslation();
    const [currentType, setCurrentType] = useState(questionTypes[0]);

    // Handle currentType changes by clicking tab
    const handleChange = (event, newValue) => {
      setCurrentType(questionTypes[newValue]);
    };
  
    return (
      <Box>
        <Box
          sx={{
            borderColor: "divider",
            backgroundColor: "#ffffff",
            p: 1,
            minWidth: "1220px",
          }}
        >
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
        {questionTypes.map((type) => (
          <TabPanel value={currentType.id} index={type.id} key={type.id}>
            <WordBookFilterAndList questionType={type} />
          </TabPanel>
        ))}
      </Box>
    );
  };

  WordBookListCard.propTypes = {
    currentType: PropTypes.object.isRequired,
  };
export default WordBookListCard;