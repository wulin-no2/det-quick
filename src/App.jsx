import { ThemeProvider, Container, Box } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import UserLoginPage from "./pages/UserLoginPage";
import HomePage from "./pages/HomePage";
import "./utils/languageSwitcher/i18n"; // import i18n to translate
import Navbar from "./components/navbar/navbar";
import PracticeListPage from "./pages/PracticeListPage";
import QuestionPage from "./pages/QuestionPage";
import Footer from "./components/common/Footer";
import { QuestionStateProvider } from "./context/QuestionStateContext";
import WordBookPage from "./pages/WordBookPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserVerificationPage from "./pages/UserVerificationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import LoadingSpinner from './components/LoadingSpinner';
import { useGlobalUIState } from './hooks/useGlobalUIState';
import MySnackBarMessage from './components/MySnackBarMessage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {


  const { loading, toast } = useGlobalUIState();
  const showFooterPaths = ["/"];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);



  return (
    <ThemeProvider theme={theme}>
      <AuthProvider> 
        <QuestionStateProvider>
          <Router>
            <Navbar />
            <Container maxWidth="llg">
              <Box className="content">
                <LoadingSpinner />
                <MySnackBarMessage open={toast.open} message={toast.message} />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<UserLoginPage />} />
                  <Route path="/register" element={<UserRegistrationPage />} />
                  <Route path="/verify" element={<UserVerificationPage />} />
                  <Route path="/password-reset" element={<PasswordResetPage />} />

                  <Route path="/practice" element={ <PracticeListPage />} />
                  {/* <Route path="/vocab" element={<WordBookPage />} /> */}

                  {/* <Route path="/practice" element={<PracticeListPage />} />

                  <Route path="/practice/questions/detail" element={<QuestionPage />} /> */}

                  {/* 需要登录的页面 */}
                  <Route
                    path="/practice/questions/detail"
                    element={
                      <ProtectedRoute>
                        <QuestionPage />
                      </ProtectedRoute>
                    }
                  />

                  <Route 
                    path="/vocab" 
                    element={
                      <ProtectedRoute>
                        <WordBookPage />
                      </ProtectedRoute>
                    }
                  />

            


                  <Route path="*" element={<h1>Page not found</h1>} />

                </Routes>
                {shouldShowFooter && <Footer />}
              </Box>
            </Container>
          </Router>
        </QuestionStateProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}



export default App;
