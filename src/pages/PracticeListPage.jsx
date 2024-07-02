// only manages the state of moduleId and submoduleId and passes them to QuestionListCard
import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState, useEffect } from "react";
import { ShowLocalStorage } from "../utils/ShowLocalStorage";

const getInitialState = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const PracticeListPage = () => {
  const [moduleId, setModuleId] = useState(() => getInitialState("moduleId", 1));
  const [submoduleId, setSubmoduleId] = useState(() => getInitialState("submoduleId", 1));
  const [globalIndex, setGlobalIndex] = useState(() => getInitialState("globalIndex", 1));
  const [currentPage, setCurrentPage] = useState(() => getInitialState("currentPage", 1));

  useEffect(() => {
    localStorage.setItem("moduleId", JSON.stringify(moduleId));
    localStorage.setItem("submoduleId", JSON.stringify(submoduleId));
    localStorage.setItem("globalIndex", JSON.stringify(globalIndex));
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [moduleId, submoduleId, globalIndex, currentPage]);

  return (
    <>
      <QuestionListCard
        moduleId={moduleId}
        setModuleId={setModuleId}
        submoduleId={submoduleId}
        setSubmoduleId={setSubmoduleId}
        globalIndex={globalIndex}
        setGlobalIndex={setGlobalIndex}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ShowLocalStorage componentName="PracticeListPage" />
    </>
  );
};

export default PracticeListPage;


