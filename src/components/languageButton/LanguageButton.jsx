import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import "../navbar/NewNavBar.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
// import LanguageSwitcher from "../../utils/languageSwitcher/LanguageSwitcher";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
export default function LanguageButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);
  //   const { t, i18n } = useTranslation();
  const { i18n } = useTranslation();

  const handleLanguageIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleLanguageMenuClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowLanguageSwitcher(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showLanguageSwitcher && (
        <IconButton color="inherit" onClick={handleLanguageIconClick}>
          <LanguageIcon />
        </IconButton>
      )}
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageMenuClose}
      >
        {/* Dynamically generate MenuItems for languages */}
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("zh")}>Chinese</MenuItem>
        {/* Add more languages as needed */}
      </Menu>
    </>
  );
}
