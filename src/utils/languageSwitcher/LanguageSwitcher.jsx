import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang); // 存储到localStorage
    setIsOpen(false); // Close the popover
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher" ref={wrapperRef}>
      <button onClick={toggleDropdown} className="language-button">
        {/* <span> */}
        {t("language")}
        {/* </span> */}
      </button>

      {isOpen && (
        <div className="language-dropdown">
          <button onClick={() => handleLanguageChange("en")}>English</button>
          <button onClick={() => handleLanguageChange("zh")}>Chinese</button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
