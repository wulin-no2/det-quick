import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState, useEffect } from "react";
import { FetchQuestionListResponseData } from "../api/FetchQuestionList";

const PracticeListPage = () => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // used for send data to backend
  const [currentPage, setCurrentPage] = useState(1);
  const [moduleId, setModuleId] = useState(1); // Add moduleId state
  const [submoduleId, setSubmoduleId] = useState(1); // Add submoduleId state
  const [filters, setFilters] = useState({
    isAsc: true,
    submoduleId: 1,
    difficultyLevel: "Easy",
    // templateType: "NARRATIVE",
    // isCorrect: true,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const postData = {
          ...filters,
          moduleId,
          submoduleId,
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
  }, [currentPage, filters,moduleId, submoduleId,]);

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
        filters={filters}
        setFilters={setFilters}
        moduleId={moduleId} // Pass moduleId
        setModuleId={setModuleId} // Pass setModuleId
        submoduleId={submoduleId} // Pass submoduleId
        setSubmoduleId={setSubmoduleId} // Pass setSubmoduleId
      />
    </>
  );
};

export default PracticeListPage;
