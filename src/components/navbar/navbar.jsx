import { AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LanguageButton from "../common/LanguageButton";
import NavBarItems from "./NavBarItems";
import { useAuth } from '../../context/AuthContext'; // 确保路径正确
import { pubSub } from '../../utils/pubSub';
import globalSettingsConfig from '../../globalSettingsConfig';
import ProfileMenu from '../common/ProfileMenu';

function Navbar() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // link to login
  };

  const { logout,setIsLoggedIn,isLoggedIn } = useAuth(); // 从 AuthContext 获取状态和方法

  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {

    const handleScroll = () => {
      setShowLanguageSwitcher(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // 处理登录状态变更的 useEffect
  useEffect(() => {
    const handleLoginSuccess = (data) => {
      console.log("login success998998");
      setIsLoggedIn(data.loggedIn);
    };

    const handleLoginFailure = (data) => {
      setIsLoggedIn(data.loggedIn);
      
      console.log("login failed998998");
    }

    pubSub.subscribe(globalSettingsConfig.event.AUTH_LOGIN_SUCCESS, handleLoginSuccess);
    pubSub.subscribe(globalSettingsConfig.event.AUTH_LOGIN_FAILURE, handleLoginFailure);

    return () => {
      pubSub.unsubscribe(globalSettingsConfig.event.AUTH_LOGIN_SUCCESS, handleLoginSuccess);
      pubSub.unsubscribe(globalSettingsConfig.event.AUTH_LOGIN_FAILURE, handleLoginFailure);
    };
  }, []);

  return (
    <AppBar
      className="new-navbar"
      sx={{
        boxShadow: "none",
        borderBottom: 0.5,
        borderColor: "lightgrey"
      }}
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


        {showLanguageSwitcher && !isLoggedIn && (  // Check if not logged in to show the language button
          <IconButton className="weakButton">
            <LanguageButton />
          </IconButton>
        )}
          {isLoggedIn ? (
        
            <ProfileMenu />

          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              {t("login")}
            </button>
          )}



        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
