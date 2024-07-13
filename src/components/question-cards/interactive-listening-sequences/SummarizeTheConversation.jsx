import PropTypes from "prop-types";
import { Box, Typography, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnswerButton from "../common/AnswerButton";
import { useRef, useEffect } from "react";
import { grey } from "@mui/material/colors";

const SummarizeTheConversation = ({
  questionDetail,
}) => {

  // const [userAnswer, setUserAnswer] = useState("");
  const { t } = useTranslation();
  const textFieldRef = useRef(null);

  useEffect(() => {
    console.log("question detail is", questionDetail);
  }, [questionDetail]);

  if (!questionDetail) {
    return <div></div>;
  }

  const handleSubmit = () => {
    // if (textFieldRef.current) {
    //   setUserAnswer(textFieldRef.current.value);
    // }
  };

  return (
    <Box>
      {/* question */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: 4,
          my: 2
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", opacity: 0.92, mb: 2 }}
        >
          {t("Summarize the conversation you just had in 75 seconds.")}
        </Typography>
      </Box>
      {/* question text */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', px: 4, pt: 2, pb: 4 }}> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', px: 2, }}>
          <TextField
            multiline
            rows={10}
            placeholder={t("Your response")}
            sx={{ width: "500px" }}
            inputRef={textFieldRef}
          />
          <Typography sx={{ mt: 1, color: grey[700], fontSize: '14px' }}>
            {t("Recommended word count: 40+.")}
          </Typography>
        </Box>
      {/* </Box> */}
      {/* answer button */}
      <Box
        gutterBottom
        sx={{
          display: "flex",
          pr: 18,
          pb: 3,
          justifyContent: "end",
        }}
      >
        <AnswerButton text="Submit" onClick={handleSubmit} sx={{ minWidth: '280px' }} />
      </Box>
    </Box>
  );
};

SummarizeTheConversation.propTypes = {
  questionDetail: PropTypes.object,
};

export default SummarizeTheConversation;