import { ThemeProvider } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import "./utils/languageSwitcher/i18n"; // import i18n to translate
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          {/* <div
            style={{
              width: 720,
              height: 600,
              backgroundColor: "#90caf9",
              margin: "auto",
            }}
          ></div> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Route for the HomePage at the root */}
            <Route path="/login" element={<LoginPage />} />
            {/* Route for the LoginPage*/}
            <Route path="*" element={<h1>Page not found</h1>} />
            {/* Route to catch all route*/}
            route
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
