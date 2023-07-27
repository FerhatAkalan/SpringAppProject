import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logoutSucces } from "../redux/authActions";

const TopBar = (props) => {
  const { t } = useTranslation();

  const { username, isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    username: store.username,
  }));

  const dispatch = useDispatch();

  const  onLogoutSuccess  = ()=>{
    dispatch(logoutSucces());
  };

  let links = (
    <div className="ms-auto">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            {t("Home Page")}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            {t("Login")}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            {t("Sign Up")}
          </Link>
        </li>
        <li className="nav-item">
          <LanguageSelector />
        </li>
      </ul>
    </div>
  );

  if (isLoggedIn) {
    links = (
      <div className="ms-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/user/" + username}>
              {username}
            </Link>
          </li>
          <li className="nav-item" onClick={onLogoutSuccess}>
            <Link className="nav-link" to="/login">
              {t("Logout")}
            </Link>
          </li>
          <li className="nav-item">
            <LanguageSelector />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="shadow-sm bg-light">
      <nav className="navbar navbar-light container navbar-expand">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="65" alt="Hoaxify logo" />
          <a className="navbar-brand ms-2">SocialCoffee </a>
        </Link>
        <em className="navbar-text ms-auto">
          {t("Share your coffee, explore the world!")}
        </em>
        {links}
      </nav>
    </div>
  );
};



export default TopBar;
