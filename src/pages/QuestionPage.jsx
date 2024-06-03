import { Box, Container } from "@mui/material";
import { useParams } from 'react-router-dom';

// Import card components
import CompleteThePassageCard from "../components/question-cards/CompleteThePassageCard";
import CompleteTheSentencesCard from "../components/question-cards/CompleteTheSentencesCard";
import FillInTheBlanksCard from "../components/question-cards/FillInTheBlanksCard";
import HighlightTheAnswerCard from "../components/question-cards/HighlightTheAnswerCard";
import IdentifyTheIdeaCard from "../components/question-cards/IdentifyTheIdeaCard";
import ReadAndSelectCard from "../components/question-cards/ReadAndSelectCard";
import TitleThePassageCard from "../components/question-cards/TitleThePassageCard";

function QuestionPage() {
  // Use useParams to get the parameter from the URL
  let { type } = useParams(); // This assumes your route path is something like "/question/:type"

  // Map type to corresponding component
  const questionCardComponents = {
    "complete-the-passage": CompleteThePassageCard,
    "complete-the-sentence": CompleteTheSentencesCard,
    "fill-in-the-blanks": FillInTheBlanksCard,
    "highlight-the-answer": HighlightTheAnswerCard,
    "identify-the-idea": IdentifyTheIdeaCard,
    "read-and-select": ReadAndSelectCard,
    "title-the-passage": TitleThePassageCard,
  };

  // Determine which component to render based on the type parameter
  const QuestionCard = questionCardComponents[type];

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
        {QuestionCard ? <QuestionCard /> : <div>No question found for this type.</div>}
      </Box>
    </Container>
  );
}

export default QuestionPage;


// function QuestionPage() {
//   return (
//     <Container
//       sx={{
//         maxWidth: "xl",
//         // border: "1px solid magenta" ,
//         display: "flex",
//         justifyContent: "center",
//         boxSizing: "border-box",
//       }}
//     >
//       <Box
//         sx={{
//           // border: "1px solid blue",
//           backgroundColor: "white",
//           borderRadius: 1,
//           //   boxSizing: "inherit",
//         }}
//       >
//         <ReadAndSelectCard />
//       </Box>
//     </Container>
//   );
// }

// export default QuestionPage;



