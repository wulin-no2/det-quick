// only manages the state of moduleId and submoduleId and passes them to QuestionListCard
import QuestionListCard from "../components/question-list/QuestionListCard";
// import { useState, useEffect } from "react";
import { ShowLocalStorage } from "../utils/ShowLocalStorage";
import useQuestionStateContext from "../context/useQuestionStateContext";

const PracticeListPage = () => {
  const { moduleId, setModuleId, submoduleId, setSubmoduleId, globalIndex, setGlobalIndex, currentPage, setCurrentPage } = useQuestionStateContext();

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


