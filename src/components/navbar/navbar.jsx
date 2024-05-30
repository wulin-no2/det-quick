import { AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LanguageButton from "../common/LanguageButton";
import NavBarItems from "./NavBarItems";

function Navbar() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // link to login
  };

  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setShowLanguageSwitcher(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      className="new-navbar"
      sx={{ boxShadow: "none", 
      borderBottom: 0.5, 
      borderColor: "lightgrey" }}
    >
      <Toolbar className="flex justify-between items-center w-full">
        {/* logo */}
        <NavLink to="/" className="navbar-logo-link">
          <div className="navbar-logo">
            {t("app_name")}
            <span>Quick</span>
          </div>
        </NavLink>
        {/* navbar items */}
        <NavBarItems />

        {/* buttons of the navbar*/}
        <div className="flex-none">
          {/* todo: how can we make login center vertically */}
          <button className="login-btn" onClick={handleLoginClick}>
            {t("login")}
          </button>

          {showLanguageSwitcher && (
            <IconButton className="weakButton">
              <LanguageButton />
            </IconButton>
          )}
          <IconButton className="weakButton">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
