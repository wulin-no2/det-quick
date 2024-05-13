import { ThemeProvider } from "@mui/material";
import theme from "./theme"; // import from theme.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />{" "}
            {/* Route for the HomePage at the root */}
            <Route path="/login" element={<LoginPage />} />
            {/* Route for the LoginPage*/}
            <Route path="*" element={<div>Page not found</div>} /> //{" "}
            {/* Route to catch all route*/}
            route
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
