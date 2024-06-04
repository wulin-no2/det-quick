import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState, useEffect } from "react";
import { FetchQuestionListResponseData } from "../api/FetchQuestionList";

// const testQuestions = [
//   {
//     questionId: 20405,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Easy",
//     templateType: null,
//     word: "climbing",
//     correct: true,
//   },
//   {
//     questionId: 20404,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Hard",
//     templateType: null,
//     word: "sympathize",
//     correct: true,
//   },
//   {
//     questionId: 20403,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Hard",
//     templateType: null,
//     word: "turnousy",
//     correct: false,
//   },
//   {
//     questionId: 20402,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Hard",
//     templateType: null,
//     word: "geans",
//     correct: true,
//   },
//   {
//     questionId: 20401,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Medium",
//     templateType: null,
//     word: "teamwork",
//     correct: true,
//   },
//   {
//     questionId: 20400,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Hard",
//     templateType: null,
//     word: "sphere",
//     correct: true,
//   },
//   {
//     questionId: 20399,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Medium",
//     templateType: null,
//     word: "pansoly",
//     correct: false,
//   },
//   {
//     questionId: 20398,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Easy",
//     templateType: null,
//     word: "cheer",
//     correct: true,
//   },
//   {
//     questionId: 20397,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Medium",
//     templateType: null,
//     word: "unite",
//     correct: true,
//   },
//   {
//     questionId: 20396,
//     moduleId: 1,
//     submoduleId: 1,
//     difficultyLevel: "Easy",
//     templateType: null,
//     word: "require",
//     correct: true,
//   },
// ];

const PracticeListPage = () => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getQuestions = async () => {
      setLoading(true);
      
      const resultData = await FetchQuestionListResponseData();
      console.log('fetched result in PracticeListPage',resultData);
      const totalResult = resultData.totalElements;
      const totalPages = resultData.totalPages;
      const fetchedQuestions = resultData.content;
      console.log('fetched question list in PracticeListPage',fetchedQuestions);
      
      if (fetchedQuestions && fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        setCount(totalResult);
        setPages(totalPages);
        setError(''); // Clear any previous errors
      } else {
        setError('No questions found or failed to fetch questions.');
        // setQuestions(testQuestions); // for test
      }
      setLoading(false);
    };

    getQuestions();
  }, []);  // Run only once after the component mounts

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <QuestionListCard questionList={questions} pages={pages} count={count}/>
    </>
  );
};

export default PracticeListPage;
