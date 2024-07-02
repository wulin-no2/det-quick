// types and subTypesArr are from questionListCard:
// map moduleId and submoduleId to name;

export const buttonGroups = [
    ["isAsc", "true", "false"],
    ["difficultyLevel", "null", "Easy", "Medium", "Hard"],
    // ["isCorrect", "null", "true", "false"],
    // ["templateType", "NARRATIVE", "CONTRASTING", "PROBLEM_SOLVING"],
    // ["isCollected", "null", "true", "false"],
    ["isPracticed", "null", "true", "false"],
  ];

export const types = [
    { module_id: 1, name: "Vocabulary" },
    { module_id: 2, name: "Speaking" },
    { module_id: 3, name: "Listening" },
    { module_id: 4, name: "Reading" },
    { module_id: 5, name: "Writing" },
    { module_id: 6, name: "Sample" },
  ];
  
export const subTypesArr = [
[{ id: 0, submodule_id: 1, name: "Read & Select" }],
[
    { id: 0, submodule_id: 2, name: "Read Aloud" },
    { id: 1, submodule_id: 3, name: "Read Then Speak" },
    { id: 2, submodule_id: 4, name: "Listen Then Speak" },
    { id: 3, submodule_id: 5, name: "Speak About the Photo" },
],
[
    { id: 0, submodule_id: 6, name: "Listen & Type" },
    { id: 1, submodule_id: 7, name: "Interactive Listening" },
],
[
    { id: 0, submodule_id: 8, name: "Read & Complete" },
    { id: 1, submodule_id: 9, name: "Interactive Reading" },
    { id: 2, submodule_id: 10, name: "Fill In the Blanks" },
],
[
    { id: 0, submodule_id: 11, name: "Write About the Photo" },
    { id: 1, submodule_id: 12, name: "Interactive Writing" },
],
[
    { id: 0, submodule_id: 13, name: "Speaking Sample" },
    { id: 1, submodule_id: 14, name: "Writing Sample" },
],
];


export const timeLimitBySubmoduleId = (submoduleId) => {
    switch (submoduleId) {
      case 1:
        return 10;
      case 2:
        return 20;
      case 3:
        return 90;
      case 4:
        return 90;
      case 5:
        return 90;
      case 6:
        return 60;
      case 9:
        return 60 * 8;
      case 13:
        return 60 * 3;
      case 14:
        return 60 * 5;
      default:
        return 10;
    }
  };

// Convert subTypesArr to a flat object map
const submoduleMap = subTypesArr.flat().reduce((acc, submodule) => {
    acc[submodule.submodule_id] = submodule.name;
    return acc;
  }, {});

// get Name By SubmoduleId
export const getNameBySubmoduleId = (submoduleId) =>{
  return submoduleMap[submoduleId] || "Unknown Submodule"; // Default case if submoduleId is not found
};

// Convert types array to an object map
const moduleMap = types.reduce((acc, module) => {
    acc[module.module_id] = module.name;
    return acc;
}, {});

// get Name By moduleId
export const getNameByModuleId = (moduleId) => {
    return moduleMap[moduleId] || "Unknown Module"; // Default case if moduleId is not found
};

