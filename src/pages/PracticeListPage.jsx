// only manages the state of moduleId and submoduleId and passes them to QuestionListCard

import QuestionListCard from "../components/question-list/QuestionListCard";
import { useState } from "react";

const PracticeListPage = () => {
  const [moduleId, setModuleId] = useState(1);
  const [submoduleId, setSubmoduleId] = useState(1);

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

