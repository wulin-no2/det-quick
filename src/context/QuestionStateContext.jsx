// QuestionStateContext.jsx
import { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";

const QuestionStateContext = createContext();

export const QuestionStateProvider = ({ children }) => {
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
  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : { isAsc: false, difficultyLevel: "null" };
  });

  // 使用 useEffect 在状态更新时同步更新 localStorage
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

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <QuestionStateContext.Provider value={{
      moduleId, setModuleId,
      submoduleId, setSubmoduleId,
      globalIndex, setGlobalIndex,
      currentPage, setCurrentPage,
      filters, setFilters,
    }}>
      {children}
    </QuestionStateContext.Provider>
  );
};

QuestionStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionStateContext;

