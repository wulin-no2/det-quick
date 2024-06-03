import QuestionListCard from "../components/question-list/QuestionListCard";
// import ApiClient from "../api/ApiClient";
// import { useState, useEffect } from "react";
// import { FetchQuestionsList } from "../api/FetchQuestionList";

const testQuestions = [
  {
    questionId: 20405,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Easy",
    templateType: null,
    word: "climbing",
    correct: true,
  },
  {
    questionId: 20404,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Hard",
    templateType: null,
    word: "sympathize",
    correct: true,
  },
  {
    questionId: 20403,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Hard",
    templateType: null,
    word: "turnousy",
    correct: false,
  },
  {
    questionId: 20402,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Hard",
    templateType: null,
    word: "geans",
    correct: true,
  },
  {
    questionId: 20401,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Medium",
    templateType: null,
    word: "teamwork",
    correct: true,
  },
  {
    questionId: 20400,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Hard",
    templateType: null,
    word: "sphere",
    correct: true,
  },
  {
    questionId: 20399,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Medium",
    templateType: null,
    word: "pansoly",
    correct: false,
  },
  {
    questionId: 20398,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Easy",
    templateType: null,
    word: "cheer",
    correct: true,
  },
  {
    questionId: 20397,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Medium",
    templateType: null,
    word: "unite",
    correct: true,
  },
  {
    questionId: 20396,
    moduleId: 1,
    submoduleId: 1,
    difficultyLevel: "Easy",
    templateType: null,
    word: "require",
    correct: true,
  },
  //   {
  //     id: 1,
  //     type: "fill-in-the-blanks",
  //     question: "Fill In The Blanks Question 1",
  //     detail: "Detail 1",
  //     additionalInfo: "Additional Info 1",
  //   },
  //   {
  //     id: 2,
  //     type: "complete-the-passage",
  //     question: "Complete The Passage Question 2",
  //     detail: "Detail 2",
  //     additionalInfo: "Additional Info 2",
  //   },
  //   {
  //     id: 3,
  //     type: "complete-the-sentence",
  //     question: "Complete The Sentences Question 3",
  //     detail: "Detail 3",
  //     additionalInfo: "Additional Info 3",
  //   },
  //   {
  //     id: 4,
  //     type: "title-the-passage",
  //     question: "Title The Passage Question 4",
  //     detail: "Detail 4",
  //     additionalInfo: "Additional Info 4",
  //   },
  //   {
  //     id: 5,
  //     type: "identify-the-idea",
  //     question: "Identify the Idea Question 5",
  //     detail: "Detail 5",
  //     additionalInfo: "Additional Info 5",
  //   },
  //   {
  //     id: 6,
  //     type: "highlight-the-answer",
  //     question: "High Light The Answer Question 6",
  //     detail: "Detail 6",
  //     additionalInfo: "Additional Info 6",
  //   },
  //   {
  //     id: 7,
  //     type: "highlight-the-answer",
  //     question: "Question 7",
  //     detail: "Detail 7",
  //     additionalInfo: "Additional Info 7",
  //   },
  //   {
  //     id: 8,
  //     type: "highlight-the-answer",
  //     question: "Question 8",
  //     detail: "Detail 8",
  //     additionalInfo: "Additional Info 8",
  //   },
  //   {
  //     id: 9,
  //     type: "highlight-the-answer",
  //     question: "Question 9",
  //     detail: "Detail 9",
  //     additionalInfo: "Additional Info 9",
  //   },
];

// const PracticeListPage = () => {
//   return (
//     <>
//       <QuestionListCard questionList={questions} />
//     </>
//   );
// };

// export default PracticeListPage;

const PracticeListPage = () => {
  // const [questions, setQuestions] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const getQuestions = async () => {
  //     setLoading(true);
  //     const fetchedQuestions = await FetchQuestionsList();
  //     if (fetchedQuestions && fetchedQuestions.length > 0) {
  //       setQuestions(fetchedQuestions);
  //       setError(''); // Clear any previous errors
  //     } else {
  //       // setError('No questions found or failed to fetch questions.');
  //       setQuestions(testQuestions); // for test
  //     }
  //     setLoading(false);
  //   };

  //   getQuestions();
  // }, []);  // Run only once after the component mounts

  // if (loading) {
  //   return <div>Loading questions...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <QuestionListCard questionList={testQuestions} />
    </>
  );
};

export default PracticeListPage;
