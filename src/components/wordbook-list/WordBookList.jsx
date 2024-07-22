// import * as React from "react";
import PropTypes from "prop-types";

import { Box, Typography, } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import DifficultyButton from "../../common/question-card-components/CardHeaderComponents/DifficultyButton";
// import { getNameBySubmoduleId } from "../../../utils/practice/questionListConstantAndFunc";
// import useQuestionStateContext from "../../../context/useQuestionStateContext";

const WordBookList = ({words,filters,count})=>{
//   const { t } = useTranslation();
//   const itemsPerPage = 10;

  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: "100vw",
        width: "100%",
        // border: "1px solid blue",
      }}
    >
        <Typography>{words}</Typography>
        <Typography>{filters}</Typography>
        <Typography>{count}</Typography>
   
    </Box>
  );
}

WordBookList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
    .isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};
export default WordBookList;