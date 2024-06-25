// only manages the state of moduleId and submoduleId and passes them to QuestionListCard

import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState, useEffect} from "react";
import { ShowLocalStorage } from "../utils/ShowLocalStorage";

const PracticeListPage = () => {
  const [moduleId, setModuleId] = useState(() => {
    const saved = localStorage.getItem("moduleId");
    return saved ? JSON.parse(saved) : 1;
  });
  const [submoduleId, setSubmoduleId] = useState(() => {
    const saved = localStorage.getItem("submoduleId");
    return saved ? JSON.parse(saved) : 1;
  });
  const [globalIndex, setGlobalIndex] = useState(() => {
    const saved = localStorage.getItem("globalIndex");
    return saved ? JSON.parse(saved) : 1;
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPage");
    return saved ? JSON.parse(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("moduleId", JSON.stringify(moduleId));
  }, [moduleId]);

  useEffect(() => {
    localStorage.setItem("submoduleId", JSON.stringify(submoduleId));
  }, [submoduleId]);

  useEffect(() => {
    localStorage.setItem("globalIndex", JSON.stringify(globalIndex));
  }, [globalIndex]);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

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
      <ShowLocalStorage componentName="PracticeListPage"/>
    </>
  );
};

export default PracticeListPage;

