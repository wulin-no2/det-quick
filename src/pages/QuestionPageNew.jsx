import { Box, Container } from "@mui/material";
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FetchQuestionDetail } from "../api/FetchQuestionDetail";

// Import card components
import CompleteThePassageCard from "../components/question-cards/CompleteThePassageCard";
import CompleteTheSentencesCard from "../components/question-cards/CompleteTheSentencesCard";
import FillInTheBlanksCard from "../components/question-cards/FillInTheBlanksCard";
import HighlightTheAnswerCard from "../components/question-cards/HighlightTheAnswerCard";
import IdentifyTheIdeaCard from "../components/question-cards/IdentifyTheIdeaCard";
import ReadAndSelectCard from "../components/question-cards/ReadAndSelectCard";
import TitleThePassageCard from "../components/question-cards/TitleThePassageCard";

function QuestionPageNew() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // used for send data to backend
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [currentSubmoduleId, setCurrentSubmoduleId] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const postData = {
          questionId: currentQuestionId,
          submoduleId: currentSubmoduleId,
        };
        console.log("postData in question page new ", postData);
        const result = await FetchQuestionDetail(postData, "http://54.159.192.226:8080/questions/detail");
        console.log("result in question page new ", result);
        setError("");
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentQuestionId, currentSubmoduleId]);

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Map submoduleId to corresponding component
  const questionCardComponents = {
    1: ReadAndSelectCard,
    2: FillInTheBlanksCard,
    3: HighlightTheAnswerCard,
    4: CompleteThePassageCard,
    5: CompleteTheSentencesCard,
    6: IdentifyTheIdeaCard,
    7: TitleThePassageCard,
  };

  // Determine which component to render based on the currentSubmoduleId
  const QuestionCard = questionCardComponents[currentSubmoduleId];

  return (
    <Container
      sx={{
        maxWidth: "xl",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
        }}
      >
        {/* Render the corresponding question card component or a default message */}
        {QuestionCard ? <QuestionCard 
        questionId={currentQuestionId}
        setCurrentQuestionId={setCurrentQuestionId}
        setCurrentSubmoduleId={setCurrentSubmoduleId}
        /> : <div>No question found for this submodule id.</div>}
      </Box>
    </Container>
  );
}

export default QuestionPageNew;





