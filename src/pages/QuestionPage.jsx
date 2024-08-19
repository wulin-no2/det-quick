// // handleBack function
// // display different question card based on submoduleId
// // fetch data: question detail
// // fetch data: previous, next
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchQuestionDetail,
  fetchNextQuestion,
  fetchPreviousQuestion,
} from "../api/api-fetchQuestionDetail";

// Import card components
import FillInTheBlanksCard from "../components/question-cards/FillInTheBlanksCard";
import ReadAndSelectCard from "../components/question-cards/ReadAndSelectCard";
import ReadAloudCard from "../components/question-cards/ReadAloudCard";
import ReadThenSpeakCard from "../components/question-cards/ReadThenSpeakCard";
import ListenThenSpeakCard from "../components/question-cards/ListenThenSpeakCard";
import SpeakAboutThePhotoCard from "../components/question-cards/SpeakAboutThePhotoCard";
import ListenAndTypeCard from "../components/question-cards/ListenAndTypeCard";
import ReadAndCompleteCard from "../components/question-cards/ReadAndCompleteCard";
import InteractiveReadingCard from "../components/question-cards/InteractiveReadingCard";
import SpeakingSampleCard from "../components/question-cards/SpeakingSampleCard";
import WritingSampleCard from "../components/question-cards/WritingSampleCard";
import WriteAboutThePhotoCard from "../components/question-cards/WriteAboutThePhoto";
import InteractiveListeningCard from "../components/question-cards/InteractiveListeningCard";
import InteractiveWritingCard from "../components/question-cards/InteractiveWritingCard";

const questionCardComponents = {
  1: ReadAndSelectCard,
  2: ReadAloudCard,
  3: ReadThenSpeakCard,
  4: ListenThenSpeakCard,
  5: SpeakAboutThePhotoCard,
  6: ListenAndTypeCard,
  7: InteractiveListeningCard,
  8: ReadAndCompleteCard,
  9: InteractiveReadingCard,
  10: FillInTheBlanksCard,
  11: WriteAboutThePhotoCard,
  12: InteractiveWritingCard,
  13: SpeakingSampleCard,
  14: WritingSampleCard,
};

function QuestionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  

  const state =
    location.state ||
    JSON.parse(localStorage.getItem("questionPageState")) ||
    {};
  const {
    questionId,
    submoduleId,
    filters,
    count,
    moduleId,
    currentPage,
    globalIndex,
  } = state;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [questionDetail, setQuestionDetail] = useState(null);
  const [currentState, setCurrentState] = useState({
    currentQuestionId: questionId || 1,
    currentSubmoduleId: submoduleId || 1,
    currentGlobalIndex: globalIndex || 1,
  });

  const { currentQuestionId, currentSubmoduleId, currentGlobalIndex } =
    currentState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchQuestionDetail(
          currentQuestionId,
          currentSubmoduleId
        );
        setQuestionDetail(result);
        setError("");
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentQuestionId, currentSubmoduleId]);

  const handleBack = () => {
    navigate(-1, {
      state: {
        moduleId,
        submoduleId,
        filters,
        currentPage,
        count,
        globalIndex,
      },
    });
  };

  const handleNavigation = async (direction) => {
    const newGlobalIndex =
      direction === "next" ? currentGlobalIndex + 1 : currentGlobalIndex - 1;
    if (newGlobalIndex > 0 && newGlobalIndex <= count) {
      setCurrentState((prevState) => ({
        ...prevState,
        currentGlobalIndex: newGlobalIndex,
      }));
      localStorage.setItem("globalIndex", newGlobalIndex);

      const fetchQuestion =
        direction === "next" ? fetchNextQuestion : fetchPreviousQuestion;
      try {
        const question = await fetchQuestion(
          currentQuestionId,
          currentSubmoduleId,
          filters.difficultyLevel,
          filters.templateType,
          filters.isCorrect,
          filters.isAsc,
          filters.isPracticed 
        );
        if (question) {
          setCurrentState({
            currentQuestionId: question.questionId,
            currentSubmoduleId: question.submoduleId,
            currentGlobalIndex: newGlobalIndex,
          });
          setQuestionDetail(question);
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          mb: 2,
        }}
      >
        {QuestionCard ? (
          <QuestionCard
            count={count}
            questionDetail={questionDetail}
            handleBack={handleBack}
            globalIndex={currentGlobalIndex}
            handleNext={() => handleNavigation("next")}
            handleLast={() => handleNavigation("last")}
          />
        ) : (
          <div>No question found for this submodule id.</div>
        )}
      </Box>
    </Container>
  );
}

export default QuestionPage;
