import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
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
        <Link
          to="/courses"
          className={location.pathname === "/live-course" ? "active-link" : ""}
        >
          {t("Courses")}
        </Link>
      </li>
      <li>
        <Link
          to="/pricing"
          className={location.pathname === "/mock-test" ? "active-link" : ""}
        >
          {t("Pricing")}
        </Link>
      </li>
      <li>
        <Link
          to="/contact-us"
          className={location.pathname === "/contact-us" ? "active-link" : ""}
        >
          {t("contact_us")}
        </Link>
      </li>
    </ul>
  );
}
