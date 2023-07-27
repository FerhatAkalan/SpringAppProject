import React, { Component } from "react";
import LanguageSelector from "../components/LanguageSelector";
import logo from "../assets/logo.png";
import logo1 from "../assets/hoaxify.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { logoutSucces } from "../redux/authActions";
//import { Authentication } from "../shared/AuthenticationContext";

class TopBar extends Component {
  //static contextType = Authentication;

  // onClickLogout = ()=>{
  //   this.props.dispatch(logoutSucces);
  // }

  render() {
    const { t, isLoggedIn, username, onLogoutSuccess } = this.props;

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
  }
}

const TopBarWithTranslation = withTranslation()(TopBar);

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
    username: store.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutSuccess: () => dispatch(logoutSucces()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarWithTranslation);
