import QuestionListCard from "../components/question-list/QuestionListCard";
const questions = [
  {
    id: 0,
    type: "read-and-select",
    question: "Read and Select Question 0",
    detail: "Detail 0",
    additionalInfo: "Additional Info 0",
  },
  {
    id: 1,
    type: "fill-in-the-blanks",
    question: "Fill In The Blanks Question 1",
    detail: "Detail 1",
    additionalInfo: "Additional Info 1",
  },
  {
    id: 2,
    type: "complete-the-passage",
    question: "Complete The Passage Question 2",
    detail: "Detail 2",
    additionalInfo: "Additional Info 2",
  },
  {
    id: 3,
    type: "complete-the-sentence",
    question: "Complete The Sentences Question 3",
    detail: "Detail 3",
    additionalInfo: "Additional Info 3",
  },
  {
    id: 4,
    type: "title-the-passage",
    question: "Title The Passage Question 4",
    detail: "Detail 4",
    additionalInfo: "Additional Info 4",
  },
  {
    id: 5,
    type: "identify-the-idea",
    question: "Identify the Idea Question 5",
    detail: "Detail 5",
    additionalInfo: "Additional Info 5",
  },
  {
    id: 6,
    type: "highlight-the-answer",
    question: "High Light The Answer Question 6",
    detail: "Detail 6",
    additionalInfo: "Additional Info 6",
  },
  {
    id: 7,
    type: "highlight-the-answer",
    question: "Question 7",
    detail: "Detail 7",
    additionalInfo: "Additional Info 7",
  },
  {
    id: 8,
    type: "highlight-the-answer",
    question: "Question 8",
    detail: "Detail 8",
    additionalInfo: "Additional Info 8",
  },
  {
    id: 9,
    type: "highlight-the-answer",
    question: "Question 9",
    detail: "Detail 9",
    additionalInfo: "Additional Info 9",
  },
];

const PracticeListPage = () => {
  return (
    <>
      <QuestionListCard questionList={questions} />
    </>
  );
};

export default PracticeListPage;
