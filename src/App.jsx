import { ThemeProvider, Container, Box } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./utils/languageSwitcher/i18n"; // import i18n to translate
import Navbar from "./components/navbar/navbar";
import PracticeListPage from "./pages/PracticeListPage";
import QuestionPage from "./pages/QuestionPage";
import QuestionPageNew from "./pages/QuestionPageNew";


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
                {/* <Route path="/filter" element={<FilterComponent />} /> */}
                <Route path="/practice" element={<PracticeListPage />} />
                <Route path="/question/:type" element={<QuestionPage />} />
                <Route path="/practice/questions/detail" element={<QuestionPageNew />} />
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
            </Box>
          </Container>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
