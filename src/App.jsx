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
import Footer from "./components/common/Footer";
import { QuestionStateProvider } from "./context/QuestionStateContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <QuestionStateProvider>
          <Router>
            <Navbar />
            <Container maxWidth="llg">
              <Box className="content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  {/* <Route path="/filter" element={<FilterComponent />} /> */}
                  <Route path="/practice" element={<PracticeListPage />} />
                  {/* <Route path="/question/:type" element={<QuestionPage />} /> */}
                  <Route path="/practice/questions/detail" element={<QuestionPage />} />
                  <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
                <Footer/>
              </Box>
            </Container>
          </Router>
        </QuestionStateProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
