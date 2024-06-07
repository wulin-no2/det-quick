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
  // used for send data to backend
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    isAsc: true,
    submoduleId: 1,
    difficultyLevel: "Hard",
    templateType: "NARRATIVE",
    isCorrect: true,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const postData = {
          ...filters,
          page: currentPage,
          size: 10,
        };
        console.log("postData in practice list page ", postData);
        const result = await FetchQuestionListResponseData(postData);
        console.log("result in practice list page ", result);

        setQuestions(result.content);
        setPages(result.totalPages);
        setCount(result.totalElements);
        console.log("questions in practice list page ", result.content);
        console.log("Pages in practice list page ", result.totalPages);
        console.log("Count in practice list page ", result.totalElements);
        setError("");
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage, filters]);

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <QuestionListCard
        questionList={questions}
        pages={pages}
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setFilters={setFilters}
      />
    </>
  );
};

export default PracticeListPage;
