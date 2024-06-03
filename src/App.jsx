import { ThemeProvider, Container, Box } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./utils/languageSwitcher/i18n"; // import i18n to translate
import Navbar from "./components/navbar/navbar";
// import ReadAndSelectCard from "./components/question-cards/ReadAndSelectCard";
// import CompleteThePassageCard from "./components/question-cards/CompleteThePassageCard";
// import CompleteTheSentencesCard from "./components/question-cards/CompleteTheSentencesCard";
// import FillInTheBlanksCard from "./components/question-cards/FillInTheBlanksCard";
// import HighlightTheAnswerCard from "./components/question-cards/HighlightTheAnswerCard";
// import IdentifyTheIdeaCard from "./components/question-cards/IdentifyTheIdeaCard";
// import TitleThePassageCard from "./components/question-cards/TitleThePassageCard";
import PracticeListPage from "./pages/PracticeListPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Container maxWidth="llg">
            <Box className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/practice" element={<PracticeListPage />} />
                {/* <Route path="/question" element={<QuestionPage />} /> */}
                <Route path="/question/:type" element={<QuestionPage />} />
                <Route path="*" element={<h1>Page not found</h1>} />
                {/* <Route
                  path="/questions/complete-the-passage"
                  element={<CompleteThePassageCard />}
                />
                <Route
                  path="/questions/complete-the-sentence"
                  element={<CompleteTheSentencesCard />}
                />
                <Route
                  path="/questions/fill-in-the-blanks"
                  element={<FillInTheBlanksCard />}
                />
                <Route
                  path="/questions/highlight-the-answer"
                  element={<HighlightTheAnswerCard />}
                />
                <Route
                  path="/questions/identify-the-idea"
                  element={<IdentifyTheIdeaCard />}
                />
                <Route
                  path="/questions/read-and-select"
                  element={<ReadAndSelectCard />}
                />
                <Route
                  path="/questions/title-the-passage"
                  element={<TitleThePassageCard />}
                /> */}
              </Routes>
            </Box>
          </Container>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
