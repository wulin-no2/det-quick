import { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import styled from "@mui/system/styled";
import { useTheme } from "@mui/material/styles";

import CardHeader from "../../common/question-card-components/CardHeader";

const HighlightedText = styled("span")({
  "::selection": {
    backgroundColor: "rgb(249,236,181)",
  },
});

const question = {
  id: 4233,
  text: "The Amazon rainforest, also known as the Amazon Jungle, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometers, of which 5,500,000 square kilometers are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, and Colombia with 10%. Minor amounts are located in Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana.",
  difficulty: 3,
  time_limit: 120,
  type: "Highlight the answer",
};

const HighlightTheAnswerCard = () => {
  const theme = useTheme();
  const [highlightedText, setHighlightedText] = useState("");

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      setHighlightedText(selectedText);
    }
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
              border: "1px solid lightgrey",
              boxShadow: "none",
            }}
            onMouseUp={handleMouseUp}
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
                <HighlightedText>{question.text}</HighlightedText>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Options */}
        <Grid item xs={5}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Click and drag to highlight the answer to the question below.
          </Typography>
          <Typography>Where is the Amazon rainforest?</Typography>
          <Box
            sx={{
              width: "100%",
              marginTop: 2,
              backgroundColor: "#f5f5f5",
              border: "1px solid lightgray",
              borderRadius: "8px",
              padding: 2,
              overflow: "auto",
              minHeight: "50px",
            }}
          >
            <Typography variant="body1" sx={{ color: theme.palette.grey[700] }}>
              {highlightedText}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HighlightTheAnswerCard;
