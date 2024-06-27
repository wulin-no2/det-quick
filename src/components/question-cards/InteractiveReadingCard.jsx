import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import CardHeader from "../common/question-card-components/CardHeader";
import CompleteTheSentencesCard from "./interactive-reading-sequences/CompleteTheSentencesCard";
import CompleteThePassageCard from "./interactive-reading-sequences/CompleteThePassageCard";
import HighlightTheAnswerCard from "./interactive-reading-sequences/HighlightTheAnswerCard";
import IdentifyTheIdeaCard from "./interactive-reading-sequences/IdentifyTheIdeaCard";
import TitleThePassageCard from "./interactive-reading-sequences/TitleThePassageCard";
import HighlightTheAnswerCardAlt from "./interactive-reading-sequences/HighlightTheAnswerCardAlt";

const InteractiveReadingCard = ({
  count,
  currentIndex,
  questionDetail,
  handleBack,
  globalIndex,
  handleLast,
  handleNext,
}) => {
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (questionDetail && questionDetail.sequences) {
      setCurrentSequenceIndex(0);
      setAnswers(Array(questionDetail.sequences.length).fill(null));
    }
  }, [questionDetail]);

  const handleNextSequence = (userAnswer) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentSequenceIndex] = userAnswer;
      return newAnswers;
    });

    if (currentSequenceIndex < questionDetail.sequences.length - 1) {
      setCurrentSequenceIndex(currentSequenceIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    // TODO: Handle submission and grading
    setCurrentSequenceIndex(0); // Start over for grading
  };

  const handleSolveAgain = () => {
    setAnswers([]);
    setCurrentSequenceIndex(0); // Start over 
  }

  const renderSequence = () => {
    const currentSequence = questionDetail.sequences[currentSequenceIndex];
    const currentAnswer = answers[currentSequenceIndex];

    switch (currentSequence.sequenceOrder) {
      case 1:
        return (
          <CompleteTheSentencesCard
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
          />
        );
      case 2:
        return (
          <CompleteThePassageCard
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
          />
        );
      case 3:
        return (
          <HighlightTheAnswerCard
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
          />
        );
      case 4:
        return (
          <HighlightTheAnswerCardAlt
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
          />
        );
      case 5:
        return (
          <IdentifyTheIdeaCard
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
          />
        );
      case 6:
        return (
          <TitleThePassageCard
            sequence={currentSequence}
            handleNextSequence={handleNextSequence}
            currentAnswer={currentAnswer}
            handleSolveAgain={handleSolveAgain}
          />
        );
      default:
        return <div>Unknown sequence order</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center",
        mb: 4,
        minHeight: "620px",
      }}
    >
      {/* CardHeader */}
      <Box>
        <CardHeader
          questionDetail={questionDetail}
          handleNext={handleNext}
          handleLast={handleLast}
          currentIndex={currentIndex}
          totalWords={count}
          handleBack={handleBack}
          globalIndex={globalIndex}
        />
      </Box>
      {/* Card content */}
      <Box>{renderSequence()}</Box>
    </Box>
  );
};

InteractiveReadingCard.propTypes = {
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  questionDetail: PropTypes.object,
  handleBack: PropTypes.func.isRequired,
  globalIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
};

export default InteractiveReadingCard;
