// for reference later; didn't use it
import { AppBar, Toolbar, IconButton } from "@mui/material";
import "./NewNavBar.css";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../../utils/languageSwitcher/LanguageSwitcher";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LanguageIcon from "@mui/icons-material/Language";
import LanguageButton from "../languageButton/LanguageButton";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // 半透明背景
  z-index: 1000; // 设置一个较大的z-index
`;

const PopoverContainer = styled.div`
  position: absolute;
  top: 50px; // 或者其他值，根据实际位置调整
  right: 10px; // 根据需要调整
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 2000; // 这个值应该比Overlay的z-index大
`;

const PopoverHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #f0f0f0;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PopoverList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PopoverItem = styled.li`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopoverButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-left: 10px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url("https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/3d3eadc7cca8dd9b163b.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const NewNavbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // 修改这里，使其导航到 "/login"
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    // 调用App.js中的handleLogout函数来更新登录状态
    onLogout();
    // 返回主页面
    navigate("/");
    // 如果有Popover或其他UI元素需要关闭，这里进行处理
    togglePopover(); // 关闭 popover
  };
  const [popoverVisible, setPopoverVisible] = useState(false);

  // 切换 Popover 的可见性
  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <>
      <AppBar className="new-navbar">
        <Toolbar className="flex justify-between items-center w-full">
          <NavLink to="/" className="navbar-logo-link">
            <div className="navbar-logo">
              {t("app_name")}
              <span>Quick1</span>
            </div>
          </NavLink>
          {/* {showLanguageSwitcher && <LanguageSwitcher />} */}

          <ul className="navbar-items">
            <li>
              <Link
                to="/practice"
                className={
                  location.pathname === "/practice" ? "active-link" : ""
                }
              >
                {t("practice")}
              </Link>
            </li>
            <li>
              <Link
                to="/vocab"
                className={location.pathname === "/vocab" ? "active-link" : ""}
              >
                {t("vocab")}
              </Link>
            </li>
            <li>
              <NavLink
                to="/live-course"
                className={
                  location.pathname === "/live-course" ? "active-link" : ""
                }
              >
                {t("live_course")}
              </NavLink>
            </li>
            <li>
              <Link
                to="/mock-test"
                className={
                  location.pathname === "/mock-test" ? "active-link" : ""
                }
              >
                {t("mock_test")}
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={
                  location.pathname === "/about-us" ? "active-link" : ""
                }
              >
                {t("about_us")}
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <>
              <UserAvatar onClick={togglePopover} />
              {popoverVisible && (
                <>
                  <Overlay onClick={togglePopover} />{" "}
                  {/* 点击遮罩层关闭 Popover */}
                  <PopoverContainer>
                    <PopoverHeader>
                      <Avatar
                        src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/3d3eadc7cca8dd9b163b.svg"
                        alt="profile-icon"
                      />
                      <h5>My Account</h5>
                      {/* 这里可以添加箭头图标 */}
                    </PopoverHeader>
                    <PopoverList>
                      <PopoverItem>
                        <PopoverButton>
                          Settings
                          <Icon
                            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e5046dd8af9aff71d937.svg"
                            alt="icon"
                          />
                        </PopoverButton>
                      </PopoverItem>
                      <PopoverItem>
                        <PopoverButton>
                          Site language
                          <Icon
                            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e5046dd8af9aff71d937.svg"
                            alt="icon"
                          />
                        </PopoverButton>
                      </PopoverItem>
                      <PopoverItem>
                        <PopoverButton onClick={handleLogout}>
                          Log Out
                          <Icon
                            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/3dcb19d2df95fe5b0b22.svg"
                            alt="icon"
                          />
                        </PopoverButton>
                      </PopoverItem>
                    </PopoverList>
                  </PopoverContainer>
                </>
              )}
            </>
          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              {t("login")}
            </button>
          )}
          <IconButton color="inherit">
            <LanguageButton />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NewNavbar;
