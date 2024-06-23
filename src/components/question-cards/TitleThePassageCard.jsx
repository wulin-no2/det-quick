import { useState } from "react";
import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import CardHeader from "../common/question-card-components/CardHeader";


const question = {
  id: 4233,
  text: 'The Amazon rainforest is often referred to as the "lungs of the Earth" because it produces about 20% of the world\'s oxygen. This vast tropical forest is home to an incredible diversity of plant and animal species, many of which are found nowhere else on the planet. This deforestation not only threatens the biodiversity of the region but also contributes to global climate change by releasing large amounts of carbon dioxide into the atmosphere.',
  difficulty: 3,
  time_limit: 120,
  type: "Identify the idea",
  options: [
    "Amazon and depend on its resources",
    "Agriculture",
    "Scientists and new species",
    "The Amazon River",
  ],
};

const TitleThePassageCard = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioStyle = {
    border: "1px solid",
    borderColor: theme.palette.grey[300],
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center", // Align the radio button and text to the center
    gap: "10px",
    color: theme.palette.grey[700],
  };

  const radioControlStyle = {
    "&.MuiRadio-root": {
      color: theme.palette.grey[300],
    },
    "&.MuiRadio-root.Mui-checked": {
      color: "rgb(240,174,63)",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "1.2rem",
    },
  };

  return (
    <Box
      sx={{
        width: "1100px",
        margin: "auto",
        textAlign: "left",
        border: "1px solid lightgray",
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      {/* CardHeader */}
      <CardHeader
        word={question}
        onNext={0}
        onLast={0}
        currentIndex={1}
        totalWords={3}
      />

      {/* Card content */}
      <Grid container spacing={4} sx={{ padding: 4 }}>
        {/* Passage */}
        <Grid item xs={7}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#f5f5f5",
              border: "1px solid lightgrey",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ position: "relative", paddingInline: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.grey[700] }}
              >
                PASSAGE
              </Typography>
              <Divider
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "56px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 2,
                  marginTop: 4,
                  color: theme.palette.grey[700],
                }}
              >
                {question.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Options */}
        <Grid item xs={5}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Select the best title for the passage.
          </Typography>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio sx={radioControlStyle} />}
                label={option}
                sx={radioStyle}
                style={{ color: theme.palette.grey[700] }}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleThePassageCard;
