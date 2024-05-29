import "./NavBar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBarItems() {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <ul className="navbar-items">
      <li>
        <Link
          to="/practice"
          className={location.pathname === "/practice" ? "active-link" : ""}
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
          className={location.pathname === "/live-course" ? "active-link" : ""}
        >
          {t("live_course")}
        </NavLink>
      </li>
      <li>
        <Link
          to="/mock-test"
          className={location.pathname === "/mock-test" ? "active-link" : ""}
        >
          {t("mock_test")}
        </Link>
      </li>
      <li>
        <Link
          to="/about-us"
          className={location.pathname === "/about-us" ? "active-link" : ""}
        >
          {t("about_us")}
        </Link>
      </li>
    </ul>
  );
}
