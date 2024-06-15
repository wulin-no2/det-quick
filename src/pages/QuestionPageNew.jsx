import { Box, Container } from "@mui/material";
// import { useParams } from 'react-router-dom';
import { useState, useEffect,
  // useRef 
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FetchQuestionDetail } from "../api/FetchQuestionDetail";

// Import card components
import CompleteThePassageCard from "../components/question-cards/CompleteThePassageCard";
import CompleteTheSentencesCard from "../components/question-cards/CompleteTheSentencesCard";
import FillInTheBlanksCard from "../components/question-cards/FillInTheBlanksCard";
import HighlightTheAnswerCard from "../components/question-cards/HighlightTheAnswerCard";
import IdentifyTheIdeaCard from "../components/question-cards/IdentifyTheIdeaCard";
import ReadAndSelectCard from "../components/question-cards/ReadAndSelectCard";
import TitleThePassageCard from "../components/question-cards/TitleThePassageCard";
import ReadAloudCard from "../components/question-cards/ReadAloudCard";
import ReadThenSpeakCard from "../components/question-cards/ReadThenSpeakCard";

function QuestionPageNew() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || JSON.parse(localStorage.getItem("questionPageState")) || {};

  const {
    questionId,
    submoduleId,
    filters,
    count,
    currentIndex,
    getNameBySubmoduleId,
    moduleId, 
    currentPage,
    globalIndex
  } = state;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // use for store fetchData result
  const [questionDetail, setQuestionDetail] = useState(null);

  // used for send data to backend
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId || 1);
  const [currentSubmoduleId, setCurrentSubmoduleId] = useState(submoduleId || 1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        console.log("currentQuestionId and currentSubmoduleId in question page new ", currentQuestionId, currentSubmoduleId);
        const result = await FetchQuestionDetail(currentQuestionId, currentSubmoduleId);
        console.log("result in question page new ", result);
        setQuestionDetail(result);  // get question detail
        setError("");
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentQuestionId, currentSubmoduleId]);

  useEffect(() => {
    console.log('question detail in use effect is ', questionDetail, currentQuestionId, currentSubmoduleId);
  }, []);

  // used for handle back operation with React Router
  const handleBack = () => {
    navigate(-1, { state: { moduleId, submoduleId, filters, currentPage, count, globalIndex } });
    console.log('state in question page new - handleBack is ', state)
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Map submoduleId to corresponding component
  const questionCardComponents = {
    1: ReadAndSelectCard,
    2: ReadAloudCard,
    3: ReadThenSpeakCard,
    4: CompleteThePassageCard,
    5: CompleteTheSentencesCard,
    6: IdentifyTheIdeaCard,
    7: TitleThePassageCard,
    8: FillInTheBlanksCard,
    9: HighlightTheAnswerCard,
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
          mb:2
        }}
      >
        {/* Render the corresponding question card component or a default message */}
        {QuestionCard ? <QuestionCard 
        questionId={currentQuestionId}
        setCurrentQuestionId={setCurrentQuestionId}
        setCurrentSubmoduleId={setCurrentSubmoduleId}
        filters={filters} // pass filters
        count={count} // pass totalResults
        currentIndex={currentIndex} // pass currentIndex
        questionDetail={questionDetail} // pass questionDetail from fetchData()
        getNameBySubmoduleId={getNameBySubmoduleId}
        handleBack={handleBack} // pass handleBack to question Card until back button
        globalIndex={globalIndex}
        /> : <div>No question found for this submodule id.</div>}
      </Box>
    </Container>
  );
}

export default QuestionPageNew;





