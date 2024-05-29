import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import "./utils/languageSwitcher/i18n"; // import i18n to translate
import Navbar from "./components/navbar/navbar";
import ReadAndSelectCard from './components/question-cards/ReadAndSelectCard';
import CompleteThePassageCard from './components/question-cards/CompleteThePassageCard';
import CompleteTheSentencesCard  from './components/question-cards/CompleteTheSentencesCard';
import FillInTheBlanksCard   from './components/question-cards/FillInTheBlanksCard';
import HighlightTheAnswerCard   from './components/question-cards/HightlightTheAnswerCard';
import IdentifyTheIdeaCard   from './components/question-cards/IdentifyTheIdeaCard';
import TitleThePassageCard   from './components/question-cards/TitleThePassageCard';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar/>
          <Box sx={{mt:1}}>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            {/* Route for the HomePage at the root */}
            <Route path="/login" element={<LoginPage />} />
            {/* Route for the LoginPage*/}
            <Route path="*" element={<h1>Page not found</h1>} />
            {/* Route to catch all route*/}
            <Route
                path='/complete-the-passage'
                element={<CompleteThePassageCard />}
              />
              <Route
                path='/complete-the-sentence'
                element={<CompleteTheSentencesCard />}
              />
              <Route
                path='/fill-in-the-blanks'
                element={<FillInTheBlanksCard />}
              />
              <Route
                path='/highlight-the-answer'
                element={<HighlightTheAnswerCard />}
              />
              <Route
                path='/identify-the-idea'
                element={<IdentifyTheIdeaCard />}
              />
              <Route path='/read-and-select' 
              element={<ReadAndSelectCard />} />
              <Route
                path='/title-the-passage'
                element={<TitleThePassageCard />}
              />
            route
          </Routes>
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
