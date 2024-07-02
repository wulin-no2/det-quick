// useQuestionStateContext.jsx
import { useContext } from "react";
import QuestionStateContext from "./QuestionStateContext";

const useQuestionStateContext = () => {
  return useContext(QuestionStateContext);
};

export default useQuestionStateContext;
