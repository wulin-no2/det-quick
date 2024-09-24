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
import HomeFooter from "./components/common/HomeFooter";
import { QuestionStateProvider } from "./context/QuestionStateContext";
import WordBookPage from "./pages/WordBookPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserVerificationPage from "./pages/UserVerificationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import LoadingSpinner from './components/LoadingSpinner';
import { useGlobalUIState } from './hooks/useGlobalUIState';
import MySnackBarMessage from './components/MySnackBarMessage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ContactUsPage from "./pages/company-pages/ContactUsPage";
import AboutUsPage from "./pages/company-pages/AboutUsPage";
import TermsAndConditionsPage from "./pages/company-pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/company-pages/PrivacyPolicyPage";
import SpeakingAIPage from "./pages/products/SpeakingAIPage";
import CoursesPage from "./pages/CoursesPage";
import PricingPage from "./pages/PricingPage";
import WritingAIPage from "./pages/products/WritingAIPage";
import BlogListPage from "./pages/blog-pages/BlogListPage";
import BlogCardPage from "./pages/blog-pages/BlogCardPage";
import Blog01Page from "./pages/blog-pages/Blog01Page";
import Blog02Page from "./pages/blog-pages/Blog02Page";
import Blog03Page from "./pages/blog-pages/Blog03Page";
import Blog04Page from "./pages/blog-pages/Blog04Page";
import Blog05Page from "./pages/blog-pages/Blog05Page";
import Blog06Page from "./pages/blog-pages/Blog06Page";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MockTestPage from "./pages/products/MockTestPage";
import NewHomePage from "./pages/NewHomePage";

function App() {



  const { loading, toast } = useGlobalUIState();
  const showFooterPaths = ["/"];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);



  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <QuestionStateProvider>
          <Router>

            <ResponsiveAppBar />
            <Container maxWidth={false} disableGutters sx={{ p: 0, m: 0 }}>
              <Box className="content" >



                <LoadingSpinner />
                <MySnackBarMessage open={toast.open} message={toast.message} />
                <Routes>
                  {/* <Route path="/" element={<HomePage />} /> */}
                  <Route path="/" element={<NewHomePage />} />

                  <Route path="/login" element={<UserLoginPage />} />
                  <Route path="/register" element={<UserRegistrationPage />} />
                  <Route path="/verify" element={<UserVerificationPage />} />
                  <Route path="/password-reset" element={<PasswordResetPage />} />
                  <Route path="/contact-us" element={<ContactUsPage />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  {/* <Route path="/practice" element={ <PracticeListPage />} /> */}
                  <Route path="/products/speaking-ai" element={<SpeakingAIPage />} />
                  <Route path="/products/writing-ai" element={<WritingAIPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  {/* <Route path="/blog" element={<BlogListPage />} /> */}
                  <Route path="/blog" element={<BlogCardPage />} />
                  <Route path="/blog/001" element={<Blog01Page />} />
                  <Route path="/blog/002" element={<Blog02Page />} />
                  <Route path="/blog/003" element={<Blog03Page />} />
                  <Route path="/blog/004" element={<Blog04Page />} />
                  <Route path="/blog/005" element={<Blog05Page />} />
                  <Route path="/blog/006" element={<Blog06Page />} />


                  <Route path="/products/mock-test" element={<MockTestPage />} />
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

                  <Route
                    path="/practice"
                    element={
                      <ProtectedRoute>
                        <PracticeListPage />
                      </ProtectedRoute>
                    }
                  />




                  <Route path="*" element={<h1>Page not found</h1>} />

                </Routes>
                {/* {shouldShowFooter && <HomeFooter />} */}
                <HomeFooter />
              </Box>

            </Container>
          </Router>
        </QuestionStateProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}



export default App;
