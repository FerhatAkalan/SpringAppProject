import React, { Component } from "react";
import LanguageSelector from "../components/LanguageSelector";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

class TopBar extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    const { t } = this.props;
    return (
      <div className="shadow-sm bg-light mb-5">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="60" alt="Hoaxify logo" />
            <a className="navbar-brand ms-2">SocialCoffee </a>
          </Link>
          <em className="navbar-text ms-auto">{t("Share your coffee, explore the world!")}</em>
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
        </nav>
      </div>
    );
  }
}

export default withTranslation()(TopBar);
