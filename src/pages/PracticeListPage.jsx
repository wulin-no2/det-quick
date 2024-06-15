// only manages the state of moduleId and submoduleId and passes them to QuestionListCard

import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState, useEffect} from "react";

const PracticeListPage = () => {
  // const [moduleId, setModuleId] = useState(1);
  // const [submoduleId, setSubmoduleId] = useState(1);
  const [moduleId, setModuleId] = useState(() => {
    const saved = localStorage.getItem("moduleId");
    return saved ? JSON.parse(saved) : 1;
  });
  const [submoduleId, setSubmoduleId] = useState(() => {
    const saved = localStorage.getItem("submoduleId");
    return saved ? JSON.parse(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("moduleId", JSON.stringify(moduleId));
  }, [moduleId]);

  useEffect(() => {
    localStorage.setItem("submoduleId", JSON.stringify(submoduleId));
  }, [submoduleId]);

  return (
    <>
      <QuestionListCard
        moduleId={moduleId}
        setModuleId={setModuleId}
        submoduleId={submoduleId}
        setSubmoduleId={setSubmoduleId}
      />
    </>
  );
};

export default PracticeListPage;

